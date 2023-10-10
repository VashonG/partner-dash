(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [813], {
        36222: function(e, o, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/embed/[slug]", function() {
                return t(59559)
            }])
        },
        59559: function(e, o, t) {
            "use strict";
            t.r(o), t.d(o, {
                __N_SSP: function() {
                    return v
                }
            });
            var i = t(28598),
                n = t(82684),
                l = t(2481),
                p = t(16644),
                s = t(6194),
                a = t(4664),
                r = t(20071),
                c = t(34376),
                u = t.n(c),
                d = t(1438);
            t(55503);
            let _ = e => {
                var o, t, c, _;
                let {
                    app: v
                } = e, m = (0, r.a)("(max-width: 64em)", !0, {
                    getInitialValueInEffect: !1
                }), h = (0, r.a)("(max-width: 42em)", !0, {
                    getInitialValueInEffect: !1
                }), f = h ? d.l4.Mobile : m ? d.l4.Tablet : d.l4.Desktop, w = (0, n.useMemo)(() => {
                    var e, o, t, n, l;
                    return (null === (e = v[0]) || void 0 === e ? void 0 : e.remote_url) ? (0, i.jsx)(a.mg, {
                        url: "".concat(null === (o = v[0]) || void 0 === o ? void 0 : o.remote_url, "/_next/static/chunks/remoteEntry.js"),
                        scope: null === (t = v[0]) || void 0 === t ? void 0 : t.remote_scope,
                        module: "./".concat(null === (n = v[0]) || void 0 === n ? void 0 : n.remote_module),
                        appProps: null === (l = v[0]) || void 0 === l ? void 0 : l.remote_props
                    }) : null
                }, [v]);
                return (0, n.useEffect)(() => {
                    v[0] || u().push("/apps")
                }, [v]), v[0] && (0, i.jsxs)(l.W, {
                    fluid: !0,
                    w: "100%",
                    p: 0,
                    children: [(0, i.jsx)(a.Ag, {
                        title: "Microapp.io - ".concat(v[0].apps_seo[0].title),
                        description: v[0].apps_seo[0].description,
                        keywords: v[0].apps_seo[0].keywords.join(", "),
                        url: "https://www.microapp.io/apps/".concat(v[0].slug),
                        ogImage: "https://microapp-og-dynamic.vercel.app/api/og?title=".concat(encodeURIComponent(v[0].apps_seo[0].title), "&subtitle=").concat(encodeURIComponent(v[0].apps_seo[0].description)),
                        faqs: null === (o = null === (t = v[0]) || void 0 === t ? void 0 : t.apps_faq[0]) || void 0 === o ? void 0 : o.faqs
                    }), (0, i.jsx)(a.XS, {
                        appTitle: v[0].title,
                        appCategory: (null === (c = v[0].categories) || void 0 === c ? void 0 : c.name.charAt(0).toUpperCase()) + (null === (_ = v[0].categories) || void 0 === _ ? void 0 : _.name.slice(1)),
                        appUrl: "/apps/".concat(v[0].slug),
                        isEmbeddable: !0
                    }), (0, i.jsx)(p.k, {
                        w: "100%",
                        h: "calc(100vh - 36px)",
                        justify: "center",
                        align: "stretch",
                        children: (0, i.jsx)(p.k, {
                            bg: "white",
                            justify: "center",
                            align: "center",
                            w: "100%",
                            h: "100%",
                            sx: {
                                borderRight: "1px solid #D9D9D9",
                                boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.08)",
                                overflowY: "auto"
                            },
                            children: (0, i.jsx)(s.x, {
                                px: f,
                                pt: 20,
                                pb: 90,
                                w: "100%",
                                h: "100%",
                                children: w
                            })
                        })
                    })]
                })
            };
            var v = !0;
            o.default = _
        }
    },
    function(e) {
        e.O(0, [774, 888, 179], function() {
            return e(e.s = 36222)
        }), _N_E = e.O()
    }
]);