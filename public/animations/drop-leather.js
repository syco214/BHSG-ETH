(() => {
  "use strict";
  (() => {
    function e(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function t(t) {
      for (var n = 1; n < arguments.length; n++) {
        var o = null != arguments[n] ? arguments[n] : {};
        n % 2
          ? e(Object(o), !0).forEach(function (e) {
              r(t, e, o[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
          : e(Object(o)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(o, e)
              );
            });
      }
      return t;
    }
    function r(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    var n,
      o = (e, t, r) => Math.max(e, Math.min(r, t)),
      i = (e) => [...Array(e).keys()],
      a = (e, t, r, n, o) => ((e - t) / (r - t)) * (o - n) + n,
      c = {
        new: () => new Map(),
        has: (e, t) => e.has(t),
        get: (e, t) => e.get(t),
        set: (e, t, r) => e.set(t, r),
        del: (e, t) => e.delete(t),
      },
      s =
        (t(t({}, c), {}, { new: () => new WeakMap() }),
        {
          new: () => ({}),
          has: (e, t) => t in e,
          get: (e, t) => e[t],
          set: (e, t, r) => (e[t] = r),
          del: (e, t) => delete e[t],
        });
    function l(e, t, r, n, o, i, a) {
      try {
        var c = e[i](a),
          s = c.value;
      } catch (e) {
        return void r(e);
      }
      c.done ? t(s) : Promise.resolve(s).then(n, o);
    }
    function d(e) {
      return function () {
        var t = this,
          r = arguments;
        return new Promise(function (n, o) {
          var i = e.apply(t, r);
          function a(e) {
            l(i, n, o, a, c, "next", e);
          }
          function c(e) {
            l(i, n, o, a, c, "throw", e);
          }
          a(void 0);
        });
      };
    }
    t(
      t({}, s),
      {},
      {
        new: () => [],
        set: (e, t, r) => e.push(r),
        del: (e, t) => e.filter((e, r) => r !== t),
      }
    ),
      (n = () => {
        var e = {},
          t = {},
          r = (r) =>
            new Promise((n) => {
              r in e
                ? n(e[r])
                : ((e, r) => {
                    e in t || (t[e] = []), t[e].push(r);
                  })(r, n);
            });
        return (
          (r.register = (r, n) => {
            (e[r] = n),
              ((e, r) => {
                if (e in t) {
                  for (var n of t[e]) n(r);
                  delete t[e];
                }
              })(r, n);
          }),
          r
        );
      }),
      (window.dbmSingletons = window.dbmSingletons || {}),
      (window.dbmSingletons.dbjs = window.dbmSingletons.dbjs || n()),
      window.dbmSingletons.dbjs;
    var u,
      v,
      p = (e) => {
        for (; e.firstChild; ) e.removeChild(e.lastChild);
        return e;
      },
      f = ["loading", "interactive", "complete"],
      g = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : document.readyState;
        return e === t || f.indexOf(t) >= f.indexOf(e);
      },
      h = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "complete";
        return new Promise((t) => {
          if (g(e)) t();
          else {
            var r = () => {
              g(e) &&
                (document.removeEventListener("readystatechange", r), t());
            };
            document.addEventListener("readystatechange", r);
          }
        });
      },
      b = (e) => (t) => {
        var r = t.filter((e) => e.addedNodes.length);
        r.length > 50
          ? e(document.documentElement)
          : r.forEach((t) =>
              [...t.addedNodes]
                .filter((e) => e.nodeType === Node.ELEMENT_NODE)
                .forEach((t) => e(t))
            );
      },
      w = (function () {
        var e = d(function* (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          yield h(t ? "interactive" : "complete");
          var n = new MutationObserver(b(e));
          n.observe(document.body, { childList: !0, subtree: !0 }),
            r || e(document.documentElement);
        });
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      y =
        ((u = null),
        (v = () => {
          return (u =
            null !== u
              ? u
              : ((e = document.querySelector("script[nonce]")) &&
                  (e.nonce || e.getAttribute("nonce"))) ||
                "");
          var e;
        }),
        (function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
          t.new();
        })(
          (e, t) =>
            new Promise((r, n) => {
              ((e, t, r, n) => {
                var o = document.createElement("script");
                (o.src = e),
                  (o.async = !!t),
                  (o.onload = () => r(o)),
                  (o.onerror = () => n(o)),
                  v() &&
                    ((e, t) => {
                      e.setAttribute("nonce", (e.nonce = t));
                    })(o, v()),
                  document.body.appendChild(o);
              })(e, t, r, n);
            })
        ),
        (e, t) => {
          if (t.length) {
            var r = new DocumentFragment();
            for (var n of t) r.appendChild(n);
            e.appendChild(r);
          }
        }),
      m = () => {
        var e, t, r;
        return {
          get:
            ((e = (e) => {
              var t = e.getBoundingClientRect();
              return {
                x: t.x,
                y: t.y,
                width: t.width,
                height: t.height,
                left: t.left + window.scrollX,
                top: t.top + window.scrollY,
              };
            }),
            (t = new Map()),
            (r = () => t.clear()),
            window.addEventListener("resize", r, { passive: !0 }),
            w(r),
            (r) => {
              var n = t.get(r);
              return n || ((n = e(r)), t.set(r, n)), n;
            }),
        };
      },
      O = (function () {
        var e = d(function* (e, t) {
          yield h();
          var r = document.querySelector(e);
          if (r) {
            var n = (function (e) {
              return new IntersectionObserver(
                (t, r) => {
                  for (var n of t)
                    if (n.isIntersecting) {
                      var o = n.target;
                      r.unobserve(o), e(o, n);
                    }
                },
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              );
            })(t, { rootMargin: "50%" });
            n.observe(r);
          }
        });
        return function (t, r) {
          return e.apply(this, arguments);
        };
      })(),
      E = (e, t) => {
        var r = e.getBoundingClientRect();
        return t ? r.height : r.width;
      };
    const P = (e, t, r) => {
      var n;
      r ||
        ((r = document.createElement("div")).classList.add(
          "dbm-lib-banner-tail"
        ),
        null === (n = t.parentNode) || void 0 === n || n.appendChild(r));
      var a = ((e, t, r) => {
          var n = 0,
            a = 0,
            c = 0,
            s = () =>
              getComputedStyle(r)
                .getPropertyValue("flex-direction")
                .startsWith("column"),
            l = () => t.cloneNode(!0),
            d = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (a && (e && (n = E(t, s())), n)) {
                var d = o(0, Math.ceil(a / n), 128);
                if (d !== c || e) {
                  var u = i((c = d)).map(l);
                  p(r), y(r, u);
                }
              }
            },
            u = new ResizeObserver((r) => {
              for (var o of r) {
                var i = o.target,
                  c = E(i, s());
                i === t
                  ? c !== n && ((n = c), d())
                  : i === e && c !== a && ((a = c), d());
              }
            });
          return u.observe(t), u.observe(e), { update: d };
        })(e, t, r),
        c = t.textContent;
      return {
        el: e,
        setText: (e) => {
          e !== c && ((c = e), (t.textContent = c), a.update(!0));
        },
      };
    };
    var j = function (e) {
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return function () {
          for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
            n[o] = arguments[o];
          return e(...r, ...n);
        };
      },
      S = window.WeakSet || window.Set,
      M = window.WeakMap || window.Map,
      C = (e) => {
        var t = [];
        if (null != e) {
          if ("function" == typeof e[Symbol.iterator]) return e;
          if (e instanceof NodeList) return Array.from(e);
          "function" == typeof e.forEach && e.forEach((e) => t.push(e));
        }
        return [];
      },
      x = (e, t) => {
        var r = new e();
        for (var n of C(t)) r.add(n);
        return r;
      },
      D = (e, t) => {
        var r = new e();
        for (var n of C(t)) r.set(n[0], n[1]);
        return r;
      };
    function N(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function L(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? N(Object(r), !0).forEach(function (t) {
              k(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : N(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function k(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    j(x, Set), j(x, S), j(D, Map), j(D, M);
    var R = function () {
      var e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        {
          cachedClientRects: r = m(),
          onUpdate: n,
          mode: i = "center",
          observerOptions: a = {},
          setDefaultProps: c = !1,
          // propsPrefix: s = c ? "parallax" : "",
        } = t,
        l = (e, t, r) => {
          s &&
            (e.style.setProperty("--".concat(s), "".concat(t)),
            e.style.setProperty(
              "--".concat(s, "--capped"),
              "".concat(o(-1, t, 1))
            ),
            e.style.setProperty(
              "--".concat(s, "--capped-pos-half"),
              "".concat(o(0, t / 2, 1))
            )),
            n && n(e, t, r);
        },
        d = (e, t, r) => {
          var n = t / 2,
            o = r.height / 2,
            a = e + n - r.top - o;
          switch (i) {
            case "top":
              return ((e - r.top) / r.height) * 2 - 1;
            case "center":
              return a / n;
            case "outer":
              return a / (n + o);
            case "outer-center":
              return a / o;
            case "inner":
              return a / (o - n);
            case "bottom":
              return ((e + t - (r.top + r.height)) / t) * 2 - 1;
          }
          return 0;
        },
        u = (e, t) => {
          for (var n of t) {
            var o = r.get(n),
              i = window.innerHeight,
              a = d(e, i, o);
            l(n, a, { scrollY: e, windowHeight: i, targetClientRect: o });
          }
        },
        v =
          ((e = null),
          function (t) {
            var r =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              { scrollY: n } = window;
            (r || n !== e) && requestAnimationFrame(j(u, n, t)), (e = n);
          }),
        p = (() => {
          var e = new Set(),
            t = j(v, e, !1);
          return {
            toggle: (r, n) =>
              n
                ? ((r) => {
                    var n = !e.size;
                    e.add(r),
                      n &&
                        (document.addEventListener("scroll", t, {
                          passive: !0,
                        }),
                        v([r], !0));
                  })(r)
                : ((r) => {
                    e.delete(r),
                      e.size || document.removeEventListener("scroll", t);
                  })(r),
            update() {
              v(
                e,
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              );
            },
          };
        })(),
        f = new IntersectionObserver((e) => {
          for (var t of e) p.toggle(t.target, t.isIntersecting);
        }, L({ rootMargin: "400px 0px" }, a)),
        g = (e) => f.observe(e);
      return (
        window.addEventListener(
          "resize",
          () => {
            p.update(!0);
          },
          { passive: !0 }
        ),
        { registerEl: g }
      );
    };
    (R.MODE_CENTER = "center"),
      (R.MODE_OUTER = "outer"),
      (R.MODE_OUTER_CENTER = "outer-center"),
      (R.MODE_INNER = "inner"),
      (R.MODE_BOTTOM = "bottom");
    const T = R;
    O(".dbv3-block--dbm-displayblock-simple-feature--leather-patina", (e) => {
      var t,
        r = e.querySelectorAll(".feature-assets .dbm-displayblock-img"),
        n = r.length,
        i = 0;
      for (var c of r) {
        var s = i + 1 / n;
        c.style.setProperty("--from", "".concat(i)),
          c.style.setProperty("--to", "".concat(s)),
          (i = s);
      }
      var l = e.querySelector(".leather-patina--day"),
        d =
          parseInt(
            null !== (t = null == l ? void 0 : l.textContent) && void 0 !== t
              ? t
              : "",
            10
          ) || 0,
        u = (e) => {
          l && (l.textContent = "".concat(e));
        };
      u(0),
        T({
          onUpdate: (e, t) => {
            var r = o(0, a((t + 1) / 2, -0.02, 0.9, 0, 1), 1),
              n = o(0, a(r, 0, 0.9, 0, 1), 1);
            e.style.setProperty("--p", "".concat(n)), u(Math.floor(r * d));
          },
          mode: "inner",
        }).registerEl(e);
    }),
      O(".dbm-displayblock--leather-shipping", (e) => {
        var t = e.querySelector(".lines");
        t && (P(e, t), e.classList.add("is-ready"));
      });
  })();
})();
