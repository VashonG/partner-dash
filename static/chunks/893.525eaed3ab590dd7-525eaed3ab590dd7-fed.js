"use strict";
(self["microapp-ai-generatorchunkLoader"] = self["microapp-ai-generatorchunkLoader"] || []).push([
    [893, 521], {
        5251: function(e, r, o) {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var t = o(1005),
                n = Symbol.for("react.element"),
                a = Symbol.for("react.fragment"),
                f = Object.prototype.hasOwnProperty,
                p = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                s = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function _(e, r, o) {
                var t, a = {},
                    _ = null,
                    c = null;
                for (t in void 0 !== o && (_ = "" + o), void 0 !== r.key && (_ = "" + r.key), void 0 !== r.ref && (c = r.ref), r) f.call(r, t) && !s.hasOwnProperty(t) && (a[t] = r[t]);
                if (e && e.defaultProps)
                    for (t in r = e.defaultProps) void 0 === a[t] && (a[t] = r[t]);
                return {
                    $$typeof: n,
                    type: e,
                    key: _,
                    ref: c,
                    props: a,
                    _owner: p.current
                }
            }
            r.Fragment = a, r.jsx = _, r.jsxs = _
        },
        5893: function(e, r, o) {
            e.exports = o(5251)
        }
    }
]);