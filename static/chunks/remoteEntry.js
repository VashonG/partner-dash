! function() {
    "use strict";
    var e, t, n, r, u, o, i, f, a, c, l, d, s, p, h, v, g, m, y, b, S, x, w = {
            2848: function(e, t, n) {
                var r = {
                        "./Home": function() {
                            return n.e(958).then(function() {
                                return function() {
                                    return n(4958)
                                }
                            })
                        }
                    },
                    u = function(e, t) {
                        return n.R = t, t = n.o(r, e) ? r[e]() : Promise.resolve().then(function() {
                            throw Error('Module "' + e + '" does not exist in container.')
                        }), n.R = void 0, t
                    },
                    o = function(e, t) {
                        if (n.S) {
                            var r = "default",
                                u = n.S[r];
                            if (u && u !== e) throw Error("Container initialization failed as it has already been initialized with a different share scope");
                            return n.S[r] = e, n.I(r, t)
                        }
                    };
                n.d(t, {
                    get: function() {
                        return u
                    },
                    init: function() {
                        return o
                    }
                })
            },
            6759: function() {}
        },
        j = {};

    function k(e) {
        var t = j[e];
        if (void 0 !== t) return t.exports;
        var n = j[e] = {
                exports: {}
            },
            r = !0;
        try {
            w[e](n, n.exports, k), r = !1
        } finally {
            r && delete j[e]
        }
        return n.exports
    }
    k.m = w, k.c = j, k.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return k.d(t, {
                a: t
            }), t
        }, k.d = function(e, t) {
            for (var n in t) k.o(t, n) && !k.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, k.f = {}, k.e = function(e) {
            return Promise.all(Object.keys(k.f).reduce(function(t, n) {
                return k.f[n](e, t), t
            }, []))
        }, k.u = function(e) {
            return "static/chunks/" + e + "." + ({
                191: "9df25c01b8c486d1",
                192: "9d4a5ff8aae173d4",
                521: "a43efe21bc66bfd4",
                893: "525eaed3ab590dd7",
                958: "a051052a4bdb333b",
                965: "dd5fcb8f225d8f75"
            })[e] + "-" + ({
                191: "9df25c01b8c486d1",
                192: "9d4a5ff8aae173d4",
                521: "a43efe21bc66bfd4",
                893: "525eaed3ab590dd7",
                958: "a051052a4bdb333b",
                965: "dd5fcb8f225d8f75"
            })[e] + "-fed.js"
        }, k.miniCssF = function(e) {}, k.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), k.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, e = {}, t = "microapp-ai-generator:", k.l = function(n, r, u, o) {
            if (e[n]) {
                e[n].push(r);
                return
            }
            if (void 0 !== u)
                for (var i, f, a = document.getElementsByTagName("script"), c = 0; c < a.length; c++) {
                    var l = a[c];
                    if (l.getAttribute("src") == n || l.getAttribute("data-webpack") == t + u) {
                        i = l;
                        break
                    }
                }
            i || (f = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, k.nc && i.setAttribute("nonce", k.nc), i.setAttribute("data-webpack", t + u), i.src = k.tu(n)), e[n] = [r];
            var d = function(t, r) {
                    i.onerror = i.onload = null, clearTimeout(s);
                    var u = e[n];
                    if (delete e[n], i.parentNode && i.parentNode.removeChild(i), u && u.forEach(function(e) {
                            return e(r)
                        }), t) return t(r)
                },
                s = setTimeout(d.bind(null, void 0, {
                    type: "timeout",
                    target: i
                }), 12e4);
            i.onerror = d.bind(null, i.onerror), i.onload = d.bind(null, i.onload), f && document.head.appendChild(i)
        }, k.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, k.S = {}, n = {}, r = {}, k.I = function(e, t) {
            t || (t = []);
            var u = r[e];
            if (u || (u = r[e] = {}), !(t.indexOf(u) >= 0)) {
                if (t.push(u), n[e]) return n[e];
                k.o(k.S, e) || (k.S[e] = {});
                var o, i, f, a, c, l = k.S[e],
                    d = "microapp-ai-generator",
                    s = [];
                return "default" === e && (i = "18.2.0", (c = (a = l[o = "react/jsx-runtime"] = l[o] || {})[i]) && (c.loaded || (!f != !c.eager ? !f : !(d > c.from))) || (a[i] = {
                    get: function() {
                        return k.e(893).then(function() {
                            return function() {
                                return k(5893)
                            }
                        })
                    },
                    from: d,
                    eager: !!f
                })), s.length ? n[e] = Promise.all(s).then(function() {
                    return n[e] = 1
                }) : n[e] = 1
            }
        }, k.tt = function() {
            return void 0 === u && (u = {
                createScriptURL: function(e) {
                    return e
                }
            }, "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (u = trustedTypes.createPolicy("nextjs#bundler", u))), u
        }, k.tu = function(e) {
            return k.tt().createScriptURL(e)
        },
        function() {
            k.g.importScripts && (e = k.g.location + "");
            var e, t = k.g.document;
            if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
                var n = t.getElementsByTagName("script");
                n.length && (e = n[n.length - 1].src)
            }
            if (!e) throw Error("Automatic publicPath is not supported in this browser");
            e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), k.p = e + "../../"
        }(), o = function(e) {
            var t = function(e) {
                    return e.split(".").map(function(e) {
                        return +e == e ? +e : e
                    })
                },
                n = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = n[1] ? t(n[1]) : [];
            return n[2] && (r.length++, r.push.apply(r, t(n[2]))), n[3] && (r.push([]), r.push.apply(r, t(n[3]))), r
        }, i = function(e, t) {
            e = o(e), t = o(t);
            for (var n = 0;;) {
                if (n >= e.length) return n < t.length && "u" != (typeof t[n])[0];
                var r = e[n],
                    u = (typeof r)[0];
                if (n >= t.length) return "u" == u;
                var i = t[n],
                    f = (typeof i)[0];
                if (u != f) return "o" == u && "n" == f || "s" == f || "u" == u;
                if ("o" != u && "u" != u && r != i) return r < i;
                n++
            }
        }, f = function(e) {
            var t = e[0],
                n = "";
            if (1 === e.length) return "*";
            if (t + .5) {
                n += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
                for (var r = 1, u = 1; u < e.length; u++) r--, n += "u" == (typeof(i = e[u]))[0] ? "-" : (r > 0 ? "." : "") + (r = 2, i);
                return n
            }
            var o = [];
            for (u = 1; u < e.length; u++) {
                var i = e[u];
                o.push(0 === i ? "not(" + a() + ")" : 1 === i ? "(" + a() + " || " + a() + ")" : 2 === i ? o.pop() + " " + o.pop() : f(i))
            }
            return a();

            function a() {
                return o.pop().replace(/^\((.+)\)$/, "$1")
            }
        }, a = function(e, t) {
            if (0 in e) {
                t = o(t);
                var n = e[0],
                    r = n < 0;
                r && (n = -n - 1);
                for (var u = 0, i = 1, f = !0;; i++, u++) {
                    var c, l, d = i < e.length ? (typeof e[i])[0] : "";
                    if (u >= t.length || "o" == (l = (typeof(c = t[u]))[0])) return !f || ("u" == d ? i > n && !r : "" == d != r);
                    if ("u" == l) {
                        if (!f || "u" != d) return !1
                    } else if (f) {
                        if (d == l) {
                            if (i <= n) {
                                if (c != e[i]) return !1
                            } else {
                                if (r ? c > e[i] : c < e[i]) return !1;
                                c != e[i] && (f = !1)
                            }
                        } else if ("s" != d && "n" != d) {
                            if (r || i <= n) return !1;
                            f = !1, i--
                        } else {
                            if (i <= n || l < d != r) return !1;
                            f = !1
                        }
                    } else "s" != d && "n" != d && (f = !1, i--)
                }
            }
            var s = [],
                p = s.pop.bind(s);
            for (u = 1; u < e.length; u++) {
                var h = e[u];
                s.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? a(h, t) : !p())
            }
            return !!p()
        }, c = function(e, t) {
            var n = k.S[e];
            if (!n || !k.o(n, t)) throw Error("Shared module " + t + " doesn't exist in shared scope " + e);
            return n
        }, l = function(e, t) {
            var n = e[t];
            return Object.keys(n).reduce(function(e, t) {
                return !e || !n[e].loaded && i(e, t) ? t : e
            }, 0)
        }, d = function(e, t, n, r) {
            var u = l(e, n);
            return s(e[n][u])
        }, s = function(e) {
            return e.loaded = 1, e.get()
        }, h = (p = function(e) {
            return function(t, n, r, u) {
                var o = k.I(t);
                return o && o.then ? o.then(e.bind(e, t, k.S[t], n, r, u)) : e(t, k.S[t], n, r, u)
            }
        })(function(e, t, n) {
            return c(e, n), d(t, e, n)
        }), v = p(function(e, t, n, r) {
            return t && k.o(t, n) ? d(t, e, n) : r()
        }), g = {}, m = {
            1005: function() {
                return h("default", "react")
            },
            1094: function() {
                return h("default", "react-dom")
            },
            1108: function() {
                return h("default", "next/script")
            },
            1819: function() {
                return h("default", "next/router")
            },
            2731: function() {
                return h("default", "next/head")
            },
            2807: function() {
                return v("default", "react/jsx-runtime", function() {
                    return k.e(521).then(function() {
                        return function() {
                            return k(5893)
                        }
                    })
                })
            },
            3479: function() {
                return h("default", "next/dynamic")
            },
            8569: function() {
                return h("default", "styled-jsx/style")
            },
            8868: function() {
                return h("default", "next/link")
            },
            9013: function() {
                return h("default", "styled-jsx")
            }
        }, y = {
            893: [1005],
            958: [1005, 1094, 1108, 1819, 2731, 2807, 3479, 8569, 8868, 9013]
        }, k.f.consumes = function(e, t) {
            k.o(y, e) && y[e].forEach(function(e) {
                if (k.o(g, e)) return t.push(g[e]);
                var n = function(t) {
                        g[e] = 0, k.m[e] = function(n) {
                            delete k.c[e], n.exports = t()
                        }
                    },
                    r = function(t) {
                        delete g[e], k.m[e] = function(n) {
                            throw delete k.c[e], t
                        }
                    };
                try {
                    var u = m[e]();
                    u.then ? t.push(g[e] = u.then(n).catch(r)) : n(u)
                } catch (e) {
                    r(e)
                }
            })
        }, b = {
            421: 0
        }, k.f.j = function(e, t) {
            var n = k.o(b, e) ? b[e] : void 0;
            if (0 !== n) {
                if (n) t.push(n[2]);
                else {
                    var r = new Promise(function(t, r) {
                        n = b[e] = [t, r]
                    });
                    t.push(n[2] = r);
                    var u = k.p + k.u(e),
                        o = Error();
                    k.l(u, function(t) {
                        if (k.o(b, e) && (0 !== (n = b[e]) && (b[e] = void 0), n)) {
                            var r = t && ("load" === t.type ? "missing" : t.type),
                                u = t && t.target && t.target.src;
                            o.message = "Loading chunk " + e + " failed.\n(" + r + ": " + u + ")", o.name = "ChunkLoadError", o.type = r, o.request = u, n[1](o)
                        }
                    }, "chunk-" + e, e)
                }
            }
        }, S = function(e, t) {
            var n, r, u = t[0],
                o = t[1],
                i = t[2],
                f = 0;
            if (u.some(function(e) {
                    return 0 !== b[e]
                })) {
                for (n in o) k.o(o, n) && (k.m[n] = o[n]);
                i && i(k)
            }
            for (e && e(t); f < u.length; f++) r = u[f], k.o(b, r) && b[r] && b[r][0](), b[r] = 0
        }, (x = self["microapp-ai-generatorchunkLoader"] = self["microapp-ai-generatorchunkLoader"] || []).forEach(S.bind(null, 0)), x.push = S.bind(null, x.push.bind(x)), k.nc = void 0, k(6759);
    var E = k(2848);
    window["microapp-ai-generator"] = E
}();