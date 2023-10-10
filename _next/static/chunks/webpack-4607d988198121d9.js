! function() {
    "use strict";
    var t, e, n, r, u, o, i, c, f, a, d, l = {},
        s = {};

    function p(t) {
        var e = s[t];
        if (void 0 !== e) return e.exports;
        var n = s[t] = {
                exports: {}
            },
            r = !0;
        try {
            l[t].call(n.exports, n, n.exports, p), r = !1
        } finally {
            r && delete s[t]
        }
        return n.exports
    }
    p.m = l, p.c = s, p.amdO = {}, t = [], p.O = function(e, n, r, u) {
        if (n) {
            u = u || 0;
            for (var o = t.length; o > 0 && t[o - 1][2] > u; o--) t[o] = t[o - 1];
            t[o] = [n, r, u];
            return
        }
        for (var i = 1 / 0, o = 0; o < t.length; o++) {
            for (var n = t[o][0], r = t[o][1], u = t[o][2], c = !0, f = 0; f < n.length; f++) i >= u && Object.keys(p.O).every(function(t) {
                return p.O[t](n[f])
            }) ? n.splice(f--, 1) : (c = !1, u < i && (i = u));
            if (c) {
                t.splice(o--, 1);
                var a = r();
                void 0 !== a && (e = a)
            }
        }
        return e
    }, p.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return p.d(e, {
            a: e
        }), e
    }, n = Object.getPrototypeOf ? function(t) {
        return Object.getPrototypeOf(t)
    } : function(t) {
        return t.__proto__
    }, p.t = function(t, r) {
        if (1 & r && (t = this(t)), 8 & r || "object" == typeof t && t && (4 & r && t.__esModule || 16 & r && "function" == typeof t.then)) return t;
        var u = Object.create(null);
        p.r(u);
        var o = {};
        e = e || [null, n({}), n([]), n(n)];
        for (var i = 2 & r && t;
            "object" == typeof i && !~e.indexOf(i); i = n(i)) Object.getOwnPropertyNames(i).forEach(function(e) {
            o[e] = function() {
                return t[e]
            }
        });
        return o.default = function() {
            return t
        }, p.d(u, o), u
    }, p.d = function(t, e) {
        for (var n in e) p.o(e, n) && !p.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        })
    }, p.f = {}, p.e = function(t) {
        return Promise.all(Object.keys(p.f).reduce(function(e, n) {
            return p.f[n](t, e), e
        }, []))
    }, p.u = function(t) {
        return 993 === t ? "static/chunks/993-a435fc5c47879227.js" : "static/chunks/" + (621 === t ? "61d503f3" : t) + "." + ({
            24: "c933a104d49217fb",
            54: "6eb9616dd02127b9",
            74: "d0de8aa6be7d11d4",
            234: "812445ab682268bb",
            376: "16b8729e7aa791b5",
            446: "90fa995c0f4318f8",
            597: "cc239fc2b6841029",
            618: "7de7fb03924fece7",
            621: "73fde06205965ec5",
            655: "eb4a1dcec4450843",
            691: "0689775f9bbae00c",
            716: "9912d6950477e7df",
            809: "55f9c54f157cecfb",
            887: "e27639d8205074f6"
        })[t] + ".js"
    }, p.miniCssF = function(t) {
        return "static/css/" + ({
            679: "44d26af08e958094",
            888: "d9e322fbe73479cf"
        })[t] + ".css"
    }, p.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), p.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r = {}, u = "_N_E:", p.l = function(t, e, n, o) {
        if (r[t]) {
            r[t].push(e);
            return
        }
        if (void 0 !== n)
            for (var i, c, f = document.getElementsByTagName("script"), a = 0; a < f.length; a++) {
                var d = f[a];
                if (d.getAttribute("src") == t || d.getAttribute("data-webpack") == u + n) {
                    i = d;
                    break
                }
            }
        i || (c = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, p.nc && i.setAttribute("nonce", p.nc), i.setAttribute("data-webpack", u + n), i.src = p.tu(t)), r[t] = [e];
        var l = function(e, n) {
                i.onerror = i.onload = null, clearTimeout(s);
                var u = r[t];
                if (delete r[t], i.parentNode && i.parentNode.removeChild(i), u && u.forEach(function(t) {
                        return t(n)
                    }), e) return e(n)
            },
            s = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: i
            }), 12e4);
        i.onerror = l.bind(null, i.onerror), i.onload = l.bind(null, i.onload), c && document.head.appendChild(i)
    }, p.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, p.S = {}, o = {}, i = {}, p.I = function(t, e) {
        e || (e = []);
        var n = i[t];
        if (n || (n = i[t] = {}), !(e.indexOf(n) >= 0)) {
            if (e.push(n), o[t]) return o[t];
            p.o(p.S, t) || (p.S[t] = {});
            var r = p.S[t],
                u = "_N_E",
                c = function(t, e, n, o) {
                    var i = r[t] = r[t] || {},
                        c = i[e];
                    (!c || !c.loaded && (!o != !c.eager ? o : u > c.from)) && (i[e] = {
                        get: n,
                        from: u,
                        eager: !!o
                    })
                },
                f = [];
            return "default" === t && (c("next/dynamic", "13.2.4", function() {
                return p.e(54).then(function() {
                    return function() {
                        return p(51774)
                    }
                })
            }), c("next/head", "13.2.4", function() {
                return p.e(887).then(function() {
                    return function() {
                        return p(1887)
                    }
                })
            }), c("next/link", "13.2.4", function() {
                return p.e(691).then(function() {
                    return function() {
                        return p(12691)
                    }
                })
            }), c("next/router", "13.2.4", function() {
                return p.e(376).then(function() {
                    return function() {
                        return p(34376)
                    }
                })
            }), c("next/script", "13.2.4", function() {
                return p.e(597).then(function() {
                    return function() {
                        return p(25597)
                    }
                })
            }), c("react-dom", "18.2.0", function() {
                return function() {
                    return p(85202)
                }
            }), c("react/jsx-runtime", "18.2.0", function() {
                return p.e(774).then(function() {
                    return function() {
                        return p(28598)
                    }
                })
            }), c("react", "18.2.0", function() {
                return function() {
                    return p(82684)
                }
            }), c("styled-jsx/style", "5.1.1", function() {
                return Promise.all([p.e(716), p.e(74)]).then(function() {
                    return function() {
                        return p(52074)
                    }
                })
            }), c("styled-jsx", "5.1.1", function() {
                return Promise.all([p.e(716), p.e(234)]).then(function() {
                    return function() {
                        return p(90234)
                    }
                })
            })), f.length ? o[t] = Promise.all(f).then(function() {
                return o[t] = 1
            }) : o[t] = 1
        }
    }, p.tt = function() {
        return void 0 === c && (c = {
            createScriptURL: function(t) {
                return t
            }
        }, "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (c = trustedTypes.createPolicy("nextjs#bundler", c))), c
    }, p.tu = function(t) {
        return p.tt().createScriptURL(t)
    }, p.p = "https://microapp-site-5q1h01j9d-microapp.vercel.app/_next/", f = {
        272: 0
    }, p.f.j = function(t, e) {
        var n = p.o(f, t) ? f[t] : void 0;
        if (0 !== n) {
            if (n) e.push(n[2]);
            else if (272 != t) {
                var r = new Promise(function(e, r) {
                    n = f[t] = [e, r]
                });
                e.push(n[2] = r);
                var u = p.p + p.u(t),
                    o = Error();
                p.l(u, function(e) {
                    if (p.o(f, t) && (0 !== (n = f[t]) && (f[t] = void 0), n)) {
                        var r = e && ("load" === e.type ? "missing" : e.type),
                            u = e && e.target && e.target.src;
                        o.message = "Loading chunk " + t + " failed.\n(" + r + ": " + u + ")", o.name = "ChunkLoadError", o.type = r, o.request = u, n[1](o)
                    }
                }, "chunk-" + t, t)
            } else f[t] = 0
        }
    }, p.O.j = function(t) {
        return 0 === f[t]
    }, a = function(t, e) {
        var n, r, u = e[0],
            o = e[1],
            i = e[2],
            c = 0;
        if (u.some(function(t) {
                return 0 !== f[t]
            })) {
            for (n in o) p.o(o, n) && (p.m[n] = o[n]);
            if (i) var a = i(p)
        }
        for (t && t(e); c < u.length; c++) r = u[c], p.o(f, r) && f[r] && f[r][0](), f[r] = 0;
        return p.O(a)
    }, (d = self.webpackChunk_N_E = self.webpackChunk_N_E || []).forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d)), p.nc = void 0
}();