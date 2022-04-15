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
    var n = (e, t, r) => Math.max(e, Math.min(r, t)),
      o = (e) => e,
      a = {
        new: () => new Map(),
        has: (e, t) => e.has(t),
        get: (e, t) => e.get(t),
        set: (e, t, r) => e.set(t, r),
        del: (e, t) => e.delete(t),
      },
      i = t(t({}, a), {}, { new: () => new WeakMap() }),
      s =
        (t(
          t(
            {},
            {
              new: () => ({}),
              has: (e, t) => t in e,
              get: (e, t) => e[t],
              set: (e, t, r) => (e[t] = r),
              del: (e, t) => delete e[t],
            }
          ),
          {},
          {
            new: () => [],
            set: (e, t, r) => e.push(r),
            del: (e, t) => e.filter((e, r) => r !== t),
          }
        ),
        function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : a,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : o,
            n = t.new();
          return function () {
            var o = r(...arguments);
            if (t.has(n, o)) return t.get(n, o);
            var a = e(...arguments);
            return t.set(n, o, a), a;
          };
        }),
      d = (e, t) => (
        (window.dbmSingletons = window.dbmSingletons || {}),
        (window.dbmSingletons[e] = window.dbmSingletons[e] || t()),
        window.dbmSingletons[e]
      );
    function c(e, t, r, n, o, a, i) {
      try {
        var s = e[a](i),
          d = s.value;
      } catch (e) {
        return void r(e);
      }
      s.done ? t(d) : Promise.resolve(d).then(n, o);
    }
    d("dbjs", () => {
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
    });
    var l,
      u,
      v = ["loading", "interactive", "complete"],
      p = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : document.readyState;
        return e === t || v.indexOf(t) >= v.indexOf(e);
      },
      h = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "complete";
        return new Promise((t) => {
          if (p(e)) t();
          else {
            var r = () => {
              p(e) &&
                (document.removeEventListener("readystatechange", r), t());
            };
            document.addEventListener("readystatechange", r);
          }
        });
      },
      f = (e) => (t) => {
        var r = t.filter((e) => e.addedNodes.length);
        r.length > 50
          ? e(document.documentElement)
          : r.forEach((t) =>
              [...t.addedNodes]
                .filter((e) => e.nodeType === Node.ELEMENT_NODE)
                .forEach((t) => e(t))
            );
      },
      g = (function () {
        var e,
          t =
            ((e = function* (e) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
              yield h(t ? "interactive" : "complete");
              var n = new MutationObserver(f(e));
              n.observe(document.body, { childList: !0, subtree: !0 }),
                r || e(document.documentElement);
            }),
            function () {
              var t = this,
                r = arguments;
              return new Promise(function (n, o) {
                var a = e.apply(t, r);
                function i(e) {
                  c(a, n, o, i, s, "next", e);
                }
                function s(e) {
                  c(a, n, o, i, s, "throw", e);
                }
                i(void 0);
              });
            });
        return function (e) {
          return t.apply(this, arguments);
        };
      })(),
      y =
        ((l = null),
        (u = () => {
          return (l =
            null !== l
              ? l
              : ((e = document.querySelector("script[nonce]")) &&
                  (e.nonce || e.getAttribute("nonce"))) ||
                "");
          var e;
        }),
        s(
          (e, t) =>
            new Promise((r, n) => {
              ((e, t, r, n) => {
                var o = document.createElement("script");
                (o.src = e),
                  (o.async = !!t),
                  (o.onload = () => r(o)),
                  (o.onerror = () => n(o)),
                  u() &&
                    ((e, t) => {
                      e.setAttribute("nonce", (e.nonce = t));
                    })(o, u()),
                  document.body.appendChild(o);
              })(e, t, r, n);
            })
        )),
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
            g(r),
            (r) => {
              var n = t.get(r);
              return n || ((n = e(r)), t.set(r, n)), n;
            }),
        };
      };
    const b = d("dbrandV3LegacyLib:eventListenersControl", () => {
      var e,
        t = {},
        r =
          ((e = []),
          {
            get(t) {
              var r =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n = e.indexOf(t);
              return (
                n < 0 && (r ? ((n = e.length), e.push(t)) : (n = void 0)), n
              );
            },
          });
      return {
        addEventListener(e, n, o, a) {
          var i = e instanceof Array ? e : [e];
          (n instanceof Array ? n : [n]).forEach((e) => {
            t[e] || (t[e] = {}),
              i.forEach((n) => {
                var i = r.get(n, !0);
                t[e][i] || (t[e][i] = []),
                  t[e][i].push({ listener: o, eventData: a });
              });
          });
        },
        removeEventListener(e, n, o) {
          var a = e instanceof Array ? e : [e];
          (n instanceof Array ? n : [n]).forEach((e) => {
            e in t &&
              a.forEach((n) => {
                var a = r.get(n);
                if (void 0 !== a && a in t[e]) {
                  var i = t[e][a],
                    s = i.find((e) => o === e.listener);
                  void 0 !== s &&
                    (i.splice(i.indexOf(s), 1),
                    0 === i.length && delete t[e][a]);
                }
              });
          });
        },
        getListeners(e, n) {
          var o = r.get(e);
          return void 0 !== o && n in t && o in t[n] ? t[n][o] : [];
        },
      };
    });
    var w = (() => {
      class e extends class {
        constructor(e, t, r) {
          (this.type = e),
            (this.active = !0),
            (this.cancelled = !1),
            (this.data = t),
            (this.altersData = !!r);
        }
        stopPropogration() {
          (this.cancelled = !0), (this.active = !1);
        }
        cancel() {
          return !this.cancelled && ((this.cancelled = !0), !0);
        }
        end() {
          return !this.active && ((this.active = !1), !0);
        }
      } {
        constructor(e, t, r, n) {
          super(t, r, n), (this.target = e), (this.currentTarget = void 0);
        }
        end() {
          super.end() && (this.currentTarget = void 0);
        }
      }
      var t = (e, t) => {
        if (e.active) {
          var r = b.getListeners(t, e.type);
          r.length > 0 &&
            ((e.currentTarget = t),
            r.forEach((t) => {
              if (e.active) {
                var r,
                  { listener: n } = t;
                (r =
                  "function" == typeof n.handleEvent
                    ? n.handleEvent(e, t.eventData)
                    : n(e, t.eventData)),
                  e.altersData && (e.data = r);
              }
            }));
        }
      };
      return {
        dispatch(r, n, o, a) {
          for (
            var i = new e(r, n, o, a), s = 0, d = r;
            i.active &&
            ("object" == typeof d || d instanceof Function) &&
            s <= 32;

          )
            t(i, d),
              (d =
                "object" == typeof d && void 0 !== d.constructor
                  ? d.constructor
                  : d instanceof Object
                  ? Object.getPrototypeOf(d)
                  : void 0),
              (s += 1);
          return (
            r instanceof Object && t(i, Object),
            t(i, void 0),
            i.end(),
            i.altersData ? i.data : !i.cancelled
          );
        },
        dispatchDataAlter(e, t, r) {
          var n = t;
          return (
            t.toLowerCase().endsWith("alter") || (n += "Alter"),
            this.dispatch(e, n, r, !0)
          );
        },
      };
    })();
    var E = function (e) {
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
      L = window.WeakSet || window.Set,
      O = window.WeakMap || window.Map,
      P = (e) => {
        var t = [];
        if (null != e) {
          if ("function" == typeof e[Symbol.iterator]) return e;
          if (e instanceof NodeList) return Array.from(e);
          "function" == typeof e.forEach && e.forEach((e) => t.push(e));
        }
        return [];
      },
      k = (e, t) => {
        var r = new e();
        for (var n of P(t)) r.add(n);
        return r;
      },
      S = (e, t) => {
        var r = new e();
        for (var n of P(t)) r.set(n[0], n[1]);
        return r;
      };
    E(k, Set), E(k, L), E(S, Map), E(S, O);
    class j extends class {
      addEventListener(e, t, r) {
        return b.addEventListener(this, e, t, r);
      }
      removeEventListener(e, t) {
        return b.removeEventListener(this, e, t);
      }
      dispatchEvent(e, t, r) {
        return w.dispatch(this, e, t, r);
      }
      dispatchAlterDataEvent(e, t) {
        return w.dispatchDataAlter(this, e, t);
      }
    } {
      constructor(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : void 0;
        super(),
          (this._isLoading = !1),
          (this._isLoaded = !1),
          (this.loadTasks = []),
          (this.options = Object.assign(
            this.constructor.loadOptions(e, this.constructor),
            t
          )),
          (this.el = e),
          (this.wrapperEl = r || null === r ? r : e);
      }
      appendLoadTask(e) {
        return this.loadTasks.push(e) - 1;
      }
      get isLoading() {
        return this._isLoading;
      }
      get isLoaded() {
        return this._isLoaded;
      }
      get isActive() {
        return this.isLoading || this.isLoaded;
      }
      load() {
        return (
          !this.isActive &&
          ((this._isLoading = !0),
          this.dispatchEvent("loadstart"),
          this._onLoadStart(),
          Promise.all(
            this.loadTasks.map((e) => ("function" == typeof e ? e() : e))
          ).then(
            (e) => (
              (this._isLoaded = !0),
              this._onLoadEnd(e),
              this.dispatchEvent("loadend"),
              e
            )
          ))
        );
      }
      _onLoadStart() {
        this.wrapperEl && this.wrapperEl.classList.add("is-loading");
      }
      _onLoadEnd() {
        this.wrapperEl && this.wrapperEl.classList.add("is-loaded"),
          this.wrapperEl && this.wrapperEl.classList.remove("is-loading");
      }
      static loadOptions(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this,
          r = {};
        for (var n in t.defaultOptions) {
          var o = t.defaultOptions[n],
            a = t.elDatasetPrefix + n.charAt(0).toUpperCase() + n.slice(1);
          if (((r[n] = o), a in e.dataset))
            switch (((r[n] = e.dataset[a]), typeof o)) {
              case "number":
                r[n] =
                  o === parseInt(o, 10) ? parseInt(r[n], 10) : parseFloat(r[n]);
                break;
              case "string":
                break;
              case "boolean":
                r[n] = !!r[n] && "false" !== r[n];
            }
        }
        return r;
      }
    }
    j.elDatasetPrefix = "dbv3LazyLoader";
    class T extends j {
      constructor(e, t, r) {
        super(e, t, r),
          this.constructor.instances.set(e, this),
          this.constructor.observer.observe(e);
      }
      _onLoadStart() {
        super._onLoadStart(), this.constructor.observer.unobserve(this.el);
      }
    }
    (T.instances = new WeakMap()),
      (T.handleIntersectionUpdate = (e) => {
        for (var t of e)
          if (t.isIntersecting) {
            var r = t.target,
              n = T.instances.get(r);
            n && n.load();
          }
      }),
      (T.observer = new IntersectionObserver(T.handleIntersectionUpdate, {
        rootMargin: "50%",
      })),
      (T.defaultOptions = { tolerance: 0.5 }),
      (T.elDatasetPrefix = "dbv3LazyScrollLoader"),
      (class extends T {
        constructor(e, t) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "init";
          super(
            e,
            arguments.length > 3 ? arguments[3] : void 0,
            arguments.length > 4 ? arguments[4] : void 0
          ),
            (this.initInstance = t),
            (this.initCallbackName = r);
        }
        _onLoadEnd(e) {
          super._onLoadEnd(e), this.initInstance[this.initCallbackName]();
        }
      }.elDatasetPrefix = "dbv3LazyInitLoader"),
      (class extends T {
        constructor(e, t, r, n, o) {
          super(e, n, o),
            (this.imageLoadTaskIndex = this.appendLoadTask(() => {
              return (
                (e = t),
                new Promise((t, r) => {
                  var n = new Image();
                  (n.onload = () => t(n)),
                    (n.onerror = () => r(n)),
                    (n.src = e);
                })
              );
              var e;
            })),
            (this.imageHolder = r || e);
        }
        _onLoadEnd(e) {
          super._onLoadEnd(e);
          var t = e[this.imageLoadTaskIndex];
          this._handleLoadedImage(t, t.src);
        }
        _handleLoadedImage(e, t) {
          var r, n;
          (r = this.imageHolder),
            (n = t.replace(/'/g, "\\'")),
            (r.style.backgroundImage = "url('".concat(n, "')"));
        }
      }.elDatasetPrefix = "dbv3LazyImgLoader");
    class _ extends T {
      constructor(e, t) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        super(e, r, arguments.length > 3 ? arguments[3] : void 0),
          this.appendLoadTask(() =>
            (function (e, t) {
              var r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : e,
                n =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : "src";
              return new Promise((o, a) => {
                e.addEventListener("load", () => o(e)),
                  e.addEventListener("loaded", () => o(e)),
                  e.addEventListener("loadstart", () => o(e)),
                  e.addEventListener("error", () => a(e)),
                  "function" == typeof e.load && e.load(),
                  r.setAttribute(n, t);
              });
            })(e, t, r.sourceEl, r.srcAttribute)
          );
      }
    }
    var D = (e) =>
        new Promise((t) => {
          e.isLoaded && t(e), e.addEventListener("loadend", () => t(e));
        }),
      M = (e) => {
        var t,
          r = e.querySelector(".dbm-theme-video-video");
        if (!(r && r instanceof HTMLVideoElement))
          throw new Error("Failed to retreive video element");
        var n = r.querySelector("source");
        if (!n) throw new Error("Failed to retreive video element");
        var o = null !== (t = n.dataset.videoSrc) && void 0 !== t ? t : "",
          a = new _(r, o, { sourceEl: n }, e),
          i = D(a).then(() => r);
        return { vidEl: e, playerEl: r, ready: i };
      },
      x = d("dbrandV3LegacyLibComponents:dbmThemeVideos", () => s(M, i));
    function A(e, t, r, n, o, a, i) {
      try {
        var s = e[a](i),
          d = s.value;
      } catch (e) {
        return void r(e);
      }
      s.done ? t(d) : Promise.resolve(d).then(n, o);
    }
    function I(e) {
      return function () {
        var t = this,
          r = arguments;
        return new Promise(function (n, o) {
          var a = e.apply(t, r);
          function i(e) {
            A(a, n, o, i, s, "next", e);
          }
          function s(e) {
            A(a, n, o, i, s, "throw", e);
          }
          i(void 0);
        });
      };
    }
    var C = (function () {
        var e = I(function* () {
          return yield new Promise((e, t) => {
            (window.onYouTubeIframeAPIReady = () => e(window.YT)),
              y("https://www.youtube.com/iframe_api"),
              setTimeout(
                () => t(new Error("Failed to load YouTube API.")),
                3e4
              );
          });
        });
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      N = (() => {
        var e = void 0,
          t = (function () {
            var e = I(function* (e) {
              var t = yield C();
              return yield new Promise((r) => {
                new t.Player(e, { events: { onReady: (e) => r(e.target) } });
              });
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return (function () {
          var r = I(function* (r) {
            var n;
            return yield null !== (n = e) && void 0 !== n ? n : (e = t(r));
          });
          return function (e) {
            return r.apply(this, arguments);
          };
        })();
      })(),
      V = (e) => {
        var t,
          r = e.querySelector(".dbm-theme-youtube-video-player");
        if (!r) throw new Error("Failed to retreive video element");
        var n =
            null !== (t = r.dataset.youtubeVideoSrc) && void 0 !== t ? t : "",
          o = new _(r, n, {}, e);
        return {
          vidEl: e,
          loadPlayer: (function () {
            var e = I(function* () {
              return yield D(o), yield N(r);
            });
            return function () {
              return e.apply(this, arguments);
            };
          })(),
        };
      },
      q = d("dbrandV3LegacyLibComponents:dbmThemeYoutubeVideos", () => s(V, i));
    function R(e, t, r, n, o, a, i) {
      try {
        var s = e[a](i),
          d = s.value;
      } catch (e) {
        return void r(e);
      }
      s.done ? t(d) : Promise.resolve(d).then(n, o);
    }
    function H(e) {
      return function () {
        var t = this,
          r = arguments;
        return new Promise(function (n, o) {
          var a = e.apply(t, r);
          function i(e) {
            R(a, n, o, i, s, "next", e);
          }
          function s(e) {
            R(a, n, o, i, s, "throw", e);
          }
          i(void 0);
        });
      };
    }
    var z = (e) => ({
        play: (function () {
          var t = H(function* () {
            return yield e.play();
          });
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        pause: () => e.pause(),
        stop: () => {
          e.pause(), (e.currentTime = 0);
        },
      }),
      F = (function () {
        var e = H(function* (e) {
          var t = ((e) =>
            ((e) =>
              e instanceof HTMLElement &&
              e.classList.contains("dbm-theme-video"))(e)
              ? x(e)
              : void 0)(e);
          if (t) {
            var r = yield t.ready;
            return z(r);
          }
        });
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      U = (function () {
        var e = H(function* (e) {
          var t = ((e) =>
            ((e) =>
              e instanceof HTMLElement &&
              e.classList.contains("dbm-theme-youtube-video"))(e)
              ? q(e)
              : void 0)(e);
          if (t) {
            var r = yield t.loadPlayer();
            return {
              play: () => r.playVideo(),
              pause: () => r.pauseVideo(),
              stop: () => r.stopVideo(),
            };
          }
        });
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      W = (function () {
        var e = H(function* (e) {
          var t,
            r,
            n =
              null !==
                (t =
                  null !==
                    (r = e instanceof HTMLMediaElement ? z(e) : void 0) &&
                  void 0 !== r
                    ? r
                    : yield F(e)) && void 0 !== t
                ? t
                : yield U(e);
          if (!n) throw new Error("HTML Video element is not supported");
          return n;
        });
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
    function Y(e, t) {
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
    function B(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Y(Object(r), !0).forEach(function (t) {
              X(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : Y(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function X(e, t, r) {
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
    var G = function () {
      var e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        {
          cachedClientRects: r = m(),
          onUpdate: o,
          mode: a = "center",
          observerOptions: i = {},
          setDefaultProps: s = !1,
          propsPrefix: d = s ? "parallax" : "",
        } = t,
        c = (e, t, r) => {
          d &&
            (e.style.setProperty("--".concat(d), "".concat(t)),
            e.style.setProperty(
              "--".concat(d, "--capped"),
              "".concat(n(-1, t, 1))
            ),
            e.style.setProperty(
              "--".concat(d, "--capped-pos-half"),
              "".concat(n(0, t / 2, 1))
            )),
            o && o(e, t, r);
        },
        l = (e, t, r) => {
          var n = t / 2,
            o = r.height / 2,
            i = e + n - r.top - o;
          switch (a) {
            case "top":
              return ((e - r.top) / r.height) * 2 - 1;
            case "center":
              return i / n;
            case "outer":
              return i / (n + o);
            case "outer-center":
              return i / o;
            case "inner":
              return i / (o - n);
            case "bottom":
              return ((e + t - (r.top + r.height)) / t) * 2 - 1;
          }
          return 0;
        },
        u = (e, t) => {
          for (var n of t) {
            var o = r.get(n),
              a = window.innerHeight,
              i = l(e, a, o);
            c(n, i, { scrollY: e, windowHeight: a, targetClientRect: o });
          }
        },
        v =
          ((e = null),
          function (t) {
            var r =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              { scrollY: n } = window;
            (r || n !== e) && requestAnimationFrame(E(u, n, t)), (e = n);
          }),
        p = (() => {
          var e = new Set(),
            t = E(v, e, !1);
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
        h = new IntersectionObserver((e) => {
          for (var t of e) p.toggle(t.target, t.isIntersecting);
        }, B({ rootMargin: "400px 0px" }, i)),
        f = (e) => h.observe(e);
      return (
        window.addEventListener(
          "resize",
          () => {
            p.update(!0);
          },
          { passive: !0 }
        ),
        { registerEl: f }
      );
    };
    (G.MODE_CENTER = "center"),
      (G.MODE_OUTER = "outer"),
      (G.MODE_OUTER_CENTER = "outer-center"),
      (G.MODE_INNER = "inner"),
      (G.MODE_BOTTOM = "bottom");
    const J = G;
    function K(e, t, r, n, o, a, i) {
      try {
        var s = e[a](i),
          d = s.value;
      } catch (e) {
        return void r(e);
      }
      s.done ? t(d) : Promise.resolve(d).then(n, o);
    }
    document.addEventListener("DOMContentLoaded", () => {
      var e,
        t,
        r,
        o = J({
          onUpdate: (e, t) => {
            var r = n(-1, t / 2, 1);
            e.style.setProperty("--slidestack-reveal-p", "".concat(r)),
              e.style.setProperty(
                "--slidestack-reveal-p-abs",
                "".concat(Math.abs(r))
              );
            var o = n(0, (t + 2) / 2, 1);
            e.style.setProperty("--slidestack-reveal-in-p", "".concat(o));
            var a = n(0, t / 2, 1);
            e.style.setProperty("--slidestack-reveal-out-p", "".concat(a));
          },
        }),
        a =
          ((e = new WeakMap()),
          (t = new WeakMap()),
          (r = (r) => {
            var n,
              o = r.currentTarget,
              a = e.get(o);
            if (a) {
              var { modalEl: i, player: s } = a,
                d = !(null !== (n = t.get(i)) && void 0 !== n && n);
              t.set(i, d),
                i.classList.toggle("is-open", d),
                d ? s.play() : s.pause(),
                d &&
                  a.blockEl.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                  });
            }
          }),
          (function () {
            var t,
              n =
                ((t = function* (t, n, o) {
                  var a = n.querySelector(".dbm-slidestack-block__video");
                  if (!a)
                    throw new Error("Failed to get slidestack video element");
                  var i = { modalEl: n, blockEl: o, player: yield W(a) };
                  e.set(t, i), t.addEventListener("click", r);
                }),
                function () {
                  var e = this,
                    r = arguments;
                  return new Promise(function (n, o) {
                    var a = t.apply(e, r);
                    function i(e) {
                      K(a, n, o, i, s, "next", e);
                    }
                    function s(e) {
                      K(a, n, o, i, s, "throw", e);
                    }
                    i(void 0);
                  });
                });
            return function (e, t, r) {
              return n.apply(this, arguments);
            };
          })()),
        i = (e) => {
          e.classList.add("dbm-slidestack-slide"), o.registerEl(e);
          var t = e.querySelectorAll(".dbm-slidestack-block__video-btn"),
            r = e.querySelector(".dbm-slidestack-block__video-modal");
          if (r) for (var n of t) a(n, r, e);
        },
        s = (e) => {
          if (!(e.length <= 1)) {
            var [t] = e;
            t && t.classList.add("dbm-slidestack-slide--first");
            var r = e[e.length - 1];
            r && r.classList.add("dbm-slidestack-slide--last"), e.forEach(i);
          }
        };
      (() => {
        var e = [
          ...document.querySelectorAll(".dbm-slidestack-block"),
          ...document.querySelectorAll(".dbm-slidestack-slide-target"),
        ];
        if (e.length) {
          var t = ((e) => {
            var t = [],
              r = null,
              n = [];
            for (var o of e)
              (o.previousElementSibling && o.previousElementSibling === r) ||
                (n.length && t.push(n), (n = [])),
                n.push(o),
                (r = o);
            return n.length && t.push(n), t;
          })(e);
          t.forEach(s);
        }
      })();
    });
  })();
})();
