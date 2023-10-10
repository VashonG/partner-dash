(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [993], {
        58736: function(e) {
            "use strict";
            var t = Object.prototype.hasOwnProperty,
                n = Object.prototype.toString,
                r = Object.defineProperty,
                i = Object.getOwnPropertyDescriptor,
                l = function(e) {
                    return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === n.call(e)
                },
                o = function(e) {
                    if (!e || "[object Object]" !== n.call(e)) return !1;
                    var r, i = t.call(e, "constructor"),
                        l = e.constructor && e.constructor.prototype && t.call(e.constructor.prototype, "isPrototypeOf");
                    if (e.constructor && !i && !l) return !1;
                    for (r in e);
                    return void 0 === r || t.call(e, r)
                },
                u = function(e, t) {
                    r && "__proto__" === t.name ? r(e, t.name, {
                        enumerable: !0,
                        configurable: !0,
                        value: t.newValue,
                        writable: !0
                    }) : e[t.name] = t.newValue
                },
                a = function(e, n) {
                    if ("__proto__" === n) {
                        if (!t.call(e, n)) return;
                        if (i) return i(e, n).value
                    }
                    return e[n]
                };
            e.exports = function e() {
                var t, n, r, i, c, s, f = arguments[0],
                    p = 1,
                    d = arguments.length,
                    h = !1;
                for ("boolean" == typeof f && (h = f, f = arguments[1] || {}, p = 2), (null == f || "object" != typeof f && "function" != typeof f) && (f = {}); p < d; ++p)
                    if (t = arguments[p], null != t)
                        for (n in t) r = a(f, n), f !== (i = a(t, n)) && (h && i && (o(i) || (c = l(i))) ? (c ? (c = !1, s = r && l(r) ? r : []) : s = r && o(r) ? r : {}, u(f, {
                            name: n,
                            newValue: e(h, s, i)
                        })) : void 0 !== i && u(f, {
                            name: n,
                            newValue: i
                        }));
                return f
            }
        },
        8751: function(e) {
            var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
                n = /\n/g,
                r = /^\s*/,
                i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
                l = /^:\s*/,
                o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
                u = /^[;\s]*/,
                a = /^\s+|\s+$/g;

            function c(e) {
                return e ? e.replace(a, "") : ""
            }
            e.exports = function(e, a) {
                if ("string" != typeof e) throw TypeError("First argument must be a string");
                if (!e) return [];
                a = a || {};
                var s = 1,
                    f = 1;

                function p(e) {
                    var t = e.match(n);
                    t && (s += t.length);
                    var r = e.lastIndexOf("\n");
                    f = ~r ? e.length - r : f + e.length
                }

                function d() {
                    var e = {
                        line: s,
                        column: f
                    };
                    return function(t) {
                        return t.position = new h(e), y(r), t
                    }
                }

                function h(e) {
                    this.start = e, this.end = {
                        line: s,
                        column: f
                    }, this.source = a.source
                }
                h.prototype.content = e;
                var m = [];

                function g(t) {
                    var n = Error(a.source + ":" + s + ":" + f + ": " + t);
                    if (n.reason = t, n.filename = a.source, n.line = s, n.column = f, n.source = e, a.silent) m.push(n);
                    else throw n
                }

                function y(t) {
                    var n = t.exec(e);
                    if (n) {
                        var r = n[0];
                        return p(r), e = e.slice(r.length), n
                    }
                }

                function b(e) {
                    var t;
                    for (e = e || []; t = k();) !1 !== t && e.push(t);
                    return e
                }

                function k() {
                    var t = d();
                    if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
                        for (var n = 2;
                            "" != e.charAt(n) && ("*" != e.charAt(n) || "/" != e.charAt(n + 1));) ++n;
                        if (n += 2, "" === e.charAt(n - 1)) return g("End of comment missing");
                        var r = e.slice(2, n - 2);
                        return f += 2, p(r), e = e.slice(n), f += 2, t({
                            type: "comment",
                            comment: r
                        })
                    }
                }
                return y(r),
                    function() {
                        var e, n = [];
                        for (b(n); e = function() {
                                var e = d(),
                                    n = y(i);
                                if (n) {
                                    if (k(), !y(l)) return g("property missing ':'");
                                    var r = y(o),
                                        a = e({
                                            type: "declaration",
                                            property: c(n[0].replace(t, "")),
                                            value: r ? c(r[0].replace(t, "")) : ""
                                        });
                                    return y(u), a
                                }
                            }();) !1 !== e && (n.push(e), b(n));
                        return n
                    }()
            }
        },
        163: function(e) {
            /*!
             * Determine if an object is a Buffer
             *
             * @author   Feross Aboukhadijeh <https://feross.org>
             * @license  MIT
             */
            e.exports = function(e) {
                return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            }
        },
        99540: function(e, t) {
            "use strict";
            /**
             * @license React
             * react-is.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var n, r = Symbol.for("react.element"),
                i = Symbol.for("react.portal"),
                l = Symbol.for("react.fragment"),
                o = Symbol.for("react.strict_mode"),
                u = Symbol.for("react.profiler"),
                a = Symbol.for("react.provider"),
                c = Symbol.for("react.context"),
                s = Symbol.for("react.server_context"),
                f = Symbol.for("react.forward_ref"),
                p = Symbol.for("react.suspense"),
                d = Symbol.for("react.suspense_list"),
                h = Symbol.for("react.memo"),
                m = Symbol.for("react.lazy"),
                g = Symbol.for("react.offscreen");

            function y(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case r:
                            switch (e = e.type) {
                                case l:
                                case u:
                                case o:
                                case p:
                                case d:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case s:
                                        case c:
                                        case f:
                                        case m:
                                        case h:
                                        case a:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case i:
                            return t
                    }
                }
            }
            n = Symbol.for("react.module.reference"), t.ContextConsumer = c, t.ContextProvider = a, t.Element = r, t.ForwardRef = f, t.Fragment = l, t.Lazy = m, t.Memo = h, t.Portal = i, t.Profiler = u, t.StrictMode = o, t.Suspense = p, t.SuspenseList = d, t.isAsyncMode = function() {
                return !1
            }, t.isConcurrentMode = function() {
                return !1
            }, t.isContextConsumer = function(e) {
                return y(e) === c
            }, t.isContextProvider = function(e) {
                return y(e) === a
            }, t.isElement = function(e) {
                return "object" == typeof e && null !== e && e.$$typeof === r
            }, t.isForwardRef = function(e) {
                return y(e) === f
            }, t.isFragment = function(e) {
                return y(e) === l
            }, t.isLazy = function(e) {
                return y(e) === m
            }, t.isMemo = function(e) {
                return y(e) === h
            }, t.isPortal = function(e) {
                return y(e) === i
            }, t.isProfiler = function(e) {
                return y(e) === u
            }, t.isStrictMode = function(e) {
                return y(e) === o
            }, t.isSuspense = function(e) {
                return y(e) === p
            }, t.isSuspenseList = function(e) {
                return y(e) === d
            }, t.isValidElementType = function(e) {
                return "string" == typeof e || "function" == typeof e || e === l || e === u || e === o || e === p || e === d || e === g || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === h || e.$$typeof === a || e.$$typeof === c || e.$$typeof === f || e.$$typeof === n || void 0 !== e.getModuleId)
            }, t.typeOf = y
        },
        31847: function(e, t, n) {
            "use strict";
            e.exports = n(99540)
        },
        57487: function(e, t, n) {
            var r = n(8751);

            function i(e, t) {
                var n, i, l, o = null;
                if (!e || "string" != typeof e) return o;
                for (var u = r(e), a = "function" == typeof t, c = 0, s = u.length; c < s; c++) i = (n = u[c]).property, l = n.value, a ? t(i, l, n) : l && (o || (o = {}), o[i] = l);
                return o
            }
            e.exports = i, e.exports.default = i
        },
        52919: function(e, t, n) {
            "use strict";

            function r(e, t) {
                let n = String(e);
                if ("string" != typeof t) throw TypeError("Expected character");
                let r = 0,
                    i = n.indexOf(t);
                for (; - 1 !== i;) r++, i = n.indexOf(t, i + t.length);
                return r
            }
            n.d(t, {
                w: function() {
                    return r
                }
            })
        },
        50546: function(e, t, n) {
            "use strict";

            function r(e) {
                let t = [],
                    n = String(e || ""),
                    r = n.indexOf(","),
                    i = 0,
                    l = !1;
                for (; !l;) {
                    -1 === r && (r = n.length, l = !0);
                    let e = n.slice(i, r).trim();
                    (e || !l) && t.push(e), i = r + 1, r = n.indexOf(",", i)
                }
                return t
            }

            function i(e, t) {
                let n = t || {},
                    r = "" === e[e.length - 1] ? [...e, ""] : e;
                return r.join((n.padRight ? " " : "") + "," + (!1 === n.padLeft ? "" : " ")).trim()
            }
            n.d(t, {
                P: function() {
                    return i
                },
                Q: function() {
                    return r
                }
            })
        },
        94211: function(e, t, n) {
            "use strict";
            n.d(t, {
                T: function() {
                    return i
                }
            });
            let r = document.createElement("i");

            function i(e) {
                let t = "&" + e + ";";
                r.innerHTML = t;
                let n = r.textContent;
                return (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n
            }
        },
        48816: function(e, t, n) {
            "use strict";

            function r(e) {
                let t = e && "object" == typeof e && "text" === e.type ? e.value || "" : e;
                return "string" == typeof t && "" === t.replace(/[ \t\n\f\r]/g, "")
            }
            n.d(t, {
                Q: function() {
                    return r
                }
            })
        },
        84430: function(e, t, n) {
            "use strict";
            n.d(t, {
                w: function() {
                    return l
                }
            });
            var r = n(576),
                i = n(80226);
            let l = {
                tokenize: function(e, t, n) {
                    return function(t) {
                        return (0, i.xz)(t) ? (0, r.f)(e, l, "linePrefix")(t) : l(t)
                    };

                    function l(e) {
                        return null === e || (0, i.Ch)(e) ? t(e) : n(e)
                    }
                },
                partial: !0
            }
        },
        576: function(e, t, n) {
            "use strict";
            n.d(t, {
                f: function() {
                    return i
                }
            });
            var r = n(80226);

            function i(e, t, n, i) {
                let l = i ? i - 1 : Number.POSITIVE_INFINITY,
                    o = 0;
                return function(i) {
                    return (0, r.xz)(i) ? (e.enter(n), function i(u) {
                        return (0, r.xz)(u) && o++ < l ? (e.consume(u), i) : (e.exit(n), t(u))
                    }(i)) : t(i)
                }
            }
        },
        80226: function(e, t, n) {
            "use strict";
            n.d(t, {
                jv: function() {
                    return r
                },
                H$: function() {
                    return i
                },
                n9: function() {
                    return l
                },
                Av: function() {
                    return o
                },
                pY: function() {
                    return u
                },
                AF: function() {
                    return a
                },
                sR: function() {
                    return c
                },
                Ch: function() {
                    return s
                },
                z3: function() {
                    return f
                },
                xz: function() {
                    return p
                },
                Xh: function() {
                    return d
                },
                B8: function() {
                    return h
                }
            });
            let r = m(/[A-Za-z]/),
                i = m(/[\dA-Za-z]/),
                l = m(/[#-'*+\--9=?A-Z^-~]/);

            function o(e) {
                return null !== e && (e < 32 || 127 === e)
            }
            let u = m(/\d/),
                a = m(/[\dA-Fa-f]/),
                c = m(/[!-/:-@[-`{-~]/);

            function s(e) {
                return null !== e && e < -2
            }

            function f(e) {
                return null !== e && (e < 0 || 32 === e)
            }

            function p(e) {
                return -2 === e || -1 === e || 32 === e
            }
            let d = m(/[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/),
                h = m(/\s/);

            function m(e) {
                return function(t) {
                    return null !== t && e.test(String.fromCharCode(t))
                }
            }
        },
        78043: function(e, t, n) {
            "use strict";

            function r(e, t, n, r) {
                let i;
                let l = e.length,
                    o = 0;
                if (t = t < 0 ? -t > l ? 0 : l + t : t > l ? l : t, n = n > 0 ? n : 0, r.length < 1e4)(i = Array.from(r)).unshift(t, n), e.splice(...i);
                else
                    for (n && e.splice(t, n); o < r.length;)(i = r.slice(o, o + 1e4)).unshift(t, 0), e.splice(...i), o += 1e4, t += 1e4
            }

            function i(e, t) {
                return e.length > 0 ? (r(e, e.length, 0, t), e) : t
            }
            n.d(t, {
                V: function() {
                    return i
                },
                d: function() {
                    return r
                }
            })
        },
        38600: function(e, t, n) {
            "use strict";
            n.d(t, {
                r: function() {
                    return i
                }
            });
            var r = n(80226);

            function i(e) {
                return null === e || (0, r.z3)(e) || (0, r.B8)(e) ? 1 : (0, r.Xh)(e) ? 2 : void 0
            }
        },
        76075: function(e, t, n) {
            "use strict";
            n.d(t, {
                W: function() {
                    return l
                }
            });
            var r = n(78043);
            let i = {}.hasOwnProperty;

            function l(e) {
                let t = {},
                    n = -1;
                for (; ++n < e.length;) ! function(e, t) {
                    let n;
                    for (n in t) {
                        let l;
                        let o = i.call(e, n) ? e[n] : void 0,
                            u = o || (e[n] = {}),
                            a = t[n];
                        if (a)
                            for (l in a) {
                                i.call(u, l) || (u[l] = []);
                                let e = a[l];
                                ! function(e, t) {
                                    let n = -1,
                                        i = [];
                                    for (; ++n < t.length;)("after" === t[n].add ? e : i).push(t[n]);
                                    (0, r.d)(e, 0, 0, i)
                                }(u[l], Array.isArray(e) ? e : e ? [e] : [])
                            }
                    }
                }(t, e[n]);
                return t
            }
        },
        13809: function(e, t, n) {
            "use strict";

            function r(e, t) {
                let n = Number.parseInt(e, t);
                return n < 9 || 11 === n || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (65535 & n) == 65535 || (65535 & n) == 65534 || n > 1114111 ? "�" : String.fromCharCode(n)
            }
            n.d(t, {
                o: function() {
                    return r
                }
            })
        },
        83531: function(e, t, n) {
            "use strict";
            n.d(t, {
                v: function() {
                    return o
                }
            });
            var r = n(94211),
                i = n(13809);
            let l = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

            function o(e) {
                return e.replace(l, u)
            }

            function u(e, t, n) {
                if (t) return t;
                let l = n.charCodeAt(0);
                if (35 === l) {
                    let e = n.charCodeAt(1),
                        t = 120 === e || 88 === e;
                    return (0, i.o)(n.slice(t ? 2 : 1), t ? 16 : 10)
                }
                return (0, r.T)(n) || e
            }
        },
        43774: function(e, t, n) {
            "use strict";

            function r(e) {
                return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
            }
            n.d(t, {
                d: function() {
                    return r
                }
            })
        },
        16821: function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                let r = [],
                    i = -1;
                for (; ++i < e.length;) {
                    let l = e[i].resolveAll;
                    l && !r.includes(l) && (t = l(t, n), r.push(l))
                }
                return t
            }
            n.d(t, {
                C: function() {
                    return r
                }
            })
        },
        42232: function(e, t, n) {
            "use strict";
            n.d(t, {
                dy: function() {
                    return b
                },
                YP: function() {
                    return k
                }
            });
            class r {
                constructor(e, t, n) {
                    this.property = e, this.normal = t, n && (this.space = n)
                }
            }

            function i(e, t) {
                let n = {},
                    i = {},
                    l = -1;
                for (; ++l < e.length;) Object.assign(n, e[l].property), Object.assign(i, e[l].normal);
                return new r(n, i, t)
            }
            r.prototype.property = {}, r.prototype.normal = {}, r.prototype.space = null;
            var l = n(27456),
                o = n(33462);
            let u = {}.hasOwnProperty;

            function a(e) {
                let t;
                let n = {},
                    i = {};
                for (t in e.properties)
                    if (u.call(e.properties, t)) {
                        let r = e.properties[t],
                            u = new o.I(t, e.transform(e.attributes || {}, t), r, e.space);
                        e.mustUseProperty && e.mustUseProperty.includes(t) && (u.mustUseProperty = !0), n[t] = u, i[(0, l.F)(t)] = t, i[(0, l.F)(u.attribute)] = t
                    }
                return new r(n, i, e.space)
            }
            let c = a({
                    space: "xlink",
                    transform: (e, t) => "xlink:" + t.slice(5).toLowerCase(),
                    properties: {
                        xLinkActuate: null,
                        xLinkArcRole: null,
                        xLinkHref: null,
                        xLinkRole: null,
                        xLinkShow: null,
                        xLinkTitle: null,
                        xLinkType: null
                    }
                }),
                s = a({
                    space: "xml",
                    transform: (e, t) => "xml:" + t.slice(3).toLowerCase(),
                    properties: {
                        xmlLang: null,
                        xmlBase: null,
                        xmlSpace: null
                    }
                });

            function f(e, t) {
                return t in e ? e[t] : t
            }

            function p(e, t) {
                return f(e, t.toLowerCase())
            }
            let d = a({
                space: "xmlns",
                attributes: {
                    xmlnsxlink: "xmlns:xlink"
                },
                transform: p,
                properties: {
                    xmlns: null,
                    xmlnsXLink: null
                }
            });
            var h = n(21374);
            let m = a({
                    transform: (e, t) => "role" === t ? t : "aria-" + t.slice(4).toLowerCase(),
                    properties: {
                        ariaActiveDescendant: null,
                        ariaAtomic: h.booleanish,
                        ariaAutoComplete: null,
                        ariaBusy: h.booleanish,
                        ariaChecked: h.booleanish,
                        ariaColCount: h.number,
                        ariaColIndex: h.number,
                        ariaColSpan: h.number,
                        ariaControls: h.spaceSeparated,
                        ariaCurrent: null,
                        ariaDescribedBy: h.spaceSeparated,
                        ariaDetails: null,
                        ariaDisabled: h.booleanish,
                        ariaDropEffect: h.spaceSeparated,
                        ariaErrorMessage: null,
                        ariaExpanded: h.booleanish,
                        ariaFlowTo: h.spaceSeparated,
                        ariaGrabbed: h.booleanish,
                        ariaHasPopup: null,
                        ariaHidden: h.booleanish,
                        ariaInvalid: null,
                        ariaKeyShortcuts: null,
                        ariaLabel: null,
                        ariaLabelledBy: h.spaceSeparated,
                        ariaLevel: h.number,
                        ariaLive: null,
                        ariaModal: h.booleanish,
                        ariaMultiLine: h.booleanish,
                        ariaMultiSelectable: h.booleanish,
                        ariaOrientation: null,
                        ariaOwns: h.spaceSeparated,
                        ariaPlaceholder: null,
                        ariaPosInSet: h.number,
                        ariaPressed: h.booleanish,
                        ariaReadOnly: h.booleanish,
                        ariaRelevant: null,
                        ariaRequired: h.booleanish,
                        ariaRoleDescription: h.spaceSeparated,
                        ariaRowCount: h.number,
                        ariaRowIndex: h.number,
                        ariaRowSpan: h.number,
                        ariaSelected: h.booleanish,
                        ariaSetSize: h.number,
                        ariaSort: null,
                        ariaValueMax: h.number,
                        ariaValueMin: h.number,
                        ariaValueNow: h.number,
                        ariaValueText: null,
                        role: null
                    }
                }),
                g = a({
                    space: "html",
                    attributes: {
                        acceptcharset: "accept-charset",
                        classname: "class",
                        htmlfor: "for",
                        httpequiv: "http-equiv"
                    },
                    transform: p,
                    mustUseProperty: ["checked", "multiple", "muted", "selected"],
                    properties: {
                        abbr: null,
                        accept: h.commaSeparated,
                        acceptCharset: h.spaceSeparated,
                        accessKey: h.spaceSeparated,
                        action: null,
                        allow: null,
                        allowFullScreen: h.boolean,
                        allowPaymentRequest: h.boolean,
                        allowUserMedia: h.boolean,
                        alt: null,
                        as: null,
                        async: h.boolean,
                        autoCapitalize: null,
                        autoComplete: h.spaceSeparated,
                        autoFocus: h.boolean,
                        autoPlay: h.boolean,
                        blocking: h.spaceSeparated,
                        capture: h.boolean,
                        charSet: null,
                        checked: h.boolean,
                        cite: null,
                        className: h.spaceSeparated,
                        cols: h.number,
                        colSpan: null,
                        content: null,
                        contentEditable: h.booleanish,
                        controls: h.boolean,
                        controlsList: h.spaceSeparated,
                        coords: h.number | h.commaSeparated,
                        crossOrigin: null,
                        data: null,
                        dateTime: null,
                        decoding: null,
                        default: h.boolean,
                        defer: h.boolean,
                        dir: null,
                        dirName: null,
                        disabled: h.boolean,
                        download: h.overloadedBoolean,
                        draggable: h.booleanish,
                        encType: null,
                        enterKeyHint: null,
                        fetchPriority: null,
                        form: null,
                        formAction: null,
                        formEncType: null,
                        formMethod: null,
                        formNoValidate: h.boolean,
                        formTarget: null,
                        headers: h.spaceSeparated,
                        height: h.number,
                        hidden: h.boolean,
                        high: h.number,
                        href: null,
                        hrefLang: null,
                        htmlFor: h.spaceSeparated,
                        httpEquiv: h.spaceSeparated,
                        id: null,
                        imageSizes: null,
                        imageSrcSet: null,
                        inert: h.boolean,
                        inputMode: null,
                        integrity: null,
                        is: null,
                        isMap: h.boolean,
                        itemId: null,
                        itemProp: h.spaceSeparated,
                        itemRef: h.spaceSeparated,
                        itemScope: h.boolean,
                        itemType: h.spaceSeparated,
                        kind: null,
                        label: null,
                        lang: null,
                        language: null,
                        list: null,
                        loading: null,
                        loop: h.boolean,
                        low: h.number,
                        manifest: null,
                        max: null,
                        maxLength: h.number,
                        media: null,
                        method: null,
                        min: null,
                        minLength: h.number,
                        multiple: h.boolean,
                        muted: h.boolean,
                        name: null,
                        nonce: null,
                        noModule: h.boolean,
                        noValidate: h.boolean,
                        onAbort: null,
                        onAfterPrint: null,
                        onAuxClick: null,
                        onBeforeMatch: null,
                        onBeforePrint: null,
                        onBeforeUnload: null,
                        onBlur: null,
                        onCancel: null,
                        onCanPlay: null,
                        onCanPlayThrough: null,
                        onChange: null,
                        onClick: null,
                        onClose: null,
                        onContextLost: null,
                        onContextMenu: null,
                        onContextRestored: null,
                        onCopy: null,
                        onCueChange: null,
                        onCut: null,
                        onDblClick: null,
                        onDrag: null,
                        onDragEnd: null,
                        onDragEnter: null,
                        onDragExit: null,
                        onDragLeave: null,
                        onDragOver: null,
                        onDragStart: null,
                        onDrop: null,
                        onDurationChange: null,
                        onEmptied: null,
                        onEnded: null,
                        onError: null,
                        onFocus: null,
                        onFormData: null,
                        onHashChange: null,
                        onInput: null,
                        onInvalid: null,
                        onKeyDown: null,
                        onKeyPress: null,
                        onKeyUp: null,
                        onLanguageChange: null,
                        onLoad: null,
                        onLoadedData: null,
                        onLoadedMetadata: null,
                        onLoadEnd: null,
                        onLoadStart: null,
                        onMessage: null,
                        onMessageError: null,
                        onMouseDown: null,
                        onMouseEnter: null,
                        onMouseLeave: null,
                        onMouseMove: null,
                        onMouseOut: null,
                        onMouseOver: null,
                        onMouseUp: null,
                        onOffline: null,
                        onOnline: null,
                        onPageHide: null,
                        onPageShow: null,
                        onPaste: null,
                        onPause: null,
                        onPlay: null,
                        onPlaying: null,
                        onPopState: null,
                        onProgress: null,
                        onRateChange: null,
                        onRejectionHandled: null,
                        onReset: null,
                        onResize: null,
                        onScroll: null,
                        onScrollEnd: null,
                        onSecurityPolicyViolation: null,
                        onSeeked: null,
                        onSeeking: null,
                        onSelect: null,
                        onSlotChange: null,
                        onStalled: null,
                        onStorage: null,
                        onSubmit: null,
                        onSuspend: null,
                        onTimeUpdate: null,
                        onToggle: null,
                        onUnhandledRejection: null,
                        onUnload: null,
                        onVolumeChange: null,
                        onWaiting: null,
                        onWheel: null,
                        open: h.boolean,
                        optimum: h.number,
                        pattern: null,
                        ping: h.spaceSeparated,
                        placeholder: null,
                        playsInline: h.boolean,
                        popover: null,
                        popoverTarget: null,
                        popoverTargetAction: null,
                        poster: null,
                        preload: null,
                        readOnly: h.boolean,
                        referrerPolicy: null,
                        rel: h.spaceSeparated,
                        required: h.boolean,
                        reversed: h.boolean,
                        rows: h.number,
                        rowSpan: h.number,
                        sandbox: h.spaceSeparated,
                        scope: null,
                        scoped: h.boolean,
                        seamless: h.boolean,
                        selected: h.boolean,
                        shape: null,
                        size: h.number,
                        sizes: null,
                        slot: null,
                        span: h.number,
                        spellCheck: h.booleanish,
                        src: null,
                        srcDoc: null,
                        srcLang: null,
                        srcSet: null,
                        start: h.number,
                        step: null,
                        style: null,
                        tabIndex: h.number,
                        target: null,
                        title: null,
                        translate: null,
                        type: null,
                        typeMustMatch: h.boolean,
                        useMap: null,
                        value: h.booleanish,
                        width: h.number,
                        wrap: null,
                        align: null,
                        aLink: null,
                        archive: h.spaceSeparated,
                        axis: null,
                        background: null,
                        bgColor: null,
                        border: h.number,
                        borderColor: null,
                        bottomMargin: h.number,
                        cellPadding: null,
                        cellSpacing: null,
                        char: null,
                        charOff: null,
                        classId: null,
                        clear: null,
                        code: null,
                        codeBase: null,
                        codeType: null,
                        color: null,
                        compact: h.boolean,
                        declare: h.boolean,
                        event: null,
                        face: null,
                        frame: null,
                        frameBorder: null,
                        hSpace: h.number,
                        leftMargin: h.number,
                        link: null,
                        longDesc: null,
                        lowSrc: null,
                        marginHeight: h.number,
                        marginWidth: h.number,
                        noResize: h.boolean,
                        noHref: h.boolean,
                        noShade: h.boolean,
                        noWrap: h.boolean,
                        object: null,
                        profile: null,
                        prompt: null,
                        rev: null,
                        rightMargin: h.number,
                        rules: null,
                        scheme: null,
                        scrolling: h.booleanish,
                        standby: null,
                        summary: null,
                        text: null,
                        topMargin: h.number,
                        valueType: null,
                        version: null,
                        vAlign: null,
                        vLink: null,
                        vSpace: h.number,
                        allowTransparency: null,
                        autoCorrect: null,
                        autoSave: null,
                        disablePictureInPicture: h.boolean,
                        disableRemotePlayback: h.boolean,
                        prefix: null,
                        property: null,
                        results: h.number,
                        security: null,
                        unselectable: null
                    }
                }),
                y = a({
                    space: "svg",
                    attributes: {
                        accentHeight: "accent-height",
                        alignmentBaseline: "alignment-baseline",
                        arabicForm: "arabic-form",
                        baselineShift: "baseline-shift",
                        capHeight: "cap-height",
                        className: "class",
                        clipPath: "clip-path",
                        clipRule: "clip-rule",
                        colorInterpolation: "color-interpolation",
                        colorInterpolationFilters: "color-interpolation-filters",
                        colorProfile: "color-profile",
                        colorRendering: "color-rendering",
                        crossOrigin: "crossorigin",
                        dataType: "datatype",
                        dominantBaseline: "dominant-baseline",
                        enableBackground: "enable-background",
                        fillOpacity: "fill-opacity",
                        fillRule: "fill-rule",
                        floodColor: "flood-color",
                        floodOpacity: "flood-opacity",
                        fontFamily: "font-family",
                        fontSize: "font-size",
                        fontSizeAdjust: "font-size-adjust",
                        fontStretch: "font-stretch",
                        fontStyle: "font-style",
                        fontVariant: "font-variant",
                        fontWeight: "font-weight",
                        glyphName: "glyph-name",
                        glyphOrientationHorizontal: "glyph-orientation-horizontal",
                        glyphOrientationVertical: "glyph-orientation-vertical",
                        hrefLang: "hreflang",
                        horizAdvX: "horiz-adv-x",
                        horizOriginX: "horiz-origin-x",
                        horizOriginY: "horiz-origin-y",
                        imageRendering: "image-rendering",
                        letterSpacing: "letter-spacing",
                        lightingColor: "lighting-color",
                        markerEnd: "marker-end",
                        markerMid: "marker-mid",
                        markerStart: "marker-start",
                        navDown: "nav-down",
                        navDownLeft: "nav-down-left",
                        navDownRight: "nav-down-right",
                        navLeft: "nav-left",
                        navNext: "nav-next",
                        navPrev: "nav-prev",
                        navRight: "nav-right",
                        navUp: "nav-up",
                        navUpLeft: "nav-up-left",
                        navUpRight: "nav-up-right",
                        onAbort: "onabort",
                        onActivate: "onactivate",
                        onAfterPrint: "onafterprint",
                        onBeforePrint: "onbeforeprint",
                        onBegin: "onbegin",
                        onCancel: "oncancel",
                        onCanPlay: "oncanplay",
                        onCanPlayThrough: "oncanplaythrough",
                        onChange: "onchange",
                        onClick: "onclick",
                        onClose: "onclose",
                        onCopy: "oncopy",
                        onCueChange: "oncuechange",
                        onCut: "oncut",
                        onDblClick: "ondblclick",
                        onDrag: "ondrag",
                        onDragEnd: "ondragend",
                        onDragEnter: "ondragenter",
                        onDragExit: "ondragexit",
                        onDragLeave: "ondragleave",
                        onDragOver: "ondragover",
                        onDragStart: "ondragstart",
                        onDrop: "ondrop",
                        onDurationChange: "ondurationchange",
                        onEmptied: "onemptied",
                        onEnd: "onend",
                        onEnded: "onended",
                        onError: "onerror",
                        onFocus: "onfocus",
                        onFocusIn: "onfocusin",
                        onFocusOut: "onfocusout",
                        onHashChange: "onhashchange",
                        onInput: "oninput",
                        onInvalid: "oninvalid",
                        onKeyDown: "onkeydown",
                        onKeyPress: "onkeypress",
                        onKeyUp: "onkeyup",
                        onLoad: "onload",
                        onLoadedData: "onloadeddata",
                        onLoadedMetadata: "onloadedmetadata",
                        onLoadStart: "onloadstart",
                        onMessage: "onmessage",
                        onMouseDown: "onmousedown",
                        onMouseEnter: "onmouseenter",
                        onMouseLeave: "onmouseleave",
                        onMouseMove: "onmousemove",
                        onMouseOut: "onmouseout",
                        onMouseOver: "onmouseover",
                        onMouseUp: "onmouseup",
                        onMouseWheel: "onmousewheel",
                        onOffline: "onoffline",
                        onOnline: "ononline",
                        onPageHide: "onpagehide",
                        onPageShow: "onpageshow",
                        onPaste: "onpaste",
                        onPause: "onpause",
                        onPlay: "onplay",
                        onPlaying: "onplaying",
                        onPopState: "onpopstate",
                        onProgress: "onprogress",
                        onRateChange: "onratechange",
                        onRepeat: "onrepeat",
                        onReset: "onreset",
                        onResize: "onresize",
                        onScroll: "onscroll",
                        onSeeked: "onseeked",
                        onSeeking: "onseeking",
                        onSelect: "onselect",
                        onShow: "onshow",
                        onStalled: "onstalled",
                        onStorage: "onstorage",
                        onSubmit: "onsubmit",
                        onSuspend: "onsuspend",
                        onTimeUpdate: "ontimeupdate",
                        onToggle: "ontoggle",
                        onUnload: "onunload",
                        onVolumeChange: "onvolumechange",
                        onWaiting: "onwaiting",
                        onZoom: "onzoom",
                        overlinePosition: "overline-position",
                        overlineThickness: "overline-thickness",
                        paintOrder: "paint-order",
                        panose1: "panose-1",
                        pointerEvents: "pointer-events",
                        referrerPolicy: "referrerpolicy",
                        renderingIntent: "rendering-intent",
                        shapeRendering: "shape-rendering",
                        stopColor: "stop-color",
                        stopOpacity: "stop-opacity",
                        strikethroughPosition: "strikethrough-position",
                        strikethroughThickness: "strikethrough-thickness",
                        strokeDashArray: "stroke-dasharray",
                        strokeDashOffset: "stroke-dashoffset",
                        strokeLineCap: "stroke-linecap",
                        strokeLineJoin: "stroke-linejoin",
                        strokeMiterLimit: "stroke-miterlimit",
                        strokeOpacity: "stroke-opacity",
                        strokeWidth: "stroke-width",
                        tabIndex: "tabindex",
                        textAnchor: "text-anchor",
                        textDecoration: "text-decoration",
                        textRendering: "text-rendering",
                        transformOrigin: "transform-origin",
                        typeOf: "typeof",
                        underlinePosition: "underline-position",
                        underlineThickness: "underline-thickness",
                        unicodeBidi: "unicode-bidi",
                        unicodeRange: "unicode-range",
                        unitsPerEm: "units-per-em",
                        vAlphabetic: "v-alphabetic",
                        vHanging: "v-hanging",
                        vIdeographic: "v-ideographic",
                        vMathematical: "v-mathematical",
                        vectorEffect: "vector-effect",
                        vertAdvY: "vert-adv-y",
                        vertOriginX: "vert-origin-x",
                        vertOriginY: "vert-origin-y",
                        wordSpacing: "word-spacing",
                        writingMode: "writing-mode",
                        xHeight: "x-height",
                        playbackOrder: "playbackorder",
                        timelineBegin: "timelinebegin"
                    },
                    transform: f,
                    properties: {
                        about: h.commaOrSpaceSeparated,
                        accentHeight: h.number,
                        accumulate: null,
                        additive: null,
                        alignmentBaseline: null,
                        alphabetic: h.number,
                        amplitude: h.number,
                        arabicForm: null,
                        ascent: h.number,
                        attributeName: null,
                        attributeType: null,
                        azimuth: h.number,
                        bandwidth: null,
                        baselineShift: null,
                        baseFrequency: null,
                        baseProfile: null,
                        bbox: null,
                        begin: null,
                        bias: h.number,
                        by: null,
                        calcMode: null,
                        capHeight: h.number,
                        className: h.spaceSeparated,
                        clip: null,
                        clipPath: null,
                        clipPathUnits: null,
                        clipRule: null,
                        color: null,
                        colorInterpolation: null,
                        colorInterpolationFilters: null,
                        colorProfile: null,
                        colorRendering: null,
                        content: null,
                        contentScriptType: null,
                        contentStyleType: null,
                        crossOrigin: null,
                        cursor: null,
                        cx: null,
                        cy: null,
                        d: null,
                        dataType: null,
                        defaultAction: null,
                        descent: h.number,
                        diffuseConstant: h.number,
                        direction: null,
                        display: null,
                        dur: null,
                        divisor: h.number,
                        dominantBaseline: null,
                        download: h.boolean,
                        dx: null,
                        dy: null,
                        edgeMode: null,
                        editable: null,
                        elevation: h.number,
                        enableBackground: null,
                        end: null,
                        event: null,
                        exponent: h.number,
                        externalResourcesRequired: null,
                        fill: null,
                        fillOpacity: h.number,
                        fillRule: null,
                        filter: null,
                        filterRes: null,
                        filterUnits: null,
                        floodColor: null,
                        floodOpacity: null,
                        focusable: null,
                        focusHighlight: null,
                        fontFamily: null,
                        fontSize: null,
                        fontSizeAdjust: null,
                        fontStretch: null,
                        fontStyle: null,
                        fontVariant: null,
                        fontWeight: null,
                        format: null,
                        fr: null,
                        from: null,
                        fx: null,
                        fy: null,
                        g1: h.commaSeparated,
                        g2: h.commaSeparated,
                        glyphName: h.commaSeparated,
                        glyphOrientationHorizontal: null,
                        glyphOrientationVertical: null,
                        glyphRef: null,
                        gradientTransform: null,
                        gradientUnits: null,
                        handler: null,
                        hanging: h.number,
                        hatchContentUnits: null,
                        hatchUnits: null,
                        height: null,
                        href: null,
                        hrefLang: null,
                        horizAdvX: h.number,
                        horizOriginX: h.number,
                        horizOriginY: h.number,
                        id: null,
                        ideographic: h.number,
                        imageRendering: null,
                        initialVisibility: null,
                        in: null,
                        in2: null,
                        intercept: h.number,
                        k: h.number,
                        k1: h.number,
                        k2: h.number,
                        k3: h.number,
                        k4: h.number,
                        kernelMatrix: h.commaOrSpaceSeparated,
                        kernelUnitLength: null,
                        keyPoints: null,
                        keySplines: null,
                        keyTimes: null,
                        kerning: null,
                        lang: null,
                        lengthAdjust: null,
                        letterSpacing: null,
                        lightingColor: null,
                        limitingConeAngle: h.number,
                        local: null,
                        markerEnd: null,
                        markerMid: null,
                        markerStart: null,
                        markerHeight: null,
                        markerUnits: null,
                        markerWidth: null,
                        mask: null,
                        maskContentUnits: null,
                        maskUnits: null,
                        mathematical: null,
                        max: null,
                        media: null,
                        mediaCharacterEncoding: null,
                        mediaContentEncodings: null,
                        mediaSize: h.number,
                        mediaTime: null,
                        method: null,
                        min: null,
                        mode: null,
                        name: null,
                        navDown: null,
                        navDownLeft: null,
                        navDownRight: null,
                        navLeft: null,
                        navNext: null,
                        navPrev: null,
                        navRight: null,
                        navUp: null,
                        navUpLeft: null,
                        navUpRight: null,
                        numOctaves: null,
                        observer: null,
                        offset: null,
                        onAbort: null,
                        onActivate: null,
                        onAfterPrint: null,
                        onBeforePrint: null,
                        onBegin: null,
                        onCancel: null,
                        onCanPlay: null,
                        onCanPlayThrough: null,
                        onChange: null,
                        onClick: null,
                        onClose: null,
                        onCopy: null,
                        onCueChange: null,
                        onCut: null,
                        onDblClick: null,
                        onDrag: null,
                        onDragEnd: null,
                        onDragEnter: null,
                        onDragExit: null,
                        onDragLeave: null,
                        onDragOver: null,
                        onDragStart: null,
                        onDrop: null,
                        onDurationChange: null,
                        onEmptied: null,
                        onEnd: null,
                        onEnded: null,
                        onError: null,
                        onFocus: null,
                        onFocusIn: null,
                        onFocusOut: null,
                        onHashChange: null,
                        onInput: null,
                        onInvalid: null,
                        onKeyDown: null,
                        onKeyPress: null,
                        onKeyUp: null,
                        onLoad: null,
                        onLoadedData: null,
                        onLoadedMetadata: null,
                        onLoadStart: null,
                        onMessage: null,
                        onMouseDown: null,
                        onMouseEnter: null,
                        onMouseLeave: null,
                        onMouseMove: null,
                        onMouseOut: null,
                        onMouseOver: null,
                        onMouseUp: null,
                        onMouseWheel: null,
                        onOffline: null,
                        onOnline: null,
                        onPageHide: null,
                        onPageShow: null,
                        onPaste: null,
                        onPause: null,
                        onPlay: null,
                        onPlaying: null,
                        onPopState: null,
                        onProgress: null,
                        onRateChange: null,
                        onRepeat: null,
                        onReset: null,
                        onResize: null,
                        onScroll: null,
                        onSeeked: null,
                        onSeeking: null,
                        onSelect: null,
                        onShow: null,
                        onStalled: null,
                        onStorage: null,
                        onSubmit: null,
                        onSuspend: null,
                        onTimeUpdate: null,
                        onToggle: null,
                        onUnload: null,
                        onVolumeChange: null,
                        onWaiting: null,
                        onZoom: null,
                        opacity: null,
                        operator: null,
                        order: null,
                        orient: null,
                        orientation: null,
                        origin: null,
                        overflow: null,
                        overlay: null,
                        overlinePosition: h.number,
                        overlineThickness: h.number,
                        paintOrder: null,
                        panose1: null,
                        path: null,
                        pathLength: h.number,
                        patternContentUnits: null,
                        patternTransform: null,
                        patternUnits: null,
                        phase: null,
                        ping: h.spaceSeparated,
                        pitch: null,
                        playbackOrder: null,
                        pointerEvents: null,
                        points: null,
                        pointsAtX: h.number,
                        pointsAtY: h.number,
                        pointsAtZ: h.number,
                        preserveAlpha: null,
                        preserveAspectRatio: null,
                        primitiveUnits: null,
                        propagate: null,
                        property: h.commaOrSpaceSeparated,
                        r: null,
                        radius: null,
                        referrerPolicy: null,
                        refX: null,
                        refY: null,
                        rel: h.commaOrSpaceSeparated,
                        rev: h.commaOrSpaceSeparated,
                        renderingIntent: null,
                        repeatCount: null,
                        repeatDur: null,
                        requiredExtensions: h.commaOrSpaceSeparated,
                        requiredFeatures: h.commaOrSpaceSeparated,
                        requiredFonts: h.commaOrSpaceSeparated,
                        requiredFormats: h.commaOrSpaceSeparated,
                        resource: null,
                        restart: null,
                        result: null,
                        rotate: null,
                        rx: null,
                        ry: null,
                        scale: null,
                        seed: null,
                        shapeRendering: null,
                        side: null,
                        slope: null,
                        snapshotTime: null,
                        specularConstant: h.number,
                        specularExponent: h.number,
                        spreadMethod: null,
                        spacing: null,
                        startOffset: null,
                        stdDeviation: null,
                        stemh: null,
                        stemv: null,
                        stitchTiles: null,
                        stopColor: null,
                        stopOpacity: null,
                        strikethroughPosition: h.number,
                        strikethroughThickness: h.number,
                        string: null,
                        stroke: null,
                        strokeDashArray: h.commaOrSpaceSeparated,
                        strokeDashOffset: null,
                        strokeLineCap: null,
                        strokeLineJoin: null,
                        strokeMiterLimit: h.number,
                        strokeOpacity: h.number,
                        strokeWidth: null,
                        style: null,
                        surfaceScale: h.number,
                        syncBehavior: null,
                        syncBehaviorDefault: null,
                        syncMaster: null,
                        syncTolerance: null,
                        syncToleranceDefault: null,
                        systemLanguage: h.commaOrSpaceSeparated,
                        tabIndex: h.number,
                        tableValues: null,
                        target: null,
                        targetX: h.number,
                        targetY: h.number,
                        textAnchor: null,
                        textDecoration: null,
                        textRendering: null,
                        textLength: null,
                        timelineBegin: null,
                        title: null,
                        transformBehavior: null,
                        type: null,
                        typeOf: h.commaOrSpaceSeparated,
                        to: null,
                        transform: null,
                        transformOrigin: null,
                        u1: null,
                        u2: null,
                        underlinePosition: h.number,
                        underlineThickness: h.number,
                        unicode: null,
                        unicodeBidi: null,
                        unicodeRange: null,
                        unitsPerEm: h.number,
                        values: null,
                        vAlphabetic: h.number,
                        vMathematical: h.number,
                        vectorEffect: null,
                        vHanging: h.number,
                        vIdeographic: h.number,
                        version: null,
                        vertAdvY: h.number,
                        vertOriginX: h.number,
                        vertOriginY: h.number,
                        viewBox: null,
                        viewTarget: null,
                        visibility: null,
                        width: null,
                        widths: null,
                        wordSpacing: null,
                        writingMode: null,
                        x: null,
                        x1: null,
                        x2: null,
                        xChannelSelector: null,
                        xHeight: h.number,
                        y: null,
                        y1: null,
                        y2: null,
                        yChannelSelector: null,
                        z: null,
                        zoomAndPan: null
                    }
                }),
                b = i([s, c, d, m, g], "html"),
                k = i([s, c, d, m, y], "svg")
        },
        96195: function(e, t, n) {
            "use strict";
            n.d(t, {
                s: function() {
                    return c
                }
            });
            var r = n(27456),
                i = n(33462),
                l = n(87788);
            let o = /^data[-\w.:]+$/i,
                u = /-[a-z]/g,
                a = /[A-Z]/g;

            function c(e, t) {
                let n = (0, r.F)(t),
                    c = t,
                    p = l.k;
                if (n in e.normal) return e.property[e.normal[n]];
                if (n.length > 4 && "data" === n.slice(0, 4) && o.test(t)) {
                    if ("-" === t.charAt(4)) {
                        let e = t.slice(5).replace(u, f);
                        c = "data" + e.charAt(0).toUpperCase() + e.slice(1)
                    } else {
                        let e = t.slice(4);
                        if (!u.test(e)) {
                            let n = e.replace(a, s);
                            "-" !== n.charAt(0) && (n = "-" + n), t = "data" + n
                        }
                    }
                    p = i.I
                }
                return new p(c, t)
            }

            function s(e) {
                return "-" + e.toLowerCase()
            }

            function f(e) {
                return e.charAt(1).toUpperCase()
            }
        },
        27456: function(e, t, n) {
            "use strict";

            function r(e) {
                return e.toLowerCase()
            }
            n.d(t, {
                F: function() {
                    return r
                }
            })
        },
        33462: function(e, t, n) {
            "use strict";
            n.d(t, {
                I: function() {
                    return o
                }
            });
            var r = n(87788),
                i = n(21374);
            let l = Object.keys(i);
            class o extends r.k {
                constructor(e, t, n, r) {
                    var o, u, a, c;
                    let s = -1;
                    if (super(e, t), o = this, r && (o.space = r), "number" == typeof n)
                        for (; ++s < l.length;) {
                            let e = l[s];
                            u = this, a = l[s], (c = (n & i[e]) === i[e]) && (u[a] = c)
                        }
                }
            }
            o.prototype.defined = !0
        },
        87788: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return r
                }
            });
            class r {
                constructor(e, t) {
                    this.property = e, this.attribute = t
                }
            }
            r.prototype.space = null, r.prototype.boolean = !1, r.prototype.booleanish = !1, r.prototype.overloadedBoolean = !1, r.prototype.number = !1, r.prototype.commaSeparated = !1, r.prototype.spaceSeparated = !1, r.prototype.commaOrSpaceSeparated = !1, r.prototype.mustUseProperty = !1, r.prototype.defined = !1
        },
        21374: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                boolean: function() {
                    return i
                },
                booleanish: function() {
                    return l
                },
                commaOrSpaceSeparated: function() {
                    return s
                },
                commaSeparated: function() {
                    return c
                },
                number: function() {
                    return u
                },
                overloadedBoolean: function() {
                    return o
                },
                spaceSeparated: function() {
                    return a
                }
            });
            let r = 0,
                i = f(),
                l = f(),
                o = f(),
                u = f(),
                a = f(),
                c = f(),
                s = f();

            function f() {
                return 2 ** ++r
            }
        },
        84939: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return e8
                }
            });
            var r = {};
            n.r(r), n.d(r, {
                attentionMarkers: function() {
                    return em
                },
                contentInitial: function() {
                    return ec
                },
                disable: function() {
                    return eg
                },
                document: function() {
                    return ea
                },
                flow: function() {
                    return ef
                },
                flowInitial: function() {
                    return es
                },
                insideSpan: function() {
                    return eh
                },
                string: function() {
                    return ep
                },
                text: function() {
                    return ed
                }
            });
            var i = n(82684),
                l = n(32023),
                o = n(62826);
            let u = {};

            function a(e, t, n) {
                if (Boolean(e && "object" == typeof e)) {
                    if ("value" in e) return "html" !== e.type || n ? e.value : "";
                    if (t && "alt" in e && e.alt) return e.alt;
                    if ("children" in e) return c(e.children, t, n)
                }
                return Array.isArray(e) ? c(e, t, n) : ""
            }

            function c(e, t, n) {
                let r = [],
                    i = -1;
                for (; ++i < e.length;) r[i] = a(e[i], t, n);
                return r.join("")
            }
            var s = n(76075),
                f = n(576),
                p = n(80226);
            let d = {
                tokenize: function(e) {
                    let t;
                    let n = e.attempt(this.parser.constructs.contentInitial, function(t) {
                        if (null === t) {
                            e.consume(t);
                            return
                        }
                        return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), (0, f.f)(e, n, "linePrefix")
                    }, function(n) {
                        return e.enter("paragraph"),
                            function n(r) {
                                let i = e.enter("chunkText", {
                                    contentType: "text",
                                    previous: t
                                });
                                return t && (t.next = i), t = i,
                                    function t(r) {
                                        if (null === r) {
                                            e.exit("chunkText"), e.exit("paragraph"), e.consume(r);
                                            return
                                        }
                                        return (0, p.Ch)(r) ? (e.consume(r), e.exit("chunkText"), n) : (e.consume(r), t)
                                    }(r)
                            }(n)
                    });
                    return n
                }
            };
            var h = n(78043);
            let m = {
                    tokenize: function(e) {
                        let t, n, r;
                        let i = this,
                            l = [],
                            o = 0;
                        return u;

                        function u(t) {
                            if (o < l.length) {
                                let n = l[o];
                                return i.containerState = n[1], e.attempt(n[0].continuation, a, c)(t)
                            }
                            return c(t)
                        }

                        function a(e) {
                            if (o++, i.containerState._closeFlow) {
                                let n;
                                i.containerState._closeFlow = void 0, t && x();
                                let r = i.events.length,
                                    l = r;
                                for (; l--;)
                                    if ("exit" === i.events[l][0] && "chunkFlow" === i.events[l][1].type) {
                                        n = i.events[l][1].end;
                                        break
                                    }
                                k(o);
                                let u = r;
                                for (; u < i.events.length;) i.events[u][1].end = Object.assign({}, n), u++;
                                return (0, h.d)(i.events, l + 1, 0, i.events.slice(r)), i.events.length = u, c(e)
                            }
                            return u(e)
                        }

                        function c(n) {
                            if (o === l.length) {
                                if (!t) return d(n);
                                if (t.currentConstruct && t.currentConstruct.concrete) return y(n);
                                i.interrupt = Boolean(t.currentConstruct && !t._gfmTableDynamicInterruptHack)
                            }
                            return i.containerState = {}, e.check(g, s, f)(n)
                        }

                        function s(e) {
                            return t && x(), k(o), d(e)
                        }

                        function f(e) {
                            return i.parser.lazy[i.now().line] = o !== l.length, r = i.now().offset, y(e)
                        }

                        function d(t) {
                            return i.containerState = {}, e.attempt(g, m, y)(t)
                        }

                        function m(e) {
                            return o++, l.push([i.currentConstruct, i.containerState]), d(e)
                        }

                        function y(r) {
                            if (null === r) {
                                t && x(), k(0), e.consume(r);
                                return
                            }
                            return t = t || i.parser.flow(i.now()), e.enter("chunkFlow", {
                                    contentType: "flow",
                                    previous: n,
                                    _tokenizer: t
                                }),
                                function t(n) {
                                    if (null === n) {
                                        b(e.exit("chunkFlow"), !0), k(0), e.consume(n);
                                        return
                                    }
                                    return (0, p.Ch)(n) ? (e.consume(n), b(e.exit("chunkFlow")), o = 0, i.interrupt = void 0, u) : (e.consume(n), t)
                                }(r)
                        }

                        function b(e, l) {
                            let u = i.sliceStream(e);
                            if (l && u.push(null), e.previous = n, n && (n.next = e), n = e, t.defineSkip(e.start), t.write(u), i.parser.lazy[e.start.line]) {
                                let e, n, l = t.events.length;
                                for (; l--;)
                                    if (t.events[l][1].start.offset < r && (!t.events[l][1].end || t.events[l][1].end.offset > r)) return;
                                let u = i.events.length,
                                    a = u;
                                for (; a--;)
                                    if ("exit" === i.events[a][0] && "chunkFlow" === i.events[a][1].type) {
                                        if (e) {
                                            n = i.events[a][1].end;
                                            break
                                        }
                                        e = !0
                                    }
                                for (k(o), l = u; l < i.events.length;) i.events[l][1].end = Object.assign({}, n), l++;
                                (0, h.d)(i.events, a + 1, 0, i.events.slice(u)), i.events.length = l
                            }
                        }

                        function k(t) {
                            let n = l.length;
                            for (; n-- > t;) {
                                let t = l[n];
                                i.containerState = t[1], t[0].exit.call(i, e)
                            }
                            l.length = t
                        }

                        function x() {
                            t.write([null]), n = void 0, t = void 0, i.containerState._closeFlow = void 0
                        }
                    }
                },
                g = {
                    tokenize: function(e, t, n) {
                        return (0, f.f)(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
                    }
                };
            var y = n(84430);

            function b(e) {
                let t, n, r, i, l, o, u;
                let a = {},
                    c = -1;
                for (; ++c < e.length;) {
                    for (;
                        (c in a);) c = a[c];
                    if (t = e[c], c && "chunkFlow" === t[1].type && "listItemPrefix" === e[c - 1][1].type && ((r = 0) < (o = t[1]._tokenizer.events).length && "lineEndingBlank" === o[r][1].type && (r += 2), r < o.length && "content" === o[r][1].type))
                        for (; ++r < o.length && "content" !== o[r][1].type;) "chunkText" === o[r][1].type && (o[r][1]._isInFirstContentOfListItem = !0, r++);
                    if ("enter" === t[0]) t[1].contentType && (Object.assign(a, function(e, t) {
                        let n, r;
                        let i = e[t][1],
                            l = e[t][2],
                            o = t - 1,
                            u = [],
                            a = i._tokenizer || l.parser[i.contentType](i.start),
                            c = a.events,
                            s = [],
                            f = {},
                            p = -1,
                            d = i,
                            m = 0,
                            g = 0,
                            y = [g];
                        for (; d;) {
                            for (; e[++o][1] !== d;);
                            u.push(o), !d._tokenizer && (n = l.sliceStream(d), d.next || n.push(null), r && a.defineSkip(d.start), d._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = !0), a.write(n), d._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = void 0)), r = d, d = d.next
                        }
                        for (d = i; ++p < c.length;) "exit" === c[p][0] && "enter" === c[p - 1][0] && c[p][1].type === c[p - 1][1].type && c[p][1].start.line !== c[p][1].end.line && (g = p + 1, y.push(g), d._tokenizer = void 0, d.previous = void 0, d = d.next);
                        for (a.events = [], d ? (d._tokenizer = void 0, d.previous = void 0) : y.pop(), p = y.length; p--;) {
                            let t = c.slice(y[p], y[p + 1]),
                                n = u.pop();
                            s.unshift([n, n + t.length - 1]), (0, h.d)(e, n, 2, t)
                        }
                        for (p = -1; ++p < s.length;) f[m + s[p][0]] = m + s[p][1], m += s[p][1] - s[p][0] - 1;
                        return f
                    }(e, c)), c = a[c], u = !0);
                    else if (t[1]._container) {
                        for (r = c, n = void 0; r--;)
                            if ("lineEnding" === (i = e[r])[1].type || "lineEndingBlank" === i[1].type) "enter" === i[0] && (n && (e[n][1].type = "lineEndingBlank"), i[1].type = "lineEnding", n = r);
                            else break;
                        n && (t[1].end = Object.assign({}, e[n][1].start), (l = e.slice(n, c)).unshift(t), (0, h.d)(e, n, c - n + 1, l))
                    }
                }
                return !u
            }
            let k = {
                    tokenize: function(e, t) {
                        let n;
                        return function(t) {
                            return e.enter("content"), n = e.enter("chunkContent", {
                                contentType: "content"
                            }), r(t)
                        };

                        function r(t) {
                            return null === t ? i(t) : (0, p.Ch)(t) ? e.check(x, l, i)(t) : (e.consume(t), r)
                        }

                        function i(n) {
                            return e.exit("chunkContent"), e.exit("content"), t(n)
                        }

                        function l(t) {
                            return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
                                contentType: "content",
                                previous: n
                            }), n = n.next, r
                        }
                    },
                    resolve: function(e) {
                        return b(e), e
                    }
                },
                x = {
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), (0, f.f)(e, i, "linePrefix")
                        };

                        function i(i) {
                            if (null === i || (0, p.Ch)(i)) return n(i);
                            let l = r.events[r.events.length - 1];
                            return !r.parser.constructs.disable.null.includes("codeIndented") && l && "linePrefix" === l[1].type && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i)
                        }
                    },
                    partial: !0
                },
                v = {
                    tokenize: function(e) {
                        let t = this,
                            n = e.attempt(y.w, function(r) {
                                if (null === r) {
                                    e.consume(r);
                                    return
                                }
                                return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n
                            }, e.attempt(this.parser.constructs.flowInitial, r, (0, f.f)(e, e.attempt(this.parser.constructs.flow, r, e.attempt(k, r)), "linePrefix")));
                        return n;

                        function r(r) {
                            if (null === r) {
                                e.consume(r);
                                return
                            }
                            return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n
                        }
                    }
                },
                S = {
                    resolveAll: E()
                },
                C = F("string"),
                w = F("text");

            function F(e) {
                return {
                    tokenize: function(t) {
                        let n = this,
                            r = this.parser.constructs[e],
                            i = t.attempt(r, l, o);
                        return l;

                        function l(e) {
                            return a(e) ? i(e) : o(e)
                        }

                        function o(e) {
                            if (null === e) {
                                t.consume(e);
                                return
                            }
                            return t.enter("data"), t.consume(e), u
                        }

                        function u(e) {
                            return a(e) ? (t.exit("data"), i(e)) : (t.consume(e), u)
                        }

                        function a(e) {
                            if (null === e) return !0;
                            let t = r[e],
                                i = -1;
                            if (t)
                                for (; ++i < t.length;) {
                                    let e = t[i];
                                    if (!e.previous || e.previous.call(n, n.previous)) return !0
                                }
                            return !1
                        }
                    },
                    resolveAll: E("text" === e ? A : void 0)
                }
            }

            function E(e) {
                return function(t, n) {
                    let r, i = -1;
                    for (; ++i <= t.length;) void 0 === r ? t[i] && "data" === t[i][1].type && (r = i, i++) : t[i] && "data" === t[i][1].type || (i !== r + 2 && (t[r][1].end = t[i - 1][1].end, t.splice(r + 2, i - r - 2), i = r + 2), r = void 0);
                    return e ? e(t, n) : t
                }
            }

            function A(e, t) {
                let n = 0;
                for (; ++n <= e.length;)
                    if ((n === e.length || "lineEnding" === e[n][1].type) && "data" === e[n - 1][1].type) {
                        let r;
                        let i = e[n - 1][1],
                            l = t.sliceStream(i),
                            o = l.length,
                            u = -1,
                            a = 0;
                        for (; o--;) {
                            let e = l[o];
                            if ("string" == typeof e) {
                                for (u = e.length; 32 === e.charCodeAt(u - 1);) a++, u--;
                                if (u) break;
                                u = -1
                            } else if (-2 === e) r = !0, a++;
                            else if (-1 === e);
                            else {
                                o++;
                                break
                            }
                        }
                        if (a) {
                            let l = {
                                type: n === e.length || r || a < 2 ? "lineSuffix" : "hardBreakTrailing",
                                start: {
                                    line: i.end.line,
                                    column: i.end.column - a,
                                    offset: i.end.offset - a,
                                    _index: i.start._index + o,
                                    _bufferIndex: o ? u : i.start._bufferIndex + u
                                },
                                end: Object.assign({}, i.end)
                            };
                            i.end = Object.assign({}, l.start), i.start.offset === i.end.offset ? Object.assign(i, l) : (e.splice(n, 0, ["enter", l, t], ["exit", l, t]), n += 2)
                        }
                        n++
                    }
                return e
            }
            var D = n(16821);
            let z = {
                    name: "thematicBreak",
                    tokenize: function(e, t, n) {
                        let r = 0;
                        return function(i) {
                            return e.enter("thematicBreak"),
                                function l(o) {
                                    return o === i ? (e.enter("thematicBreakSequence"), function t(n) {
                                        return n === i ? (e.consume(n), r++, t) : (e.exit("thematicBreakSequence"), (0, p.xz)(n) ? (0, f.f)(e, l, "whitespace")(n) : l(n))
                                    }(o)) : r >= 3 && (null === o || (0, p.Ch)(o)) ? (e.exit("thematicBreak"), t(o)) : n(o)
                                }(i)
                        }
                    }
                },
                O = {
                    name: "list",
                    tokenize: function(e, t, n) {
                        let r = this,
                            i = r.events[r.events.length - 1],
                            l = i && "linePrefix" === i[1].type ? i[2].sliceSerialize(i[1], !0).length : 0,
                            o = 0;
                        return function(t) {
                            let i = r.containerState.type || (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
                            if ("listUnordered" === i ? !r.containerState.marker || t === r.containerState.marker : (0, p.pY)(t)) {
                                if (r.containerState.type || (r.containerState.type = i, e.enter(i, {
                                        _container: !0
                                    })), "listUnordered" === i) return e.enter("listItemPrefix"), 42 === t || 45 === t ? e.check(z, n, u)(t) : u(t);
                                if (!r.interrupt || 49 === t) return e.enter("listItemPrefix"), e.enter("listItemValue"),
                                    function t(i) {
                                        return (0, p.pY)(i) && ++o < 10 ? (e.consume(i), t) : (!r.interrupt || o < 2) && (r.containerState.marker ? i === r.containerState.marker : 41 === i || 46 === i) ? (e.exit("listItemValue"), u(i)) : n(i)
                                    }(t)
                            }
                            return n(t)
                        };

                        function u(t) {
                            return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(y.w, r.interrupt ? n : a, e.attempt(T, s, c))
                        }

                        function a(e) {
                            return r.containerState.initialBlankLine = !0, l++, s(e)
                        }

                        function c(t) {
                            return (0, p.xz)(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), s) : n(t)
                        }

                        function s(n) {
                            return r.containerState.size = l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n)
                        }
                    },
                    continuation: {
                        tokenize: function(e, t, n) {
                            let r = this;
                            return r.containerState._closeFlow = void 0, e.check(y.w, function(n) {
                                return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, (0, f.f)(e, t, "listItemIndent", r.containerState.size + 1)(n)
                            }, function(n) {
                                return r.containerState.furtherBlankLines || !(0, p.xz)(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, i(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(P, t, i)(n))
                            });

                            function i(i) {
                                return r.containerState._closeFlow = !0, r.interrupt = void 0, (0, f.f)(e, e.attempt(O, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i)
                            }
                        }
                    },
                    exit: function(e) {
                        e.exit(this.containerState.type)
                    }
                },
                T = {
                    tokenize: function(e, t, n) {
                        let r = this;
                        return (0, f.f)(e, function(e) {
                            let i = r.events[r.events.length - 1];
                            return !(0, p.xz)(e) && i && "listItemPrefixWhitespace" === i[1].type ? t(e) : n(e)
                        }, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5)
                    },
                    partial: !0
                },
                P = {
                    tokenize: function(e, t, n) {
                        let r = this;
                        return (0, f.f)(e, function(e) {
                            let i = r.events[r.events.length - 1];
                            return i && "listItemIndent" === i[1].type && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e)
                        }, "listItemIndent", r.containerState.size + 1)
                    },
                    partial: !0
                },
                L = {
                    name: "blockQuote",
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            if (62 === t) {
                                let n = r.containerState;
                                return n.open || (e.enter("blockQuote", {
                                    _container: !0
                                }), n.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), i
                            }
                            return n(t)
                        };

                        function i(n) {
                            return (0, p.xz)(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n))
                        }
                    },
                    continuation: {
                        tokenize: function(e, t, n) {
                            let r = this;
                            return function(t) {
                                return (0, p.xz)(t) ? (0, f.f)(e, i, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : i(t)
                            };

                            function i(r) {
                                return e.attempt(L, t, n)(r)
                            }
                        }
                    },
                    exit: function(e) {
                        e.exit("blockQuote")
                    }
                };

            function I(e, t, n, r, i, l, o, u, a) {
                let c = a || Number.POSITIVE_INFINITY,
                    s = 0;
                return function(t) {
                    return 60 === t ? (e.enter(r), e.enter(i), e.enter(l), e.consume(t), e.exit(l), f) : null === t || 32 === t || 41 === t || (0, p.Av)(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(u), e.enter("chunkString", {
                        contentType: "string"
                    }), m(t))
                };

                function f(n) {
                    return 62 === n ? (e.enter(l), e.consume(n), e.exit(l), e.exit(i), e.exit(r), t) : (e.enter(u), e.enter("chunkString", {
                        contentType: "string"
                    }), d(n))
                }

                function d(t) {
                    return 62 === t ? (e.exit("chunkString"), e.exit(u), f(t)) : null === t || 60 === t || (0, p.Ch)(t) ? n(t) : (e.consume(t), 92 === t ? h : d)
                }

                function h(t) {
                    return 60 === t || 62 === t || 92 === t ? (e.consume(t), d) : d(t)
                }

                function m(i) {
                    return !s && (null === i || 41 === i || (0, p.z3)(i)) ? (e.exit("chunkString"), e.exit(u), e.exit(o), e.exit(r), t(i)) : s < c && 40 === i ? (e.consume(i), s++, m) : 41 === i ? (e.consume(i), s--, m) : null === i || 32 === i || 40 === i || (0, p.Av)(i) ? n(i) : (e.consume(i), 92 === i ? g : m)
                }

                function g(t) {
                    return 40 === t || 41 === t || 92 === t ? (e.consume(t), m) : m(t)
                }
            }

            function M(e, t, n, r, i, l) {
                let o;
                let u = this,
                    a = 0;
                return function(t) {
                    return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(l), c
                };

                function c(f) {
                    return a > 999 || null === f || 91 === f || 93 === f && !o || 94 === f && !a && "_hiddenFootnoteSupport" in u.parser.constructs ? n(f) : 93 === f ? (e.exit(l), e.enter(i), e.consume(f), e.exit(i), e.exit(r), t) : (0, p.Ch)(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), c) : (e.enter("chunkString", {
                        contentType: "string"
                    }), s(f))
                }

                function s(t) {
                    return null === t || 91 === t || 93 === t || (0, p.Ch)(t) || a++ > 999 ? (e.exit("chunkString"), c(t)) : (e.consume(t), o || (o = !(0, p.xz)(t)), 92 === t ? f : s)
                }

                function f(t) {
                    return 91 === t || 92 === t || 93 === t ? (e.consume(t), a++, s) : s(t)
                }
            }

            function j(e, t, n, r, i, l) {
                let o;
                return function(t) {
                    return 34 === t || 39 === t || 40 === t ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = 40 === t ? 41 : t, u) : n(t)
                };

                function u(n) {
                    return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(l), a(n))
                }

                function a(t) {
                    return t === o ? (e.exit(l), u(o)) : null === t ? n(t) : (0, p.Ch)(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), (0, f.f)(e, a, "linePrefix")) : (e.enter("chunkString", {
                        contentType: "string"
                    }), c(t))
                }

                function c(t) {
                    return t === o || null === t || (0, p.Ch)(t) ? (e.exit("chunkString"), a(t)) : (e.consume(t), 92 === t ? s : c)
                }

                function s(t) {
                    return t === o || 92 === t ? (e.consume(t), c) : c(t)
                }
            }

            function R(e, t) {
                let n;
                return function r(i) {
                    return (0, p.Ch)(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : (0, p.xz)(i) ? (0, f.f)(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i)
                }
            }
            var B = n(43774);
            let _ = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return (0, p.z3)(t) ? R(e, r)(t) : n(t)
                        };

                        function r(t) {
                            return j(e, i, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t)
                        }

                        function i(t) {
                            return (0, p.xz)(t) ? (0, f.f)(e, l, "whitespace")(t) : l(t)
                        }

                        function l(e) {
                            return null === e || (0, p.Ch)(e) ? t(e) : n(e)
                        }
                    },
                    partial: !0
                },
                N = {
                    name: "codeIndented",
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return e.enter("codeIndented"), (0, f.f)(e, i, "linePrefix", 5)(t)
                        };

                        function i(t) {
                            let i = r.events[r.events.length - 1];
                            return i && "linePrefix" === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? function t(n) {
                                return null === n ? l(n) : (0, p.Ch)(n) ? e.attempt(H, t, l)(n) : (e.enter("codeFlowValue"), function n(r) {
                                    return null === r || (0, p.Ch)(r) ? (e.exit("codeFlowValue"), t(r)) : (e.consume(r), n)
                                }(n))
                            }(t) : n(t)
                        }

                        function l(n) {
                            return e.exit("codeIndented"), t(n)
                        }
                    }
                },
                H = {
                    tokenize: function(e, t, n) {
                        let r = this;
                        return i;

                        function i(t) {
                            return r.parser.lazy[r.now().line] ? n(t) : (0, p.Ch)(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : (0, f.f)(e, l, "linePrefix", 5)(t)
                        }

                        function l(e) {
                            let l = r.events[r.events.length - 1];
                            return l && "linePrefix" === l[1].type && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(e) : (0, p.Ch)(e) ? i(e) : n(e)
                        }
                    },
                    partial: !0
                },
                U = {
                    name: "setextUnderline",
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            let l, o = r.events.length;
                            for (; o--;)
                                if ("lineEnding" !== r.events[o][1].type && "linePrefix" !== r.events[o][1].type && "content" !== r.events[o][1].type) {
                                    l = "paragraph" === r.events[o][1].type;
                                    break
                                }
                            return !r.parser.lazy[r.now().line] && (r.interrupt || l) ? (e.enter("setextHeadingLine"), e.enter("setextHeadingLineSequence"), function n(r) {
                                return r === t ? (e.consume(r), n) : (e.exit("setextHeadingLineSequence"), (0, p.xz)(r) ? (0, f.f)(e, i, "lineSuffix")(r) : i(r))
                            }(t)) : n(t)
                        };

                        function i(r) {
                            return null === r || (0, p.Ch)(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r)
                        }
                    },
                    resolveTo: function(e, t) {
                        let n, r, i, l = e.length;
                        for (; l--;)
                            if ("enter" === e[l][0]) {
                                if ("content" === e[l][1].type) {
                                    n = l;
                                    break
                                }
                                "paragraph" === e[l][1].type && (r = l)
                            } else "content" === e[l][1].type && e.splice(l, 1), i || "definition" !== e[l][1].type || (i = l);
                        let o = {
                            type: "setextHeading",
                            start: Object.assign({}, e[r][1].start),
                            end: Object.assign({}, e[e.length - 1][1].end)
                        };
                        return e[r][1].type = "setextHeadingText", i ? (e.splice(r, 0, ["enter", o, t]), e.splice(i + 1, 0, ["exit", e[n][1], t]), e[n][1].end = Object.assign({}, e[i][1].end)) : e[n][1] = o, e.push(["exit", o, t]), e
                    }
                },
                V = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
                $ = ["pre", "script", "style", "textarea"],
                q = {
                    tokenize: function(e, t, n) {
                        return function(r) {
                            return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(y.w, t, n)
                        }
                    },
                    partial: !0
                },
                W = {
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return (0, p.Ch)(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : n(t)
                        };

                        function i(e) {
                            return r.parser.lazy[r.now().line] ? n(e) : t(e)
                        }
                    },
                    partial: !0
                },
                Q = {
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return null === t ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i)
                        };

                        function i(e) {
                            return r.parser.lazy[r.now().line] ? n(e) : t(e)
                        }
                    },
                    partial: !0
                },
                Y = {
                    name: "codeFenced",
                    tokenize: function(e, t, n) {
                        let r;
                        let i = this,
                            l = {
                                tokenize: function(e, t, n) {
                                    let l = 0;
                                    return function(t) {
                                        return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), o
                                    };

                                    function o(t) {
                                        return e.enter("codeFencedFence"), (0, p.xz)(t) ? (0, f.f)(e, a, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : a(t)
                                    }

                                    function a(t) {
                                        return t === r ? (e.enter("codeFencedFenceSequence"), function t(i) {
                                            return i === r ? (l++, e.consume(i), t) : l >= u ? (e.exit("codeFencedFenceSequence"), (0, p.xz)(i) ? (0, f.f)(e, c, "whitespace")(i) : c(i)) : n(i)
                                        }(t)) : n(t)
                                    }

                                    function c(r) {
                                        return null === r || (0, p.Ch)(r) ? (e.exit("codeFencedFence"), t(r)) : n(r)
                                    }
                                },
                                partial: !0
                            },
                            o = 0,
                            u = 0;
                        return function(t) {
                            return function(t) {
                                let l = i.events[i.events.length - 1];
                                return o = l && "linePrefix" === l[1].type ? l[2].sliceSerialize(l[1], !0).length : 0, r = t, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"),
                                    function t(i) {
                                        return i === r ? (u++, e.consume(i), t) : u < 3 ? n(i) : (e.exit("codeFencedFenceSequence"), (0, p.xz)(i) ? (0, f.f)(e, a, "whitespace")(i) : a(i))
                                    }(t)
                            }(t)
                        };

                        function a(l) {
                            return null === l || (0, p.Ch)(l) ? (e.exit("codeFencedFence"), i.interrupt ? t(l) : e.check(Q, s, g)(l)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
                                contentType: "string"
                            }), function t(i) {
                                return null === i || (0, p.Ch)(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), a(i)) : (0, p.xz)(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), (0, f.f)(e, c, "whitespace")(i)) : 96 === i && i === r ? n(i) : (e.consume(i), t)
                            }(l))
                        }

                        function c(t) {
                            return null === t || (0, p.Ch)(t) ? a(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
                                contentType: "string"
                            }), function t(i) {
                                return null === i || (0, p.Ch)(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), a(i)) : 96 === i && i === r ? n(i) : (e.consume(i), t)
                            }(t))
                        }

                        function s(t) {
                            return e.attempt(l, g, d)(t)
                        }

                        function d(t) {
                            return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), h
                        }

                        function h(t) {
                            return o > 0 && (0, p.xz)(t) ? (0, f.f)(e, m, "linePrefix", o + 1)(t) : m(t)
                        }

                        function m(t) {
                            return null === t || (0, p.Ch)(t) ? e.check(Q, s, g)(t) : (e.enter("codeFlowValue"), function t(n) {
                                return null === n || (0, p.Ch)(n) ? (e.exit("codeFlowValue"), m(n)) : (e.consume(n), t)
                            }(t))
                        }

                        function g(n) {
                            return e.exit("codeFenced"), t(n)
                        }
                    },
                    concrete: !0
                };
            var X = n(94211);
            let K = {
                    name: "characterReference",
                    tokenize: function(e, t, n) {
                        let r, i;
                        let l = this,
                            o = 0;
                        return function(t) {
                            return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), u
                        };

                        function u(t) {
                            return 35 === t ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), a) : (e.enter("characterReferenceValue"), r = 31, i = p.H$, c(t))
                        }

                        function a(t) {
                            return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), r = 6, i = p.AF, c) : (e.enter("characterReferenceValue"), r = 7, i = p.pY, c(t))
                        }

                        function c(u) {
                            if (59 === u && o) {
                                let r = e.exit("characterReferenceValue");
                                return i !== p.H$ || (0, X.T)(l.sliceSerialize(r)) ? (e.enter("characterReferenceMarker"), e.consume(u), e.exit("characterReferenceMarker"), e.exit("characterReference"), t) : n(u)
                            }
                            return i(u) && o++ < r ? (e.consume(u), c) : n(u)
                        }
                    }
                },
                Z = {
                    name: "characterEscape",
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), r
                        };

                        function r(r) {
                            return (0, p.sR)(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r)
                        }
                    }
                },
                J = {
                    name: "lineEnding",
                    tokenize: function(e, t) {
                        return function(n) {
                            return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), (0, f.f)(e, t, "linePrefix")
                        }
                    }
                },
                G = {
                    name: "labelEnd",
                    tokenize: function(e, t, n) {
                        let r, i;
                        let l = this,
                            o = l.events.length;
                        for (; o--;)
                            if (("labelImage" === l.events[o][1].type || "labelLink" === l.events[o][1].type) && !l.events[o][1]._balanced) {
                                r = l.events[o][1];
                                break
                            }
                        return function(t) {
                            return r ? r._inactive ? s(t) : (i = l.parser.defined.includes((0, B.d)(l.sliceSerialize({
                                start: r.end,
                                end: l.now()
                            }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), u) : n(t)
                        };

                        function u(t) {
                            return 40 === t ? e.attempt(ee, c, i ? c : s)(t) : 91 === t ? e.attempt(et, c, i ? a : s)(t) : i ? c(t) : s(t)
                        }

                        function a(t) {
                            return e.attempt(en, c, s)(t)
                        }

                        function c(e) {
                            return t(e)
                        }

                        function s(e) {
                            return r._balanced = !0, n(e)
                        }
                    },
                    resolveTo: function(e, t) {
                        let n, r, i, l, o = e.length,
                            u = 0;
                        for (; o--;)
                            if (n = e[o][1], r) {
                                if ("link" === n.type || "labelLink" === n.type && n._inactive) break;
                                "enter" === e[o][0] && "labelLink" === n.type && (n._inactive = !0)
                            } else if (i) {
                            if ("enter" === e[o][0] && ("labelImage" === n.type || "labelLink" === n.type) && !n._balanced && (r = o, "labelLink" !== n.type)) {
                                u = 2;
                                break
                            }
                        } else "labelEnd" === n.type && (i = o);
                        let a = {
                                type: "labelLink" === e[r][1].type ? "link" : "image",
                                start: Object.assign({}, e[r][1].start),
                                end: Object.assign({}, e[e.length - 1][1].end)
                            },
                            c = {
                                type: "label",
                                start: Object.assign({}, e[r][1].start),
                                end: Object.assign({}, e[i][1].end)
                            },
                            s = {
                                type: "labelText",
                                start: Object.assign({}, e[r + u + 2][1].end),
                                end: Object.assign({}, e[i - 2][1].start)
                            };
                        return l = [
                            ["enter", a, t],
                            ["enter", c, t]
                        ], l = (0, h.V)(l, e.slice(r + 1, r + u + 3)), l = (0, h.V)(l, [
                            ["enter", s, t]
                        ]), l = (0, h.V)(l, (0, D.C)(t.parser.constructs.insideSpan.null, e.slice(r + u + 4, i - 3), t)), l = (0, h.V)(l, [
                            ["exit", s, t], e[i - 2], e[i - 1],
                            ["exit", c, t]
                        ]), l = (0, h.V)(l, e.slice(i + 1)), l = (0, h.V)(l, [
                            ["exit", a, t]
                        ]), (0, h.d)(e, r, e.length, l), e
                    },
                    resolveAll: function(e) {
                        let t = -1;
                        for (; ++t < e.length;) {
                            let n = e[t][1];
                            ("labelImage" === n.type || "labelLink" === n.type || "labelEnd" === n.type) && (e.splice(t + 1, "labelImage" === n.type ? 4 : 2), n.type = "data", t++)
                        }
                        return e
                    }
                },
                ee = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), r
                        };

                        function r(t) {
                            return (0, p.z3)(t) ? R(e, i)(t) : i(t)
                        }

                        function i(t) {
                            return 41 === t ? c(t) : I(e, l, o, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t)
                        }

                        function l(t) {
                            return (0, p.z3)(t) ? R(e, u)(t) : c(t)
                        }

                        function o(e) {
                            return n(e)
                        }

                        function u(t) {
                            return 34 === t || 39 === t || 40 === t ? j(e, a, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : c(t)
                        }

                        function a(t) {
                            return (0, p.z3)(t) ? R(e, c)(t) : c(t)
                        }

                        function c(r) {
                            return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r)
                        }
                    }
                },
                et = {
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return M.call(r, e, i, l, "reference", "referenceMarker", "referenceString")(t)
                        };

                        function i(e) {
                            return r.parser.defined.includes((0, B.d)(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e)
                        }

                        function l(e) {
                            return n(e)
                        }
                    }
                },
                en = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), r
                        };

                        function r(r) {
                            return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r)
                        }
                    }
                },
                er = {
                    name: "labelStartImage",
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), i
                        };

                        function i(t) {
                            return 91 === t ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), l) : n(t)
                        }

                        function l(e) {
                            return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
                        }
                    },
                    resolveAll: G.resolveAll
                };
            var ei = n(38600);
            let el = {
                name: "attention",
                tokenize: function(e, t) {
                    let n = this.parser.constructs.attentionMarkers.null,
                        r = this.previous,
                        i = (0, ei.r)(r);
                    return function(l) {
                        return e.enter("attentionSequence"),
                            function o(u) {
                                if (u === l) return e.consume(u), o;
                                let a = e.exit("attentionSequence"),
                                    c = (0, ei.r)(u),
                                    s = !c || 2 === c && i || n.includes(u),
                                    f = !i || 2 === i && c || n.includes(r);
                                return a._open = Boolean(42 === l ? s : s && (i || !f)), a._close = Boolean(42 === l ? f : f && (c || !s)), t(u)
                            }(l)
                    }
                },
                resolveAll: function(e, t) {
                    let n, r, i, l, o, u, a, c, s = -1;
                    for (; ++s < e.length;)
                        if ("enter" === e[s][0] && "attentionSequence" === e[s][1].type && e[s][1]._close) {
                            for (n = s; n--;)
                                if ("exit" === e[n][0] && "attentionSequence" === e[n][1].type && e[n][1]._open && t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[s][1]).charCodeAt(0)) {
                                    if ((e[n][1]._close || e[s][1]._open) && (e[s][1].end.offset - e[s][1].start.offset) % 3 && !((e[n][1].end.offset - e[n][1].start.offset + e[s][1].end.offset - e[s][1].start.offset) % 3)) continue;
                                    u = e[n][1].end.offset - e[n][1].start.offset > 1 && e[s][1].end.offset - e[s][1].start.offset > 1 ? 2 : 1;
                                    let f = Object.assign({}, e[n][1].end),
                                        p = Object.assign({}, e[s][1].start);
                                    eo(f, -u), eo(p, u), l = {
                                        type: u > 1 ? "strongSequence" : "emphasisSequence",
                                        start: f,
                                        end: Object.assign({}, e[n][1].end)
                                    }, o = {
                                        type: u > 1 ? "strongSequence" : "emphasisSequence",
                                        start: Object.assign({}, e[s][1].start),
                                        end: p
                                    }, i = {
                                        type: u > 1 ? "strongText" : "emphasisText",
                                        start: Object.assign({}, e[n][1].end),
                                        end: Object.assign({}, e[s][1].start)
                                    }, r = {
                                        type: u > 1 ? "strong" : "emphasis",
                                        start: Object.assign({}, l.start),
                                        end: Object.assign({}, o.end)
                                    }, e[n][1].end = Object.assign({}, l.start), e[s][1].start = Object.assign({}, o.end), a = [], e[n][1].end.offset - e[n][1].start.offset && (a = (0, h.V)(a, [
                                        ["enter", e[n][1], t],
                                        ["exit", e[n][1], t]
                                    ])), a = (0, h.V)(a, [
                                        ["enter", r, t],
                                        ["enter", l, t],
                                        ["exit", l, t],
                                        ["enter", i, t]
                                    ]), a = (0, h.V)(a, (0, D.C)(t.parser.constructs.insideSpan.null, e.slice(n + 1, s), t)), a = (0, h.V)(a, [
                                        ["exit", i, t],
                                        ["enter", o, t],
                                        ["exit", o, t],
                                        ["exit", r, t]
                                    ]), e[s][1].end.offset - e[s][1].start.offset ? (c = 2, a = (0, h.V)(a, [
                                        ["enter", e[s][1], t],
                                        ["exit", e[s][1], t]
                                    ])) : c = 0, (0, h.d)(e, n - 1, s - n + 3, a), s = n + a.length - c - 2;
                                    break
                                }
                        }
                    for (s = -1; ++s < e.length;) "attentionSequence" === e[s][1].type && (e[s][1].type = "data");
                    return e
                }
            };

            function eo(e, t) {
                e.column += t, e.offset += t, e._bufferIndex += t
            }
            let eu = {
                    name: "labelStartLink",
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), i
                        };

                        function i(e) {
                            return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
                        }
                    },
                    resolveAll: G.resolveAll
                },
                ea = {
                    42: O,
                    43: O,
                    45: O,
                    48: O,
                    49: O,
                    50: O,
                    51: O,
                    52: O,
                    53: O,
                    54: O,
                    55: O,
                    56: O,
                    57: O,
                    62: L
                },
                ec = {
                    91: {
                        name: "definition",
                        tokenize: function(e, t, n) {
                            let r;
                            let i = this;
                            return function(t) {
                                return e.enter("definition"), M.call(i, e, l, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t)
                            };

                            function l(t) {
                                return (r = (0, B.d)(i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1)), 58 === t) ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), o) : n(t)
                            }

                            function o(t) {
                                return (0, p.z3)(t) ? R(e, u)(t) : u(t)
                            }

                            function u(t) {
                                return I(e, a, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t)
                            }

                            function a(t) {
                                return e.attempt(_, c, c)(t)
                            }

                            function c(t) {
                                return (0, p.xz)(t) ? (0, f.f)(e, s, "whitespace")(t) : s(t)
                            }

                            function s(l) {
                                return null === l || (0, p.Ch)(l) ? (e.exit("definition"), i.parser.defined.push(r), t(l)) : n(l)
                            }
                        }
                    }
                },
                es = {
                    [-2]: N,
                    [-1]: N,
                    32: N
                },
                ef = {
                    35: {
                        name: "headingAtx",
                        tokenize: function(e, t, n) {
                            let r = 0;
                            return function(i) {
                                return e.enter("atxHeading"), e.enter("atxHeadingSequence"),
                                    function i(l) {
                                        return 35 === l && r++ < 6 ? (e.consume(l), i) : null === l || (0, p.z3)(l) ? (e.exit("atxHeadingSequence"), function n(r) {
                                            return 35 === r ? (e.enter("atxHeadingSequence"), function t(r) {
                                                return 35 === r ? (e.consume(r), t) : (e.exit("atxHeadingSequence"), n(r))
                                            }(r)) : null === r || (0, p.Ch)(r) ? (e.exit("atxHeading"), t(r)) : (0, p.xz)(r) ? (0, f.f)(e, n, "whitespace")(r) : (e.enter("atxHeadingText"), function t(r) {
                                                return null === r || 35 === r || (0, p.z3)(r) ? (e.exit("atxHeadingText"), n(r)) : (e.consume(r), t)
                                            }(r))
                                        }(l)) : n(l)
                                    }(i)
                            }
                        },
                        resolve: function(e, t) {
                            let n, r, i = e.length - 2,
                                l = 3;
                            return "whitespace" === e[3][1].type && (l += 2), i - 2 > l && "whitespace" === e[i][1].type && (i -= 2), "atxHeadingSequence" === e[i][1].type && (l === i - 1 || i - 4 > l && "whitespace" === e[i - 2][1].type) && (i -= l + 1 === i ? 2 : 4), i > l && (n = {
                                type: "atxHeadingText",
                                start: e[l][1].start,
                                end: e[i][1].end
                            }, r = {
                                type: "chunkText",
                                start: e[l][1].start,
                                end: e[i][1].end,
                                contentType: "text"
                            }, (0, h.d)(e, l, i - l + 1, [
                                ["enter", n, t],
                                ["enter", r, t],
                                ["exit", r, t],
                                ["exit", n, t]
                            ])), e
                        }
                    },
                    42: z,
                    45: [U, z],
                    60: {
                        name: "htmlFlow",
                        tokenize: function(e, t, n) {
                            let r, i, l, o, u;
                            let a = this;
                            return function(t) {
                                return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), c
                            };

                            function c(o) {
                                return 33 === o ? (e.consume(o), s) : 47 === o ? (e.consume(o), i = !0, h) : 63 === o ? (e.consume(o), r = 3, a.interrupt ? t : L) : (0, p.jv)(o) ? (e.consume(o), l = String.fromCharCode(o), m) : n(o)
                            }

                            function s(i) {
                                return 45 === i ? (e.consume(i), r = 2, f) : 91 === i ? (e.consume(i), r = 5, o = 0, d) : (0, p.jv)(i) ? (e.consume(i), r = 4, a.interrupt ? t : L) : n(i)
                            }

                            function f(r) {
                                return 45 === r ? (e.consume(r), a.interrupt ? t : L) : n(r)
                            }

                            function d(r) {
                                let i = "CDATA[";
                                return r === i.charCodeAt(o++) ? (e.consume(r), o === i.length) ? a.interrupt ? t : F : d : n(r)
                            }

                            function h(t) {
                                return (0, p.jv)(t) ? (e.consume(t), l = String.fromCharCode(t), m) : n(t)
                            }

                            function m(o) {
                                if (null === o || 47 === o || 62 === o || (0, p.z3)(o)) {
                                    let u = 47 === o,
                                        c = l.toLowerCase();
                                    return !u && !i && $.includes(c) ? (r = 1, a.interrupt ? t(o) : F(o)) : V.includes(l.toLowerCase()) ? (r = 6, u) ? (e.consume(o), g) : a.interrupt ? t(o) : F(o) : (r = 7, a.interrupt && !a.parser.lazy[a.now().line] ? n(o) : i ? function t(n) {
                                        return (0, p.xz)(n) ? (e.consume(n), t) : C(n)
                                    }(o) : y(o))
                                }
                                return 45 === o || (0, p.H$)(o) ? (e.consume(o), l += String.fromCharCode(o), m) : n(o)
                            }

                            function g(r) {
                                return 62 === r ? (e.consume(r), a.interrupt ? t : F) : n(r)
                            }

                            function y(t) {
                                return 47 === t ? (e.consume(t), C) : 58 === t || 95 === t || (0, p.jv)(t) ? (e.consume(t), b) : (0, p.xz)(t) ? (e.consume(t), y) : C(t)
                            }

                            function b(t) {
                                return 45 === t || 46 === t || 58 === t || 95 === t || (0, p.H$)(t) ? (e.consume(t), b) : k(t)
                            }

                            function k(t) {
                                return 61 === t ? (e.consume(t), x) : (0, p.xz)(t) ? (e.consume(t), k) : y(t)
                            }

                            function x(t) {
                                return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), u = t, v) : (0, p.xz)(t) ? (e.consume(t), x) : function t(n) {
                                    return null === n || 34 === n || 39 === n || 47 === n || 60 === n || 61 === n || 62 === n || 96 === n || (0, p.z3)(n) ? k(n) : (e.consume(n), t)
                                }(t)
                            }

                            function v(t) {
                                return t === u ? (e.consume(t), u = null, S) : null === t || (0, p.Ch)(t) ? n(t) : (e.consume(t), v)
                            }

                            function S(e) {
                                return 47 === e || 62 === e || (0, p.xz)(e) ? y(e) : n(e)
                            }

                            function C(t) {
                                return 62 === t ? (e.consume(t), w) : n(t)
                            }

                            function w(t) {
                                return null === t || (0, p.Ch)(t) ? F(t) : (0, p.xz)(t) ? (e.consume(t), w) : n(t)
                            }

                            function F(t) {
                                return 45 === t && 2 === r ? (e.consume(t), z) : 60 === t && 1 === r ? (e.consume(t), O) : 62 === t && 4 === r ? (e.consume(t), I) : 63 === t && 3 === r ? (e.consume(t), L) : 93 === t && 5 === r ? (e.consume(t), P) : (0, p.Ch)(t) && (6 === r || 7 === r) ? (e.exit("htmlFlowData"), e.check(q, M, E)(t)) : null === t || (0, p.Ch)(t) ? (e.exit("htmlFlowData"), E(t)) : (e.consume(t), F)
                            }

                            function E(t) {
                                return e.check(W, A, M)(t)
                            }

                            function A(t) {
                                return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), D
                            }

                            function D(t) {
                                return null === t || (0, p.Ch)(t) ? E(t) : (e.enter("htmlFlowData"), F(t))
                            }

                            function z(t) {
                                return 45 === t ? (e.consume(t), L) : F(t)
                            }

                            function O(t) {
                                return 47 === t ? (e.consume(t), l = "", T) : F(t)
                            }

                            function T(t) {
                                if (62 === t) {
                                    let n = l.toLowerCase();
                                    return $.includes(n) ? (e.consume(t), I) : F(t)
                                }
                                return (0, p.jv)(t) && l.length < 8 ? (e.consume(t), l += String.fromCharCode(t), T) : F(t)
                            }

                            function P(t) {
                                return 93 === t ? (e.consume(t), L) : F(t)
                            }

                            function L(t) {
                                return 62 === t ? (e.consume(t), I) : 45 === t && 2 === r ? (e.consume(t), L) : F(t)
                            }

                            function I(t) {
                                return null === t || (0, p.Ch)(t) ? (e.exit("htmlFlowData"), M(t)) : (e.consume(t), I)
                            }

                            function M(n) {
                                return e.exit("htmlFlow"), t(n)
                            }
                        },
                        resolveTo: function(e) {
                            let t = e.length;
                            for (; t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type););
                            return t > 1 && "linePrefix" === e[t - 2][1].type && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e
                        },
                        concrete: !0
                    },
                    61: U,
                    95: z,
                    96: Y,
                    126: Y
                },
                ep = {
                    38: K,
                    92: Z
                },
                ed = {
                    [-5]: J,
                    [-4]: J,
                    [-3]: J,
                    33: er,
                    38: K,
                    42: el,
                    60: [{
                        name: "autolink",
                        tokenize: function(e, t, n) {
                            let r = 0;
                            return function(t) {
                                return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), i
                            };

                            function i(t) {
                                return (0, p.jv)(t) ? (e.consume(t), l) : u(t)
                            }

                            function l(t) {
                                return 43 === t || 45 === t || 46 === t || (0, p.H$)(t) ? (r = 1, function t(n) {
                                    return 58 === n ? (e.consume(n), r = 0, o) : (43 === n || 45 === n || 46 === n || (0, p.H$)(n)) && r++ < 32 ? (e.consume(n), t) : (r = 0, u(n))
                                }(t)) : u(t)
                            }

                            function o(r) {
                                return 62 === r ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : null === r || 32 === r || 60 === r || (0, p.Av)(r) ? n(r) : (e.consume(r), o)
                            }

                            function u(t) {
                                return 64 === t ? (e.consume(t), a) : (0, p.n9)(t) ? (e.consume(t), u) : n(t)
                            }

                            function a(i) {
                                return (0, p.H$)(i) ? function i(l) {
                                    return 46 === l ? (e.consume(l), r = 0, a) : 62 === l ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(l), e.exit("autolinkMarker"), e.exit("autolink"), t) : function t(l) {
                                        return (45 === l || (0, p.H$)(l)) && r++ < 63 ? (e.consume(l), 45 === l ? t : i) : n(l)
                                    }(l)
                                }(i) : n(i)
                            }
                        }
                    }, {
                        name: "htmlText",
                        tokenize: function(e, t, n) {
                            let r, i, l;
                            let o = this;
                            return function(t) {
                                return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), u
                            };

                            function u(t) {
                                return 33 === t ? (e.consume(t), a) : 47 === t ? (e.consume(t), S) : 63 === t ? (e.consume(t), x) : (0, p.jv)(t) ? (e.consume(t), w) : n(t)
                            }

                            function a(t) {
                                return 45 === t ? (e.consume(t), c) : 91 === t ? (e.consume(t), i = 0, m) : (0, p.jv)(t) ? (e.consume(t), k) : n(t)
                            }

                            function c(t) {
                                return 45 === t ? (e.consume(t), h) : n(t)
                            }

                            function s(t) {
                                return null === t ? n(t) : 45 === t ? (e.consume(t), d) : (0, p.Ch)(t) ? (l = s, P(t)) : (e.consume(t), s)
                            }

                            function d(t) {
                                return 45 === t ? (e.consume(t), h) : s(t)
                            }

                            function h(e) {
                                return 62 === e ? T(e) : 45 === e ? d(e) : s(e)
                            }

                            function m(t) {
                                let r = "CDATA[";
                                return t === r.charCodeAt(i++) ? (e.consume(t), i === r.length ? g : m) : n(t)
                            }

                            function g(t) {
                                return null === t ? n(t) : 93 === t ? (e.consume(t), y) : (0, p.Ch)(t) ? (l = g, P(t)) : (e.consume(t), g)
                            }

                            function y(t) {
                                return 93 === t ? (e.consume(t), b) : g(t)
                            }

                            function b(t) {
                                return 62 === t ? T(t) : 93 === t ? (e.consume(t), b) : g(t)
                            }

                            function k(t) {
                                return null === t || 62 === t ? T(t) : (0, p.Ch)(t) ? (l = k, P(t)) : (e.consume(t), k)
                            }

                            function x(t) {
                                return null === t ? n(t) : 63 === t ? (e.consume(t), v) : (0, p.Ch)(t) ? (l = x, P(t)) : (e.consume(t), x)
                            }

                            function v(e) {
                                return 62 === e ? T(e) : x(e)
                            }

                            function S(t) {
                                return (0, p.jv)(t) ? (e.consume(t), C) : n(t)
                            }

                            function C(t) {
                                return 45 === t || (0, p.H$)(t) ? (e.consume(t), C) : function t(n) {
                                    return (0, p.Ch)(n) ? (l = t, P(n)) : (0, p.xz)(n) ? (e.consume(n), t) : T(n)
                                }(t)
                            }

                            function w(t) {
                                return 45 === t || (0, p.H$)(t) ? (e.consume(t), w) : 47 === t || 62 === t || (0, p.z3)(t) ? F(t) : n(t)
                            }

                            function F(t) {
                                return 47 === t ? (e.consume(t), T) : 58 === t || 95 === t || (0, p.jv)(t) ? (e.consume(t), E) : (0, p.Ch)(t) ? (l = F, P(t)) : (0, p.xz)(t) ? (e.consume(t), F) : T(t)
                            }

                            function E(t) {
                                return 45 === t || 46 === t || 58 === t || 95 === t || (0, p.H$)(t) ? (e.consume(t), E) : function t(n) {
                                    return 61 === n ? (e.consume(n), A) : (0, p.Ch)(n) ? (l = t, P(n)) : (0, p.xz)(n) ? (e.consume(n), t) : F(n)
                                }(t)
                            }

                            function A(t) {
                                return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), r = t, D) : (0, p.Ch)(t) ? (l = A, P(t)) : (0, p.xz)(t) ? (e.consume(t), A) : (e.consume(t), z)
                            }

                            function D(t) {
                                return t === r ? (e.consume(t), r = void 0, O) : null === t ? n(t) : (0, p.Ch)(t) ? (l = D, P(t)) : (e.consume(t), D)
                            }

                            function z(t) {
                                return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 47 === t || 62 === t || (0, p.z3)(t) ? F(t) : (e.consume(t), z)
                            }

                            function O(e) {
                                return 47 === e || 62 === e || (0, p.z3)(e) ? F(e) : n(e)
                            }

                            function T(r) {
                                return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r)
                            }

                            function P(t) {
                                return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), L
                            }

                            function L(t) {
                                return (0, p.xz)(t) ? (0, f.f)(e, I, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : I(t)
                            }

                            function I(t) {
                                return e.enter("htmlTextData"), l(t)
                            }
                        }
                    }],
                    91: eu,
                    92: [{
                        name: "hardBreakEscape",
                        tokenize: function(e, t, n) {
                            return function(t) {
                                return e.enter("hardBreakEscape"), e.consume(t), r
                            };

                            function r(r) {
                                return (0, p.Ch)(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r)
                            }
                        }
                    }, Z],
                    93: G,
                    95: el,
                    96: {
                        name: "codeText",
                        tokenize: function(e, t, n) {
                            let r, i, l = 0;
                            return function(t) {
                                return e.enter("codeText"), e.enter("codeTextSequence"),
                                    function t(n) {
                                        return 96 === n ? (e.consume(n), l++, t) : (e.exit("codeTextSequence"), o(n))
                                    }(t)
                            };

                            function o(a) {
                                return null === a ? n(a) : 32 === a ? (e.enter("space"), e.consume(a), e.exit("space"), o) : 96 === a ? (i = e.enter("codeTextSequence"), r = 0, function n(o) {
                                    return 96 === o ? (e.consume(o), r++, n) : r === l ? (e.exit("codeTextSequence"), e.exit("codeText"), t(o)) : (i.type = "codeTextData", u(o))
                                }(a)) : (0, p.Ch)(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), o) : (e.enter("codeTextData"), u(a))
                            }

                            function u(t) {
                                return null === t || 32 === t || 96 === t || (0, p.Ch)(t) ? (e.exit("codeTextData"), o(t)) : (e.consume(t), u)
                            }
                        },
                        resolve: function(e) {
                            let t, n, r = e.length - 4,
                                i = 3;
                            if (("lineEnding" === e[3][1].type || "space" === e[i][1].type) && ("lineEnding" === e[r][1].type || "space" === e[r][1].type)) {
                                for (t = i; ++t < r;)
                                    if ("codeTextData" === e[t][1].type) {
                                        e[i][1].type = "codeTextPadding", e[r][1].type = "codeTextPadding", i += 2, r -= 2;
                                        break
                                    }
                            }
                            for (t = i - 1, r++; ++t <= r;) void 0 === n ? t !== r && "lineEnding" !== e[t][1].type && (n = t) : (t === r || "lineEnding" === e[t][1].type) && (e[n][1].type = "codeTextData", t !== n + 2 && (e[n][1].end = e[t - 1][1].end, e.splice(n + 2, t - n - 2), r -= t - n - 2, t = n + 2), n = void 0);
                            return e
                        },
                        previous: function(e) {
                            return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type
                        }
                    }
                },
                eh = {
                    null: [el, S]
                },
                em = {
                    null: [42, 95]
                },
                eg = {
                    null: []
                },
                ey = /[\0\t\n\r]/g;
            var eb = n(13809),
                ek = n(83531),
                ex = n(21262);
            let ev = {}.hasOwnProperty,
                eS = function(e, t, n) {
                    let i, l, o, c;
                    return "string" != typeof t && (n = t, t = void 0), (function(e) {
                        let t = {
                            transforms: [],
                            canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
                            enter: {
                                autolink: l(v),
                                autolinkProtocol: d,
                                autolinkEmail: d,
                                atxHeading: l(b),
                                blockQuote: l(function() {
                                    return {
                                        type: "blockquote",
                                        children: []
                                    }
                                }),
                                characterEscape: d,
                                characterReference: d,
                                codeFenced: l(y),
                                codeFencedFenceInfo: o,
                                codeFencedFenceMeta: o,
                                codeIndented: l(y, o),
                                codeText: l(function() {
                                    return {
                                        type: "inlineCode",
                                        value: ""
                                    }
                                }, o),
                                codeTextData: d,
                                data: d,
                                codeFlowValue: d,
                                definition: l(function() {
                                    return {
                                        type: "definition",
                                        identifier: "",
                                        label: null,
                                        title: null,
                                        url: ""
                                    }
                                }),
                                definitionDestinationString: o,
                                definitionLabelString: o,
                                definitionTitleString: o,
                                emphasis: l(function() {
                                    return {
                                        type: "emphasis",
                                        children: []
                                    }
                                }),
                                hardBreakEscape: l(k),
                                hardBreakTrailing: l(k),
                                htmlFlow: l(x, o),
                                htmlFlowData: d,
                                htmlText: l(x, o),
                                htmlTextData: d,
                                image: l(function() {
                                    return {
                                        type: "image",
                                        title: null,
                                        url: "",
                                        alt: null
                                    }
                                }),
                                label: o,
                                link: l(v),
                                listItem: l(function(e) {
                                    return {
                                        type: "listItem",
                                        spread: e._spread,
                                        checked: null,
                                        children: []
                                    }
                                }),
                                listItemValue: function(e) {
                                    if (n.expectingFirstListItemValue) {
                                        let t = this.stack[this.stack.length - 2];
                                        t.start = Number.parseInt(this.sliceSerialize(e), 10), n.expectingFirstListItemValue = void 0
                                    }
                                },
                                listOrdered: l(S, function() {
                                    n.expectingFirstListItemValue = !0
                                }),
                                listUnordered: l(S),
                                paragraph: l(function() {
                                    return {
                                        type: "paragraph",
                                        children: []
                                    }
                                }),
                                reference: function() {
                                    n.referenceType = "collapsed"
                                },
                                referenceString: o,
                                resourceDestinationString: o,
                                resourceTitleString: o,
                                setextHeading: l(b),
                                strong: l(function() {
                                    return {
                                        type: "strong",
                                        children: []
                                    }
                                }),
                                thematicBreak: l(function() {
                                    return {
                                        type: "thematicBreak"
                                    }
                                })
                            },
                            exit: {
                                atxHeading: s(),
                                atxHeadingSequence: function(e) {
                                    let t = this.stack[this.stack.length - 1];
                                    if (!t.depth) {
                                        let n = this.sliceSerialize(e).length;
                                        t.depth = n
                                    }
                                },
                                autolink: s(),
                                autolinkEmail: function(e) {
                                    h.call(this, e);
                                    let t = this.stack[this.stack.length - 1];
                                    t.url = "mailto:" + this.sliceSerialize(e)
                                },
                                autolinkProtocol: function(e) {
                                    h.call(this, e);
                                    let t = this.stack[this.stack.length - 1];
                                    t.url = this.sliceSerialize(e)
                                },
                                blockQuote: s(),
                                characterEscapeValue: h,
                                characterReferenceMarkerHexadecimal: g,
                                characterReferenceMarkerNumeric: g,
                                characterReferenceValue: function(e) {
                                    let t;
                                    let r = this.sliceSerialize(e),
                                        i = n.characterReferenceType;
                                    if (i) t = (0, eb.o)(r, "characterReferenceMarkerNumeric" === i ? 10 : 16), n.characterReferenceType = void 0;
                                    else {
                                        let e = (0, X.T)(r);
                                        t = e
                                    }
                                    let l = this.stack.pop();
                                    l.value += t, l.position.end = eC(e.end)
                                },
                                codeFenced: s(function() {
                                    let e = this.resume(),
                                        t = this.stack[this.stack.length - 1];
                                    t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), n.flowCodeInside = void 0
                                }),
                                codeFencedFence: function() {
                                    !n.flowCodeInside && (this.buffer(), n.flowCodeInside = !0)
                                },
                                codeFencedFenceInfo: function() {
                                    let e = this.resume(),
                                        t = this.stack[this.stack.length - 1];
                                    t.lang = e
                                },
                                codeFencedFenceMeta: function() {
                                    let e = this.resume(),
                                        t = this.stack[this.stack.length - 1];
                                    t.meta = e
                                },
                                codeFlowValue: h,
                                codeIndented: s(function() {
                                    let e = this.resume(),
                                        t = this.stack[this.stack.length - 1];
                                    t.value = e.replace(/(\r?\n|\r)$/g, "")
                                }),
                                codeText: s(function() {
                                    let e = this.resume(),
                                        t = this.stack[this.stack.length - 1];
                                    t.value = e
                                }),
                                codeTextData: h,
                                data: h,
                                definition: s(),
                                definitionDestinationString: function() {
                                    let e = this.resume(),
                                        t = this.stack[this.stack.length - 1];
                                    t.url = e
                                },
                                definitionLabelString: function(e) {
                                    let t = this.resume(),
                                        n = this.stack[this.stack.length - 1];
                                    n.label = t, n.identifier = (0, B.d)(this.sliceSerialize(e)).toLowerCase()
                                },
                                definitionTitleString: function() {
                                    let e = this.resume(),
                                        t = this.stack[this.stack.length - 1];
                                    t.title = e
                                },
                                emphasis: s(),
                                hardBreakEscape: s(m),
                                hardBreakTrailing: s(m),
                                htmlFlow: s(function() {
                                    let e = this.resume(),
                                        t = this.stack[this.stack.length - 1];
                                    t.value = e
                                }),
                                htmlFlowData: h,
                                htmlText: s(function() {
                                    let e = this.resume(),
                                        t = this.stack[this.stack.length - 1];
                                    t.value = e
                                }),
                                htmlTextData: h,
                                image: s(function() {
                                    let e = this.stack[this.stack.length - 1];
                                    if (n.inReference) {
                                        let t = n.referenceType || "shortcut";
                                        e.type += "Reference", e.referenceType = t, delete e.url, delete e.title
                                    } else delete e.identifier, delete e.label;
                                    n.referenceType = void 0
                                }),
                                label: function() {
                                    let e = this.stack[this.stack.length - 1],
                                        t = this.resume(),
                                        r = this.stack[this.stack.length - 1];
                                    if (n.inReference = !0, "link" === r.type) {
                                        let t = e.children;
                                        r.children = t
                                    } else r.alt = t
                                },
                                labelText: function(e) {
                                    let t = this.sliceSerialize(e),
                                        n = this.stack[this.stack.length - 2];
                                    n.label = (0, ek.v)(t), n.identifier = (0, B.d)(t).toLowerCase()
                                },
                                lineEnding: function(e) {
                                    let r = this.stack[this.stack.length - 1];
                                    if (n.atHardBreak) {
                                        let t = r.children[r.children.length - 1];
                                        t.position.end = eC(e.end), n.atHardBreak = void 0;
                                        return
                                    }!n.setextHeadingSlurpLineEnding && t.canContainEols.includes(r.type) && (d.call(this, e), h.call(this, e))
                                },
                                link: s(function() {
                                    let e = this.stack[this.stack.length - 1];
                                    if (n.inReference) {
                                        let t = n.referenceType || "shortcut";
                                        e.type += "Reference", e.referenceType = t, delete e.url, delete e.title
                                    } else delete e.identifier, delete e.label;
                                    n.referenceType = void 0
                                }),
                                listItem: s(),
                                listOrdered: s(),
                                listUnordered: s(),
                                paragraph: s(),
                                referenceString: function(e) {
                                    let t = this.resume(),
                                        r = this.stack[this.stack.length - 1];
                                    r.label = t, r.identifier = (0, B.d)(this.sliceSerialize(e)).toLowerCase(), n.referenceType = "full"
                                },
                                resourceDestinationString: function() {
                                    let e = this.resume(),
                                        t = this.stack[this.stack.length - 1];
                                    t.url = e
                                },
                                resourceTitleString: function() {
                                    let e = this.resume(),
                                        t = this.stack[this.stack.length - 1];
                                    t.title = e
                                },
                                resource: function() {
                                    n.inReference = void 0
                                },
                                setextHeading: s(function() {
                                    n.setextHeadingSlurpLineEnding = void 0
                                }),
                                setextHeadingLineSequence: function(e) {
                                    let t = this.stack[this.stack.length - 1];
                                    t.depth = 61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2
                                },
                                setextHeadingText: function() {
                                    n.setextHeadingSlurpLineEnding = !0
                                },
                                strong: s(),
                                thematicBreak: s()
                            }
                        };
                        ! function e(t, n) {
                            let r = -1;
                            for (; ++r < n.length;) {
                                let i = n[r];
                                Array.isArray(i) ? e(t, i) : function(e, t) {
                                    let n;
                                    for (n in t)
                                        if (ev.call(t, n)) {
                                            if ("canContainEols" === n) {
                                                let r = t[n];
                                                r && e[n].push(...r)
                                            } else if ("transforms" === n) {
                                                let r = t[n];
                                                r && e[n].push(...r)
                                            } else if ("enter" === n || "exit" === n) {
                                                let r = t[n];
                                                r && Object.assign(e[n], r)
                                            }
                                        }
                                }(t, i)
                            }
                        }(t, (e || {}).mdastExtensions || []);
                        let n = {};
                        return function(e) {
                            let n = {
                                    type: "root",
                                    children: []
                                },
                                l = {
                                    stack: [n],
                                    tokenStack: [],
                                    config: t,
                                    enter: c,
                                    exit: f,
                                    buffer: o,
                                    resume: p,
                                    setData: r,
                                    getData: i
                                },
                                u = [],
                                a = -1;
                            for (; ++a < e.length;)
                                if ("listOrdered" === e[a][1].type || "listUnordered" === e[a][1].type) {
                                    if ("enter" === e[a][0]) u.push(a);
                                    else {
                                        let t = u.pop();
                                        a = function(e, t, n) {
                                            let r, i, l, o, u = t - 1,
                                                a = -1,
                                                c = !1;
                                            for (; ++u <= n;) {
                                                let t = e[u];
                                                if ("listUnordered" === t[1].type || "listOrdered" === t[1].type || "blockQuote" === t[1].type ? ("enter" === t[0] ? a++ : a--, o = void 0) : "lineEndingBlank" === t[1].type ? "enter" === t[0] && (!r || o || a || l || (l = u), o = void 0) : "linePrefix" === t[1].type || "listItemValue" === t[1].type || "listItemMarker" === t[1].type || "listItemPrefix" === t[1].type || "listItemPrefixWhitespace" === t[1].type || (o = void 0), !a && "enter" === t[0] && "listItemPrefix" === t[1].type || -1 === a && "exit" === t[0] && ("listUnordered" === t[1].type || "listOrdered" === t[1].type)) {
                                                    if (r) {
                                                        let o = u;
                                                        for (i = void 0; o--;) {
                                                            let t = e[o];
                                                            if ("lineEnding" === t[1].type || "lineEndingBlank" === t[1].type) {
                                                                if ("exit" === t[0]) continue;
                                                                i && (e[i][1].type = "lineEndingBlank", c = !0), t[1].type = "lineEnding", i = o
                                                            } else if ("linePrefix" === t[1].type || "blockQuotePrefix" === t[1].type || "blockQuotePrefixWhitespace" === t[1].type || "blockQuoteMarker" === t[1].type || "listItemIndent" === t[1].type);
                                                            else break
                                                        }
                                                        l && (!i || l < i) && (r._spread = !0), r.end = Object.assign({}, i ? e[i][1].start : t[1].end), e.splice(i || u, 0, ["exit", r, t[2]]), u++, n++
                                                    }
                                                    "listItemPrefix" === t[1].type && (r = {
                                                        type: "listItem",
                                                        _spread: !1,
                                                        start: Object.assign({}, t[1].start),
                                                        end: void 0
                                                    }, e.splice(u, 0, ["enter", r, t[2]]), u++, n++, l = void 0, o = !0)
                                                }
                                            }
                                            return e[t][1]._spread = c, n
                                        }(e, t, a)
                                    }
                                }
                            for (a = -1; ++a < e.length;) {
                                let n = t[e[a][0]];
                                ev.call(n, e[a][1].type) && n[e[a][1].type].call(Object.assign({
                                    sliceSerialize: e[a][2].sliceSerialize
                                }, l), e[a][1])
                            }
                            if (l.tokenStack.length > 0) {
                                let e = l.tokenStack[l.tokenStack.length - 1],
                                    t = e[1] || ew;
                                t.call(l, void 0, e[0])
                            }
                            for (n.position = {
                                    start: eC(e.length > 0 ? e[0][1].start : {
                                        line: 1,
                                        column: 1,
                                        offset: 0
                                    }),
                                    end: eC(e.length > 0 ? e[e.length - 2][1].end : {
                                        line: 1,
                                        column: 1,
                                        offset: 0
                                    })
                                }, a = -1; ++a < t.transforms.length;) n = t.transforms[a](n) || n;
                            return n
                        };

                        function r(e, t) {
                            n[e] = t
                        }

                        function i(e) {
                            return n[e]
                        }

                        function l(e, t) {
                            return function(n) {
                                c.call(this, e(n), n), t && t.call(this, n)
                            }
                        }

                        function o() {
                            this.stack.push({
                                type: "fragment",
                                children: []
                            })
                        }

                        function c(e, t, n) {
                            let r = this.stack[this.stack.length - 1];
                            return r.children.push(e), this.stack.push(e), this.tokenStack.push([t, n]), e.position = {
                                start: eC(t.start)
                            }, e
                        }

                        function s(e) {
                            return function(t) {
                                e && e.call(this, t), f.call(this, t)
                            }
                        }

                        function f(e, t) {
                            let n = this.stack.pop(),
                                r = this.tokenStack.pop();
                            if (r) {
                                if (r[0].type !== e.type) {
                                    if (t) t.call(this, e, r[0]);
                                    else {
                                        let t = r[1] || ew;
                                        t.call(this, e, r[0])
                                    }
                                }
                            } else throw Error("Cannot close `" + e.type + "` (" + (0, ex.y)({
                                start: e.start,
                                end: e.end
                            }) + "): it’s not open");
                            return n.position.end = eC(e.end), n
                        }

                        function p() {
                            return function(e, t) {
                                let n = "boolean" != typeof u.includeImageAlt || u.includeImageAlt,
                                    r = "boolean" != typeof u.includeHtml || u.includeHtml;
                                return a(e, n, r)
                            }(this.stack.pop())
                        }

                        function d(e) {
                            let t = this.stack[this.stack.length - 1],
                                n = t.children[t.children.length - 1];
                            n && "text" === n.type || ((n = {
                                type: "text",
                                value: ""
                            }).position = {
                                start: eC(e.start)
                            }, t.children.push(n)), this.stack.push(n)
                        }

                        function h(e) {
                            let t = this.stack.pop();
                            t.value += this.sliceSerialize(e), t.position.end = eC(e.end)
                        }

                        function m() {
                            n.atHardBreak = !0
                        }

                        function g(e) {
                            var t;
                            t = e.type, n.characterReferenceType = t
                        }

                        function y() {
                            return {
                                type: "code",
                                lang: null,
                                meta: null,
                                value: ""
                            }
                        }

                        function b() {
                            return {
                                type: "heading",
                                depth: void 0,
                                children: []
                            }
                        }

                        function k() {
                            return {
                                type: "break"
                            }
                        }

                        function x() {
                            return {
                                type: "html",
                                value: ""
                            }
                        }

                        function v() {
                            return {
                                type: "link",
                                title: null,
                                url: "",
                                children: []
                            }
                        }

                        function S(e) {
                            return {
                                type: "list",
                                ordered: "listOrdered" === e.type,
                                start: null,
                                spread: e._spread,
                                children: []
                            }
                        }
                    })(n)(function(e) {
                        for (; !b(e););
                        return e
                    }((function(e) {
                        let t = (0, s.W)([r, ...(e || {}).extensions || []]),
                            n = {
                                defined: [],
                                lazy: {},
                                constructs: t,
                                content: i(d),
                                document: i(m),
                                flow: i(v),
                                string: i(C),
                                text: i(w)
                            };
                        return n;

                        function i(e) {
                            return function(t) {
                                return function(e, t, n) {
                                    let r = Object.assign(n ? Object.assign({}, n) : {
                                            line: 1,
                                            column: 1,
                                            offset: 0
                                        }, {
                                            _index: 0,
                                            _bufferIndex: -1
                                        }),
                                        i = {},
                                        l = [],
                                        o = [],
                                        u = [],
                                        a = {
                                            consume: function(e) {
                                                (0, p.Ch)(e) ? (r.line++, r.column = 1, r.offset += -3 === e ? 2 : 1, b()) : -1 !== e && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), c.previous = e
                                            },
                                            enter: function(e, t) {
                                                let n = t || {};
                                                return n.type = e, n.start = d(), c.events.push(["enter", n, c]), u.push(n), n
                                            },
                                            exit: function(e) {
                                                let t = u.pop();
                                                return t.end = d(), c.events.push(["exit", t, c]), t
                                            },
                                            attempt: g(function(e, t) {
                                                y(e, t.from)
                                            }),
                                            check: g(m),
                                            interrupt: g(m, {
                                                interrupt: !0
                                            })
                                        },
                                        c = {
                                            previous: null,
                                            code: null,
                                            containerState: {},
                                            events: [],
                                            parser: e,
                                            sliceStream: f,
                                            sliceSerialize: function(e, t) {
                                                return function(e, t) {
                                                    let n, r = -1,
                                                        i = [];
                                                    for (; ++r < e.length;) {
                                                        let l;
                                                        let o = e[r];
                                                        if ("string" == typeof o) l = o;
                                                        else switch (o) {
                                                            case -5:
                                                                l = "\r";
                                                                break;
                                                            case -4:
                                                                l = "\n";
                                                                break;
                                                            case -3:
                                                                l = "\r\n";
                                                                break;
                                                            case -2:
                                                                l = t ? " " : "	";
                                                                break;
                                                            case -1:
                                                                if (!t && n) continue;
                                                                l = " ";
                                                                break;
                                                            default:
                                                                l = String.fromCharCode(o)
                                                        }
                                                        n = -2 === o, i.push(l)
                                                    }
                                                    return i.join("")
                                                }(f(e), t)
                                            },
                                            now: d,
                                            defineSkip: function(e) {
                                                i[e.line] = e.column, b()
                                            },
                                            write: function(e) {
                                                return (o = (0, h.V)(o, e), function() {
                                                    let e;
                                                    for (; r._index < o.length;) {
                                                        var t;
                                                        let n = o[r._index];
                                                        if ("string" == typeof n)
                                                            for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < n.length;) s = s(n.charCodeAt(r._bufferIndex));
                                                        else s = s(n)
                                                    }
                                                }(), null !== o[o.length - 1]) ? [] : (y(t, 0), c.events = (0, D.C)(l, c.events, c), c.events)
                                            }
                                        },
                                        s = t.tokenize.call(c, a);
                                    return t.resolveAll && l.push(t), c;

                                    function f(e) {
                                        return function(e, t) {
                                            let n;
                                            let r = t.start._index,
                                                i = t.start._bufferIndex,
                                                l = t.end._index,
                                                o = t.end._bufferIndex;
                                            if (r === l) n = [e[r].slice(i, o)];
                                            else {
                                                if (n = e.slice(r, l), i > -1) {
                                                    let e = n[0];
                                                    "string" == typeof e ? n[0] = e.slice(i) : n.shift()
                                                }
                                                o > 0 && n.push(e[l].slice(0, o))
                                            }
                                            return n
                                        }(o, e)
                                    }

                                    function d() {
                                        let {
                                            line: e,
                                            column: t,
                                            offset: n,
                                            _index: i,
                                            _bufferIndex: l
                                        } = r;
                                        return {
                                            line: e,
                                            column: t,
                                            offset: n,
                                            _index: i,
                                            _bufferIndex: l
                                        }
                                    }

                                    function m(e, t) {
                                        t.restore()
                                    }

                                    function g(e, t) {
                                        return function(n, i, l) {
                                            let o, s, f, p;
                                            return Array.isArray(n) ? h(n) : "tokenize" in n ? h([n]) : function(e) {
                                                let t = null !== e && n[e],
                                                    r = null !== e && n.null,
                                                    i = [...Array.isArray(t) ? t : t ? [t] : [], ...Array.isArray(r) ? r : r ? [r] : []];
                                                return h(i)(e)
                                            };

                                            function h(e) {
                                                return (o = e, s = 0, 0 === e.length) ? l : m(e[s])
                                            }

                                            function m(e) {
                                                return function(n) {
                                                    return (p = function() {
                                                        let e = d(),
                                                            t = c.previous,
                                                            n = c.currentConstruct,
                                                            i = c.events.length,
                                                            l = Array.from(u);
                                                        return {
                                                            restore: function() {
                                                                r = e, c.previous = t, c.currentConstruct = n, c.events.length = i, u = l, b()
                                                            },
                                                            from: i
                                                        }
                                                    }(), f = e, e.partial || (c.currentConstruct = e), e.name && c.parser.constructs.disable.null.includes(e.name)) ? y(n) : e.tokenize.call(t ? Object.assign(Object.create(c), t) : c, a, g, y)(n)
                                                }
                                            }

                                            function g(t) {
                                                return e(f, p), i
                                            }

                                            function y(e) {
                                                return (p.restore(), ++s < o.length) ? m(o[s]) : l
                                            }
                                        }
                                    }

                                    function y(e, t) {
                                        e.resolveAll && !l.includes(e) && l.push(e), e.resolve && (0, h.d)(c.events, t, c.events.length - t, e.resolve(c.events.slice(t), c)), e.resolveTo && (c.events = e.resolveTo(c.events, c))
                                    }

                                    function b() {
                                        r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1)
                                    }
                                }(n, e, t)
                            }
                        }
                    })(n).document().write((l = 1, o = "", c = !0, function(e, t, n) {
                        let r, u, a, s, f;
                        let p = [];
                        for (e = o + e.toString(t), a = 0, o = "", c && (65279 === e.charCodeAt(0) && a++, c = void 0); a < e.length;) {
                            if (ey.lastIndex = a, s = (r = ey.exec(e)) && void 0 !== r.index ? r.index : e.length, f = e.charCodeAt(s), !r) {
                                o = e.slice(a);
                                break
                            }
                            if (10 === f && a === s && i) p.push(-3), i = void 0;
                            else switch (i && (p.push(-5), i = void 0), a < s && (p.push(e.slice(a, s)), l += s - a), f) {
                                case 0:
                                    p.push(65533), l++;
                                    break;
                                case 9:
                                    for (u = 4 * Math.ceil(l / 4), p.push(-2); l++ < u;) p.push(-1);
                                    break;
                                case 10:
                                    p.push(-4), l = 1;
                                    break;
                                default:
                                    i = !0, l = 1
                            }
                            a = s + 1
                        }
                        return n && (i && p.push(-5), o && p.push(o), p.push(null)), p
                    })(e, t, !0))))
                };

            function eC(e) {
                return {
                    line: e.line,
                    column: e.column,
                    offset: e.offset
                }
            }

            function ew(e, t) {
                if (e) throw Error("Cannot close `" + e.type + "` (" + (0, ex.y)({
                    start: e.start,
                    end: e.end
                }) + "): a different token (`" + t.type + "`, " + (0, ex.y)({
                    start: t.start,
                    end: t.end
                }) + ") is open");
                throw Error("Cannot close document, a token (`" + t.type + "`, " + (0, ex.y)({
                    start: t.start,
                    end: t.end
                }) + ") is still open")
            }

            function eF(e) {
                let t = t => {
                    let n = this.data("settings");
                    return eS(t, Object.assign({}, n, e, {
                        extensions: this.data("micromarkExtensions") || [],
                        mdastExtensions: this.data("fromMarkdownExtensions") || []
                    }))
                };
                Object.assign(this, {
                    Parser: t
                })
            }

            function eE(e) {
                let t = [],
                    n = -1,
                    r = 0,
                    i = 0;
                for (; ++n < e.length;) {
                    let l = e.charCodeAt(n),
                        o = "";
                    if (37 === l && (0, p.H$)(e.charCodeAt(n + 1)) && (0, p.H$)(e.charCodeAt(n + 2))) i = 2;
                    else if (l < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l)) || (o = String.fromCharCode(l));
                    else if (l > 55295 && l < 57344) {
                        let t = e.charCodeAt(n + 1);
                        l < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(l, t), i = 1) : o = "�"
                    } else o = String.fromCharCode(l);
                    o && (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, o = ""), i && (n += i, i = 0)
                }
                return t.join("") + e.slice(r)
            }
            var eA = n(65402),
                eD = n(36036);
            let ez = {}.hasOwnProperty;

            function eO(e) {
                return String(e || "").toUpperCase()
            }

            function eT(e, t) {
                let n;
                let r = String(t.identifier).toUpperCase(),
                    i = eE(r.toLowerCase()),
                    l = e.footnoteOrder.indexOf(r); - 1 === l ? (e.footnoteOrder.push(r), e.footnoteCounts[r] = 1, n = e.footnoteOrder.length) : (e.footnoteCounts[r]++, n = l + 1);
                let o = e.footnoteCounts[r],
                    u = {
                        type: "element",
                        tagName: "a",
                        properties: {
                            href: "#" + e.clobberPrefix + "fn-" + i,
                            id: e.clobberPrefix + "fnref-" + i + (o > 1 ? "-" + o : ""),
                            dataFootnoteRef: !0,
                            ariaDescribedBy: ["footnote-label"]
                        },
                        children: [{
                            type: "text",
                            value: String(n)
                        }]
                    };
                e.patch(t, u);
                let a = {
                    type: "element",
                    tagName: "sup",
                    properties: {},
                    children: [u]
                };
                return e.patch(t, a), e.applyData(t, a)
            }

            function eP(e, t) {
                let n = t.referenceType,
                    r = "]";
                if ("collapsed" === n ? r += "[]" : "full" === n && (r += "[" + (t.label || t.identifier) + "]"), "imageReference" === t.type) return {
                    type: "text",
                    value: "![" + t.alt + r
                };
                let i = e.all(t),
                    l = i[0];
                l && "text" === l.type ? l.value = "[" + l.value : i.unshift({
                    type: "text",
                    value: "["
                });
                let o = i[i.length - 1];
                return o && "text" === o.type ? o.value += r : i.push({
                    type: "text",
                    value: r
                }), i
            }

            function eL(e) {
                let t = e.spread;
                return null == t ? e.children.length > 1 : t
            }

            function eI(e, t, n) {
                let r = 0,
                    i = e.length;
                if (t) {
                    let t = e.codePointAt(r);
                    for (; 9 === t || 32 === t;) r++, t = e.codePointAt(r)
                }
                if (n) {
                    let t = e.codePointAt(i - 1);
                    for (; 9 === t || 32 === t;) i--, t = e.codePointAt(i - 1)
                }
                return i > r ? e.slice(r, i) : ""
            }
            let eM = {
                blockquote: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "blockquote",
                        properties: {},
                        children: e.wrap(e.all(t), !0)
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                break: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "br",
                        properties: {},
                        children: []
                    };
                    return e.patch(t, n), [e.applyData(t, n), {
                        type: "text",
                        value: "\n"
                    }]
                },
                code: function(e, t) {
                    let n = t.value ? t.value + "\n" : "",
                        r = t.lang ? t.lang.match(/^[^ \t]+(?=[ \t]|$)/) : null,
                        i = {};
                    r && (i.className = ["language-" + r]);
                    let l = {
                        type: "element",
                        tagName: "code",
                        properties: i,
                        children: [{
                            type: "text",
                            value: n
                        }]
                    };
                    return t.meta && (l.data = {
                        meta: t.meta
                    }), e.patch(t, l), l = {
                        type: "element",
                        tagName: "pre",
                        properties: {},
                        children: [l = e.applyData(t, l)]
                    }, e.patch(t, l), l
                },
                delete: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "del",
                        properties: {},
                        children: e.all(t)
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                emphasis: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "em",
                        properties: {},
                        children: e.all(t)
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                footnoteReference: eT,
                footnote: function(e, t) {
                    let n = e.footnoteById,
                        r = 1;
                    for (;
                        (r in n);) r++;
                    let i = String(r);
                    return n[i] = {
                        type: "footnoteDefinition",
                        identifier: i,
                        children: [{
                            type: "paragraph",
                            children: t.children
                        }],
                        position: t.position
                    }, eT(e, {
                        type: "footnoteReference",
                        identifier: i,
                        position: t.position
                    })
                },
                heading: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "h" + t.depth,
                        properties: {},
                        children: e.all(t)
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                html: function(e, t) {
                    if (e.dangerous) {
                        let n = {
                            type: "raw",
                            value: t.value
                        };
                        return e.patch(t, n), e.applyData(t, n)
                    }
                    return null
                },
                imageReference: function(e, t) {
                    let n = e.definition(t.identifier);
                    if (!n) return eP(e, t);
                    let r = {
                        src: eE(n.url || ""),
                        alt: t.alt
                    };
                    null !== n.title && void 0 !== n.title && (r.title = n.title);
                    let i = {
                        type: "element",
                        tagName: "img",
                        properties: r,
                        children: []
                    };
                    return e.patch(t, i), e.applyData(t, i)
                },
                image: function(e, t) {
                    let n = {
                        src: eE(t.url)
                    };
                    null !== t.alt && void 0 !== t.alt && (n.alt = t.alt), null !== t.title && void 0 !== t.title && (n.title = t.title);
                    let r = {
                        type: "element",
                        tagName: "img",
                        properties: n,
                        children: []
                    };
                    return e.patch(t, r), e.applyData(t, r)
                },
                inlineCode: function(e, t) {
                    let n = {
                        type: "text",
                        value: t.value.replace(/\r?\n|\r/g, " ")
                    };
                    e.patch(t, n);
                    let r = {
                        type: "element",
                        tagName: "code",
                        properties: {},
                        children: [n]
                    };
                    return e.patch(t, r), e.applyData(t, r)
                },
                linkReference: function(e, t) {
                    let n = e.definition(t.identifier);
                    if (!n) return eP(e, t);
                    let r = {
                        href: eE(n.url || "")
                    };
                    null !== n.title && void 0 !== n.title && (r.title = n.title);
                    let i = {
                        type: "element",
                        tagName: "a",
                        properties: r,
                        children: e.all(t)
                    };
                    return e.patch(t, i), e.applyData(t, i)
                },
                link: function(e, t) {
                    let n = {
                        href: eE(t.url)
                    };
                    null !== t.title && void 0 !== t.title && (n.title = t.title);
                    let r = {
                        type: "element",
                        tagName: "a",
                        properties: n,
                        children: e.all(t)
                    };
                    return e.patch(t, r), e.applyData(t, r)
                },
                listItem: function(e, t, n) {
                    let r = e.all(t),
                        i = n ? function(e) {
                            let t = !1;
                            if ("list" === e.type) {
                                t = e.spread || !1;
                                let n = e.children,
                                    r = -1;
                                for (; !t && ++r < n.length;) t = eL(n[r])
                            }
                            return t
                        }(n) : eL(t),
                        l = {},
                        o = [];
                    if ("boolean" == typeof t.checked) {
                        let e;
                        let n = r[0];
                        n && "element" === n.type && "p" === n.tagName ? e = n : (e = {
                            type: "element",
                            tagName: "p",
                            properties: {},
                            children: []
                        }, r.unshift(e)), e.children.length > 0 && e.children.unshift({
                            type: "text",
                            value: " "
                        }), e.children.unshift({
                            type: "element",
                            tagName: "input",
                            properties: {
                                type: "checkbox",
                                checked: t.checked,
                                disabled: !0
                            },
                            children: []
                        }), l.className = ["task-list-item"]
                    }
                    let u = -1;
                    for (; ++u < r.length;) {
                        let e = r[u];
                        (i || 0 !== u || "element" !== e.type || "p" !== e.tagName) && o.push({
                            type: "text",
                            value: "\n"
                        }), "element" !== e.type || "p" !== e.tagName || i ? o.push(e) : o.push(...e.children)
                    }
                    let a = r[r.length - 1];
                    a && (i || "element" !== a.type || "p" !== a.tagName) && o.push({
                        type: "text",
                        value: "\n"
                    });
                    let c = {
                        type: "element",
                        tagName: "li",
                        properties: l,
                        children: o
                    };
                    return e.patch(t, c), e.applyData(t, c)
                },
                list: function(e, t) {
                    let n = {},
                        r = e.all(t),
                        i = -1;
                    for ("number" == typeof t.start && 1 !== t.start && (n.start = t.start); ++i < r.length;) {
                        let e = r[i];
                        if ("element" === e.type && "li" === e.tagName && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
                            n.className = ["contains-task-list"];
                            break
                        }
                    }
                    let l = {
                        type: "element",
                        tagName: t.ordered ? "ol" : "ul",
                        properties: n,
                        children: e.wrap(r, !0)
                    };
                    return e.patch(t, l), e.applyData(t, l)
                },
                paragraph: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "p",
                        properties: {},
                        children: e.all(t)
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                root: function(e, t) {
                    let n = {
                        type: "root",
                        children: e.wrap(e.all(t))
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                strong: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "strong",
                        properties: {},
                        children: e.all(t)
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                table: function(e, t) {
                    let n = e.all(t),
                        r = n.shift(),
                        i = [];
                    if (r) {
                        let n = {
                            type: "element",
                            tagName: "thead",
                            properties: {},
                            children: e.wrap([r], !0)
                        };
                        e.patch(t.children[0], n), i.push(n)
                    }
                    if (n.length > 0) {
                        let r = {
                                type: "element",
                                tagName: "tbody",
                                properties: {},
                                children: e.wrap(n, !0)
                            },
                            l = (0, eD.Pk)(t.children[1]),
                            o = (0, eD.rb)(t.children[t.children.length - 1]);
                        l.line && o.line && (r.position = {
                            start: l,
                            end: o
                        }), i.push(r)
                    }
                    let l = {
                        type: "element",
                        tagName: "table",
                        properties: {},
                        children: e.wrap(i, !0)
                    };
                    return e.patch(t, l), e.applyData(t, l)
                },
                tableCell: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "td",
                        properties: {},
                        children: e.all(t)
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                tableRow: function(e, t, n) {
                    let r = n ? n.children : void 0,
                        i = r ? r.indexOf(t) : 1,
                        l = 0 === i ? "th" : "td",
                        o = n && "table" === n.type ? n.align : void 0,
                        u = o ? o.length : t.children.length,
                        a = -1,
                        c = [];
                    for (; ++a < u;) {
                        let n = t.children[a],
                            r = {},
                            i = o ? o[a] : void 0;
                        i && (r.align = i);
                        let u = {
                            type: "element",
                            tagName: l,
                            properties: r,
                            children: []
                        };
                        n && (u.children = e.all(n), e.patch(n, u), u = e.applyData(t, u)), c.push(u)
                    }
                    let s = {
                        type: "element",
                        tagName: "tr",
                        properties: {},
                        children: e.wrap(c, !0)
                    };
                    return e.patch(t, s), e.applyData(t, s)
                },
                text: function(e, t) {
                    let n = {
                        type: "text",
                        value: function(e) {
                            let t = String(e),
                                n = /\r?\n|\r/g,
                                r = n.exec(t),
                                i = 0,
                                l = [];
                            for (; r;) l.push(eI(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
                            return l.push(eI(t.slice(i), i > 0, !1)), l.join("")
                        }(String(t.value))
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                thematicBreak: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "hr",
                        properties: {},
                        children: []
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                toml: ej,
                yaml: ej,
                definition: ej,
                footnoteDefinition: ej
            };

            function ej() {
                return null
            }
            let eR = {}.hasOwnProperty;

            function eB(e, t) {
                e.position && (t.position = (0, eD.FK)(e))
            }

            function e_(e, t) {
                let n = t;
                if (e && e.data) {
                    let t = e.data.hName,
                        r = e.data.hChildren,
                        i = e.data.hProperties;
                    "string" == typeof t && ("element" === n.type ? n.tagName = t : n = {
                        type: "element",
                        tagName: t,
                        properties: {},
                        children: []
                    }), "element" === n.type && i && (n.properties = { ...n.properties,
                        ...i
                    }), "children" in n && n.children && null != r && (n.children = r)
                }
                return n
            }

            function eN(e, t, n) {
                let r = t && t.type;
                if (!r) throw Error("Expected node, got `" + t + "`");
                return eR.call(e.handlers, r) ? e.handlers[r](e, t, n) : e.passThrough && e.passThrough.includes(r) ? "children" in t ? { ...t,
                    children: eH(e, t)
                } : t : e.unknownHandler ? e.unknownHandler(e, t, n) : function(e, t) {
                    let n = t.data || {},
                        r = "value" in t && !(eR.call(n, "hProperties") || eR.call(n, "hChildren")) ? {
                            type: "text",
                            value: t.value
                        } : {
                            type: "element",
                            tagName: "div",
                            properties: {},
                            children: eH(e, t)
                        };
                    return e.patch(t, r), e.applyData(t, r)
                }(e, t)
            }

            function eH(e, t) {
                let n = [];
                if ("children" in t) {
                    let r = t.children,
                        i = -1;
                    for (; ++i < r.length;) {
                        let l = eN(e, r[i], t);
                        if (l) {
                            if (i && "break" === r[i - 1].type && (Array.isArray(l) || "text" !== l.type || (l.value = l.value.replace(/^\s+/, "")), !Array.isArray(l) && "element" === l.type)) {
                                let e = l.children[0];
                                e && "text" === e.type && (e.value = e.value.replace(/^\s+/, ""))
                            }
                            Array.isArray(l) ? n.push(...l) : n.push(l)
                        }
                    }
                }
                return n
            }

            function eU(e, t) {
                let n = [],
                    r = -1;
                for (t && n.push({
                        type: "text",
                        value: "\n"
                    }); ++r < e.length;) r && n.push({
                    type: "text",
                    value: "\n"
                }), n.push(e[r]);
                return t && e.length > 0 && n.push({
                    type: "text",
                    value: "\n"
                }), n
            }

            function eV(e, t) {
                let n = function(e, t) {
                        let n = t || {},
                            r = n.allowDangerousHtml || !1,
                            i = {};
                        return o.dangerous = r, o.clobberPrefix = void 0 === n.clobberPrefix || null === n.clobberPrefix ? "user-content-" : n.clobberPrefix, o.footnoteLabel = n.footnoteLabel || "Footnotes", o.footnoteLabelTagName = n.footnoteLabelTagName || "h2", o.footnoteLabelProperties = n.footnoteLabelProperties || {
                            className: ["sr-only"]
                        }, o.footnoteBackLabel = n.footnoteBackLabel || "Back to content", o.unknownHandler = n.unknownHandler, o.passThrough = n.passThrough, o.handlers = { ...eM,
                            ...n.handlers
                        }, o.definition = function(e) {
                            let t = Object.create(null);
                            if (!e || !e.type) throw Error("mdast-util-definitions expected node");
                            return (0, eA.Vn)(e, "definition", e => {
                                    let n = eO(e.identifier);
                                    n && !ez.call(t, n) && (t[n] = e)
                                }),
                                function(e) {
                                    let n = eO(e);
                                    return n && ez.call(t, n) ? t[n] : null
                                }
                        }(e), o.footnoteById = i, o.footnoteOrder = [], o.footnoteCounts = {}, o.patch = eB, o.applyData = e_, o.one = function(e, t) {
                            return eN(o, e, t)
                        }, o.all = function(e) {
                            return eH(o, e)
                        }, o.wrap = eU, o.augment = l, (0, eA.Vn)(e, "footnoteDefinition", e => {
                            let t = String(e.identifier).toUpperCase();
                            eR.call(i, t) || (i[t] = e)
                        }), o;

                        function l(e, t) {
                            if (e && "data" in e && e.data) {
                                let n = e.data;
                                n.hName && ("element" !== t.type && (t = {
                                    type: "element",
                                    tagName: "",
                                    properties: {},
                                    children: []
                                }), t.tagName = n.hName), "element" === t.type && n.hProperties && (t.properties = { ...t.properties,
                                    ...n.hProperties
                                }), "children" in t && t.children && n.hChildren && (t.children = n.hChildren)
                            }
                            if (e) {
                                let n = "type" in e ? e : {
                                    position: e
                                };
                                !n || !n.position || !n.position.start || !n.position.start.line || !n.position.start.column || !n.position.end || !n.position.end.line || !n.position.end.column || (t.position = {
                                    start: (0, eD.Pk)(n),
                                    end: (0, eD.rb)(n)
                                })
                            }
                            return t
                        }

                        function o(e, t, n, r) {
                            return Array.isArray(n) && (r = n, n = {}), l(e, {
                                type: "element",
                                tagName: t,
                                properties: n || {},
                                children: r || []
                            })
                        }
                    }(e, t),
                    r = n.one(e, null),
                    i = function(e) {
                        let t = [],
                            n = -1;
                        for (; ++n < e.footnoteOrder.length;) {
                            let r = e.footnoteById[e.footnoteOrder[n]];
                            if (!r) continue;
                            let i = e.all(r),
                                l = String(r.identifier).toUpperCase(),
                                o = eE(l.toLowerCase()),
                                u = 0,
                                a = [];
                            for (; ++u <= e.footnoteCounts[l];) {
                                let t = {
                                    type: "element",
                                    tagName: "a",
                                    properties: {
                                        href: "#" + e.clobberPrefix + "fnref-" + o + (u > 1 ? "-" + u : ""),
                                        dataFootnoteBackref: !0,
                                        className: ["data-footnote-backref"],
                                        ariaLabel: e.footnoteBackLabel
                                    },
                                    children: [{
                                        type: "text",
                                        value: "↩"
                                    }]
                                };
                                u > 1 && t.children.push({
                                    type: "element",
                                    tagName: "sup",
                                    children: [{
                                        type: "text",
                                        value: String(u)
                                    }]
                                }), a.length > 0 && a.push({
                                    type: "text",
                                    value: " "
                                }), a.push(t)
                            }
                            let c = i[i.length - 1];
                            if (c && "element" === c.type && "p" === c.tagName) {
                                let e = c.children[c.children.length - 1];
                                e && "text" === e.type ? e.value += " " : c.children.push({
                                    type: "text",
                                    value: " "
                                }), c.children.push(...a)
                            } else i.push(...a);
                            let s = {
                                type: "element",
                                tagName: "li",
                                properties: {
                                    id: e.clobberPrefix + "fn-" + o
                                },
                                children: e.wrap(i, !0)
                            };
                            e.patch(r, s), t.push(s)
                        }
                        if (0 !== t.length) return {
                            type: "element",
                            tagName: "section",
                            properties: {
                                dataFootnotes: !0,
                                className: ["footnotes"]
                            },
                            children: [{
                                type: "element",
                                tagName: e.footnoteLabelTagName,
                                properties: { ...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),
                                    id: "footnote-label"
                                },
                                children: [{
                                    type: "text",
                                    value: e.footnoteLabel
                                }]
                            }, {
                                type: "text",
                                value: "\n"
                            }, {
                                type: "element",
                                tagName: "ol",
                                properties: {},
                                children: e.wrap(t, !0)
                            }, {
                                type: "text",
                                value: "\n"
                            }]
                        }
                    }(n);
                return i && r.children.push({
                    type: "text",
                    value: "\n"
                }, i), Array.isArray(r) ? {
                    type: "root",
                    children: r
                } : r
            }
            var e$ = function(e, t) {
                    var n;
                    return e && "run" in e ? (n, r, i) => {
                        e.run(eV(n, t), r, e => {
                            i(e)
                        })
                    } : (n = e || t, e => eV(e, n))
                },
                eq = n(47329),
                eW = n(42232);

            function eQ(e) {
                if (e.allowedElements && e.disallowedElements) throw TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");
                if (e.allowedElements || e.disallowedElements || e.allowElement) return t => {
                    (0, eA.Vn)(t, "element", (t, n, r) => {
                        let i;
                        if (e.allowedElements ? i = !e.allowedElements.includes(t.tagName) : e.disallowedElements && (i = e.disallowedElements.includes(t.tagName)), !i && e.allowElement && "number" == typeof n && (i = !e.allowElement(t, n, r)), i && "number" == typeof n) return e.unwrapDisallowed && t.children ? r.children.splice(n, 1, ...t.children) : r.children.splice(n, 1), n
                    })
                }
            }
            var eY = n(31847),
                eX = n(48816),
                eK = n(96195);
            let eZ = {
                classId: "classID",
                dataType: "datatype",
                itemId: "itemID",
                strokeDashArray: "strokeDasharray",
                strokeDashOffset: "strokeDashoffset",
                strokeLineCap: "strokeLinecap",
                strokeLineJoin: "strokeLinejoin",
                strokeMiterLimit: "strokeMiterlimit",
                typeOf: "typeof",
                xLinkActuate: "xlinkActuate",
                xLinkArcRole: "xlinkArcrole",
                xLinkHref: "xlinkHref",
                xLinkRole: "xlinkRole",
                xLinkShow: "xlinkShow",
                xLinkTitle: "xlinkTitle",
                xLinkType: "xlinkType",
                xmlnsXLink: "xmlnsXlink"
            };
            var eJ = n(62825),
                eG = n(50546),
                e0 = n(57487);
            let e1 = ["http", "https", "mailto", "tel"];

            function e2(e) {
                let t = (e || "").trim(),
                    n = t.charAt(0);
                if ("#" === n || "/" === n) return t;
                let r = t.indexOf(":");
                if (-1 === r) return t;
                let i = -1;
                for (; ++i < e1.length;) {
                    let e = e1[i];
                    if (r === e.length && t.slice(0, e.length).toLowerCase() === e) return t
                }
                return -1 !== (i = t.indexOf("?")) && r > i || -1 !== (i = t.indexOf("#")) && r > i ? t : "javascript:void(0)"
            }
            let e4 = {}.hasOwnProperty,
                e3 = new Set(["table", "thead", "tbody", "tfoot", "tr"]);

            function e6(e, t) {
                let n = -1,
                    r = 0;
                for (; ++n < e.children.length && e.children[n] !== t;) "element" === e.children[n].type && r++;
                return r
            }

            function e9(e, t) {
                return t.toUpperCase()
            }
            let e5 = {}.hasOwnProperty,
                e7 = {
                    plugins: {
                        to: "remarkPlugins",
                        id: "change-plugins-to-remarkplugins"
                    },
                    renderers: {
                        to: "components",
                        id: "change-renderers-to-components"
                    },
                    astPlugins: {
                        id: "remove-buggy-html-in-markdown-parser"
                    },
                    allowDangerousHtml: {
                        id: "remove-buggy-html-in-markdown-parser"
                    },
                    escapeHtml: {
                        id: "remove-buggy-html-in-markdown-parser"
                    },
                    source: {
                        to: "children",
                        id: "change-source-to-children"
                    },
                    allowNode: {
                        to: "allowElement",
                        id: "replace-allownode-allowedtypes-and-disallowedtypes"
                    },
                    allowedTypes: {
                        to: "allowedElements",
                        id: "replace-allownode-allowedtypes-and-disallowedtypes"
                    },
                    disallowedTypes: {
                        to: "disallowedElements",
                        id: "replace-allownode-allowedtypes-and-disallowedtypes"
                    },
                    includeNodeIndex: {
                        to: "includeElementIndex",
                        id: "change-includenodeindex-to-includeelementindex"
                    }
                };

            function e8(e) {
                for (let t in e7)
                    if (e5.call(e7, t) && e5.call(e, t)) {
                        let e = e7[t];
                        console.warn(`[react-markdown] Warning: please ${e.to?`use \`${e.to}\` instead of`:"remove"} \`${t}\` (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#${e.id}> for more info)`), delete e7[t]
                    }
                let t = (0, o.l)().use(eF).use(e.remarkPlugins || []).use(e$, { ...e.remarkRehypeOptions,
                        allowDangerousHtml: !0
                    }).use(e.rehypePlugins || []).use(eQ, e),
                    n = new l.k;
                "string" == typeof e.children ? n.value = e.children : void 0 !== e.children && null !== e.children && console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);
                let r = t.runSync(t.parse(n), n);
                if ("root" !== r.type) throw TypeError("Expected a `root` node");
                let u = i.createElement(i.Fragment, {}, function e(t, n) {
                    let r;
                    let l = [],
                        o = -1;
                    for (; ++o < n.children.length;) "element" === (r = n.children[o]).type ? l.push(function(t, n, r, l) {
                        let o;
                        let u = t.options,
                            a = void 0 === u.transformLinkUri ? e2 : u.transformLinkUri,
                            c = t.schema,
                            s = n.tagName,
                            f = {},
                            p = c;
                        if ("html" === c.space && "svg" === s && (p = eW.YP, t.schema = p), n.properties)
                            for (o in n.properties) e4.call(n.properties, o) && function(e, t, n, r) {
                                let i = (0, eK.s)(r.schema, t),
                                    l = n;
                                null != l && l == l && (Array.isArray(l) && (l = i.commaSeparated ? (0, eG.P)(l) : (0, eJ.P)(l)), "style" === i.property && "string" == typeof l && (l = function(e) {
                                    let t = {};
                                    try {
                                        e0(e, function(e, n) {
                                            let r = "-ms-" === e.slice(0, 4) ? `ms-${e.slice(4)}` : e;
                                            t[r.replace(/-([a-z])/g, e9)] = n
                                        })
                                    } catch {}
                                    return t
                                }(l)), i.space && i.property ? e[e4.call(eZ, i.property) ? eZ[i.property] : i.property] = l : i.attribute && (e[i.attribute] = l))
                            }(f, o, n.properties[o], t);
                        ("ol" === s || "ul" === s) && t.listDepth++;
                        let d = e(t, n);
                        ("ol" === s || "ul" === s) && t.listDepth--, t.schema = c;
                        let h = n.position || {
                                start: {
                                    line: null,
                                    column: null,
                                    offset: null
                                },
                                end: {
                                    line: null,
                                    column: null,
                                    offset: null
                                }
                            },
                            m = u.components && e4.call(u.components, s) ? u.components[s] : s,
                            g = "string" == typeof m || m === i.Fragment;
                        if (!eY.isValidElementType(m)) throw TypeError(`Component for name \`${s}\` not defined or is not renderable`);
                        if (f.key = r, "a" === s && u.linkTarget && (f.target = "function" == typeof u.linkTarget ? u.linkTarget(String(f.href || ""), n.children, "string" == typeof f.title ? f.title : null) : u.linkTarget), "a" === s && a && (f.href = a(String(f.href || ""), n.children, "string" == typeof f.title ? f.title : null)), g || "code" !== s || "element" !== l.type || "pre" === l.tagName || (f.inline = !0), g || "h1" !== s && "h2" !== s && "h3" !== s && "h4" !== s && "h5" !== s && "h6" !== s || (f.level = Number.parseInt(s.charAt(1), 10)), "img" === s && u.transformImageUri && (f.src = u.transformImageUri(String(f.src || ""), String(f.alt || ""), "string" == typeof f.title ? f.title : null)), !g && "li" === s && "element" === l.type) {
                            let e = function(e) {
                                let t = -1;
                                for (; ++t < e.children.length;) {
                                    let n = e.children[t];
                                    if ("element" === n.type && "input" === n.tagName) return n
                                }
                                return null
                            }(n);
                            f.checked = e && e.properties ? Boolean(e.properties.checked) : null, f.index = e6(l, n), f.ordered = "ol" === l.tagName
                        }
                        return g || "ol" !== s && "ul" !== s || (f.ordered = "ol" === s, f.depth = t.listDepth), "td" !== s && "th" !== s || (f.align && (f.style || (f.style = {}), f.style.textAlign = f.align, delete f.align), g || (f.isHeader = "th" === s)), g || "tr" !== s || "element" !== l.type || (f.isHeader = Boolean("thead" === l.tagName)), u.sourcePos && (f["data-sourcepos"] = [h.start.line, ":", h.start.column, "-", h.end.line, ":", h.end.column].map(String).join("")), !g && u.rawSourcePos && (f.sourcePosition = n.position), !g && u.includeElementIndex && (f.index = e6(l, n), f.siblingCount = e6(l)), g || (f.node = n), d.length > 0 ? i.createElement(m, f, d) : i.createElement(m, f)
                    }(t, r, o, n)) : "text" === r.type ? "element" === n.type && e3.has(n.tagName) && (0, eX.Q)(r) || l.push(r.value) : "raw" !== r.type || t.options.skipHtml || l.push(r.value);
                    return l
                }({
                    options: e,
                    schema: eW.dy,
                    listDepth: 0
                }, r));
                return e.className && (u = i.createElement("div", {
                    className: e.className
                }, u)), u
            }
            e8.propTypes = {
                children: eq.string,
                className: eq.string,
                allowElement: eq.func,
                allowedElements: eq.arrayOf(eq.string),
                disallowedElements: eq.arrayOf(eq.string),
                unwrapDisallowed: eq.bool,
                remarkPlugins: eq.arrayOf(eq.oneOfType([eq.object, eq.func, eq.arrayOf(eq.oneOfType([eq.bool, eq.string, eq.object, eq.func, eq.arrayOf(eq.any)]))])),
                rehypePlugins: eq.arrayOf(eq.oneOfType([eq.object, eq.func, eq.arrayOf(eq.oneOfType([eq.bool, eq.string, eq.object, eq.func, eq.arrayOf(eq.any)]))])),
                sourcePos: eq.bool,
                rawSourcePos: eq.bool,
                skipHtml: eq.bool,
                includeElementIndex: eq.bool,
                transformLinkUri: eq.oneOfType([eq.func, eq.bool]),
                linkTarget: eq.oneOfType([eq.func, eq.string]),
                transformImageUri: eq.func,
                components: eq.object
            }
        },
        96510: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return ej
                }
            });
            var r = n(76075),
                i = n(80226);
            let l = {
                    tokenize: function(e, t, n) {
                        let r = 0;
                        return function t(l) {
                            return (87 === l || 119 === l) && r < 3 ? (r++, e.consume(l), t) : 46 === l && 3 === r ? (e.consume(l), i) : n(l)
                        };

                        function i(e) {
                            return null === e ? n(e) : t(e)
                        }
                    },
                    partial: !0
                },
                o = {
                    tokenize: function(e, t, n) {
                        let r, l, o;
                        return u;

                        function u(t) {
                            return 46 === t || 95 === t ? e.check(a, s, c)(t) : null === t || (0, i.z3)(t) || (0, i.B8)(t) || 45 !== t && (0, i.Xh)(t) ? s(t) : (o = !0, e.consume(t), u)
                        }

                        function c(t) {
                            return 95 === t ? r = !0 : (l = r, r = void 0), e.consume(t), u
                        }

                        function s(e) {
                            return l || r || !o ? n(e) : t(e)
                        }
                    },
                    partial: !0
                },
                u = {
                    tokenize: function(e, t) {
                        let n = 0,
                            r = 0;
                        return l;

                        function l(u) {
                            return 40 === u ? (n++, e.consume(u), l) : 41 === u && r < n ? o(u) : 33 === u || 34 === u || 38 === u || 39 === u || 41 === u || 42 === u || 44 === u || 46 === u || 58 === u || 59 === u || 60 === u || 63 === u || 93 === u || 95 === u || 126 === u ? e.check(a, t, o)(u) : null === u || (0, i.z3)(u) || (0, i.B8)(u) ? t(u) : (e.consume(u), l)
                        }

                        function o(t) {
                            return 41 === t && r++, e.consume(t), l
                        }
                    },
                    partial: !0
                },
                a = {
                    tokenize: function(e, t, n) {
                        return r;

                        function r(u) {
                            return 33 === u || 34 === u || 39 === u || 41 === u || 42 === u || 44 === u || 46 === u || 58 === u || 59 === u || 63 === u || 95 === u || 126 === u ? (e.consume(u), r) : 38 === u ? (e.consume(u), o) : 93 === u ? (e.consume(u), l) : 60 === u || null === u || (0, i.z3)(u) || (0, i.B8)(u) ? t(u) : n(u)
                        }

                        function l(e) {
                            return null === e || 40 === e || 91 === e || (0, i.z3)(e) || (0, i.B8)(e) ? t(e) : r(e)
                        }

                        function o(t) {
                            return (0, i.jv)(t) ? function t(l) {
                                return 59 === l ? (e.consume(l), r) : (0, i.jv)(l) ? (e.consume(l), t) : n(l)
                            }(t) : n(t)
                        }
                    },
                    partial: !0
                },
                c = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.consume(t), r
                        };

                        function r(e) {
                            return (0, i.H$)(e) ? n(e) : t(e)
                        }
                    },
                    partial: !0
                },
                s = {
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return 87 !== t && 119 !== t || !g.call(r, r.previous) || x(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(l, e.attempt(o, e.attempt(u, i), n), n)(t))
                        };

                        function i(n) {
                            return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n)
                        }
                    },
                    previous: g
                },
                f = {
                    tokenize: function(e, t, n) {
                        let r = this,
                            l = "",
                            a = !1;
                        return function(t) {
                            return (72 === t || 104 === t) && y.call(r, r.previous) && !x(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), l += String.fromCodePoint(t), e.consume(t), c) : n(t)
                        };

                        function c(t) {
                            if ((0, i.jv)(t) && l.length < 5) return l += String.fromCodePoint(t), e.consume(t), c;
                            if (58 === t) {
                                let n = l.toLowerCase();
                                if ("http" === n || "https" === n) return e.consume(t), s
                            }
                            return n(t)
                        }

                        function s(t) {
                            return 47 === t ? (e.consume(t), a) ? f : (a = !0, s) : n(t)
                        }

                        function f(t) {
                            return null === t || (0, i.Av)(t) || (0, i.z3)(t) || (0, i.B8)(t) || (0, i.Xh)(t) ? n(t) : e.attempt(o, e.attempt(u, p), n)(t)
                        }

                        function p(n) {
                            return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n)
                        }
                    },
                    previous: y
                },
                p = {
                    tokenize: function(e, t, n) {
                        let r, l;
                        let o = this;
                        return function(t) {
                            return !k(t) || !b.call(o, o.previous) || x(o.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), function t(r) {
                                return k(r) ? (e.consume(r), t) : 64 === r ? (e.consume(r), u) : n(r)
                            }(t))
                        };

                        function u(t) {
                            return 46 === t ? e.check(c, s, a)(t) : 45 === t || 95 === t || (0, i.H$)(t) ? (l = !0, e.consume(t), u) : s(t)
                        }

                        function a(t) {
                            return e.consume(t), r = !0, u
                        }

                        function s(u) {
                            return l && r && (0, i.jv)(o.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(u)) : n(u)
                        }
                    },
                    previous: b
                },
                d = {},
                h = {
                    text: d
                },
                m = 48;
            for (; m < 123;) d[m] = p, 58 == ++m ? m = 65 : 91 === m && (m = 97);

            function g(e) {
                return null === e || 40 === e || 42 === e || 95 === e || 91 === e || 93 === e || 126 === e || (0, i.z3)(e)
            }

            function y(e) {
                return !(0, i.jv)(e)
            }

            function b(e) {
                return !(47 === e || k(e))
            }

            function k(e) {
                return 43 === e || 45 === e || 46 === e || 95 === e || (0, i.H$)(e)
            }

            function x(e) {
                let t = e.length,
                    n = !1;
                for (; t--;) {
                    let r = e[t][1];
                    if (("labelLink" === r.type || "labelImage" === r.type) && !r._balanced) {
                        n = !0;
                        break
                    }
                    if (r._gfmAutolinkLiteralWalkedInto) {
                        n = !1;
                        break
                    }
                }
                return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n
            }
            d[43] = p, d[45] = p, d[46] = p, d[95] = p, d[72] = [p, f], d[104] = [p, f], d[87] = [p, s], d[119] = [p, s];
            var v = n(84430),
                S = n(576),
                C = n(43774);
            let w = {
                tokenize: function(e, t, n) {
                    let r = this;
                    return (0, S.f)(e, function(e) {
                        let i = r.events[r.events.length - 1];
                        return i && "gfmFootnoteDefinitionIndent" === i[1].type && 4 === i[2].sliceSerialize(i[1], !0).length ? t(e) : n(e)
                    }, "gfmFootnoteDefinitionIndent", 5)
                },
                partial: !0
            };

            function F(e, t, n) {
                let r;
                let i = this,
                    l = i.events.length,
                    o = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []);
                for (; l--;) {
                    let e = i.events[l][1];
                    if ("labelImage" === e.type) {
                        r = e;
                        break
                    }
                    if ("gfmFootnoteCall" === e.type || "labelLink" === e.type || "label" === e.type || "image" === e.type || "link" === e.type) break
                }
                return function(l) {
                    if (!r || !r._balanced) return n(l);
                    let u = (0, C.d)(i.sliceSerialize({
                        start: r.end,
                        end: i.now()
                    }));
                    return 94 === u.codePointAt(0) && o.includes(u.slice(1)) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(l), e.exit("gfmFootnoteCallLabelMarker"), t(l)) : n(l)
                }
            }

            function E(e, t) {
                let n = e.length;
                for (; n--;)
                    if ("labelImage" === e[n][1].type && "enter" === e[n][0]) {
                        e[n][1];
                        break
                    }
                e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
                let r = {
                        type: "gfmFootnoteCall",
                        start: Object.assign({}, e[n + 3][1].start),
                        end: Object.assign({}, e[e.length - 1][1].end)
                    },
                    i = {
                        type: "gfmFootnoteCallMarker",
                        start: Object.assign({}, e[n + 3][1].end),
                        end: Object.assign({}, e[n + 3][1].end)
                    };
                i.end.column++, i.end.offset++, i.end._bufferIndex++;
                let l = {
                        type: "gfmFootnoteCallString",
                        start: Object.assign({}, i.end),
                        end: Object.assign({}, e[e.length - 1][1].start)
                    },
                    o = {
                        type: "chunkString",
                        contentType: "string",
                        start: Object.assign({}, l.start),
                        end: Object.assign({}, l.end)
                    },
                    u = [e[n + 1], e[n + 2],
                        ["enter", r, t], e[n + 3], e[n + 4],
                        ["enter", i, t],
                        ["exit", i, t],
                        ["enter", l, t],
                        ["enter", o, t],
                        ["exit", o, t],
                        ["exit", l, t], e[e.length - 2], e[e.length - 1],
                        ["exit", r, t]
                    ];
                return e.splice(n, e.length - n + 1, ...u), e
            }

            function A(e, t, n) {
                let r;
                let l = this,
                    o = l.parser.gfmFootnotes || (l.parser.gfmFootnotes = []),
                    u = 0;
                return function(t) {
                    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), a
                };

                function a(t) {
                    return 94 !== t ? n(t) : (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", c)
                }

                function c(a) {
                    if (u > 999 || 93 === a && !r || null === a || 91 === a || (0, i.z3)(a)) return n(a);
                    if (93 === a) {
                        e.exit("chunkString");
                        let r = e.exit("gfmFootnoteCallString");
                        return o.includes((0, C.d)(l.sliceSerialize(r))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(a), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(a)
                    }
                    return (0, i.z3)(a) || (r = !0), u++, e.consume(a), 92 === a ? s : c
                }

                function s(t) {
                    return 91 === t || 92 === t || 93 === t ? (e.consume(t), u++, c) : c(t)
                }
            }

            function D(e, t, n) {
                let r, l;
                let o = this,
                    u = o.parser.gfmFootnotes || (o.parser.gfmFootnotes = []),
                    a = 0;
                return function(t) {
                    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), c
                };

                function c(t) {
                    return 94 === t ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", s) : n(t)
                }

                function s(t) {
                    if (a > 999 || 93 === t && !l || null === t || 91 === t || (0, i.z3)(t)) return n(t);
                    if (93 === t) {
                        e.exit("chunkString");
                        let n = e.exit("gfmFootnoteDefinitionLabelString");
                        return r = (0, C.d)(o.sliceSerialize(n)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), p
                    }
                    return (0, i.z3)(t) || (l = !0), a++, e.consume(t), 92 === t ? f : s
                }

                function f(t) {
                    return 91 === t || 92 === t || 93 === t ? (e.consume(t), a++, s) : s(t)
                }

                function p(t) {
                    return 58 === t ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), u.includes(r) || u.push(r), (0, S.f)(e, d, "gfmFootnoteDefinitionWhitespace")) : n(t)
                }

                function d(e) {
                    return t(e)
                }
            }

            function z(e, t, n) {
                return e.check(v.w, t, e.attempt(w, t, n))
            }

            function O(e) {
                e.exit("gfmFootnoteDefinition")
            }
            var T = n(78043),
                P = n(38600),
                L = n(16821);
            class I {
                constructor() {
                    this.map = []
                }
                add(e, t, n) {
                    ! function(e, t, n, r) {
                        let i = 0;
                        if (0 !== n || 0 !== r.length) {
                            for (; i < e.map.length;) {
                                if (e.map[i][0] === t) {
                                    e.map[i][1] += n, e.map[i][2].push(...r);
                                    return
                                }
                                i += 1
                            }
                            e.map.push([t, n, r])
                        }
                    }(this, e, t, n)
                }
                consume(e) {
                    if (this.map.sort((e, t) => e[0] - t[0]), 0 === this.map.length) return;
                    let t = this.map.length,
                        n = [];
                    for (; t > 0;) t -= 1, n.push(e.slice(this.map[t][0] + this.map[t][1])), n.push(this.map[t][2]), e.length = this.map[t][0];
                    n.push([...e]), e.length = 0;
                    let r = n.pop();
                    for (; r;) e.push(...r), r = n.pop();
                    this.map.length = 0
                }
            }
            let M = {
                flow: {
                    null: {
                        tokenize: function(e, t, n) {
                            let r;
                            let l = this,
                                o = 0,
                                u = 0;
                            return function(e) {
                                let t = l.events.length - 1;
                                for (; t > -1;) {
                                    let e = l.events[t][1].type;
                                    if ("lineEnding" === e || "linePrefix" === e) t--;
                                    else break
                                }
                                let r = t > -1 ? l.events[t][1].type : null,
                                    i = "tableHead" === r || "tableRow" === r ? k : a;
                                return i === k && l.parser.lazy[l.now().line] ? n(e) : i(e)
                            };

                            function a(t) {
                                return e.enter("tableHead"), e.enter("tableRow"), 124 === t || (r = !0, u += 1), c(t)
                            }

                            function c(t) {
                                return null === t ? n(t) : (0, i.Ch)(t) ? u > 1 ? (u = 0, l.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), p) : n(t) : (0, i.xz)(t) ? (0, S.f)(e, c, "whitespace")(t) : (u += 1, r && (r = !1, o += 1), 124 === t) ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), r = !0, c) : (e.enter("data"), s(t))
                            }

                            function s(t) {
                                return null === t || 124 === t || (0, i.z3)(t) ? (e.exit("data"), c(t)) : (e.consume(t), 92 === t ? f : s)
                            }

                            function f(t) {
                                return 92 === t || 124 === t ? (e.consume(t), s) : s(t)
                            }

                            function p(t) {
                                return (l.interrupt = !1, l.parser.lazy[l.now().line]) ? n(t) : (e.enter("tableDelimiterRow"), r = !1, (0, i.xz)(t)) ? (0, S.f)(e, d, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : d(t)
                            }

                            function d(t) {
                                return 45 === t || 58 === t ? m(t) : 124 === t ? (r = !0, e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), h) : n(t)
                            }

                            function h(t) {
                                return (0, i.xz)(t) ? (0, S.f)(e, m, "whitespace")(t) : m(t)
                            }

                            function m(t) {
                                return 58 === t ? (u += 1, r = !0, e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), g) : 45 === t ? (u += 1, g(t)) : null === t || (0, i.Ch)(t) ? b(t) : n(t)
                            }

                            function g(t) {
                                return 45 === t ? (e.enter("tableDelimiterFiller"), function t(n) {
                                    return 45 === n ? (e.consume(n), t) : 58 === n ? (r = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(n), e.exit("tableDelimiterMarker"), y) : (e.exit("tableDelimiterFiller"), y(n))
                                }(t)) : n(t)
                            }

                            function y(t) {
                                return (0, i.xz)(t) ? (0, S.f)(e, b, "whitespace")(t) : b(t)
                            }

                            function b(l) {
                                return 124 === l ? d(l) : null === l || (0, i.Ch)(l) ? r && o === u ? (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(l)) : n(l) : n(l)
                            }

                            function k(t) {
                                return e.enter("tableRow"), x(t)
                            }

                            function x(n) {
                                return 124 === n ? (e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), x) : null === n || (0, i.Ch)(n) ? (e.exit("tableRow"), t(n)) : (0, i.xz)(n) ? (0, S.f)(e, x, "whitespace")(n) : (e.enter("data"), v(n))
                            }

                            function v(t) {
                                return null === t || 124 === t || (0, i.z3)(t) ? (e.exit("data"), x(t)) : (e.consume(t), 92 === t ? C : v)
                            }

                            function C(t) {
                                return 92 === t || 124 === t ? (e.consume(t), v) : v(t)
                            }
                        },
                        resolveAll: function(e, t) {
                            let n, r, i, l = -1,
                                o = !0,
                                u = 0,
                                a = [0, 0, 0, 0],
                                c = [0, 0, 0, 0],
                                s = !1,
                                f = 0,
                                p = new I;
                            for (; ++l < e.length;) {
                                let d = e[l],
                                    h = d[1];
                                "enter" === d[0] ? "tableHead" === h.type ? (s = !1, 0 !== f && (R(p, t, f, n, r), r = void 0, f = 0), n = {
                                    type: "table",
                                    start: Object.assign({}, h.start),
                                    end: Object.assign({}, h.end)
                                }, p.add(l, 0, [
                                    ["enter", n, t]
                                ])) : "tableRow" === h.type || "tableDelimiterRow" === h.type ? (o = !0, i = void 0, a = [0, 0, 0, 0], c = [0, l + 1, 0, 0], s && (s = !1, r = {
                                    type: "tableBody",
                                    start: Object.assign({}, h.start),
                                    end: Object.assign({}, h.end)
                                }, p.add(l, 0, [
                                    ["enter", r, t]
                                ])), u = "tableDelimiterRow" === h.type ? 2 : r ? 3 : 1) : u && ("data" === h.type || "tableDelimiterMarker" === h.type || "tableDelimiterFiller" === h.type) ? (o = !1, 0 === c[2] && (0 !== a[1] && (c[0] = c[1], i = j(p, t, a, u, void 0, i), a = [0, 0, 0, 0]), c[2] = l)) : "tableCellDivider" === h.type && (o ? o = !1 : (0 !== a[1] && (c[0] = c[1], i = j(p, t, a, u, void 0, i)), c = [(a = c)[1], l, 0, 0])) : "tableHead" === h.type ? (s = !0, f = l) : "tableRow" === h.type || "tableDelimiterRow" === h.type ? (f = l, 0 !== a[1] ? (c[0] = c[1], i = j(p, t, a, u, l, i)) : 0 !== c[1] && (i = j(p, t, c, u, l, i)), u = 0) : u && ("data" === h.type || "tableDelimiterMarker" === h.type || "tableDelimiterFiller" === h.type) && (c[3] = l)
                            }
                            for (0 !== f && R(p, t, f, n, r), p.consume(t.events), l = -1; ++l < t.events.length;) {
                                let e = t.events[l];
                                "enter" === e[0] && "table" === e[1].type && (e[1]._align = function(e, t) {
                                    let n = !1,
                                        r = [];
                                    for (; t < e.length;) {
                                        let i = e[t];
                                        if (n) {
                                            if ("enter" === i[0]) "tableContent" === i[1].type && r.push("tableDelimiterMarker" === e[t + 1][1].type ? "left" : "none");
                                            else if ("tableContent" === i[1].type) {
                                                if ("tableDelimiterMarker" === e[t - 1][1].type) {
                                                    let e = r.length - 1;
                                                    r[e] = "left" === r[e] ? "center" : "right"
                                                }
                                            } else if ("tableDelimiterRow" === i[1].type) break
                                        } else "enter" === i[0] && "tableDelimiterRow" === i[1].type && (n = !0);
                                        t += 1
                                    }
                                    return r
                                }(t.events, l))
                            }
                            return e
                        }
                    }
                }
            };

            function j(e, t, n, r, i, l) {
                0 !== n[0] && (l.end = Object.assign({}, B(t.events, n[0])), e.add(n[0], 0, [
                    ["exit", l, t]
                ]));
                let o = B(t.events, n[1]);
                if (l = {
                        type: 1 === r ? "tableHeader" : 2 === r ? "tableDelimiter" : "tableData",
                        start: Object.assign({}, o),
                        end: Object.assign({}, o)
                    }, e.add(n[1], 0, [
                        ["enter", l, t]
                    ]), 0 !== n[2]) {
                    let i = B(t.events, n[2]),
                        l = B(t.events, n[3]),
                        o = {
                            type: "tableContent",
                            start: Object.assign({}, i),
                            end: Object.assign({}, l)
                        };
                    if (e.add(n[2], 0, [
                            ["enter", o, t]
                        ]), 2 !== r) {
                        let r = t.events[n[2]],
                            i = t.events[n[3]];
                        if (r[1].end = Object.assign({}, i[1].end), r[1].type = "chunkText", r[1].contentType = "text", n[3] > n[2] + 1) {
                            let t = n[2] + 1,
                                r = n[3] - n[2] - 1;
                            e.add(t, r, [])
                        }
                    }
                    e.add(n[3] + 1, 0, [
                        ["exit", o, t]
                    ])
                }
                return void 0 !== i && (l.end = Object.assign({}, B(t.events, i)), e.add(i, 0, [
                    ["exit", l, t]
                ]), l = void 0), l
            }

            function R(e, t, n, r, i) {
                let l = [],
                    o = B(t.events, n);
                i && (i.end = Object.assign({}, o), l.push(["exit", i, t])), r.end = Object.assign({}, o), l.push(["exit", r, t]), e.add(n + 1, 0, l)
            }

            function B(e, t) {
                let n = e[t],
                    r = "enter" === n[0] ? "start" : "end";
                return n[1][r]
            }
            let _ = {
                text: {
                    91: {
                        tokenize: function(e, t, n) {
                            let r = this;
                            return function(t) {
                                return null === r.previous && r._gfmTasklistFirstContentOfListItem ? (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), l) : n(t)
                            };

                            function l(t) {
                                return (0, i.z3)(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), o) : 88 === t || 120 === t ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), o) : n(t)
                            }

                            function o(t) {
                                return 93 === t ? (e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), u) : n(t)
                            }

                            function u(r) {
                                return (0, i.Ch)(r) ? t(r) : (0, i.xz)(r) ? e.check({
                                    tokenize: N
                                }, t, n)(r) : n(r)
                            }
                        }
                    }
                }
            };

            function N(e, t, n) {
                return (0, S.f)(e, function(e) {
                    return null === e ? n(e) : t(e)
                }, "whitespace")
            }
            var H = n(52919),
                U = n(99449),
                V = n(41873);
            let $ = {}.hasOwnProperty,
                q = function(e, t, n, r) {
                    let i, l;
                    "string" == typeof t || t instanceof RegExp ? (l = [
                        [t, n]
                    ], i = r) : (l = t, i = n), i || (i = {});
                    let o = (0, V.O)(i.ignore || []),
                        u = function(e) {
                            let t = [];
                            if ("object" != typeof e) throw TypeError("Expected array or object as schema");
                            if (Array.isArray(e)) {
                                let n = -1;
                                for (; ++n < e.length;) t.push([W(e[n][0]), Q(e[n][1])])
                            } else {
                                let n;
                                for (n in e) $.call(e, n) && t.push([W(n), Q(e[n])])
                            }
                            return t
                        }(l),
                        a = -1;
                    for (; ++a < u.length;)(0, U.S4)(e, "text", c);
                    return e;

                    function c(e, t) {
                        let n, r = -1;
                        for (; ++r < t.length;) {
                            let e = t[r];
                            if (o(e, n ? n.children.indexOf(e) : void 0, n)) return;
                            n = e
                        }
                        if (n) return function(e, t) {
                            let n = t[t.length - 1],
                                r = u[a][0],
                                i = u[a][1],
                                l = 0,
                                o = n.children.indexOf(e),
                                c = !1,
                                s = [];
                            r.lastIndex = 0;
                            let f = r.exec(e.value);
                            for (; f;) {
                                let n = f.index,
                                    o = {
                                        index: f.index,
                                        input: f.input,
                                        stack: [...t, e]
                                    },
                                    u = i(...f, o);
                                if ("string" == typeof u && (u = u.length > 0 ? {
                                        type: "text",
                                        value: u
                                    } : void 0), !1 !== u && (l !== n && s.push({
                                        type: "text",
                                        value: e.value.slice(l, n)
                                    }), Array.isArray(u) ? s.push(...u) : u && s.push(u), l = n + f[0].length, c = !0), !r.global) break;
                                f = r.exec(e.value)
                            }
                            return c ? (l < e.value.length && s.push({
                                type: "text",
                                value: e.value.slice(l)
                            }), n.children.splice(o, 1, ...s)) : s = [e], o + s.length
                        }(e, t)
                    }
                };

            function W(e) {
                return "string" == typeof e ? RegExp(function(e) {
                    if ("string" != typeof e) throw TypeError("Expected a string");
                    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
                }(e), "g") : e
            }

            function Q(e) {
                return "function" == typeof e ? e : () => e
            }
            let Y = "phrasing",
                X = ["autolink", "link", "image", "label"],
                K = {
                    transforms: [function(e) {
                        q(e, [
                            [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, G],
                            [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, ee]
                        ], {
                            ignore: ["link", "linkReference"]
                        })
                    }],
                    enter: {
                        literalAutolink: function(e) {
                            this.enter({
                                type: "link",
                                title: null,
                                url: "",
                                children: []
                            }, e)
                        },
                        literalAutolinkEmail: J,
                        literalAutolinkHttp: J,
                        literalAutolinkWww: J
                    },
                    exit: {
                        literalAutolink: function(e) {
                            this.exit(e)
                        },
                        literalAutolinkEmail: function(e) {
                            this.config.exit.autolinkEmail.call(this, e)
                        },
                        literalAutolinkHttp: function(e) {
                            this.config.exit.autolinkProtocol.call(this, e)
                        },
                        literalAutolinkWww: function(e) {
                            this.config.exit.data.call(this, e);
                            let t = this.stack[this.stack.length - 1];
                            t.url = "http://" + this.sliceSerialize(e)
                        }
                    }
                },
                Z = {
                    unsafe: [{
                        character: "@",
                        before: "[+\\-.\\w]",
                        after: "[\\-.\\w]",
                        inConstruct: Y,
                        notInConstruct: X
                    }, {
                        character: ".",
                        before: "[Ww]",
                        after: "[\\-.\\w]",
                        inConstruct: Y,
                        notInConstruct: X
                    }, {
                        character: ":",
                        before: "[ps]",
                        after: "\\/",
                        inConstruct: Y,
                        notInConstruct: X
                    }]
                };

            function J(e) {
                this.config.enter.autolinkProtocol.call(this, e)
            }

            function G(e, t, n, r, i) {
                let l = "";
                if (!et(i) || (/^w/i.test(t) && (n = t + n, t = "", l = "http://"), ! function(e) {
                        let t = e.split(".");
                        return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])))
                    }(n))) return !1;
                let o = function(e) {
                    let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
                    if (!t) return [e, void 0];
                    e = e.slice(0, t.index);
                    let n = t[0],
                        r = n.indexOf(")"),
                        i = (0, H.w)(e, "("),
                        l = (0, H.w)(e, ")");
                    for (; - 1 !== r && i > l;) e += n.slice(0, r + 1), r = (n = n.slice(r + 1)).indexOf(")"), l++;
                    return [e, n]
                }(n + r);
                if (!o[0]) return !1;
                let u = {
                    type: "link",
                    title: null,
                    url: l + t + o[0],
                    children: [{
                        type: "text",
                        value: t + o[0]
                    }]
                };
                return o[1] ? [u, {
                    type: "text",
                    value: o[1]
                }] : u
            }

            function ee(e, t, n, r) {
                return !(!et(r, !0) || /[-\d_]$/.test(n)) && {
                    type: "link",
                    title: null,
                    url: "mailto:" + t + "@" + n,
                    children: [{
                        type: "text",
                        value: t + "@" + n
                    }]
                }
            }

            function et(e, t) {
                let n = e.input.charCodeAt(e.index - 1);
                return (0 === e.index || (0, i.B8)(n) || (0, i.Xh)(n)) && (!t || 47 !== n)
            }
            var en = n(83531);

            function er(e) {
                return e.label || !e.identifier ? e.label || "" : (0, en.v)(e.identifier)
            }
            let ei = /\r?\n|\r/g;

            function el(e) {
                if (!e._compiled) {
                    let t = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
                    e._compiled = RegExp((t ? "(" + t + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""), "g")
                }
                return e._compiled
            }

            function eo(e, t, n) {
                if ("string" == typeof t && (t = [t]), !t || 0 === t.length) return n;
                let r = -1;
                for (; ++r < t.length;)
                    if (e.includes(t[r])) return !0;
                return !1
            }

            function eu(e, t, n) {
                let r = (n.before || "") + (t || "") + (n.after || ""),
                    i = [],
                    l = [],
                    o = {},
                    u = -1;
                for (; ++u < e.unsafe.length;) {
                    var a;
                    let t;
                    let n = e.unsafe[u];
                    if (!eo(a = e.stack, n.inConstruct, !0) || eo(a, n.notInConstruct, !1)) continue;
                    let l = el(n);
                    for (; t = l.exec(r);) {
                        let e = "before" in n || Boolean(n.atBreak),
                            r = "after" in n,
                            l = t.index + (e ? t[1].length : 0);
                        i.includes(l) ? (o[l].before && !e && (o[l].before = !1), o[l].after && !r && (o[l].after = !1)) : (i.push(l), o[l] = {
                            before: e,
                            after: r
                        })
                    }
                }
                i.sort(ea);
                let c = n.before ? n.before.length : 0,
                    s = r.length - (n.after ? n.after.length : 0);
                for (u = -1; ++u < i.length;) {
                    let e = i[u];
                    !(e < c) && !(e >= s) && (!(e + 1 < s) || i[u + 1] !== e + 1 || !o[e].after || o[e + 1].before || o[e + 1].after) && (i[u - 1] !== e - 1 || !o[e].before || o[e - 1].before || o[e - 1].after) && (c !== e && l.push(ec(r.slice(c, e), "\\")), c = e, !/[!-/:-@[-`{-~]/.test(r.charAt(e)) || n.encode && n.encode.includes(r.charAt(e)) ? (l.push("&#x" + r.charCodeAt(e).toString(16).toUpperCase() + ";"), c++) : l.push("\\"))
                }
                return l.push(ec(r.slice(c, s), n.after)), l.join("")
            }

            function ea(e, t) {
                return e - t
            }

            function ec(e, t) {
                let n;
                let r = /\\(?=[!-/:-@[-`{-~])/g,
                    i = [],
                    l = [],
                    o = e + t,
                    u = -1,
                    a = 0;
                for (; n = r.exec(o);) i.push(n.index);
                for (; ++u < i.length;) a !== i[u] && l.push(e.slice(a, i[u])), l.push("\\"), a = i[u];
                return l.push(e.slice(a)), l.join("")
            }

            function es(e) {
                let t = e || {},
                    n = t.now || {},
                    r = t.lineShift || 0,
                    i = n.line || 1,
                    l = n.column || 1;
                return {
                    move: function(e) {
                        let t = e || "",
                            n = t.split(/\r?\n|\r/g),
                            o = n[n.length - 1];
                        return i += n.length - 1, l = 1 === n.length ? l + o.length : 1 + o.length + r, t
                    },
                    current: function() {
                        return {
                            now: {
                                line: i,
                                column: l
                            },
                            lineShift: r
                        }
                    },
                    shift: function(e) {
                        r += e
                    }
                }
            }

            function ef(e) {
                this.enter({
                    type: "footnoteDefinition",
                    identifier: "",
                    label: "",
                    children: []
                }, e)
            }

            function ep() {
                this.buffer()
            }

            function ed(e) {
                let t = this.resume(),
                    n = this.stack[this.stack.length - 1];
                n.label = t, n.identifier = (0, C.d)(this.sliceSerialize(e)).toLowerCase()
            }

            function eh(e) {
                this.exit(e)
            }

            function em(e) {
                this.enter({
                    type: "footnoteReference",
                    identifier: "",
                    label: ""
                }, e)
            }

            function eg() {
                this.buffer()
            }

            function ey(e) {
                let t = this.resume(),
                    n = this.stack[this.stack.length - 1];
                n.label = t, n.identifier = (0, C.d)(this.sliceSerialize(e)).toLowerCase()
            }

            function eb(e) {
                this.exit(e)
            }

            function ek(e, t, n, r) {
                let i = es(r),
                    l = i.move("[^"),
                    o = n.enter("footnoteReference"),
                    u = n.enter("reference");
                return l += i.move(eu(n, er(e), { ...i.current(),
                    before: l,
                    after: "]"
                })), u(), o(), l += i.move("]")
            }

            function ex(e, t, n, r) {
                let i = es(r),
                    l = i.move("[^"),
                    o = n.enter("footnoteDefinition"),
                    u = n.enter("label");
                return l += i.move(eu(n, er(e), { ...i.current(),
                    before: l,
                    after: "]"
                })), u(), l += i.move("]:" + (e.children && e.children.length > 0 ? " " : "")), i.shift(4), l += i.move(function(e, t) {
                    let n;
                    let r = [],
                        i = 0,
                        l = 0;
                    for (; n = ei.exec(e);) o(e.slice(i, n.index)), r.push(n[0]), i = n.index + n[0].length, l++;
                    return o(e.slice(i)), r.join("");

                    function o(e) {
                        r.push(t(e, l, !e))
                    }
                }(function(e, t, n) {
                    let r = t.indexStack,
                        i = e.children || [],
                        l = t.createTracker(n),
                        o = [],
                        u = -1;
                    for (r.push(-1); ++u < i.length;) {
                        let n = i[u];
                        r[r.length - 1] = u, o.push(l.move(t.handle(n, e, t, {
                            before: "\n",
                            after: "\n",
                            ...l.current()
                        }))), "list" !== n.type && (t.bulletLastUsed = void 0), u < i.length - 1 && o.push(l.move(function(e, t, n, r) {
                            let i = r.join.length;
                            for (; i--;) {
                                let l = r.join[i](e, t, n, r);
                                if (!0 === l || 1 === l) break;
                                if ("number" == typeof l) return "\n".repeat(1 + l);
                                if (!1 === l) return "\n\n<!---->\n\n"
                            }
                            return "\n\n"
                        }(n, i[u + 1], e, t)))
                    }
                    return r.pop(), o.join("")
                }(e, n, i.current()), ev)), o(), l
            }

            function ev(e, t, n) {
                return 0 === t ? e : (n ? "" : "    ") + e
            }

            function eS(e, t, n) {
                let r = t.indexStack,
                    i = e.children || [],
                    l = [],
                    o = -1,
                    u = n.before;
                r.push(-1);
                let a = t.createTracker(n);
                for (; ++o < i.length;) {
                    let c;
                    let s = i[o];
                    if (r[r.length - 1] = o, o + 1 < i.length) {
                        let n = t.handle.handlers[i[o + 1].type];
                        n && n.peek && (n = n.peek), c = n ? n(i[o + 1], e, t, {
                            before: "",
                            after: "",
                            ...a.current()
                        }).charAt(0) : ""
                    } else c = n.after;
                    l.length > 0 && ("\r" === u || "\n" === u) && "html" === s.type && (l[l.length - 1] = l[l.length - 1].replace(/(\r?\n|\r)$/, " "), u = " ", (a = t.createTracker(n)).move(l.join(""))), l.push(a.move(t.handle(s, e, t, { ...a.current(),
                        before: u,
                        after: c
                    }))), u = l[l.length - 1].slice(-1)
                }
                return r.pop(), l.join("")
            }
            ek.peek = function() {
                return "["
            }, eF.peek = function() {
                return "~"
            };
            let eC = {
                    canContainEols: ["delete"],
                    enter: {
                        strikethrough: function(e) {
                            this.enter({
                                type: "delete",
                                children: []
                            }, e)
                        }
                    },
                    exit: {
                        strikethrough: function(e) {
                            this.exit(e)
                        }
                    }
                },
                ew = {
                    unsafe: [{
                        character: "~",
                        inConstruct: "phrasing",
                        notInConstruct: ["autolink", "destinationLiteral", "destinationRaw", "reference", "titleQuote", "titleApostrophe"]
                    }],
                    handlers: {
                        delete: eF
                    }
                };

            function eF(e, t, n, r) {
                let i = es(r),
                    l = n.enter("strikethrough"),
                    o = i.move("~~");
                return o += eS(e, n, { ...i.current(),
                    before: o,
                    after: "~"
                }) + i.move("~~"), l(), o
            }

            function eE(e, t, n) {
                let r = e.value || "",
                    i = "`",
                    l = -1;
                for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r);) i += "`";
                for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++l < n.unsafe.length;) {
                    let e;
                    let t = n.unsafe[l],
                        i = el(t);
                    if (t.atBreak)
                        for (; e = i.exec(r);) {
                            let t = e.index;
                            10 === r.charCodeAt(t) && 13 === r.charCodeAt(t - 1) && t--, r = r.slice(0, t) + " " + r.slice(e.index + 1)
                        }
                }
                return i + r + i
            }

            function eA(e) {
                return e.length
            }

            function eD(e) {
                let t = "string" == typeof e ? e.codePointAt(0) : 0;
                return 67 === t || 99 === t ? 99 : 76 === t || 108 === t ? 108 : 82 === t || 114 === t ? 114 : 0
            }
            eE.peek = function() {
                return "`"
            };
            let ez = {
                enter: {
                    table: function(e) {
                        let t = e._align;
                        this.enter({
                            type: "table",
                            align: t.map(e => "none" === e ? null : e),
                            children: []
                        }, e), this.setData("inTable", !0)
                    },
                    tableData: eT,
                    tableHeader: eT,
                    tableRow: function(e) {
                        this.enter({
                            type: "tableRow",
                            children: []
                        }, e)
                    }
                },
                exit: {
                    codeText: function(e) {
                        let t = this.resume();
                        this.getData("inTable") && (t = t.replace(/\\([\\|])/g, eP));
                        let n = this.stack[this.stack.length - 1];
                        n.value = t, this.exit(e)
                    },
                    table: function(e) {
                        this.exit(e), this.setData("inTable")
                    },
                    tableData: eO,
                    tableHeader: eO,
                    tableRow: eO
                }
            };

            function eO(e) {
                this.exit(e)
            }

            function eT(e) {
                this.enter({
                    type: "tableCell",
                    children: []
                }, e)
            }

            function eP(e, t) {
                return "|" === t ? t : e
            }
            let eL = {
                    exit: {
                        taskListCheckValueChecked: eM,
                        taskListCheckValueUnchecked: eM,
                        paragraph: function(e) {
                            let t = this.stack[this.stack.length - 2];
                            if (t && "listItem" === t.type && "boolean" == typeof t.checked) {
                                let e = this.stack[this.stack.length - 1],
                                    n = e.children[0];
                                if (n && "text" === n.type) {
                                    let r;
                                    let i = t.children,
                                        l = -1;
                                    for (; ++l < i.length;) {
                                        let e = i[l];
                                        if ("paragraph" === e.type) {
                                            r = e;
                                            break
                                        }
                                    }
                                    r === e && (n.value = n.value.slice(1), 0 === n.value.length ? e.children.shift() : e.position && n.position && "number" == typeof n.position.start.offset && (n.position.start.column++, n.position.start.offset++, e.position.start = Object.assign({}, n.position.start)))
                                }
                            }
                            this.exit(e)
                        }
                    }
                },
                eI = {
                    unsafe: [{
                        atBreak: !0,
                        character: "-",
                        after: "[:|-]"
                    }],
                    handlers: {
                        listItem: function(e, t, n, r) {
                            let i = e.children[0],
                                l = "boolean" == typeof e.checked && i && "paragraph" === i.type,
                                o = "[" + (e.checked ? "x" : " ") + "] ",
                                u = es(r);
                            l && u.move(o);
                            let a = function(e, t, n, r) {
                                let i = function(e) {
                                        let t = e.options.listItemIndent || "tab";
                                        if (1 === t || "1" === t) return "one";
                                        if ("tab" !== t && "one" !== t && "mixed" !== t) throw Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
                                        return t
                                    }(n),
                                    l = n.bulletCurrent || function(e) {
                                        let t = e.options.bullet || "*";
                                        if ("*" !== t && "+" !== t && "-" !== t) throw Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
                                        return t
                                    }(n);
                                t && "list" === t.type && t.ordered && (l = ("number" == typeof t.start && t.start > -1 ? t.start : 1) + (!1 === n.options.incrementListMarker ? 0 : t.children.indexOf(e)) + l);
                                let o = l.length + 1;
                                ("tab" === i || "mixed" === i && (t && "list" === t.type && t.spread || e.spread)) && (o = 4 * Math.ceil(o / 4));
                                let u = n.createTracker(r);
                                u.move(l + " ".repeat(o - l.length)), u.shift(o);
                                let a = n.enter("listItem"),
                                    c = n.indentLines(n.containerFlow(e, u.current()), function(e, t, n) {
                                        return t ? (n ? "" : " ".repeat(o)) + e : (n ? l : l + " ".repeat(o - l.length)) + e
                                    });
                                return a(), c
                            }(e, t, n, { ...r,
                                ...u.current()
                            });
                            return l && (a = a.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, function(e) {
                                return e + o
                            })), a
                        }
                    }
                };

            function eM(e) {
                let t = this.stack[this.stack.length - 2];
                t.checked = "taskListCheckValueChecked" === e.type
            }

            function ej(e = {}) {
                let t = this.data();

                function n(e, n) {
                    let r = t[e] ? t[e] : t[e] = [];
                    r.push(n)
                }
                n("micromarkExtensions", (0, r.W)([h, {
                    document: {
                        91: {
                            tokenize: D,
                            continuation: {
                                tokenize: z
                            },
                            exit: O
                        }
                    },
                    text: {
                        91: {
                            tokenize: A
                        },
                        93: {
                            add: "after",
                            tokenize: F,
                            resolveTo: E
                        }
                    }
                }, function(e) {
                    let t = (e || {}).singleTilde,
                        n = {
                            tokenize: function(e, n, r) {
                                let i = this.previous,
                                    l = this.events,
                                    o = 0;
                                return function(u) {
                                    return 126 === i && "characterEscape" !== l[l.length - 1][1].type ? r(u) : (e.enter("strikethroughSequenceTemporary"), function l(u) {
                                        let a = (0, P.r)(i);
                                        if (126 === u) return o > 1 ? r(u) : (e.consume(u), o++, l);
                                        if (o < 2 && !t) return r(u);
                                        let c = e.exit("strikethroughSequenceTemporary"),
                                            s = (0, P.r)(u);
                                        return c._open = !s || 2 === s && Boolean(a), c._close = !a || 2 === a && Boolean(s), n(u)
                                    }(u))
                                }
                            },
                            resolveAll: function(e, t) {
                                let n = -1;
                                for (; ++n < e.length;)
                                    if ("enter" === e[n][0] && "strikethroughSequenceTemporary" === e[n][1].type && e[n][1]._close) {
                                        let r = n;
                                        for (; r--;)
                                            if ("exit" === e[r][0] && "strikethroughSequenceTemporary" === e[r][1].type && e[r][1]._open && e[n][1].end.offset - e[n][1].start.offset == e[r][1].end.offset - e[r][1].start.offset) {
                                                e[n][1].type = "strikethroughSequence", e[r][1].type = "strikethroughSequence";
                                                let i = {
                                                        type: "strikethrough",
                                                        start: Object.assign({}, e[r][1].start),
                                                        end: Object.assign({}, e[n][1].end)
                                                    },
                                                    l = {
                                                        type: "strikethroughText",
                                                        start: Object.assign({}, e[r][1].end),
                                                        end: Object.assign({}, e[n][1].start)
                                                    },
                                                    o = [
                                                        ["enter", i, t],
                                                        ["enter", e[r][1], t],
                                                        ["exit", e[r][1], t],
                                                        ["enter", l, t]
                                                    ],
                                                    u = t.parser.constructs.insideSpan.null;
                                                u && (0, T.d)(o, o.length, 0, (0, L.C)(u, e.slice(r + 1, n), t)), (0, T.d)(o, o.length, 0, [
                                                    ["exit", l, t],
                                                    ["enter", e[n][1], t],
                                                    ["exit", e[n][1], t],
                                                    ["exit", i, t]
                                                ]), (0, T.d)(e, r - 1, n - r + 3, o), n = r + o.length - 2;
                                                break
                                            }
                                    }
                                for (n = -1; ++n < e.length;) "strikethroughSequenceTemporary" === e[n][1].type && (e[n][1].type = "data");
                                return e
                            }
                        };
                    return null == t && (t = !0), {
                        text: {
                            126: n
                        },
                        insideSpan: {
                            null: [n]
                        },
                        attentionMarkers: {
                            null: [126]
                        }
                    }
                }(e), M, _])), n("fromMarkdownExtensions", [K, {
                    enter: {
                        gfmFootnoteDefinition: ef,
                        gfmFootnoteDefinitionLabelString: ep,
                        gfmFootnoteCall: em,
                        gfmFootnoteCallString: eg
                    },
                    exit: {
                        gfmFootnoteDefinition: eh,
                        gfmFootnoteDefinitionLabelString: ed,
                        gfmFootnoteCall: eb,
                        gfmFootnoteCallString: ey
                    }
                }, eC, ez, eL]), n("toMarkdownExtensions", {
                    extensions: [Z, {
                        unsafe: [{
                            character: "[",
                            inConstruct: ["phrasing", "label", "reference"]
                        }],
                        handlers: {
                            footnoteDefinition: ex,
                            footnoteReference: ek
                        }
                    }, ew, function(e) {
                        let t = e || {},
                            n = t.tableCellPadding,
                            r = t.tablePipeAlign,
                            i = t.stringLength,
                            l = n ? " " : "|";
                        return {
                            unsafe: [{
                                character: "\r",
                                inConstruct: "tableCell"
                            }, {
                                character: "\n",
                                inConstruct: "tableCell"
                            }, {
                                atBreak: !0,
                                character: "|",
                                after: "[	 :-]"
                            }, {
                                character: "|",
                                inConstruct: "tableCell"
                            }, {
                                atBreak: !0,
                                character: ":",
                                after: "-"
                            }, {
                                atBreak: !0,
                                character: "-",
                                after: "[:|-]"
                            }],
                            handlers: {
                                table: function(e, t, n, r) {
                                    return u(function(e, t, n) {
                                        let r = e.children,
                                            i = -1,
                                            l = [],
                                            o = t.enter("table");
                                        for (; ++i < r.length;) l[i] = a(r[i], t, n);
                                        return o(), l
                                    }(e, n, r), e.align)
                                },
                                tableRow: function(e, t, n, r) {
                                    let i = a(e, n, r),
                                        l = u([i]);
                                    return l.slice(0, l.indexOf("\n"))
                                },
                                tableCell: o,
                                inlineCode: function(e, t, n) {
                                    let r = eE(e, t, n);
                                    return n.stack.includes("tableCell") && (r = r.replace(/\|/g, "\\$&")), r
                                }
                            }
                        };

                        function o(e, t, n, r) {
                            let i = n.enter("tableCell"),
                                o = n.enter("phrasing"),
                                u = eS(e, n, { ...r,
                                    before: l,
                                    after: l
                                });
                            return o(), i(), u
                        }

                        function u(e, t) {
                            return function(e, t = {}) {
                                let n = (t.align || []).concat(),
                                    r = t.stringLength || eA,
                                    i = [],
                                    l = [],
                                    o = [],
                                    u = [],
                                    a = 0,
                                    c = -1;
                                for (; ++c < e.length;) {
                                    let n = [],
                                        i = [],
                                        f = -1;
                                    for (e[c].length > a && (a = e[c].length); ++f < e[c].length;) {
                                        var s;
                                        let l = null == (s = e[c][f]) ? "" : String(s);
                                        if (!1 !== t.alignDelimiters) {
                                            let e = r(l);
                                            i[f] = e, (void 0 === u[f] || e > u[f]) && (u[f] = e)
                                        }
                                        n.push(l)
                                    }
                                    l[c] = n, o[c] = i
                                }
                                let f = -1;
                                if ("object" == typeof n && "length" in n)
                                    for (; ++f < a;) i[f] = eD(n[f]);
                                else {
                                    let e = eD(n);
                                    for (; ++f < a;) i[f] = e
                                }
                                f = -1;
                                let p = [],
                                    d = [];
                                for (; ++f < a;) {
                                    let e = i[f],
                                        n = "",
                                        r = "";
                                    99 === e ? (n = ":", r = ":") : 108 === e ? n = ":" : 114 === e && (r = ":");
                                    let l = !1 === t.alignDelimiters ? 1 : Math.max(1, u[f] - n.length - r.length),
                                        o = n + "-".repeat(l) + r;
                                    !1 !== t.alignDelimiters && ((l = n.length + l + r.length) > u[f] && (u[f] = l), d[f] = l), p[f] = o
                                }
                                l.splice(1, 0, p), o.splice(1, 0, d), c = -1;
                                let h = [];
                                for (; ++c < l.length;) {
                                    let e = l[c],
                                        n = o[c];
                                    f = -1;
                                    let r = [];
                                    for (; ++f < a;) {
                                        let l = e[f] || "",
                                            o = "",
                                            c = "";
                                        if (!1 !== t.alignDelimiters) {
                                            let e = u[f] - (n[f] || 0),
                                                t = i[f];
                                            114 === t ? o = " ".repeat(e) : 99 === t ? e % 2 ? (o = " ".repeat(e / 2 + .5), c = " ".repeat(e / 2 - .5)) : c = o = " ".repeat(e / 2) : c = " ".repeat(e)
                                        }!1 === t.delimiterStart || f || r.push("|"), !1 !== t.padding && !(!1 === t.alignDelimiters && "" === l) && (!1 !== t.delimiterStart || f) && r.push(" "), !1 !== t.alignDelimiters && r.push(o), r.push(l), !1 !== t.alignDelimiters && r.push(c), !1 !== t.padding && r.push(" "), (!1 !== t.delimiterEnd || f !== a - 1) && r.push("|")
                                    }
                                    h.push(!1 === t.delimiterEnd ? r.join("").replace(/ +$/, "") : r.join(""))
                                }
                                return h.join("\n")
                            }(e, {
                                align: t,
                                alignDelimiters: r,
                                padding: n,
                                stringLength: i
                            })
                        }

                        function a(e, t, n) {
                            let r = e.children,
                                i = -1,
                                l = [],
                                u = t.enter("tableRow");
                            for (; ++i < r.length;) l[i] = o(r[i], e, t, n);
                            return u(), l
                        }
                    }(e), eI]
                })
            }
        },
        62825: function(e, t, n) {
            "use strict";

            function r(e) {
                let t = String(e || "").trim();
                return t ? t.split(/[ \t\n\r\f]+/g) : []
            }

            function i(e) {
                return e.join(" ").trim()
            }
            n.d(t, {
                P: function() {
                    return i
                },
                Q: function() {
                    return r
                }
            })
        },
        62826: function(e, t, n) {
            "use strict";

            function r(e) {
                if (e) throw e
            }
            n.d(t, {
                l: function() {
                    return a
                }
            });
            var i = n(163),
                l = n(58736);

            function o(e) {
                if ("object" != typeof e || null === e) return !1;
                let t = Object.getPrototypeOf(e);
                return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
            }
            var u = n(32023);
            let a = (function e() {
                    let t;
                    let n = function() {
                            let e = [],
                                t = {
                                    run: function(...t) {
                                        let n = -1,
                                            r = t.pop();
                                        if ("function" != typeof r) throw TypeError("Expected function as last argument, not " + r);
                                        ! function i(l, ...o) {
                                            let u = e[++n],
                                                a = -1;
                                            if (l) {
                                                r(l);
                                                return
                                            }
                                            for (; ++a < t.length;)(null === o[a] || void 0 === o[a]) && (o[a] = t[a]);
                                            t = o, u ? (function(e, t) {
                                                let n;
                                                return function(...t) {
                                                    let l;
                                                    let o = e.length > t.length;
                                                    o && t.push(r);
                                                    try {
                                                        l = e.apply(this, t)
                                                    } catch (e) {
                                                        if (o && n) throw e;
                                                        return r(e)
                                                    }
                                                    o || (l instanceof Promise ? l.then(i, r) : l instanceof Error ? r(l) : i(l))
                                                };

                                                function r(e, ...i) {
                                                    n || (n = !0, t(e, ...i))
                                                }

                                                function i(e) {
                                                    r(null, e)
                                                }
                                            })(u, i)(...o) : r(null, ...o)
                                        }(null, ...t)
                                    },
                                    use: function(n) {
                                        if ("function" != typeof n) throw TypeError("Expected `middelware` to be a function, not " + n);
                                        return e.push(n), t
                                    }
                                };
                            return t
                        }(),
                        u = [],
                        a = {},
                        y = -1;
                    return b.data = function(e, n) {
                        return "string" == typeof e ? 2 == arguments.length ? (d("data", t), a[e] = n, b) : c.call(a, e) && a[e] || null : e ? (d("data", t), a = e, b) : a
                    }, b.Parser = void 0, b.Compiler = void 0, b.freeze = function() {
                        if (t) return b;
                        for (; ++y < u.length;) {
                            let [e, ...t] = u[y];
                            if (!1 === t[0]) continue;
                            !0 === t[0] && (t[0] = void 0);
                            let r = e.call(b, ...t);
                            "function" == typeof r && n.use(r)
                        }
                        return t = !0, y = Number.POSITIVE_INFINITY, b
                    }, b.attachers = u, b.use = function(e, ...n) {
                        let r;
                        if (d("use", t), null == e);
                        else if ("function" == typeof e) s(e, ...n);
                        else if ("object" == typeof e) Array.isArray(e) ? c(e) : i(e);
                        else throw TypeError("Expected usable value, not `" + e + "`");
                        return r && (a.settings = Object.assign(a.settings || {}, r)), b;

                        function i(e) {
                            c(e.plugins), e.settings && (r = Object.assign(r || {}, e.settings))
                        }

                        function c(e) {
                            let t = -1;
                            if (null == e);
                            else if (Array.isArray(e))
                                for (; ++t < e.length;) {
                                    let n = e[t];
                                    ! function(e) {
                                        if ("function" == typeof e) s(e);
                                        else if ("object" == typeof e) {
                                            if (Array.isArray(e)) {
                                                let [t, ...n] = e;
                                                s(t, ...n)
                                            } else i(e)
                                        } else throw TypeError("Expected usable value, not `" + e + "`")
                                    }(n)
                                } else throw TypeError("Expected a list of plugins, not `" + e + "`")
                        }

                        function s(e, t) {
                            let n, r = -1;
                            for (; ++r < u.length;)
                                if (u[r][0] === e) {
                                    n = u[r];
                                    break
                                }
                            n ? (o(n[1]) && o(t) && (t = l(!0, n[1], t)), n[1] = t) : u.push([...arguments])
                        }
                    }, b.parse = function(e) {
                        b.freeze();
                        let t = g(e),
                            n = b.Parser;
                        return (f("parse", n), s(n, "parse")) ? new n(String(t), t).parse() : n(String(t), t)
                    }, b.stringify = function(e, t) {
                        b.freeze();
                        let n = g(t),
                            r = b.Compiler;
                        return (p("stringify", r), h(e), s(r, "compile")) ? new r(e, n).compile() : r(e, n)
                    }, b.run = function(e, t, r) {
                        if (h(e), b.freeze(), r || "function" != typeof t || (r = t, t = void 0), !r) return new Promise(i);

                        function i(i, l) {
                            n.run(e, g(t), function(t, n, o) {
                                n = n || e, t ? l(t) : i ? i(n) : r(null, n, o)
                            })
                        }
                        i(null, r)
                    }, b.runSync = function(e, t) {
                        let n, i;
                        return b.run(e, t, function(e, t) {
                            r(e), n = t, i = !0
                        }), m("runSync", "run", i), n
                    }, b.process = function(e, t) {
                        if (b.freeze(), f("process", b.Parser), p("process", b.Compiler), !t) return new Promise(n);

                        function n(n, r) {
                            let l = g(e);

                            function o(e, i) {
                                e || !i ? r(e) : n ? n(i) : t(null, i)
                            }
                            b.run(b.parse(l), l, (e, t, n) => {
                                if (!e && t && n) {
                                    let r = b.stringify(t, n);
                                    null == r || ("string" == typeof r || i(r) ? n.value = r : n.result = r), o(e, n)
                                } else o(e)
                            })
                        }
                        n(null, t)
                    }, b.processSync = function(e) {
                        let t;
                        b.freeze(), f("processSync", b.Parser), p("processSync", b.Compiler);
                        let n = g(e);
                        return b.process(n, function(e) {
                            t = !0, r(e)
                        }), m("processSync", "process", t), n
                    }, b;

                    function b() {
                        let t = e(),
                            n = -1;
                        for (; ++n < u.length;) t.use(...u[n]);
                        return t.data(l(!0, {}, a)), t
                    }
                })().freeze(),
                c = {}.hasOwnProperty;

            function s(e, t) {
                return "function" == typeof e && e.prototype && (function(e) {
                    let t;
                    for (t in e)
                        if (c.call(e, t)) return !0;
                    return !1
                }(e.prototype) || t in e.prototype)
            }

            function f(e, t) {
                if ("function" != typeof t) throw TypeError("Cannot `" + e + "` without `Parser`")
            }

            function p(e, t) {
                if ("function" != typeof t) throw TypeError("Cannot `" + e + "` without `Compiler`")
            }

            function d(e, t) {
                if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
            }

            function h(e) {
                if (!o(e) || "string" != typeof e.type) throw TypeError("Expected node, got `" + e + "`")
            }

            function m(e, t, n) {
                if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead")
            }

            function g(e) {
                return Boolean(e && "object" == typeof e && "message" in e && "messages" in e) ? e : new u.k(e)
            }
        },
        41873: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return r
                }
            });
            let r = function(e) {
                if (null == e) return l;
                if ("string" == typeof e) return i(function(t) {
                    return t && t.type === e
                });
                if ("object" == typeof e) return Array.isArray(e) ? function(e) {
                    let t = [],
                        n = -1;
                    for (; ++n < e.length;) t[n] = r(e[n]);
                    return i(function(...e) {
                        let n = -1;
                        for (; ++n < t.length;)
                            if (t[n].call(this, ...e)) return !0;
                        return !1
                    })
                }(e) : i(function(t) {
                    let n;
                    for (n in e)
                        if (t[n] !== e[n]) return !1;
                    return !0
                });
                if ("function" == typeof e) return i(e);
                throw Error("Expected function, string, or object as test")
            };

            function i(e) {
                return function(t, ...n) {
                    return Boolean(t && "object" == typeof t && "type" in t && Boolean(e.call(this, t, ...n)))
                }
            }

            function l() {
                return !0
            }
        },
        36036: function(e, t, n) {
            "use strict";
            n.d(t, {
                FK: function() {
                    return l
                },
                Pk: function() {
                    return r
                },
                rb: function() {
                    return i
                }
            });
            let r = o("start"),
                i = o("end");

            function l(e) {
                return {
                    start: r(e),
                    end: i(e)
                }
            }

            function o(e) {
                return function(t) {
                    let n = t && t.position && t.position[e] || {};
                    return {
                        line: n.line || null,
                        column: n.column || null,
                        offset: n.offset > -1 ? n.offset : null
                    }
                }
            }
        },
        21262: function(e, t, n) {
            "use strict";

            function r(e) {
                return e && "object" == typeof e ? "position" in e || "type" in e ? l(e.position) : "start" in e || "end" in e ? l(e) : "line" in e || "column" in e ? i(e) : "" : ""
            }

            function i(e) {
                return o(e && e.line) + ":" + o(e && e.column)
            }

            function l(e) {
                return i(e && e.start) + "-" + i(e && e.end)
            }

            function o(e) {
                return e && "number" == typeof e ? e : 1
            }
            n.d(t, {
                y: function() {
                    return r
                }
            })
        },
        99449: function(e, t, n) {
            "use strict";
            n.d(t, {
                BK: function() {
                    return i
                },
                AM: function() {
                    return l
                },
                S4: function() {
                    return o
                }
            });
            var r = n(41873);
            let i = !1,
                l = "skip",
                o = function(e, t, n, o) {
                    "function" == typeof t && "function" != typeof n && (o = n, n = t, t = null);
                    let u = (0, r.O)(t),
                        a = o ? -1 : 1;
                    (function e(r, c, s) {
                        let f = r && "object" == typeof r ? r : {};
                        if ("string" == typeof f.type) {
                            let e = "string" == typeof f.tagName ? f.tagName : "string" == typeof f.name ? f.name : void 0;
                            Object.defineProperty(p, "name", {
                                value: "node (" + r.type + (e ? "<" + e + ">" : "") + ")"
                            })
                        }
                        return p;

                        function p() {
                            var f;
                            let p, d, h, m = [];
                            if ((!t || u(r, c, s[s.length - 1] || null)) && (m = Array.isArray(f = n(r, s)) ? f : "number" == typeof f ? [!0, f] : [f])[0] === i) return m;
                            if (r.children && m[0] !== l)
                                for (d = (o ? r.children.length : -1) + a, h = s.concat(r); d > -1 && d < r.children.length;) {
                                    if ((p = e(r.children[d], d, h)())[0] === i) return p;
                                    d = "number" == typeof p[1] ? p[1] : d + a
                                }
                            return m
                        }
                    })(e, void 0, [])()
                }
        },
        65402: function(e, t, n) {
            "use strict";
            n.d(t, {
                Vn: function() {
                    return i
                }
            });
            var r = n(99449);
            let i = function(e, t, n, i) {
                "function" == typeof t && "function" != typeof n && (i = n, n = t, t = null), (0, r.S4)(e, t, function(e, t) {
                    let r = t[t.length - 1];
                    return n(e, r ? r.children.indexOf(e) : null, r)
                }, i)
            }
        },
        32023: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return f
                }
            });
            var r = n(163),
                i = n(21262);
            class l extends Error {
                constructor(e, t, n) {
                    let r = [null, null],
                        l = {
                            start: {
                                line: null,
                                column: null
                            },
                            end: {
                                line: null,
                                column: null
                            }
                        };
                    if (super(), "string" == typeof t && (n = t, t = void 0), "string" == typeof n) {
                        let e = n.indexOf(":"); - 1 === e ? r[1] = n : (r[0] = n.slice(0, e), r[1] = n.slice(e + 1))
                    }
                    t && ("type" in t || "position" in t ? t.position && (l = t.position) : "start" in t || "end" in t ? l = t : ("line" in t || "column" in t) && (l.start = t)), this.name = (0, i.y)(t) || "1:1", this.message = "object" == typeof e ? e.message : e, this.stack = "", "object" == typeof e && e.stack && (this.stack = e.stack), this.reason = this.message, this.fatal, this.line = l.start.line, this.column = l.start.column, this.position = l, this.source = r[0], this.ruleId = r[1], this.file, this.actual, this.expected, this.url, this.note
                }
            }
            l.prototype.file = "", l.prototype.name = "", l.prototype.reason = "", l.prototype.message = "", l.prototype.stack = "", l.prototype.fatal = null, l.prototype.column = null, l.prototype.line = null, l.prototype.source = null, l.prototype.ruleId = null, l.prototype.position = null;
            let o = {
                basename: function(e, t) {
                    let n;
                    if (void 0 !== t && "string" != typeof t) throw TypeError('"ext" argument must be a string');
                    u(e);
                    let r = 0,
                        i = -1,
                        l = e.length;
                    if (void 0 === t || 0 === t.length || t.length > e.length) {
                        for (; l--;)
                            if (47 === e.charCodeAt(l)) {
                                if (n) {
                                    r = l + 1;
                                    break
                                }
                            } else i < 0 && (n = !0, i = l + 1);
                        return i < 0 ? "" : e.slice(r, i)
                    }
                    if (t === e) return "";
                    let o = -1,
                        a = t.length - 1;
                    for (; l--;)
                        if (47 === e.charCodeAt(l)) {
                            if (n) {
                                r = l + 1;
                                break
                            }
                        } else o < 0 && (n = !0, o = l + 1), a > -1 && (e.charCodeAt(l) === t.charCodeAt(a--) ? a < 0 && (i = l) : (a = -1, i = o));
                    return r === i ? i = o : i < 0 && (i = e.length), e.slice(r, i)
                },
                dirname: function(e) {
                    let t;
                    if (u(e), 0 === e.length) return ".";
                    let n = -1,
                        r = e.length;
                    for (; --r;)
                        if (47 === e.charCodeAt(r)) {
                            if (t) {
                                n = r;
                                break
                            }
                        } else t || (t = !0);
                    return n < 0 ? 47 === e.charCodeAt(0) ? "/" : "." : 1 === n && 47 === e.charCodeAt(0) ? "//" : e.slice(0, n)
                },
                extname: function(e) {
                    let t;
                    u(e);
                    let n = e.length,
                        r = -1,
                        i = 0,
                        l = -1,
                        o = 0;
                    for (; n--;) {
                        let u = e.charCodeAt(n);
                        if (47 === u) {
                            if (t) {
                                i = n + 1;
                                break
                            }
                            continue
                        }
                        r < 0 && (t = !0, r = n + 1), 46 === u ? l < 0 ? l = n : 1 !== o && (o = 1) : l > -1 && (o = -1)
                    }
                    return l < 0 || r < 0 || 0 === o || 1 === o && l === r - 1 && l === i + 1 ? "" : e.slice(l, r)
                },
                join: function(...e) {
                    let t, n = -1;
                    for (; ++n < e.length;) u(e[n]), e[n] && (t = void 0 === t ? e[n] : t + "/" + e[n]);
                    return void 0 === t ? "." : function(e) {
                        u(e);
                        let t = 47 === e.charCodeAt(0),
                            n = function(e, t) {
                                let n, r, i = "",
                                    l = 0,
                                    o = -1,
                                    u = 0,
                                    a = -1;
                                for (; ++a <= e.length;) {
                                    if (a < e.length) n = e.charCodeAt(a);
                                    else if (47 === n) break;
                                    else n = 47;
                                    if (47 === n) {
                                        if (o === a - 1 || 1 === u);
                                        else if (o !== a - 1 && 2 === u) {
                                            if (i.length < 2 || 2 !== l || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2)) {
                                                if (i.length > 2) {
                                                    if ((r = i.lastIndexOf("/")) !== i.length - 1) {
                                                        r < 0 ? (i = "", l = 0) : l = (i = i.slice(0, r)).length - 1 - i.lastIndexOf("/"), o = a, u = 0;
                                                        continue
                                                    }
                                                } else if (i.length > 0) {
                                                    i = "", l = 0, o = a, u = 0;
                                                    continue
                                                }
                                            }
                                            t && (i = i.length > 0 ? i + "/.." : "..", l = 2)
                                        } else i.length > 0 ? i += "/" + e.slice(o + 1, a) : i = e.slice(o + 1, a), l = a - o - 1;
                                        o = a, u = 0
                                    } else 46 === n && u > -1 ? u++ : u = -1
                                }
                                return i
                            }(e, !t);
                        return 0 !== n.length || t || (n = "."), n.length > 0 && 47 === e.charCodeAt(e.length - 1) && (n += "/"), t ? "/" + n : n
                    }(t)
                },
                sep: "/"
            };

            function u(e) {
                if ("string" != typeof e) throw TypeError("Path must be a string. Received " + JSON.stringify(e))
            }
            let a = {
                cwd: function() {
                    return "/"
                }
            };

            function c(e) {
                return null !== e && "object" == typeof e && e.href && e.origin
            }
            let s = ["history", "path", "basename", "stem", "extname", "dirname"];
            class f {
                constructor(e) {
                    let t, n;
                    t = e ? "string" == typeof e || r(e) ? {
                        value: e
                    } : c(e) ? {
                        path: e
                    } : e : {}, this.data = {}, this.messages = [], this.history = [], this.cwd = a.cwd(), this.value, this.stored, this.result, this.map;
                    let i = -1;
                    for (; ++i < s.length;) {
                        let e = s[i];
                        e in t && void 0 !== t[e] && null !== t[e] && (this[e] = "history" === e ? [...t[e]] : t[e])
                    }
                    for (n in t) s.includes(n) || (this[n] = t[n])
                }
                get path() {
                    return this.history[this.history.length - 1]
                }
                set path(e) {
                    c(e) && (e = function(e) {
                        if ("string" == typeof e) e = new URL(e);
                        else if (!c(e)) {
                            let t = TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
                            throw t.code = "ERR_INVALID_ARG_TYPE", t
                        }
                        if ("file:" !== e.protocol) {
                            let e = TypeError("The URL must be of scheme file");
                            throw e.code = "ERR_INVALID_URL_SCHEME", e
                        }
                        return function(e) {
                            if ("" !== e.hostname) {
                                let e = TypeError('File URL host must be "localhost" or empty on darwin');
                                throw e.code = "ERR_INVALID_FILE_URL_HOST", e
                            }
                            let t = e.pathname,
                                n = -1;
                            for (; ++n < t.length;)
                                if (37 === t.charCodeAt(n) && 50 === t.charCodeAt(n + 1)) {
                                    let e = t.charCodeAt(n + 2);
                                    if (70 === e || 102 === e) {
                                        let e = TypeError("File URL path must not include encoded / characters");
                                        throw e.code = "ERR_INVALID_FILE_URL_PATH", e
                                    }
                                }
                            return decodeURIComponent(t)
                        }(e)
                    }(e)), d(e, "path"), this.path !== e && this.history.push(e)
                }
                get dirname() {
                    return "string" == typeof this.path ? o.dirname(this.path) : void 0
                }
                set dirname(e) {
                    h(this.basename, "dirname"), this.path = o.join(e || "", this.basename)
                }
                get basename() {
                    return "string" == typeof this.path ? o.basename(this.path) : void 0
                }
                set basename(e) {
                    d(e, "basename"), p(e, "basename"), this.path = o.join(this.dirname || "", e)
                }
                get extname() {
                    return "string" == typeof this.path ? o.extname(this.path) : void 0
                }
                set extname(e) {
                    if (p(e, "extname"), h(this.dirname, "extname"), e) {
                        if (46 !== e.charCodeAt(0)) throw Error("`extname` must start with `.`");
                        if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots")
                    }
                    this.path = o.join(this.dirname, this.stem + (e || ""))
                }
                get stem() {
                    return "string" == typeof this.path ? o.basename(this.path, this.extname) : void 0
                }
                set stem(e) {
                    d(e, "stem"), p(e, "stem"), this.path = o.join(this.dirname || "", e + (this.extname || ""))
                }
                toString(e) {
                    return (this.value || "").toString(e || void 0)
                }
                message(e, t, n) {
                    let r = new l(e, t, n);
                    return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r
                }
                info(e, t, n) {
                    let r = this.message(e, t, n);
                    return r.fatal = null, r
                }
                fail(e, t, n) {
                    let r = this.message(e, t, n);
                    throw r.fatal = !0, r
                }
            }

            function p(e, t) {
                if (e && e.includes(o.sep)) throw Error("`" + t + "` cannot be a path: did not expect `" + o.sep + "`")
            }

            function d(e, t) {
                if (!e) throw Error("`" + t + "` cannot be empty")
            }

            function h(e, t) {
                if (!e) throw Error("Setting `" + t + "` requires `path` to be set too")
            }
        }
    }
]);