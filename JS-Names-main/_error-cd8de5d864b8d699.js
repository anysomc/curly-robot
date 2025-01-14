(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[4820], {
		99651: function(e, t, r) {
			"use strict";
			var n = r(33227),
				o = r(88361),
				i = r(85971),
				l = r(52715),
				a = r(91193);

			function c(e) {
				var t = function() {
					if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" === typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}();
				return function() {
					var r, n = a(e);
					if (t) {
						var o = a(this).constructor;
						r = Reflect.construct(n, arguments, o)
					} else r = n.apply(this, arguments);
					return l(this, r)
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var u = r(92648).Z,
				s = u(r(67294)),
				d = u(r(72717)),
				f = {
					400: "Bad Request",
					404: "This page could not be found",
					405: "Method Not Allowed",
					500: "Internal Server Error"
				};

			function p(e) {
				var t = e.res,
					r = e.err;
				return {
					statusCode: t && t.statusCode ? t.statusCode : r ? r.statusCode : 404
				}
			}
			var h = {
					error: {
						fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
						height: "100vh",
						textAlign: "center",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center"
					},
					desc: {
						display: "inline-block",
						textAlign: "left",
						lineHeight: "49px",
						height: "49px",
						verticalAlign: "middle"
					},
					h1: {
						display: "inline-block",
						margin: 0,
						marginRight: "20px",
						padding: "0 23px 0 0",
						fontSize: "24px",
						fontWeight: 500,
						verticalAlign: "top",
						lineHeight: "49px"
					},
					h2: {
						fontSize: "14px",
						fontWeight: "normal",
						lineHeight: "49px",
						margin: 0,
						padding: 0
					}
				},
				g = function(e) {
					i(r, e);
					var t = c(r);

					function r() {
						return n(this, r), t.apply(this, arguments)
					}
					return o(r, [{
						key: "render",
						value: function() {
							var e = this.props,
								t = e.statusCode,
								r = e.withDarkMode,
								n = void 0 === r || r,
								o = this.props.title || f[t] || "An unexpected error has occurred";
							return s.default.createElement("div", {
								style: h.error
							}, s.default.createElement(d.default, null, s.default.createElement("title", null, t ? "".concat(t, ": ").concat(o) : "Application error: a client-side exception has occurred")), s.default.createElement("div", null, s.default.createElement("style", {
								dangerouslySetInnerHTML: {
									__html: "\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n\n                ".concat(n ? "@media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }" : "")
								}
							}), t ? s.default.createElement("h1", {
								className: "next-error-h1",
								style: h.h1
							}, t) : null, s.default.createElement("div", {
								style: h.desc
							}, s.default.createElement("h2", {
								style: h.h2
							}, this.props.title || t ? o : s.default.createElement(s.default.Fragment, null, "Application error: a client-side exception has occurred (see the browser console for more information)"), "."))))
						}
					}]), r
				}(s.default.Component);
			g.displayName = "ErrorPage", g.getInitialProps = p, g.origGetInitialProps = p, t.default = g
		},
		81981: function(e, t, r) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/_error", function() {
				return r(99651)
			}])
		}
	},
	function(e) {
		e.O(0, [9774, 2888, 179], (function() {
			return t = 81981, e(e.s = t);
			var t
		}));
		var t = e.O();
		_N_E = t
	}
]);
