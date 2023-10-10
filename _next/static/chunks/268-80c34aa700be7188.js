"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [268], {
        92268: function(o, e, i) {
            i.d(e, {
                Z: function() {
                    return R
                }
            });
            var r = i(28598),
                s = i(82684),
                t = i(2481),
                l = i(16644),
                n = i(6194),
                d = i(86410),
                a = i(93522),
                c = i(26549),
                p = i(42791),
                x = i(73038),
                h = i(89497),
                u = i(29938),
                g = i(50571),
                b = i(92375),
                m = i(8271),
                v = i(28170),
                w = i(14765),
                f = i(77164),
                j = (0, i(61485).Z)("chevron-left", "IconChevronLeft", [
                    ["path", {
                        d: "M15 6l-6 6l6 6",
                        key: "svg-0"
                    }]
                ]),
                k = i(40241),
                C = i(4664),
                _ = i(84939),
                I = i(96510),
                y = i(56559),
                S = i(60071),
                z = i.n(S),
                D = i(34376),
                M = i(3256),
                A = i(61900),
                E = i(12691),
                F = i.n(E),
                L = i(20071),
                q = i(1438);
            let J = o => {
                var e, i, S, E, J, R, T, U, Z, N, B, Y, O, V, X, P, W, K, Q, G, H, $, oo, oe, oi, or, os, ot, ol, on, od, oa, oc;
                let {
                    app: op,
                    likes: ox,
                    posts: oh,
                    slug: ou,
                    relatedApps: og
                } = o, ob = (0, D.useRouter)(), [om, ov] = (0, s.useState)(""), [ow, of ] = (0, s.useState)(!1), [oj, ok] = (0, s.useState)(""), [oC, o_] = (0, s.useState)(!1), [oI, oy] = (0, s.useState)(!1), [oS, oz] = (0, s.useState)(!1), {
                    user: oD
                } = (0, w.aF)(), oM = "microapp-sidebar-status";
                (0, s.useEffect)(() => {
                    {
                        let o = window.localStorage.getItem(oM);
                        "true" === o && oz(!0)
                    }
                }, []), (0, s.useEffect)(() => {
                    window.localStorage.setItem(oM, JSON.stringify(oS))
                }, [oS]);
                let oA = null == oD ? void 0 : oD.accessToken,
                    oE = void 0 !== oA,
                    oF = (0, v.S)(oA),
                    oL = "".concat("https://www.microapp.io").concat(ob.asPath),
                    oq = (0, L.a)("(max-width: 64em)", !1, {
                        getInitialValueInEffect: !1
                    }),
                    oJ = (0, L.a)("(max-width: 42em)", !1, {
                        getInitialValueInEffect: !1
                    }),
                    oR = (0, L.a)("(max-width: 90em)", !0, {
                        getInitialValueInEffect: !1
                    }),
                    oT = oS ? q.l4.Collapsed : oJ ? q.l4.Mobile : oq ? q.l4.Tablet : q.l4.Desktop,
                    oU = async () => {
                        if (null == oD ? void 0 : oD.sub) {
                            var o, e, i;
                            let {
                                data: r
                            } = await v.O.from("likes").select("is_liked, id").eq("user_id", oD.sub).eq("public_app_id", null === (o = op[0]) || void 0 === o ? void 0 : o.id);
                            (null == r ? void 0 : r.length) ? (ok(null === (e = r[0]) || void 0 === e ? void 0 : e.id), of (null === (i = r[0]) || void 0 === i ? void 0 : i.is_liked)) : ok("")
                        }
                    };
                (0, s.useEffect)(() => {
                    oU()
                }, [oD]), (0, s.useLayoutEffect)(() => {
                    oq && oz(!1)
                }, [oq]), (0, s.useEffect)(() => {
                    let o = () => {
                        ov(window.location.hash.substring(1))
                    };
                    return o(), window.addEventListener("hashchange", o), () => {
                        window.removeEventListener("hashchange", o)
                    }
                }, []);
                let oZ = async () => {
                        if (oE) {
                            if ("" !== oj) {
                                let {
                                    error: o
                                } = await oF.from("likes").update({
                                    is_liked: !ow
                                }).eq("id", oj);
                                o || of (o => !o)
                            } else {
                                var o, e;
                                let {
                                    data: i,
                                    error: r
                                } = await oF.from("likes").insert({
                                    public_app_id: null === (o = op[0]) || void 0 === o ? void 0 : o.id,
                                    user_id: null == oD ? void 0 : oD.sub,
                                    is_liked: !0
                                }).select();
                                r || (ok(null === (e = i[0]) || void 0 === e ? void 0 : e.id), of (!0))
                            }
                            ob.replace(ob.asPath)
                        } else ob.push("/api/auth/signup")
                    },
                    oN = (0, s.useMemo)(() => {
                        var o, e, i, s, t;
                        return (null === (o = op[0]) || void 0 === o ? void 0 : o.remote_url) ? (0, r.jsx)(C.mg, {
                            url: "".concat(null === (e = op[0]) || void 0 === e ? void 0 : e.remote_url, "/_next/static/chunks/remoteEntry.js"),
                            scope: null === (i = op[0]) || void 0 === i ? void 0 : i.remote_scope,
                            module: "./".concat(ou || (null === (s = op[0]) || void 0 === s ? void 0 : s.remote_module)),
                            appProps: null === (t = op[0]) || void 0 === t ? void 0 : t.remote_props
                        }) : null
                    }, [op, ou]);
                return (0, r.jsxs)(t.W, {
                    fluid: !0,
                    w: "100%",
                    p: 0,
                    children: [(0, r.jsx)(C.Ag, {
                        title: "Microapp.io - ".concat(op[0].apps_seo[0].title),
                        description: op[0].apps_seo[0].description,
                        keywords: op[0].apps_seo[0].keywords.join(", "),
                        url: "https://www.microapp.io/apps/".concat(op[0].slug),
                        ogImage: "https://microapp-og-dynamic.vercel.app/api/og?title=".concat(encodeURIComponent(op[0].apps_seo[0].title), "&subtitle=").concat(encodeURIComponent(op[0].apps_seo[0].description)),
                        faqs: null === (e = null === (i = op[0]) || void 0 === i ? void 0 : i.apps_faq[0]) || void 0 === e ? void 0 : e.faqs
                    }), (0, r.jsx)(C.kF, {
                        showModal: oy,
                        isVisible: oI,
                        appUrl: "https://www.microapp.io/embed/".concat(null === (S = op[0]) || void 0 === S ? void 0 : S.slug),
                        appTitle: null === (E = null === (J = op[0]) || void 0 === J ? void 0 : J.apps_seo[0]) || void 0 === E ? void 0 : E.title
                    }), (0, r.jsx)(C.XS, {
                        appTitle: op[0].title,
                        appCategory: (null === (R = op[0].categories) || void 0 === R ? void 0 : R.name.charAt(0).toUpperCase()) + (null === (T = op[0].categories) || void 0 === T ? void 0 : T.name.slice(1)),
                        appUrl: "/apps/".concat(op[0].slug)
                    }), (0, r.jsxs)(l.k, {
                        direction: oq ? "column" : "row",
                        w: "100%",
                        h: oq ? "100%" : "calc(100vh - 80px)",
                        justify: "center",
                        align: "stretch",
                        sx: {
                            borderBottom: "1px solid #D9D9D9",
                            boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.12)"
                        },
                        children: [(0, r.jsx)(l.k, {
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
                            children: (0, r.jsx)(n.x, {
                                w: "100%",
                                h: "100%",
                                children: oN
                            })
                        }), (0, r.jsxs)(l.k, {
                            direction: "column",
                            justify: "start",
                            align: oS ? "center" : "start",
                            maw: oq ? "100%" : oS ? 60 : 400,
                            miw: oq ? "100%" : oS ? 60 : 400,
                            px: oT,
                            py: 24,
                            sx: {
                                transition: "max-width 320ms ease-in-out, min-width 320ms ease-in-out"
                            },
                            children: [oS && !oq && !oJ && (0, r.jsxs)(d.K, {
                                spacing: 8,
                                sx: {
                                    position: "relative"
                                },
                                children: [(0, r.jsx)(a.u, {
                                    mounted: oC,
                                    transition: "fade",
                                    duration: 300,
                                    timingFunction: "ease",
                                    children: o => (0, r.jsxs)(d.K, {
                                        style: o,
                                        spacing: 11,
                                        sx: {
                                            position: "absolute",
                                            bottom: -150,
                                            right: -5,
                                            border: "1px solid #C5C5C7",
                                            boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.12)",
                                            borderRadius: 4,
                                            padding: 3,
                                            backgroundColor: "white"
                                        },
                                        children: [(0, r.jsx)(c.q, {
                                            value: oL,
                                            timeout: 2e3,
                                            children: o => {
                                                let {
                                                    copied: e,
                                                    copy: i
                                                } = o;
                                                return (0, r.jsx)(p.u, {
                                                    label: e ? (0, r.jsxs)(l.k, {
                                                        justify: "center",
                                                        align: "center",
                                                        gap: 2,
                                                        children: ["Link Copied", (0, r.jsx)(f.Z, {
                                                            size: "1rem"
                                                        })]
                                                    }) : "Copy Link",
                                                    withArrow: !0,
                                                    position: "bottom",
                                                    children: (0, r.jsx)(x.A, {
                                                        onClick: i,
                                                        children: (0, r.jsx)(z(), {
                                                            src: y.n3,
                                                            alt: "copy link"
                                                        })
                                                    })
                                                })
                                            }
                                        }), (0, r.jsx)(M.B, {
                                            url: oL,
                                            children: (0, r.jsx)(z(), {
                                                src: y.J,
                                                alt: "share it on Twitter"
                                            })
                                        }), (0, r.jsx)(M.Dk, {
                                            url: oL,
                                            children: (0, r.jsx)(z(), {
                                                src: y.MM,
                                                alt: "share it on Facebook"
                                            })
                                        }), (0, r.jsx)(M.r2, {
                                            url: oL,
                                            children: (0, r.jsx)(z(), {
                                                src: y.xe,
                                                alt: "share it on LinkedIn"
                                            })
                                        })]
                                    })
                                }), (0, r.jsx)(p.u, {
                                    label: "Share",
                                    withArrow: !0,
                                    position: "bottom",
                                    children: (0, r.jsx)(x.A, {
                                        bg: "#202123",
                                        sx: {
                                            boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.12)",
                                            "&:hover": {
                                                backgroundColor: "#202123"
                                            }
                                        },
                                        onClick: () => o_(o => !o),
                                        children: (0, r.jsx)(z(), {
                                            width: 14,
                                            height: 14,
                                            src: y.Si,
                                            alt: "Share"
                                        })
                                    })
                                }), (0, r.jsx)(p.u, {
                                    label: "Buy me a coffee",
                                    withArrow: !0,
                                    position: "bottom",
                                    children: (0, r.jsx)(x.A, {
                                        href: null === (U = op[0]) || void 0 === U ? void 0 : U.sponsor_link,
                                        rel: "noopener noreferrer",
                                        component: "a",
                                        bg: "white",
                                        sx: {
                                            boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.12)",
                                            border: "1px solid #C5C5C7",
                                            "&:hover": {
                                                backgroundColor: "#fff !important"
                                            }
                                        },
                                        children: (0, r.jsx)(z(), {
                                            width: 14,
                                            height: 14,
                                            src: y.xB,
                                            alt: "Buy me a coffee"
                                        })
                                    })
                                }), (0, r.jsx)(p.u, {
                                    label: "Like this micro app",
                                    withArrow: !0,
                                    position: "bottom",
                                    children: (0, r.jsx)(x.A, {
                                        bg: "white",
                                        sx: {
                                            boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.12)",
                                            border: "1px solid #C5C5C7",
                                            "&:hover": {
                                                backgroundColor: "#fff !important"
                                            }
                                        },
                                        onClick: oZ,
                                        children: (0, r.jsx)(z(), {
                                            width: 14,
                                            height: 14,
                                            src: ow ? y.k7 : y.WE,
                                            alt: "Favorite"
                                        })
                                    })
                                }), op[0].embeddable && (0, r.jsx)(p.u, {
                                    label: "Embed this micro app",
                                    withArrow: !0,
                                    position: "bottom",
                                    children: (0, r.jsx)(x.A, {
                                        onClick: () => oy(o => !o),
                                        sx: () => ({
                                            backgroundColor: "#fff",
                                            color: "#202123",
                                            border: "1px solid #C5C5C7",
                                            boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.12)",
                                            "&:hover": {
                                                backgroundColor: "#fff !important"
                                            }
                                        }),
                                        children: (0, r.jsx)(z(), {
                                            width: 14,
                                            height: 14,
                                            src: y.Uo,
                                            alt: "Embed microapp"
                                        })
                                    })
                                }), (0, r.jsx)(x.A, {
                                    onClick: () => oz(o => !o),
                                    sx: {
                                        "&:hover": {
                                            boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.12)",
                                            border: "1px solid #C5C5C7",
                                            backgroundColor: "white"
                                        }
                                    },
                                    children: (0, r.jsx)(j, {
                                        color: "#202123",
                                        size: 14
                                    })
                                })]
                            }), !oS && (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)(h.Z, {
                                    spacing: 4,
                                    children: [(0, r.jsx)(F(), {
                                        href: "/apps",
                                        style: {
                                            textDecoration: "none"
                                        },
                                        children: (0, r.jsx)(u.x, {
                                            color: "#6F7175",
                                            size: 11,
                                            children: "Apps"
                                        })
                                    }), (0, r.jsx)(k.Z, {
                                        size: 11,
                                        color: "#6F7175"
                                    }), (0, r.jsx)(F(), {
                                        href: "/apps",
                                        style: {
                                            textDecoration: "none"
                                        },
                                        children: (0, r.jsx)(u.x, {
                                            color: "#6F7175",
                                            size: 11,
                                            children: (null === (Z = op[0].categories) || void 0 === Z ? void 0 : Z.name.charAt(0).toUpperCase()) + (null === (N = op[0].categories) || void 0 === N ? void 0 : N.name.slice(1))
                                        })
                                    })]
                                }), (0, r.jsx)(g.D, {
                                    size: 24,
                                    mt: 16,
                                    color: "#202123",
                                    order: 1,
                                    children: op[0].apps_seo[0].title
                                }), (0, r.jsx)(u.x, {
                                    my: 16,
                                    color: "#202123",
                                    children: op[0].apps_seo[0].description
                                }), (0, r.jsxs)(h.Z, {
                                    spacing: 8,
                                    sx: {
                                        position: "relative"
                                    },
                                    children: [(0, r.jsx)(b.z, {
                                        onClick: oZ,
                                        sx: () => ({
                                            backgroundColor: "#fff",
                                            color: "#202123",
                                            border: "1px solid #C5C5C7",
                                            boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.12)",
                                            "&:hover": {
                                                backgroundColor: "#fff !important"
                                            }
                                        }),
                                        leftIcon: (0, r.jsx)(z(), {
                                            width: 14,
                                            height: 22,
                                            src: ow ? y.k7 : y.WE,
                                            alt: "Favorite"
                                        }),
                                        children: ox
                                    }), (0, r.jsx)(b.z, {
                                        href: null === (B = op[0]) || void 0 === B ? void 0 : B.sponsor_link,
                                        rel: "noopener noreferrer",
                                        component: "a",
                                        sx: () => ({
                                            backgroundColor: "#fff",
                                            color: "#202123",
                                            border: "1px solid #C5C5C7",
                                            boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.12)",
                                            "&:hover": {
                                                backgroundColor: "#fff !important"
                                            }
                                        }),
                                        leftIcon: (0, r.jsx)(z(), {
                                            width: 14,
                                            height: 22,
                                            src: y.xB,
                                            alt: "Buy me a coffee"
                                        }),
                                        children: "Buy me a coffee"
                                    }), op[0].embeddable && (0, r.jsx)(b.z, {
                                        onClick: () => oy(o => !o),
                                        sx: () => ({
                                            backgroundColor: "#fff",
                                            color: "#202123",
                                            border: "1px solid #C5C5C7",
                                            boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.12)",
                                            "&:hover": {
                                                backgroundColor: "#fff !important"
                                            }
                                        }),
                                        leftIcon: (0, r.jsx)(z(), {
                                            width: 14,
                                            height: 14,
                                            src: y.Uo,
                                            alt: "Embed microapp"
                                        }),
                                        children: "Embed"
                                    }), (0, r.jsx)(b.z, {
                                        onClick: () => o_(o => !o),
                                        styles: o => ({
                                            root: {
                                                backgroundColor: "#202123",
                                                border: "1px solid #C5C5C7",
                                                boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.12)",
                                                paddingRight: o.spacing.xs,
                                                paddingLeft: o.spacing.xs,
                                                "&:hover": {
                                                    backgroundColor: "#202123 !important"
                                                }
                                            },
                                            leftIcon: {
                                                margin: 0
                                            }
                                        }),
                                        leftIcon: (0, r.jsx)(z(), {
                                            width: 14,
                                            height: 22,
                                            src: y.Si,
                                            alt: "Share"
                                        })
                                    }), (0, r.jsx)(a.u, {
                                        mounted: oC,
                                        transition: "fade",
                                        duration: 300,
                                        timingFunction: "ease",
                                        children: o => {
                                            var e, i;
                                            return (0, r.jsxs)(h.Z, {
                                                style: o,
                                                spacing: 11,
                                                sx: {
                                                    position: "absolute",
                                                    bottom: (null === (e = op[0]) || void 0 === e ? void 0 : e.embeddable) ? 1 : -40,
                                                    right: (null === (i = op[0]) || void 0 === i ? void 0 : i.embeddable) ? oq ? -145 : 30 : 0,
                                                    border: "1px solid #C5C5C7",
                                                    boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.12)",
                                                    borderRadius: 4,
                                                    height: 34,
                                                    paddingLeft: 7,
                                                    paddingRight: 7,
                                                    backgroundColor: "white"
                                                },
                                                children: [(0, r.jsx)(c.q, {
                                                    value: oL,
                                                    timeout: 2e3,
                                                    children: o => {
                                                        let {
                                                            copied: e,
                                                            copy: i
                                                        } = o;
                                                        return (0, r.jsx)(p.u, {
                                                            label: e ? (0, r.jsxs)(l.k, {
                                                                justify: "center",
                                                                align: "center",
                                                                gap: 2,
                                                                children: ["Link Copied", (0, r.jsx)(f.Z, {
                                                                    size: "1rem"
                                                                })]
                                                            }) : "Copy Link",
                                                            withArrow: !0,
                                                            position: "bottom",
                                                            children: (0, r.jsx)(x.A, {
                                                                onClick: i,
                                                                children: (0, r.jsx)(z(), {
                                                                    src: y.n3,
                                                                    alt: "copy link"
                                                                })
                                                            })
                                                        })
                                                    }
                                                }), (0, r.jsx)(M.B, {
                                                    url: oL,
                                                    children: (0, r.jsx)(z(), {
                                                        src: y.J,
                                                        alt: "share it on Twitter"
                                                    })
                                                }), (0, r.jsx)(M.Dk, {
                                                    url: oL,
                                                    children: (0, r.jsx)(z(), {
                                                        src: y.MM,
                                                        alt: "share it on Facebook"
                                                    })
                                                }), (0, r.jsx)(M.r2, {
                                                    url: oL,
                                                    children: (0, r.jsx)(z(), {
                                                        src: y.xe,
                                                        alt: "share it on LinkedIn"
                                                    })
                                                })]
                                            })
                                        }
                                    })]
                                }), !(oq || oJ) && (0, r.jsx)(x.A, {
                                    mt: "md",
                                    onClick: () => oz(o => !o),
                                    sx: {
                                        "&:hover": {
                                            boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.12)",
                                            border: "1px solid #C5C5C7",
                                            backgroundColor: "white"
                                        }
                                    },
                                    children: (0, r.jsx)(k.Z, {
                                        color: "#202123",
                                        size: 14
                                    })
                                }), (0, r.jsx)(n.x, {
                                    p: 7,
                                    children: (0, r.jsx)(C.dW, {
                                        "data-ad-slot": "6807953170",
                                        "data-full-width-responsive": "true"
                                    })
                                })]
                            })]
                        })]
                    }), (0, r.jsxs)(l.k, {
                        justify: "center",
                        direction: oq ? "column" : "row",
                        align: "center",
                        w: "100%",
                        h: "100%",
                        mt: 24,
                        pl: oT,
                        pr: oJ ? q.l4.Mobile : oq ? q.l4.Tablet : 0,
                        children: [(0, r.jsx)(l.k, {
                            w: "100%",
                            h: "100%",
                            direction: "column",
                            children: (null === (Y = null === (O = op[0]) || void 0 === O ? void 0 : O.apps_seo[0]) || void 0 === Y ? void 0 : Y.long_description) && (null === (V = null === (X = op[0]) || void 0 === X ? void 0 : X.apps_seo[0]) || void 0 === V ? void 0 : V.long_description) !== "" && (null === (P = null === (W = op[0]) || void 0 === W ? void 0 : W.apps_seo[0]) || void 0 === P ? void 0 : P.long_description) !== "undefined" && (0, r.jsxs)(l.k, {
                                direction: oq ? "column" : "row",
                                bg: "white",
                                w: "100%",
                                h: "100%",
                                mb: 16,
                                sx: {
                                    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.08)",
                                    borderRadius: 14
                                },
                                children: [(0, r.jsxs)(l.k, {
                                    direction: "column",
                                    justify: "start",
                                    align: "start",
                                    miw: oq ? "100%" : 260,
                                    maw: oq ? "100%" : 260,
                                    p: 24,
                                    gap: 16,
                                    sx: {
                                        borderRight: oq ? "none" : "1px solid #D9D9D9",
                                        borderBottom: oq ? "1px solid #D9D9D9" : "none"
                                    },
                                    children: [(0, r.jsx)(g.D, {
                                        order: 2,
                                        weight: 300,
                                        size: 16,
                                        color: "#202123",
                                        children: "Contents"
                                    }), (null === (K = null === (Q = op[0]) || void 0 === Q ? void 0 : Q.apps_seo[0]) || void 0 === K ? void 0 : K.long_description) !== "" && (null === (G = null === (H = op[0]) || void 0 === H ? void 0 : H.apps_seo[0]) || void 0 === G ? void 0 : G.long_description) !== "undefined" && (0, A.PN)(null === ($ = null === (oo = op[0]) || void 0 === oo ? void 0 : oo.apps_seo[0]) || void 0 === $ ? void 0 : $.long_description).map((o, e) => (0, r.jsxs)(l.k, {
                                        gap: 12,
                                        children: [(0, A.qi)(o.content) === om && (0, r.jsx)(m.i, {
                                            orientation: "vertical",
                                            size: 1,
                                            color: "#202123"
                                        }), (0, r.jsx)(u.x, {
                                            component: "a",
                                            href: "#".concat((0, A.qi)(o.content)),
                                            size: 12,
                                            color: "#202123",
                                            weight: (0, A.qi)(o.content) === om ? 600 : 400,
                                            children: o.content
                                        })]
                                    }, e))]
                                }), (0, r.jsxs)(l.k, {
                                    direction: "column",
                                    p: 24,
                                    children: [(null === (oe = null === (oi = op[0]) || void 0 === oi ? void 0 : oi.apps_seo[0]) || void 0 === oe ? void 0 : oe.long_description) !== "" && (0, r.jsx)(n.x, {
                                        pt: 0,
                                        mt: -20,
                                        children: (0, r.jsx)(_.D, {
                                            components: {
                                                h2: A.K5
                                            },
                                            remarkPlugins: [I.Z],
                                            children: null === (or = null === (os = op[0]) || void 0 === os ? void 0 : os.apps_seo[0]) || void 0 === or ? void 0 : or.long_description
                                        })
                                    }), (null === (ot = null === (ol = op[0]) || void 0 === ol ? void 0 : ol.apps_faq[0]) || void 0 === ot ? void 0 : ot.faqs.length) > 0 && (null === (on = null === (od = op[0]) || void 0 === od ? void 0 : od.apps_faq[0]) || void 0 === on ? void 0 : on.faqs[0].question) !== "" && (0, r.jsxs)(n.x, {
                                        mt: "lg",
                                        p: 24,
                                        sx: {
                                            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.08)",
                                            borderRadius: 16,
                                            border: "1px solid #D9D9D9"
                                        },
                                        children: [(0, r.jsx)(g.D, {
                                            weight: 300,
                                            order: 2,
                                            children: "FAQ"
                                        }), (0, r.jsx)(C.b7, {
                                            faqs: null === (oa = null === (oc = op[0]) || void 0 === oc ? void 0 : oc.apps_faq[0]) || void 0 === oa ? void 0 : oa.faqs
                                        })]
                                    })]
                                })]
                            })
                        }), (0, r.jsx)(n.x, {
                            miw: 400,
                            maw: 400,
                            h: "100%"
                        })]
                    }), oh && oh.length > 0 && (0, r.jsxs)(l.k, {
                        justify: "center",
                        direction: oq ? "column" : "row",
                        align: "center",
                        w: "100%",
                        h: "100%",
                        mt: 12,
                        pl: oT,
                        pr: oJ ? q.l4.Mobile : oq ? q.l4.Tablet : 0,
                        children: [(0, r.jsxs)(n.x, {
                            bg: "white",
                            w: "100%",
                            h: "100%",
                            p: 24,
                            mb: 16,
                            sx: {
                                boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.08)",
                                borderRadius: 14
                            },
                            children: [(0, r.jsx)(g.D, {
                                order: 3,
                                weight: 300,
                                size: 24,
                                color: "#202123",
                                mb: 12,
                                children: "Read More"
                            }), (0, r.jsx)(u.x, {
                                color: "#6F7175",
                                mb: 28,
                                children: "Discover insights, delve into microapps, and explore our latest blog entries."
                            }), (0, r.jsxs)(h.Z, {
                                children: [oh && oh.length > 1 && oh.map(o => (0, r.jsx)(C.Gg, {
                                    title: o.title,
                                    subtitle: o.short_description,
                                    app: o.app_slug,
                                    post: o.slug,
                                    gradientColor: o.gradient_color
                                }, o.slug)), oh && 1 === oh.length && (0, r.jsxs)(l.k, {
                                    w: "100%",
                                    direction: oR ? "column" : "row",
                                    gap: 24,
                                    children: [(0, r.jsx)(C.Gg, {
                                        title: oh[0].title,
                                        subtitle: oh[0].short_description,
                                        app: oh[0].app_slug,
                                        post: oh[0].slug,
                                        gradientColor: oh[0].gradient_color
                                    }, oh[0].slug), (0, r.jsx)(C.X7, {})]
                                })]
                            })]
                        }), (0, r.jsx)(n.x, {
                            miw: 400,
                            maw: 400,
                            h: "100%"
                        })]
                    }), og && og.length > 0 && (0, r.jsxs)(l.k, {
                        justify: "center",
                        direction: oq ? "column" : "row",
                        align: "center",
                        w: "100%",
                        h: "100%",
                        mt: 12,
                        mb: 24,
                        pl: oT,
                        pr: oJ ? q.l4.Mobile : oq ? q.l4.Tablet : 0,
                        children: [(0, r.jsx)(C.LU, {
                            category: (0, A.Ls)(og[0].categories.name),
                            columns: 2,
                            title: "You Might Also Like",
                            description: "Related Discoveries: Handpicked apps aligned with your current selection, broadening your horizon with similar and intriguing choices.",
                            apps: og,
                            size: "sm"
                        }), (0, r.jsx)(n.x, {
                            miw: 400,
                            maw: 400,
                            h: "100%"
                        })]
                    })]
                })
            };
            var R = J
        },
        28170: function(o, e, i) {
            i.d(e, {
                O: function() {
                    return s
                },
                S: function() {
                    return t
                }
            });
            var r = i(98389);
            let s = (0, r.eI)("https://wfyzfzphbsckdlrrtbar.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmeXpmenBoYnNja2RscnJ0YmFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU3Nzg5MTIsImV4cCI6MTk5MTM1NDkxMn0.Kv-L2oFvEOf970817P9fPTV3nISaUAkuN4oWQyL7YzU"),
                t = o => {
                    let e = {};
                    o && (e.global = {
                        headers: {
                            Authorization: "Bearer ".concat(o)
                        }
                    });
                    let i = (0, r.eI)("https://wfyzfzphbsckdlrrtbar.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmeXpmenBoYnNja2RscnJ0YmFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU3Nzg5MTIsImV4cCI6MTk5MTM1NDkxMn0.Kv-L2oFvEOf970817P9fPTV3nISaUAkuN4oWQyL7YzU", e);
                    return i
                }
        }
    }
]);