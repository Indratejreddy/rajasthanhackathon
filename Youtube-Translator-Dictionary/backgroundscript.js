(() => {
  var e = {
      6957: function (e, t, n) {
        "use strict";
        function r(e) {
          return (
            (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            r(e)
          );
        }
        function o(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function i(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? o(Object(n), !0).forEach(function (t) {
                  a(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : o(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function a(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function s(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return u(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return u(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? u(e, t)
                    : void 0
                );
              }
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function u(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function c() {
          c = function () {
            return e;
          };
          var e = {},
            t = Object.prototype,
            n = t.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";
          function u(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            u({}, "");
          } catch (e) {
            u = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function l(e, t, n, r) {
            var o = t && t.prototype instanceof d ? t : d,
              i = Object.create(o.prototype),
              a = new k(r || []);
            return (
              (i._invoke = (function (e, t, n) {
                var r = "suspendedStart";
                return function (o, i) {
                  if ("executing" === r)
                    throw new Error("Generator is already running");
                  if ("completed" === r) {
                    if ("throw" === o) throw i;
                    return { value: void 0, done: !0 };
                  }
                  for (n.method = o, n.arg = i; ; ) {
                    var a = n.delegate;
                    if (a) {
                      var s = T(a, n);
                      if (s) {
                        if (s === p) continue;
                        return s;
                      }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                      if ("suspendedStart" === r)
                        throw ((r = "completed"), n.arg);
                      n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    r = "executing";
                    var u = f(e, t, n);
                    if ("normal" === u.type) {
                      if (
                        ((r = n.done ? "completed" : "suspendedYield"),
                        u.arg === p)
                      )
                        continue;
                      return { value: u.arg, done: n.done };
                    }
                    "throw" === u.type &&
                      ((r = "completed"),
                      (n.method = "throw"),
                      (n.arg = u.arg));
                  }
                };
              })(e, n, a)),
              i
            );
          }
          function f(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          e.wrap = l;
          var p = {};
          function d() {}
          function h() {}
          function g() {}
          var v = {};
          u(v, i, function () {
            return this;
          });
          var y = Object.getPrototypeOf,
            m = y && y(y(C([])));
          m && m !== t && n.call(m, i) && (v = m);
          var b = (g.prototype = d.prototype = Object.create(v));
          function x(e) {
            ["next", "throw", "return"].forEach(function (t) {
              u(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function w(e, t) {
            function o(i, a, s, u) {
              var c = f(e[i], e, a);
              if ("throw" !== c.type) {
                var l = c.arg,
                  p = l.value;
                return p && "object" == r(p) && n.call(p, "__await")
                  ? t.resolve(p.__await).then(
                      function (e) {
                        o("next", e, s, u);
                      },
                      function (e) {
                        o("throw", e, s, u);
                      }
                    )
                  : t.resolve(p).then(
                      function (e) {
                        (l.value = e), s(l);
                      },
                      function (e) {
                        return o("throw", e, s, u);
                      }
                    );
              }
              u(c.arg);
            }
            var i;
            this._invoke = function (e, n) {
              function r() {
                return new t(function (t, r) {
                  o(e, n, t, r);
                });
              }
              return (i = i ? i.then(r, r) : r());
            };
          }
          function T(e, t) {
            var n = e.iterator[t.method];
            if (void 0 === n) {
              if (((t.delegate = null), "throw" === t.method)) {
                if (
                  e.iterator.return &&
                  ((t.method = "return"),
                  (t.arg = void 0),
                  T(e, t),
                  "throw" === t.method)
                )
                  return p;
                (t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return p;
            }
            var r = f(n, e.iterator, t.arg);
            if ("throw" === r.type)
              return (
                (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), p
              );
            var o = r.arg;
            return o
              ? o.done
                ? ((t[e.resultName] = o.value),
                  (t.next = e.nextLoc),
                  "return" !== t.method &&
                    ((t.method = "next"), (t.arg = void 0)),
                  (t.delegate = null),
                  p)
                : o
              : ((t.method = "throw"),
                (t.arg = new TypeError("iterator result is not an object")),
                (t.delegate = null),
                p);
          }
          function S(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function E(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function k(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(S, this),
              this.reset(!0);
          }
          function C(e) {
            if (e) {
              var t = e[i];
              if (t) return t.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var r = -1,
                  o = function t() {
                    for (; ++r < e.length; )
                      if (n.call(e, r))
                        return (t.value = e[r]), (t.done = !1), t;
                    return (t.value = void 0), (t.done = !0), t;
                  };
                return (o.next = o);
              }
            }
            return { next: A };
          }
          function A() {
            return { value: void 0, done: !0 };
          }
          return (
            (h.prototype = g),
            u(b, "constructor", g),
            u(g, "constructor", h),
            (h.displayName = u(g, s, "GeneratorFunction")),
            (e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === h || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, g)
                  : ((e.__proto__ = g), u(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(b)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            x(w.prototype),
            u(w.prototype, a, function () {
              return this;
            }),
            (e.AsyncIterator = w),
            (e.async = function (t, n, r, o, i) {
              void 0 === i && (i = Promise);
              var a = new w(l(t, n, r, o), i);
              return e.isGeneratorFunction(n)
                ? a
                : a.next().then(function (e) {
                    return e.done ? e.value : a.next();
                  });
            }),
            x(b),
            u(b, s, "Generator"),
            u(b, i, function () {
              return this;
            }),
            u(b, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = [];
              for (var n in e) t.push(n);
              return (
                t.reverse(),
                function n() {
                  for (; t.length; ) {
                    var r = t.pop();
                    if (r in e) return (n.value = r), (n.done = !1), n;
                  }
                  return (n.done = !0), n;
                }
              );
            }),
            (e.values = C),
            (k.prototype = {
              constructor: k,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(E),
                  !e)
                )
                  for (var t in this)
                    "t" === t.charAt(0) &&
                      n.call(this, t) &&
                      !isNaN(+t.slice(1)) &&
                      (this[t] = void 0);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var t = this;
                function r(n, r) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (t.next = n),
                    r && ((t.method = "next"), (t.arg = void 0)),
                    !!r
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return r("end");
                  if (i.tryLoc <= this.prev) {
                    var s = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (s && u) {
                      if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                    } else if (s) {
                      if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === e || "continue" === e) &&
                  i.tryLoc <= t &&
                  t <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = e),
                  (a.arg = t),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), p)
                    : this.complete(a)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  p
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), E(n), p;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var o = r.arg;
                      E(n);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, t, n) {
                return (
                  (this.delegate = {
                    iterator: C(e),
                    resultName: t,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  p
                );
              },
            }),
            e
          );
        }
        function l(e, t, n, r, o, i, a) {
          try {
            var s = e[i](a),
              u = s.value;
          } catch (e) {
            return void n(e);
          }
          s.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function f(e) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, o) {
              var i = e.apply(t, n);
              function a(e) {
                l(i, r, o, a, s, "next", e);
              }
              function s(e) {
                l(i, r, o, a, s, "throw", e);
              }
              a(void 0);
            });
          };
        }
        var p =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var d = n(9700),
          h = p(n(9755)),
          g = p(n(4117)),
          v = n(7025),
          y = p(n(4673)),
          m = !1;
        function b(e, t) {
          return x.apply(this, arguments);
        }
        function x() {
          return (
            (x = f(
              c().mark(function e(t, n) {
                var r, o, a;
                return c().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = {
                            method: "GET",
                            headers: new Headers({
                              Authorization: "bareer ".concat(t),
                            }),
                          }),
                          (o = function e() {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 1,
                              n =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : { items: {} };
                            return fetch((0, d.buildSavedWordsURL)(t), r)
                              .then(function (e) {
                                return e.json();
                              })
                              .then(function (r) {
                                var o = { items: i(i({}, n.items), r.items) };
                                return t < r.totalPage ? (t++, e(t, o)) : o;
                              });
                          }),
                          (e.next = 4),
                          o()
                        );
                      case 4:
                        (a = e.sent), n(a);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            x.apply(this, arguments)
          );
        }
        chrome.runtime.onInstalled.addListener(function (e) {
          var t = Math.random().toString(36).substring(3);
          chrome.storage.sync.get(["deviceId"], function (e) {
            e.deviceId ||
              chrome.tabs.create({ url: d.onInstalledPageURL }, function (e) {
                chrome.storage.sync.set({ deviceId: t });
              });
          });
        }),
          chrome.storage.sync.get("hasWatchedRecentUpdatesPage", function (e) {
            e.hasWatchedRecentUpdatesPage ||
              chrome.tabs.create({ url: d.recentUpdatesPageURL }, function (e) {
                chrome.storage.sync.set({ hasWatchedRecentUpdatesPage: !0 });
              });
          }),
          chrome.runtime.setUninstallURL(v.appforlanguageURL + "feedback"),
          chrome.runtime.onMessage.addListener(function (e, t, n) {
            return (
              setTimeout(function () {
                if ("SAVE_SUBTITLES" === e.type && !m) {
                  m = !0;
                  var t = {
                      method: "POST",
                      headers: new Headers({
                        "Content-Type": "application/json",
                      }),
                      body: JSON.stringify({
                        key: e.trackList.key,
                        value: e.trackList.value,
                      }),
                    },
                    r = {
                      method: "POST",
                      headers: new Headers({
                        "Content-Type": "application/json",
                      }),
                      body: JSON.stringify({
                        key: e.subtitleInfo.key,
                        lang: e.subtitleInfo.lang,
                      }),
                    };
                  fetch(d.getSubServicePostTestServer, r)
                    .then(function (e) {
                      if (e.ok) return e.json();
                      throw new Error("bad response for getting subtitles");
                    })
                    .then(function (e) {
                      "error" === e.status &&
                        fetch(d.extractionSubServiceTestServer, t);
                    }),
                    fetch(d.getSubServicePostMainServer, r)
                      .then(function (e) {
                        if (e.ok) return e.json();
                        throw new Error("bad response for getting subtitles");
                      })
                      .then(function (e) {
                        "error" === e.status &&
                          fetch(d.extractionSubServiceMainServer, t);
                      });
                }
                if ("EXPORT_FILE_FROM_BACK" === e.type) {
                  var o = e.userEmail;
                  void 0 === e.userEmail && (o = "null");
                  var i = {
                      method: "POST",
                      headers: new Headers({
                        "Content-Type": "application/json",
                      }),
                      body: JSON.stringify({
                        key: e.key,
                        lang: e.lang,
                        translation: e.translation,
                        file_type: e.fileType,
                        user_email: o,
                        type: e.phonetic,
                      }),
                    },
                    a = !1;
                  fetch(d.exportSubServiceNF, i)
                    .then(function (e) {
                      return e.ok
                        ? e.blob()
                        : 400 === e.status
                        ? ((a = !0), e.json())
                        : void 0;
                    })
                    .then(function (e) {
                      a
                        ? n(e)
                        : e.text().then(function (e) {
                            n(e);
                          });
                    })
                    .catch(function (e) {
                      n(void 0);
                    });
                }
                if (
                  ("FETCH_AND_PARSE" === e.type &&
                    fetch(e.url)
                      .then(function (e) {
                        return e.text();
                      })
                      .then(function (t) {
                        return (function (e, t) {
                          var n = (0, h.default)("<div></div>")
                              .html(
                                e.substring(
                                  e.indexOf("<body>") + 6,
                                  e.indexOf("</body>")
                                )
                              )
                              .find(t),
                            r = [];
                          n.each(function (e, t) {
                            var n = (0, h.default)(t).text();
                            r.filter(function (e) {
                              return (
                                e.word.toLowerCase().trim() ===
                                n.toLowerCase().trim()
                              );
                            }).length
                              ? r.map(function (e) {
                                  return (
                                    e.word.toLowerCase().trim() ===
                                      n.toLowerCase().trim() && e.count++,
                                    e
                                  );
                                })
                              : r.push({ word: n, count: 1 });
                          });
                          var o = 0;
                          return (
                            (r = r
                              .sort(function (e, t) {
                                return t.count - e.count;
                              })
                              .filter(function (e) {
                                return e.count > 1 || o++ < 1;
                              })).length > 3 && (r.length = 3),
                            r
                          );
                        })(t, e.parser);
                      })
                      .then(function (e) {
                        n(e);
                      })
                      .catch(function (e) {
                        n(e);
                      }),
                  "TRANSLATE_WORD_WITH_GOOGLE" === e.type &&
                    g.default
                      .translate(e.term, e.from, e.to)
                      .then(function (e) {
                        if (
                          e.alternative_translations &&
                          e.alternative_translations.length
                        ) {
                          var t = e.alternative_translations[0].alternative
                            .map(function (e) {
                              return e.word_postproc;
                            })
                            .filter(function (e) {
                              return e.trim().length;
                            });
                          t.length > 3 && (t.length = 3), n(t);
                        } else {
                          var r = e[0],
                            o = e[0];
                          r.includes("[") && (o = r.replace("[", " ")),
                            r.includes("]") && (o = o.replace("]", " ")),
                            n([o]);
                        }
                      })
                      .catch(function (e) {
                        n(e);
                      }),
                  "TRANSLATE_WITH_BACKEND_OR_GOOGLE" === e.type)
                ) {
                  var u = !1,
                    l = e.from,
                    p = e.to,
                    v = e.term;
                  fetch((0, d.buildBackendTranslationURL)(l, p, v))
                    .then(function (e) {
                      if (e.ok) return e.json();
                      throw Error("Bad Response Word");
                    })
                    .then(function (e) {
                      if (((u = !0), null != e && e.meanings))
                        n(null == e ? void 0 : e.meanings);
                      else {
                        if (
                          "There is no synonym!" ===
                          (null == e ? void 0 : e.synonymous[0])
                        )
                          throw new Error("No synonym from backend");
                        n(null == e ? void 0 : e.synonymous);
                      }
                    })
                    .catch(function (t) {
                      g.default
                        .translate(e.term, e.from, e.to)
                        .then(function (e) {
                          if (
                            e.alternative_translations &&
                            e.alternative_translations.length
                          ) {
                            var t = e.alternative_translations[0].alternative
                              .map(function (e) {
                                return e.word_postproc;
                              })
                              .filter(function (e) {
                                return e.trim().length;
                              });
                            t.length > 3 && (t.length = 3), n(t);
                          } else {
                            var r = e[0],
                              o = e[0];
                            r.includes("[") && (o = r.replace("[", " ")),
                              r.includes("]") && (o = o.replace("]", " ")),
                              u || n([o]);
                          }
                        })
                        .catch(function (e) {
                          n(e);
                        });
                    });
                }
                if (
                  ("TRANSLATE_WITH_GOOGLE_TWO" === e.type &&
                    g.default
                      .translate(e.term, e.from, e.to)
                      .then(function (e) {
                        if (
                          e.alternative_translations &&
                          e.alternative_translations.length
                        ) {
                          var t = [
                            e.alternative_translations
                              .map(function (e) {
                                return e.alternative[0].word_postproc;
                              })
                              .join(" "),
                          ];
                          n(t);
                        } else n([e[0]]);
                      })
                      .catch(function (e) {
                        n(e);
                      }),
                  "TRANSLATE_WITH_GOOGLE_THREE" === e.type &&
                    g.default
                      .translate(e.term, e.from, e.to)
                      .then(function (e) {
                        if (
                          e.alternative_translations &&
                          e.alternative_translations.length
                        ) {
                          var t = [
                            e.alternative_translations
                              .map(function (e) {
                                return e.alternative[0].word_postproc;
                              })
                              .join(" "),
                          ];
                          n(t);
                        } else n([e[0]]);
                      })
                      .catch(function (e) {
                        n(e);
                      }),
                  "SEND_SUBTITLES_WEBVTT_FILE" === e.type)
                ) {
                  var x = e.subtitle,
                    w = e.caption,
                    T = e.subtitleLanguage,
                    S = e.captionLanguage,
                    E = e.subtitleClosedCaption,
                    k = e.captionClosedCaption,
                    C = e.transliteration,
                    A = e.key,
                    L = null;
                  chrome.storage.sync.get(
                    [
                      "primaryLanguageCode",
                      "secondaryLanguageCode",
                      "currentMovieName",
                      "userProfileLanguage",
                    ],
                    function (e) {
                      L = {
                        primary_subtitle: x,
                        primary_language: T,
                        secondary_subtitle: w,
                        secondary_language: S,
                        is_primary_closed_caption: E,
                        is_secondary_closed_caption: k,
                        phonetic_type: C,
                        movie_id: A,
                        movie_name: e.currentMovieName,
                        user_language: e.userProfileLanguage,
                      };
                      var t = {
                        method: "POST",
                        headers: new Headers({
                          "Content-Type": "application/json",
                        }),
                        body: JSON.stringify(L),
                      };
                      fetch(d.alternativeProcessingService, t)
                        .then(
                          function (e) {
                            if (e.ok) return e.json();
                            throw Error("SEGMENTATION_FAILED");
                          },
                          function () {
                            return n("SEGMENTATION_FAILED");
                          }
                        )
                        .then(
                          function (e) {
                            throw (
                              (e && ((e.status = "segment"), n(e)),
                              Error("SEGMENTATION_FAILED"))
                            );
                          },
                          function () {
                            return n("SEGMENTATION_FAILED");
                          }
                        ),
                        fetch(d.processingService, t);
                    }
                  );
                }
                if ("GET_MT_SUBTITLES" === e.type) {
                  var j = e.parsedSrcWebVTT,
                    N = e.primaryLang,
                    _ = e.secondaryLang;
                  f(
                    c().mark(function e() {
                      var t, r;
                      return c().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = new y.default(j, N, _)),
                                (e.next = 3),
                                t.getMTSubtitleWebVTT()
                              );
                            case 3:
                              (r = e.sent), n({ mtSubtitle: r, language: _ });
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )();
                }
                if ("TRANSLITERATE_PRIMARY_SUBTITLE" === e.type) {
                  var O = {
                      lang: e.lang,
                      type: e.transliterationType,
                      sub: e.sub,
                    },
                    P = {
                      method: "POST",
                      headers: new Headers({
                        "Content-Type": "application/json",
                      }),
                      body: JSON.stringify(O),
                    };
                  fetch(d.transliterationService, P)
                    .then(function (e) {
                      if (e.ok) return e.json();
                      throw Error("Bad response from transliteration service");
                    })
                    .then(function (e) {
                      e && n(e);
                    });
                }
                if ("SYNC_WEBVTT_FILES" === e.type) {
                  var D = e.subtitle,
                    R = e.caption,
                    I = e.subtitleLanguage,
                    M = e.captionLanguage,
                    q = e.subtitleClosedCaption,
                    H = e.captionClosedCaption,
                    F = e.transliteration,
                    W = e.key,
                    U = null;
                  chrome.storage.sync.get(
                    [
                      "primaryLanguageCode",
                      "secondaryLanguageCode",
                      "currentMovieName",
                      "userProfileLanguage",
                    ],
                    function (e) {
                      U = {
                        primary_subtitle: D,
                        primary_language: I,
                        secondary_subtitle: R,
                        secondary_language: M,
                        is_primary_closed_caption: q,
                        is_secondary_closed_caption: H,
                        phonetic_type: F,
                        movie_id: W,
                        movie_name: e.currentMovieName,
                        user_language: e.userProfileLanguage,
                      };
                      var t = {
                        method: "POST",
                        headers: new Headers({
                          "Content-Type": "application/json",
                        }),
                        body: JSON.stringify(U),
                      };
                      fetch(d.syncService, t)
                        .then(
                          function (e) {
                            if (e.ok) return e.json();
                            throw Error("SYNC_FAILED");
                          },
                          function () {
                            return n("SYNC_FAILED");
                          }
                        )
                        .then(
                          function (e) {
                            if (e) return n(e);
                            throw Error("SYNC_FAILED");
                          },
                          function () {
                            return n("SYNC_FAILED");
                          }
                        );
                    }
                  );
                }
                if ("SEND_PRIMARY_WEBVTT_FILE" === e.type) {
                  var B = e.sub,
                    $ =
                      (e.lang,
                      e.isPrimary,
                      {
                        method: "POST",
                        headers: new Headers({
                          "Content-Type": "application/json",
                        }),
                        body: JSON.stringify({ subtitle: B }),
                      });
                  fetch(d.mergeEqualTimeService, $)
                    .then(
                      function (e) {
                        if (e.ok) return e.json();
                        throw Error("MERGE_FAILED");
                      },
                      function () {
                        return n("MERGE_FAILED");
                      }
                    )
                    .then(
                      function (e) {
                        throw (e && n(e), Error("MERGE_FAILED"));
                      },
                      function () {
                        return n("MERGE_FAILED");
                      }
                    );
                }
                if ("PRIMARY_LANG_IN_BACKEND" === e.type) {
                  e.site;
                  var V = e.sub,
                    G = e.lang,
                    z = e.phType,
                    Y =
                      (e.key,
                      e.isPrimary,
                      {
                        method: "POST",
                        headers: new Headers({
                          "Content-Type": "application/json",
                        }),
                        body: JSON.stringify({ lang: G, type: z, sub: V }),
                      });
                  fetch(d.youtubeSegmentationService, Y)
                    .then(function (e) {
                      if (e.ok) return e.json();
                      throw Error("Bad response for segmentation");
                    })
                    .then(function (e) {
                      n(e);
                    })
                    .catch(function () {
                      n("SEGMENTATION_FAILED");
                    });
                }
                if (
                  ("SYNONYMS_WITH_GOOGLE" === e.type &&
                    g.default
                      .translate(e.term, e.from, e.to)
                      .then(function (e) {
                        var t = [],
                          r = "";
                        if (e.dict && e.dict.length) {
                          var o = e.dict.map(function (e) {
                            var t = e.pos,
                              n = [],
                              r = [];
                            return (
                              e.entry
                                .map(function (e) {
                                  return e.reverse_translation;
                                })
                                .map(function (e) {
                                  var t;
                                  return (t = n).push.apply(t, s(e));
                                }),
                              e.entry.map(function (e) {
                                return r.push(e.word);
                              }),
                              (n = s(new Set(n))),
                              (r = s(new Set(r))),
                              n.length > 3 && (n.length = 3),
                              r.length > 3 && (r.length = 3),
                              { pos: t, reverse_translation: n, words: r }
                            );
                          });
                          t = s(o);
                        }
                        e.sentences &&
                          e.sentences.length &&
                          e.sentences.map(function (e) {
                            Object.prototype.hasOwnProperty.call(
                              e,
                              "src_translit"
                            ) && (r = e.src_translit);
                          }),
                          n({ reverse: t, src_translit: r });
                      })
                      .catch(function (e) {
                        n(e);
                      }),
                  "getAllSavedWordsFromBack" === e.type &&
                    b(e.token, function (e) {
                      chrome.storage.local.get(["wordList"]), n(e);
                    }),
                  "speakIt" === e.type &&
                    chrome.tts.speak(e.text, {
                      lang: e.lang,
                      rate: parseFloat(e.rate),
                    }),
                  "sendSavedWordsToBack" === e.type)
                ) {
                  var X = e.info,
                    J = {
                      method: "POST",
                      headers: new Headers({
                        "Content-Type": "application/json",
                        Authorization: "bareer ".concat(e.token),
                      }),
                      body: X,
                    };
                  fetch("https://appforlanguage.com/word/saved", J).then(
                    function (e) {
                      setTimeout(function () {
                        chrome.storage.sync.set({
                          backgroundMessageDeleteWords: "POPUP",
                        });
                      }, 1e3);
                    }
                  );
                }
                if ("UpdateuserProfilefromBack" === e.type) {
                  var Q = {
                    method: "GET",
                    headers: new Headers({
                      Authorization: "bareer ".concat(e.token),
                    }),
                  };
                  fetch("https://appforlanguage.com/auth/profile", Q)
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      if (e) {
                        n(e);
                        var t = JSON.parse(e),
                          r = new Date(),
                          o = new Date(t.vipPack.endAt);
                        Object.prototype.hasOwnProperty.call(
                          t.vipPack,
                          "productName"
                        )
                          ? (chrome.storage.sync.remove([
                              "user_status",
                              "vipPack",
                              "package",
                            ]),
                            setTimeout(function () {
                              r > o
                                ? chrome.storage.sync.set({
                                    user_status: "Expired",
                                    package: "expiredPackage",
                                    vipPack: {
                                      productName: "expired",
                                      planId: t.vipPack.planId,
                                      startAt: t.vipPack.startAt,
                                      endAt: t.vipPack.endAt,
                                      status: t.vipPack.status,
                                      subscriptionId: t.vipPack.subscriptionId,
                                    },
                                  })
                                : r <= o &&
                                  ("active" == t.vipPack.status ||
                                    "trialing" == t.vipPack.status)
                                ? chrome.storage.sync.set({
                                    user_status: "valid",
                                    package: t.vipPack.productName,
                                    vipPack: t.vipPack,
                                  })
                                : r <= o &&
                                  "canceled" == t.vipPack.status &&
                                  chrome.storage.sync.set({
                                    user_status: "cancel_valid",
                                    package: t.vipPack.productName,
                                    vipPack: t.vipPack,
                                  });
                            }, 100))
                          : chrome.storage.sync.set({
                              user_status: "Free_user",
                              package: "nopackage",
                              vipPack: {
                                productName: "free_user",
                                planId: "noplanId",
                                startAt: "nostartAt",
                                endAt: "noendAt",
                                status: "freeUserStatus",
                                subscriptionId: "subscriptionId",
                              },
                            });
                      } else e || chrome.storage.sync.remove(["user_status", "vipPack", "package", "token", "name", "email", "backupToken"]);
                    });
                }
                if ("sendCachedWordsToBack" === e.type) {
                  var K = e.info,
                    Z = {
                      method: "POST",
                      headers: new Headers({
                        Authorization: "bareer ".concat(e.token),
                      }),
                      body: K,
                    };
                  fetch("https://appforlanguage.com/word/cached", Z).then(
                    function (e) {
                      setTimeout(function () {
                        chrome.storage.sync.set({
                          backgroundMessageResetCounter: "POPUP",
                        });
                      }, 1e3);
                    }
                  );
                }
              }, 1),
              !0
            );
          }),
          chrome.storage.onChanged.addListener(function (e, t) {
            if (
              Object.keys(e).includes("token") &&
              Object.keys(e.token).includes("newValue")
            )
              b(e.token.newValue, function (e) {
                setTimeout(function () {
                  chrome.storage.sync.set({
                    backgroundMessageRemoveSignInButtonAndAddSignOutButton:
                      "POPUP",
                  });
                }, 1e3);
              });
            else if (
              Object.keys(e).includes("vipPack") &&
              Object.keys(e.vipPack).includes("newValue")
            ) {
              var n = e.vipPack.newValue.productName,
                r = "noStatus",
                o = new Date(),
                i = new Date(e.vipPack.newValue.endAt);
              n
                ? o > i
                  ? (chrome.storage.sync.set({
                      user_status: "Expired",
                      package: "expiredPackage",
                    }),
                    (r = "Expired"))
                  : o <= i &&
                    ("active" == e.vipPack.newValue.status ||
                      "trialing" == e.vipPack.newValue.status)
                  ? (chrome.storage.sync.set({
                      user_status: "valid",
                      package: e.vipPack.newValue.productName,
                    }),
                    (r = "valid"))
                  : o <= i &&
                    "canceled" == e.vipPack.newValue.status &&
                    (chrome.storage.sync.set({
                      user_status: "cancel_valid",
                      package: e.vipPack.newValue.productName,
                    }),
                    (r = "cancel_valid"))
                : (chrome.storage.sync.set({
                    user_status: "Free_user",
                    package: "nopackage",
                  }),
                  (r = "Free_user")),
                setTimeout(function () {
                  chrome.storage.sync.set({
                    backgroundMessageVipPackChanged: "POPUP",
                    backgroundMessageProductName: n,
                    backgroundMessageUserStatus: r,
                  });
                }, 1e3);
            } else if (
              Object.keys(e).includes("netflixon") &&
              Object.keys(e.netflixon).includes("newValue")
            ) {
              var a = e.netflixon.newValue;
              setTimeout(function () {
                chrome.storage.sync.set({
                  backgroundMessageNetflixOnOff: "POPUP",
                  backgroundMessageNetflixOnStatus: a,
                });
              }, 1e3);
            } else if (
              Object.keys(e).includes("youtubeon") &&
              Object.keys(e.youtubeon).includes("newValue")
            ) {
              var s = e.youtubeon.newValue;
              setTimeout(function () {
                chrome.storage.sync.set({
                  backgroundMessageYoutubeOnOff: "POPUP",
                  backgroundMessageYoutubeOnStatus: s,
                });
              }, 1e3);
            }
          });
      },
      4673: (e, t) => {
        "use strict";
        function n(e) {
          return (
            (n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            n(e)
          );
        }
        function r(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return a(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            i(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function o(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  o,
                  i = [],
                  a = !0,
                  s = !1;
                try {
                  for (
                    n = n.call(e);
                    !(a = (r = n.next()).done) &&
                    (i.push(r.value), !t || i.length !== t);
                    a = !0
                  );
                } catch (e) {
                  (s = !0), (o = e);
                } finally {
                  try {
                    a || null == n.return || n.return();
                  } finally {
                    if (s) throw o;
                  }
                }
                return i;
              }
            })(e, t) ||
            i(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function i(e, t) {
          if (e) {
            if ("string" == typeof e) return a(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? a(e, t)
                : void 0
            );
          }
        }
        function a(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function s() {
          s = function (e, t) {
            return new r(e, void 0, t);
          };
          var e = RegExp.prototype,
            t = new WeakMap();
          function r(e, n, o) {
            var i = new RegExp(e, n);
            return t.set(i, o || t.get(e)), u(i, r.prototype);
          }
          function o(e, n) {
            var r = t.get(n);
            return Object.keys(r).reduce(function (t, n) {
              return (t[n] = e[r[n]]), t;
            }, Object.create(null));
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && u(e, t);
            })(r, RegExp),
            (r.prototype.exec = function (t) {
              var n = e.exec.call(this, t);
              return n && (n.groups = o(n, this)), n;
            }),
            (r.prototype[Symbol.replace] = function (r, i) {
              if ("string" == typeof i) {
                var a = t.get(this);
                return e[Symbol.replace].call(
                  this,
                  r,
                  i.replace(/\$<([^>]+)>/g, function (e, t) {
                    return "$" + a[t];
                  })
                );
              }
              if ("function" == typeof i) {
                var s = this;
                return e[Symbol.replace].call(this, r, function () {
                  var e = arguments;
                  return (
                    "object" != n(e[e.length - 1]) &&
                      (e = [].slice.call(e)).push(o(e, s)),
                    i.apply(this, e)
                  );
                });
              }
              return e[Symbol.replace].call(this, r, i);
            }),
            s.apply(this, arguments)
          );
        }
        function u(e, t) {
          return (
            (u = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            u(e, t)
          );
        }
        function c(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function l(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var f = (function () {
          function e(t, n, r) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              l(this, "parsedSrcWebVTT", void 0),
              l(this, "primaryLanguageCode", void 0),
              l(this, "secondaryLanguageCode", void 0),
              l(
                this,
                "regex",
                s(
                  /(?:\s*\*(\s*\w*\s*)\*\s*)([\s\S]+?)(?=\s*\*\s*\w*\s*\*\s*)/g,
                  { number: 1, text: 2 }
                )
              ),
              l(
                this,
                "altRegex",
                s(/(?:\s*_(\s*\w*\s*)_\s*)([\s\S]+?)(?=\s*_\s*\w*\s*_\s*)/g, {
                  number: 1,
                  text: 2,
                })
              ),
              (this.parsedSrcWebVTT = t),
              (this.primaryLanguageCode = n),
              (this.secondaryLanguageCode = r);
          }
          var t, n;
          return (
            (t = e),
            (n = [
              {
                key: "getMTSubtitleWebVTT",
                value: function () {
                  var e = this;
                  return new Promise(function (t) {
                    e.fetchSubtitleMT().then(function (n) {
                      return t(e.convertMTSubtitleToWebVTT(n));
                    });
                  });
                },
              },
              {
                key: "fetchSubtitleMT",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "1",
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "",
                    r = o(
                      this.getMarkedSubtitleSlice(
                        this.generateMarkedSubtitle(this.parsedSrcWebVTT),
                        t
                      ),
                      2
                    ),
                    i = r[0],
                    a = r[1];
                  return fetch(
                    "https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl="
                      .concat(this.primaryLanguageCode, "&tl=")
                      .concat(this.secondaryLanguageCode, "&q=")
                      .concat(encodeURIComponent(i))
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (t) {
                      var r =
                        n +
                        " " +
                        t[0]
                          .map(function (e) {
                            return e[0];
                          })
                          .join(" ");
                      return a ? e.fetchSubtitleMT(a, r) : r;
                    });
                },
              },
              {
                key: "getMarkedSubtitleSlice",
                value: function (e, t) {
                  var n = o(this.getMarkAndRegex(), 2),
                    i = n[0],
                    a = n[1],
                    s = e.indexOf("".concat(i).concat(t).concat(i)),
                    u = e.slice(s, s + 1e4);
                  if (u.length < 1e4) return [u, ""];
                  var c,
                    l,
                    f = r(u.matchAll(a)),
                    p = "";
                  return (
                    f &&
                      ((c = f[f.length - 1].index),
                      (p =
                        (null === (l = f[f.length - 1].groups) || void 0 === l
                          ? void 0
                          : l.number) === t.toString()
                          ? ""
                          : f[f.length - 1].groups.number)),
                    [void 0 !== c ? u.slice(0, 0 === c ? void 0 : c) : "", p]
                  );
                },
              },
              {
                key: "generateMarkedSubtitle",
                value: function (e) {
                  var t = this,
                    n = o(this.getMarkAndRegex(), 1)[0];
                  return e.reduce(function (e, r) {
                    return "WEBVTT" === r.number
                      ? ""
                      : e +
                          " ".concat(n).concat(r.number).concat(n, " ") +
                          t.getCleanCueText(r.text);
                  }, "");
                },
              },
              {
                key: "convertMTSubtitleToWebVTT",
                value: function (e) {
                  var t = this,
                    n = o(this.getMarkAndRegex(), 2),
                    r = n[0],
                    a = n[1];
                  e += " ".concat(r + r, " ");
                  var s,
                    u = "WEBVTT\n\n",
                    c = (function (e, t) {
                      var n =
                        ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                        e["@@iterator"];
                      if (!n) {
                        if (Array.isArray(e) || (n = i(e))) {
                          n && (e = n);
                          var r = 0,
                            o = function () {};
                          return {
                            s: o,
                            n: function () {
                              return r >= e.length
                                ? { done: !0 }
                                : { done: !1, value: e[r++] };
                            },
                            e: function (e) {
                              throw e;
                            },
                            f: o,
                          };
                        }
                        throw new TypeError(
                          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      }
                      var a,
                        s = !0,
                        u = !1;
                      return {
                        s: function () {
                          n = n.call(e);
                        },
                        n: function () {
                          var e = n.next();
                          return (s = e.done), e;
                        },
                        e: function (e) {
                          (u = !0), (a = e);
                        },
                        f: function () {
                          try {
                            s || null == n.return || n.return();
                          } finally {
                            if (u) throw a;
                          }
                        },
                      };
                    })(e.matchAll(a));
                  try {
                    var l = function () {
                      var e,
                        n,
                        r,
                        o = s.value,
                        i =
                          null === (e = o.groups) || void 0 === e
                            ? void 0
                            : e.number,
                        a =
                          null ===
                            (n = t.parsedSrcWebVTT.find(function (e) {
                              return e.number === i;
                            })) || void 0 === n
                            ? void 0
                            : n.time;
                      a &&
                        (u += ""
                          .concat(i, "\n")
                          .concat(a, "\n")
                          .concat(
                            null === (r = o.groups) || void 0 === r
                              ? void 0
                              : r.text,
                            "\n\n"
                          ));
                    };
                    for (c.s(); !(s = c.n()).done; ) l();
                  } catch (e) {
                    c.e(e);
                  } finally {
                    c.f();
                  }
                  return u;
                },
              },
              {
                key: "getMarkAndRegex",
                value: function () {
                  return ["ar", "ar-SY"].includes(this.secondaryLanguageCode)
                    ? ["_", this.altRegex]
                    : ["*", this.regex];
                },
              },
              {
                key: "getCleanCueText",
                value: function (e) {
                  return (e = e.replace(/&lrm;|\u200E/gi, " ")).replace(
                    /(<([^>]+)>)/gi,
                    ""
                  );
                },
              },
            ]),
            n && c(t.prototype, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e
          );
        })();
        t.default = f;
      },
      7025: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.YOUTUBE_CONSTANTS =
            t.NETFLIX_CONSTANTS =
            t.appforlanguageURL =
              void 0),
          (t.appforlanguageURL = "https://appforlanguage.com/"),
          (t.NETFLIX_CONSTANTS = {
            defaults: {
              onScreenSubtitlesFontSize: 25,
              sidebarSubtitlesFontSize: 16,
            },
          }),
          (t.YOUTUBE_CONSTANTS = {
            defaults: {
              onScreenSubtitlesFontSize: 20,
              hoverDictFontSize: 20,
              sidebarFontSize: 20,
            },
          });
      },
      4117: (e, t) => {
        "use strict";
        function n(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
          }
          var t, r;
          return (
            (t = e),
            (r = [
              {
                key: "translate",
                value: function (t, n, r) {
                  var o = e.buildUrl(t, n, r);
                  return fetch(o).then(function (e) {
                    return e.json();
                  });
                },
              },
              {
                key: "buildUrl",
                value: function (e, t, n) {
                  return (
                    (t = t || "auto"),
                    (n = n || "en"),
                    "https://clients5.google.com/translate_a/t?q="
                      .concat(encodeURIComponent(e), "&sl=")
                      .concat(encodeURIComponent(t), "&tl=")
                      .concat(encodeURIComponent(n), "&client=dict-chrome-ex")
                  );
                },
              },
            ]),
            null && n(t.prototype, null),
            r && n(t, r),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e
          );
        })();
        t.default = r;
      },
      9700: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.buildNonEnPopupDictURL =
            t.buildEnToEnPopupDictURL =
            t.buildChineseHoverDictURL =
            t.buildGermanHoverDictURL =
            t.buildEnglishHoverDictURL =
            t.buildBackendTranslationURL =
            t.buildSavedWordsURL =
            t.youtubeVideoIDsService =
            t.youtubeSegmentationService =
            t.mergeEqualTimeService =
            t.transliterationService =
            t.syncService =
            t.exportSubServiceYT =
            t.exportSubServiceNF =
            t.extractionSubServiceMainServer =
            t.extractionSubServiceTestServer =
            t.getSubServicePostMainServer =
            t.getSubServicePostTestServer =
            t.savingSubsService =
            t.alternativeProcessingService =
            t.processingService =
            t.recentUpdatesPageURL =
            t.onInstalledPageURL =
              void 0),
          (t.onInstalledPageURL = "https://t4.appforlanguage.com/tutorials"),
          (t.recentUpdatesPageURL =
            "https://extension.appforlanguage.com/cbxchangelog/app-for-language-learning-netflix-youtube-updates/"),
          (t.processingService =
            "https://t4.appforlanguage.com/subsget/micro_segmentation"),
          (t.alternativeProcessingService =
            "https://t4.appforlanguage.com/segmentation2"),
          (t.savingSubsService =
            "https://t4.appforlanguage.com/subsget/micro_segmentation"),
          (t.getSubServicePostTestServer =
            "https://test2.appforlanguage.com/get_sub"),
          (t.getSubServicePostMainServer =
            "https://appforlanguage.com/get_sub"),
          (t.extractionSubServiceTestServer =
            "https://test2.appforlanguage.com/extractionsub"),
          (t.extractionSubServiceMainServer =
            "https://appforlanguage.com/extractionsub"),
          (t.exportSubServiceNF = "https://t4.appforlanguage.com/sub_export"),
          (t.exportSubServiceYT = "https://t4.appforlanguage.com/sub_export"),
          (t.syncService = "https://t4.appforlanguage.com/synchronization"),
          (t.transliterationService =
            "https://t4.appforlanguage.com/phonetics_nf"),
          (t.mergeEqualTimeService =
            "https://t4.appforlanguage.com/only_merge"),
          (t.youtubeSegmentationService =
            "https://t4.appforlanguage.com/YouTube_segmentation"),
          (t.youtubeVideoIDsService = "https://d1.appforlanguage.com/ytID"),
          (t.buildSavedWordsURL = function (e) {
            return "https://appforlanguage.com/word/saved?perPage=50&page=".concat(
              e
            );
          }),
          (t.buildBackendTranslationURL = function (e, t, n) {
            return "https://d.appforlanguage.com/translations?from="
              .concat(e, "&to=")
              .concat(t, "&word=")
              .concat(n);
          }),
          (t.buildEnglishHoverDictURL = function (e, t, n) {
            return "https://d.appforlanguage.com/en_dict/definition?word="
              .concat(e, "&sentence=")
              .concat(t, "&from_language=en&to_language=")
              .concat(n);
          }),
          (t.buildGermanHoverDictURL = function (e, t, n) {
            return "https://d.appforlanguage.com/de_dict/de_dictionary?word="
              .concat(e, "&sentence=")
              .concat(t, "&from_language=de&to_language=")
              .concat(n);
          }),
          (t.buildChineseHoverDictURL = function (e, t) {
            return "https://d.appforlanguage.com/ch_dict/zh_dictionary?word="
              .concat(e, "&from_language=zh&to_language=")
              .concat(t);
          }),
          (t.buildEnToEnPopupDictURL = function (e, t, n) {
            return "https://d.appforlanguage.com/en_to_en_translations?from="
              .concat(e, "&to=")
              .concat(t, "&word=")
              .concat(n);
          }),
          (t.buildNonEnPopupDictURL = function (e, t, n) {
            return "https://d.appforlanguage.com/popup/"
              .concat(e, "/")
              .concat(t, "/")
              .concat(n);
          });
      },
      9755: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (r, o) {
          "use strict";
          var i = [],
            a = Object.getPrototypeOf,
            s = i.slice,
            u = i.flat
              ? function (e) {
                  return i.flat.call(e);
                }
              : function (e) {
                  return i.concat.apply([], e);
                },
            c = i.push,
            l = i.indexOf,
            f = {},
            p = f.toString,
            d = f.hasOwnProperty,
            h = d.toString,
            g = h.call(Object),
            v = {},
            y = function (e) {
              return "function" == typeof e && "number" != typeof e.nodeType;
            },
            m = function (e) {
              return null != e && e === e.window;
            },
            b = r.document,
            x = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function w(e, t, n) {
            var r,
              o,
              i = (n = n || b).createElement("script");
            if (((i.text = e), t))
              for (r in x)
                (o = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                  i.setAttribute(r, o);
            n.head.appendChild(i).parentNode.removeChild(i);
          }
          function T(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? f[p.call(e)] || "object"
              : typeof e;
          }
          var S = "3.5.1",
            E = function (e, t) {
              return new E.fn.init(e, t);
            };
          function k(e) {
            var t = !!e && "length" in e && e.length,
              n = T(e);
            return (
              !y(e) &&
              !m(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (E.fn = E.prototype =
            {
              jquery: S,
              constructor: E,
              length: 0,
              toArray: function () {
                return s.call(this);
              },
              get: function (e) {
                return null == e
                  ? s.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = E.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return E.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  E.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(s.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  E.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  E.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: c,
              sort: i.sort,
              splice: i.splice,
            }),
            (E.extend = E.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  r,
                  o,
                  i,
                  a = arguments[0] || {},
                  s = 1,
                  u = arguments.length,
                  c = !1;
                for (
                  "boolean" == typeof a &&
                    ((c = a), (a = arguments[s] || {}), s++),
                    "object" == typeof a || y(a) || (a = {}),
                    s === u && ((a = this), s--);
                  s < u;
                  s++
                )
                  if (null != (e = arguments[s]))
                    for (t in e)
                      (r = e[t]),
                        "__proto__" !== t &&
                          a !== r &&
                          (c &&
                          r &&
                          (E.isPlainObject(r) || (o = Array.isArray(r)))
                            ? ((n = a[t]),
                              (i =
                                o && !Array.isArray(n)
                                  ? []
                                  : o || E.isPlainObject(n)
                                  ? n
                                  : {}),
                              (o = !1),
                              (a[t] = E.extend(c, i, r)))
                            : void 0 !== r && (a[t] = r));
                return a;
              }),
            E.extend({
              expando: "jQuery" + (S + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return !(
                  !e ||
                  "[object Object]" !== p.call(e) ||
                  ((t = a(e)) &&
                    ("function" !=
                      typeof (n = d.call(t, "constructor") && t.constructor) ||
                      h.call(n) !== g))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                w(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  r = 0;
                if (k(e))
                  for (
                    n = e.length;
                    r < n && !1 !== t.call(e[r], r, e[r]);
                    r++
                  );
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (k(Object(e))
                      ? E.merge(n, "string" == typeof e ? [e] : e)
                      : c.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : l.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                  e[o++] = t[r];
                return (e.length = o), e;
              },
              grep: function (e, t, n) {
                for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
                  !t(e[o], o) !== a && r.push(e[o]);
                return r;
              },
              map: function (e, t, n) {
                var r,
                  o,
                  i = 0,
                  a = [];
                if (k(e))
                  for (r = e.length; i < r; i++)
                    null != (o = t(e[i], i, n)) && a.push(o);
                else for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
                return u(a);
              },
              guid: 1,
              support: v,
            }),
            "function" == typeof Symbol &&
              (E.fn[Symbol.iterator] = i[Symbol.iterator]),
            E.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                f["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var C = (function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              s,
              u,
              c,
              l,
              f,
              p,
              d,
              h,
              g,
              v,
              y,
              m,
              b,
              x = "sizzle" + 1 * new Date(),
              w = e.document,
              T = 0,
              S = 0,
              E = ue(),
              k = ue(),
              C = ue(),
              A = ue(),
              L = function (e, t) {
                return e === t && (f = !0), 0;
              },
              j = {}.hasOwnProperty,
              N = [],
              _ = N.pop,
              O = N.push,
              P = N.push,
              D = N.slice,
              R = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              I =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              M = "[\\x20\\t\\r\\n\\f]",
              q =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                M +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              H =
                "\\[" +
                M +
                "*(" +
                q +
                ")(?:" +
                M +
                "*([*^$|!~]?=)" +
                M +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                q +
                "))|)" +
                M +
                "*\\]",
              F =
                ":(" +
                q +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                H +
                ")*)|.*)\\)|)",
              W = new RegExp(M + "+", "g"),
              U = new RegExp(
                "^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$",
                "g"
              ),
              B = new RegExp("^" + M + "*," + M + "*"),
              $ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
              V = new RegExp(M + "|>"),
              G = new RegExp(F),
              z = new RegExp("^" + q + "$"),
              Y = {
                ID: new RegExp("^#(" + q + ")"),
                CLASS: new RegExp("^\\.(" + q + ")"),
                TAG: new RegExp("^(" + q + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    M +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    M +
                    "*(?:([+-]|)" +
                    M +
                    "*(\\d+)|))" +
                    M +
                    "*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + I + ")$", "i"),
                needsContext: new RegExp(
                  "^" +
                    M +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    M +
                    "*((?:-\\d)?\\d*)" +
                    M +
                    "*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              X = /HTML$/i,
              J = /^(?:input|select|textarea|button)$/i,
              Q = /^h\d$/i,
              K = /^[^{]+\{\s*\[native \w/,
              Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              oe = function (e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              ie = function () {
                p();
              },
              ae = xe(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              P.apply((N = D.call(w.childNodes)), w.childNodes),
                N[w.childNodes.length].nodeType;
            } catch (e) {
              P = {
                apply: N.length
                  ? function (e, t) {
                      O.apply(e, D.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                      e.length = n - 1;
                    },
              };
            }
            function se(e, t, r, o) {
              var i,
                s,
                c,
                l,
                f,
                h,
                y,
                m = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
              if (
                ((r = r || []),
                "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
              )
                return r;
              if (!o && (p(t), (t = t || d), g)) {
                if (11 !== w && (f = Z.exec(e)))
                  if ((i = f[1])) {
                    if (9 === w) {
                      if (!(c = t.getElementById(i))) return r;
                      if (c.id === i) return r.push(c), r;
                    } else if (
                      m &&
                      (c = m.getElementById(i)) &&
                      b(t, c) &&
                      c.id === i
                    )
                      return r.push(c), r;
                  } else {
                    if (f[2]) return P.apply(r, t.getElementsByTagName(e)), r;
                    if (
                      (i = f[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return P.apply(r, t.getElementsByClassName(i)), r;
                  }
                if (
                  n.qsa &&
                  !A[e + " "] &&
                  (!v || !v.test(e)) &&
                  (1 !== w || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((y = e), (m = t), 1 === w && (V.test(e) || $.test(e)))) {
                    for (
                      ((m = (ee.test(e) && ye(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((l = t.getAttribute("id"))
                          ? (l = l.replace(re, oe))
                          : t.setAttribute("id", (l = x))),
                        s = (h = a(e)).length;
                      s--;

                    )
                      h[s] = (l ? "#" + l : ":scope") + " " + be(h[s]);
                    y = h.join(",");
                  }
                  try {
                    return P.apply(r, m.querySelectorAll(y)), r;
                  } catch (t) {
                    A(e, !0);
                  } finally {
                    l === x && t.removeAttribute("id");
                  }
                }
              }
              return u(e.replace(U, "$1"), t, r, o);
            }
            function ue() {
              var e = [];
              return function t(n, o) {
                return (
                  e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                  (t[n + " "] = o)
                );
              };
            }
            function ce(e) {
              return (e[x] = !0), e;
            }
            function le(e) {
              var t = d.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function fe(e, t) {
              for (var n = e.split("|"), o = n.length; o--; )
                r.attrHandle[n[o]] = t;
            }
            function pe(e, t) {
              var n = t && e,
                r =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (r) return r;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function de(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function he(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function ge(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && ae(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function ve(e) {
              return ce(function (t) {
                return (
                  (t = +t),
                  ce(function (n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--; )
                      n[(o = i[a])] && (n[o] = !(r[o] = n[o]));
                  })
                );
              });
            }
            function ye(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = se.support = {}),
            (i = se.isXML =
              function (e) {
                var t = e.namespaceURI,
                  n = (e.ownerDocument || e).documentElement;
                return !X.test(t || (n && n.nodeName) || "HTML");
              }),
            (p = se.setDocument =
              function (e) {
                var t,
                  o,
                  a = e ? e.ownerDocument || e : w;
                return a != d && 9 === a.nodeType && a.documentElement
                  ? ((h = (d = a).documentElement),
                    (g = !i(d)),
                    w != d &&
                      (o = d.defaultView) &&
                      o.top !== o &&
                      (o.addEventListener
                        ? o.addEventListener("unload", ie, !1)
                        : o.attachEvent && o.attachEvent("onunload", ie)),
                    (n.scope = le(function (e) {
                      return (
                        h.appendChild(e).appendChild(d.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.attributes = le(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = le(function (e) {
                      return (
                        e.appendChild(d.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = K.test(
                      d.getElementsByClassName
                    )),
                    (n.getById = le(function (e) {
                      return (
                        (h.appendChild(e).id = x),
                        !d.getElementsByName || !d.getElementsByName(x).length
                      );
                    })),
                    n.getById
                      ? ((r.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && g) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((r.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && g) {
                            var n,
                              r,
                              o,
                              i = t.getElementById(e);
                            if (i) {
                              if (
                                (n = i.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [i];
                              for (
                                o = t.getElementsByName(e), r = 0;
                                (i = o[r++]);

                              )
                                if (
                                  (n = i.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [i];
                            }
                            return [];
                          }
                        })),
                    (r.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            r = [],
                            o = 0,
                            i = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = i[o++]); )
                              1 === n.nodeType && r.push(n);
                            return r;
                          }
                          return i;
                        }),
                    (r.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && g)
                          return t.getElementsByClassName(e);
                      }),
                    (y = []),
                    (v = []),
                    (n.qsa = K.test(d.querySelectorAll)) &&
                      (le(function (e) {
                        var t;
                        (h.appendChild(e).innerHTML =
                          "<a id='" +
                          x +
                          "'></a><select id='" +
                          x +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            v.push("[*^$]=" + M + "*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            v.push("\\[" + M + "*(?:value|" + I + ")"),
                          e.querySelectorAll("[id~=" + x + "-]").length ||
                            v.push("~="),
                          (t = d.createElement("input")).setAttribute(
                            "name",
                            ""
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            v.push(
                              "\\[" +
                                M +
                                "*name" +
                                M +
                                "*=" +
                                M +
                                "*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            v.push(":checked"),
                          e.querySelectorAll("a#" + x + "+*").length ||
                            v.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          v.push("[\\r\\n\\f]");
                      }),
                      le(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = d.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            v.push("name" + M + "*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            v.push(":enabled", ":disabled"),
                          (h.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            v.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          v.push(",.*:");
                      })),
                    (n.matchesSelector = K.test(
                      (m =
                        h.matches ||
                        h.webkitMatchesSelector ||
                        h.mozMatchesSelector ||
                        h.oMatchesSelector ||
                        h.msMatchesSelector)
                    )) &&
                      le(function (e) {
                        (n.disconnectedMatch = m.call(e, "*")),
                          m.call(e, "[s!='']:x"),
                          y.push("!=", F);
                      }),
                    (v = v.length && new RegExp(v.join("|"))),
                    (y = y.length && new RegExp(y.join("|"))),
                    (t = K.test(h.compareDocumentPosition)),
                    (b =
                      t || K.test(h.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              r = t && t.parentNode;
                            return (
                              e === r ||
                              !(
                                !r ||
                                1 !== r.nodeType ||
                                !(n.contains
                                  ? n.contains(r)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(r))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (L = t
                      ? function (e, t) {
                          if (e === t) return (f = !0), 0;
                          var r =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            r ||
                            (1 &
                              (r =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === r)
                              ? e == d || (e.ownerDocument == w && b(w, e))
                                ? -1
                                : t == d || (t.ownerDocument == w && b(w, t))
                                ? 1
                                : l
                                ? R(l, e) - R(l, t)
                                : 0
                              : 4 & r
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (f = !0), 0;
                          var n,
                            r = 0,
                            o = e.parentNode,
                            i = t.parentNode,
                            a = [e],
                            s = [t];
                          if (!o || !i)
                            return e == d
                              ? -1
                              : t == d
                              ? 1
                              : o
                              ? -1
                              : i
                              ? 1
                              : l
                              ? R(l, e) - R(l, t)
                              : 0;
                          if (o === i) return pe(e, t);
                          for (n = e; (n = n.parentNode); ) a.unshift(n);
                          for (n = t; (n = n.parentNode); ) s.unshift(n);
                          for (; a[r] === s[r]; ) r++;
                          return r
                            ? pe(a[r], s[r])
                            : a[r] == w
                            ? -1
                            : s[r] == w
                            ? 1
                            : 0;
                        }),
                    d)
                  : d;
              }),
            (se.matches = function (e, t) {
              return se(e, null, null, t);
            }),
            (se.matchesSelector = function (e, t) {
              if (
                (p(e),
                n.matchesSelector &&
                  g &&
                  !A[t + " "] &&
                  (!y || !y.test(t)) &&
                  (!v || !v.test(t)))
              )
                try {
                  var r = m.call(e, t);
                  if (
                    r ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return r;
                } catch (e) {
                  A(t, !0);
                }
              return se(t, d, null, [e]).length > 0;
            }),
            (se.contains = function (e, t) {
              return (e.ownerDocument || e) != d && p(e), b(e, t);
            }),
            (se.attr = function (e, t) {
              (e.ownerDocument || e) != d && p(e);
              var o = r.attrHandle[t.toLowerCase()],
                i =
                  o && j.call(r.attrHandle, t.toLowerCase())
                    ? o(e, t, !g)
                    : void 0;
              return void 0 !== i
                ? i
                : n.attributes || !g
                ? e.getAttribute(t)
                : (i = e.getAttributeNode(t)) && i.specified
                ? i.value
                : null;
            }),
            (se.escape = function (e) {
              return (e + "").replace(re, oe);
            }),
            (se.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (se.uniqueSort = function (e) {
              var t,
                r = [],
                o = 0,
                i = 0;
              if (
                ((f = !n.detectDuplicates),
                (l = !n.sortStable && e.slice(0)),
                e.sort(L),
                f)
              ) {
                for (; (t = e[i++]); ) t === e[i] && (o = r.push(i));
                for (; o--; ) e.splice(r[o], 1);
              }
              return (l = null), e;
            }),
            (o = se.getText =
              function (e) {
                var t,
                  n = "",
                  r = 0,
                  i = e.nodeType;
                if (i) {
                  if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                  } else if (3 === i || 4 === i) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += o(t);
                return n;
              }),
            (r = se.selectors =
              {
                cacheLength: 50,
                createPseudo: ce,
                match: Y,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(te, ne)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || se.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && se.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return Y.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            G.test(n) &&
                            (t = a(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = E[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|" + M + ")" + e + "(" + M + "|$)"
                      )) &&
                        E(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (r) {
                      var o = se.attr(r, e);
                      return null == o
                        ? "!=" === t
                        : !t ||
                            ((o += ""),
                            "=" === t
                              ? o === n
                              : "!=" === t
                              ? o !== n
                              : "^=" === t
                              ? n && 0 === o.indexOf(n)
                              : "*=" === t
                              ? n && o.indexOf(n) > -1
                              : "$=" === t
                              ? n && o.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + o.replace(W, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (o === n ||
                                  o.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3),
                      a = "last" !== e.slice(-4),
                      s = "of-type" === t;
                    return 1 === r && 0 === o
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, u) {
                          var c,
                            l,
                            f,
                            p,
                            d,
                            h,
                            g = i !== a ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            y = s && t.nodeName.toLowerCase(),
                            m = !u && !s,
                            b = !1;
                          if (v) {
                            if (i) {
                              for (; g; ) {
                                for (p = t; (p = p[g]); )
                                  if (
                                    s
                                      ? p.nodeName.toLowerCase() === y
                                      : 1 === p.nodeType
                                  )
                                    return !1;
                                h = g = "only" === e && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [a ? v.firstChild : v.lastChild]), a && m)
                            ) {
                              for (
                                b =
                                  (d =
                                    (c =
                                      (l =
                                        (f = (p = v)[x] || (p[x] = {}))[
                                          p.uniqueID
                                        ] || (f[p.uniqueID] = {}))[e] ||
                                      [])[0] === T && c[1]) && c[2],
                                  p = d && v.childNodes[d];
                                (p =
                                  (++d && p && p[g]) || (b = d = 0) || h.pop());

                              )
                                if (1 === p.nodeType && ++b && p === t) {
                                  l[e] = [T, d, b];
                                  break;
                                }
                            } else if (
                              (m &&
                                (b = d =
                                  (c =
                                    (l =
                                      (f = (p = t)[x] || (p[x] = {}))[
                                        p.uniqueID
                                      ] || (f[p.uniqueID] = {}))[e] ||
                                    [])[0] === T && c[1]),
                              !1 === b)
                            )
                              for (
                                ;
                                (p =
                                  (++d && p && p[g]) ||
                                  (b = d = 0) ||
                                  h.pop()) &&
                                ((s
                                  ? p.nodeName.toLowerCase() !== y
                                  : 1 !== p.nodeType) ||
                                  !++b ||
                                  (m &&
                                    ((l =
                                      (f = p[x] || (p[x] = {}))[p.uniqueID] ||
                                      (f[p.uniqueID] = {}))[e] = [T, b]),
                                  p !== t));

                              );
                            return (b -= o) === r || (b % r == 0 && b / r >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      o =
                        r.pseudos[e] ||
                        r.setFilters[e.toLowerCase()] ||
                        se.error("unsupported pseudo: " + e);
                    return o[x]
                      ? o(t)
                      : o.length > 1
                      ? ((n = [e, e, "", t]),
                        r.setFilters.hasOwnProperty(e.toLowerCase())
                          ? ce(function (e, n) {
                              for (var r, i = o(e, t), a = i.length; a--; )
                                e[(r = R(e, i[a]))] = !(n[r] = i[a]);
                            })
                          : function (e) {
                              return o(e, 0, n);
                            })
                      : o;
                  },
                },
                pseudos: {
                  not: ce(function (e) {
                    var t = [],
                      n = [],
                      r = s(e.replace(U, "$1"));
                    return r[x]
                      ? ce(function (e, t, n, o) {
                          for (
                            var i, a = r(e, null, o, []), s = e.length;
                            s--;

                          )
                            (i = a[s]) && (e[s] = !(t[s] = i));
                        })
                      : function (e, o, i) {
                          return (
                            (t[0] = e),
                            r(t, null, i, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: ce(function (e) {
                    return function (t) {
                      return se(e, t).length > 0;
                    };
                  }),
                  contains: ce(function (e) {
                    return (
                      (e = e.replace(te, ne)),
                      function (t) {
                        return (t.textContent || o(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: ce(function (e) {
                    return (
                      z.test(e || "") || se.error("unsupported lang: " + e),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = g
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === h;
                  },
                  focus: function (e) {
                    return (
                      e === d.activeElement &&
                      (!d.hasFocus || d.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: ge(!1),
                  disabled: ge(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !r.pseudos.empty(e);
                  },
                  header: function (e) {
                    return Q.test(e.nodeName);
                  },
                  input: function (e) {
                    return J.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: ve(function () {
                    return [0];
                  }),
                  last: ve(function (e, t) {
                    return [t - 1];
                  }),
                  eq: ve(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: ve(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: ve(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: ve(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                      e.push(r);
                    return e;
                  }),
                  gt: ve(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                  }),
                },
              }),
            (r.pseudos.nth = r.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              r.pseudos[t] = de(t);
            for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
            function me() {}
            function be(e) {
              for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
              return r;
            }
            function xe(e, t, n) {
              var r = t.dir,
                o = t.next,
                i = o || r,
                a = n && "parentNode" === i,
                s = S++;
              return t.first
                ? function (t, n, o) {
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a) return e(t, n, o);
                    return !1;
                  }
                : function (t, n, u) {
                    var c,
                      l,
                      f,
                      p = [T, s];
                    if (u) {
                      for (; (t = t[r]); )
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                    } else
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || a)
                          if (
                            ((l =
                              (f = t[x] || (t[x] = {}))[t.uniqueID] ||
                              (f[t.uniqueID] = {})),
                            o && o === t.nodeName.toLowerCase())
                          )
                            t = t[r] || t;
                          else {
                            if ((c = l[i]) && c[0] === T && c[1] === s)
                              return (p[2] = c[2]);
                            if (((l[i] = p), (p[2] = e(t, n, u)))) return !0;
                          }
                    return !1;
                  };
            }
            function we(e) {
              return e.length > 1
                ? function (t, n, r) {
                    for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function Te(e, t, n, r, o) {
              for (
                var i, a = [], s = 0, u = e.length, c = null != t;
                s < u;
                s++
              )
                (i = e[s]) &&
                  ((n && !n(i, r, o)) || (a.push(i), c && t.push(s)));
              return a;
            }
            function Se(e, t, n, r, o, i) {
              return (
                r && !r[x] && (r = Se(r)),
                o && !o[x] && (o = Se(o, i)),
                ce(function (i, a, s, u) {
                  var c,
                    l,
                    f,
                    p = [],
                    d = [],
                    h = a.length,
                    g =
                      i ||
                      (function (e, t, n) {
                        for (var r = 0, o = t.length; r < o; r++)
                          se(e, t[r], n);
                        return n;
                      })(t || "*", s.nodeType ? [s] : s, []),
                    v = !e || (!i && t) ? g : Te(g, p, e, s, u),
                    y = n ? (o || (i ? e : h || r) ? [] : a) : v;
                  if ((n && n(v, y, s, u), r))
                    for (c = Te(y, d), r(c, [], s, u), l = c.length; l--; )
                      (f = c[l]) && (y[d[l]] = !(v[d[l]] = f));
                  if (i) {
                    if (o || e) {
                      if (o) {
                        for (c = [], l = y.length; l--; )
                          (f = y[l]) && c.push((v[l] = f));
                        o(null, (y = []), c, u);
                      }
                      for (l = y.length; l--; )
                        (f = y[l]) &&
                          (c = o ? R(i, f) : p[l]) > -1 &&
                          (i[c] = !(a[c] = f));
                    }
                  } else (y = Te(y === a ? y.splice(h, y.length) : y)), o ? o(null, a, y, u) : P.apply(a, y);
                })
              );
            }
            function Ee(e) {
              for (
                var t,
                  n,
                  o,
                  i = e.length,
                  a = r.relative[e[0].type],
                  s = a || r.relative[" "],
                  u = a ? 1 : 0,
                  l = xe(
                    function (e) {
                      return e === t;
                    },
                    s,
                    !0
                  ),
                  f = xe(
                    function (e) {
                      return R(t, e) > -1;
                    },
                    s,
                    !0
                  ),
                  p = [
                    function (e, n, r) {
                      var o =
                        (!a && (r || n !== c)) ||
                        ((t = n).nodeType ? l(e, n, r) : f(e, n, r));
                      return (t = null), o;
                    },
                  ];
                u < i;
                u++
              )
                if ((n = r.relative[e[u].type])) p = [xe(we(p), n)];
                else {
                  if ((n = r.filter[e[u].type].apply(null, e[u].matches))[x]) {
                    for (o = ++u; o < i && !r.relative[e[o].type]; o++);
                    return Se(
                      u > 1 && we(p),
                      u > 1 &&
                        be(
                          e
                            .slice(0, u - 1)
                            .concat({ value: " " === e[u - 2].type ? "*" : "" })
                        ).replace(U, "$1"),
                      n,
                      u < o && Ee(e.slice(u, o)),
                      o < i && Ee((e = e.slice(o))),
                      o < i && be(e)
                    );
                  }
                  p.push(n);
                }
              return we(p);
            }
            return (
              (me.prototype = r.filters = r.pseudos),
              (r.setFilters = new me()),
              (a = se.tokenize =
                function (e, t) {
                  var n,
                    o,
                    i,
                    a,
                    s,
                    u,
                    c,
                    l = k[e + " "];
                  if (l) return t ? 0 : l.slice(0);
                  for (s = e, u = [], c = r.preFilter; s; ) {
                    for (a in ((n && !(o = B.exec(s))) ||
                      (o && (s = s.slice(o[0].length) || s), u.push((i = []))),
                    (n = !1),
                    (o = $.exec(s)) &&
                      ((n = o.shift()),
                      i.push({ value: n, type: o[0].replace(U, " ") }),
                      (s = s.slice(n.length))),
                    r.filter))
                      !(o = Y[a].exec(s)) ||
                        (c[a] && !(o = c[a](o))) ||
                        ((n = o.shift()),
                        i.push({ value: n, type: a, matches: o }),
                        (s = s.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? s.length : s ? se.error(e) : k(e, u).slice(0);
                }),
              (s = se.compile =
                function (e, t) {
                  var n,
                    o = [],
                    i = [],
                    s = C[e + " "];
                  if (!s) {
                    for (t || (t = a(e)), n = t.length; n--; )
                      (s = Ee(t[n]))[x] ? o.push(s) : i.push(s);
                    (s = C(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          o = e.length > 0,
                          i = function (i, a, s, u, l) {
                            var f,
                              h,
                              v,
                              y = 0,
                              m = "0",
                              b = i && [],
                              x = [],
                              w = c,
                              S = i || (o && r.find.TAG("*", l)),
                              E = (T += null == w ? 1 : Math.random() || 0.1),
                              k = S.length;
                            for (
                              l && (c = a == d || a || l);
                              m !== k && null != (f = S[m]);
                              m++
                            ) {
                              if (o && f) {
                                for (
                                  h = 0,
                                    a ||
                                      f.ownerDocument == d ||
                                      (p(f), (s = !g));
                                  (v = e[h++]);

                                )
                                  if (v(f, a || d, s)) {
                                    u.push(f);
                                    break;
                                  }
                                l && (T = E);
                              }
                              n && ((f = !v && f) && y--, i && b.push(f));
                            }
                            if (((y += m), n && m !== y)) {
                              for (h = 0; (v = t[h++]); ) v(b, x, a, s);
                              if (i) {
                                if (y > 0)
                                  for (; m--; )
                                    b[m] || x[m] || (x[m] = _.call(u));
                                x = Te(x);
                              }
                              P.apply(u, x),
                                l &&
                                  !i &&
                                  x.length > 0 &&
                                  y + t.length > 1 &&
                                  se.uniqueSort(u);
                            }
                            return l && ((T = E), (c = w)), b;
                          };
                        return n ? ce(i) : i;
                      })(i, o)
                    )),
                      (s.selector = e);
                  }
                  return s;
                }),
              (u = se.select =
                function (e, t, n, o) {
                  var i,
                    u,
                    c,
                    l,
                    f,
                    p = "function" == typeof e && e,
                    d = !o && a((e = p.selector || e));
                  if (((n = n || []), 1 === d.length)) {
                    if (
                      (u = d[0] = d[0].slice(0)).length > 2 &&
                      "ID" === (c = u[0]).type &&
                      9 === t.nodeType &&
                      g &&
                      r.relative[u[1].type]
                    ) {
                      if (
                        !(t = (r.find.ID(c.matches[0].replace(te, ne), t) ||
                          [])[0])
                      )
                        return n;
                      p && (t = t.parentNode),
                        (e = e.slice(u.shift().value.length));
                    }
                    for (
                      i = Y.needsContext.test(e) ? 0 : u.length;
                      i-- && ((c = u[i]), !r.relative[(l = c.type)]);

                    )
                      if (
                        (f = r.find[l]) &&
                        (o = f(
                          c.matches[0].replace(te, ne),
                          (ee.test(u[0].type) && ye(t.parentNode)) || t
                        ))
                      ) {
                        if ((u.splice(i, 1), !(e = o.length && be(u))))
                          return P.apply(n, o), n;
                        break;
                      }
                  }
                  return (
                    (p || s(e, d))(
                      o,
                      t,
                      !g,
                      n,
                      !t || (ee.test(e) && ye(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = x.split("").sort(L).join("") === x),
              (n.detectDuplicates = !!f),
              p(),
              (n.sortDetached = le(function (e) {
                return (
                  1 & e.compareDocumentPosition(d.createElement("fieldset"))
                );
              })),
              le(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                fe("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                le(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                fe("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              le(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                fe(I, function (e, t, n) {
                  var r;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (r = e.getAttributeNode(t)) && r.specified
                      ? r.value
                      : null;
                }),
              se
            );
          })(r);
          (E.find = C),
            (E.expr = C.selectors),
            (E.expr[":"] = E.expr.pseudos),
            (E.uniqueSort = E.unique = C.uniqueSort),
            (E.text = C.getText),
            (E.isXMLDoc = C.isXML),
            (E.contains = C.contains),
            (E.escapeSelector = C.escape);
          var A = function (e, t, n) {
              for (
                var r = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (o && E(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            L = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            j = E.expr.match.needsContext;
          function N(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var _ =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function O(e, t, n) {
            return y(t)
              ? E.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
                })
              : t.nodeType
              ? E.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? E.grep(e, function (e) {
                  return l.call(t, e) > -1 !== n;
                })
              : E.filter(t, e, n);
          }
          (E.filter = function (e, t, n) {
            var r = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === r.nodeType
                ? E.find.matchesSelector(r, e)
                  ? [r]
                  : []
                : E.find.matches(
                    e,
                    E.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            E.fn.extend({
              find: function (e) {
                var t,
                  n,
                  r = this.length,
                  o = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    E(e).filter(function () {
                      for (t = 0; t < r; t++)
                        if (E.contains(o[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                  E.find(e, o[t], n);
                return r > 1 ? E.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(O(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(O(this, e || [], !0));
              },
              is: function (e) {
                return !!O(
                  this,
                  "string" == typeof e && j.test(e) ? E(e) : e || [],
                  !1
                ).length;
              },
            });
          var P,
            D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((E.fn.init = function (e, t, n) {
            var r, o;
            if (!e) return this;
            if (((n = n || P), "string" == typeof e)) {
              if (
                !(r =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : D.exec(e)) ||
                (!r[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (r[1]) {
                if (
                  ((t = t instanceof E ? t[0] : t),
                  E.merge(
                    this,
                    E.parseHTML(
                      r[1],
                      t && t.nodeType ? t.ownerDocument || t : b,
                      !0
                    )
                  ),
                  _.test(r[1]) && E.isPlainObject(t))
                )
                  for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
              }
              return (
                (o = b.getElementById(r[2])) &&
                  ((this[0] = o), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : y(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(E)
              : E.makeArray(e, this);
          }).prototype = E.fn),
            (P = E(b));
          var R = /^(?:parents|prev(?:Until|All))/,
            I = { children: !0, contents: !0, next: !0, prev: !0 };
          function M(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          E.fn.extend({
            has: function (e) {
              var t = E(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (E.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                o = this.length,
                i = [],
                a = "string" != typeof e && E(e);
              if (!j.test(e))
                for (; r < o; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (a
                        ? a.index(n) > -1
                        : 1 === n.nodeType && E.find.matchesSelector(n, e))
                    ) {
                      i.push(n);
                      break;
                    }
              return this.pushStack(i.length > 1 ? E.uniqueSort(i) : i);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? l.call(E(e), this[0])
                  : l.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            E.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return A(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return A(e, "parentNode", n);
                },
                next: function (e) {
                  return M(e, "nextSibling");
                },
                prev: function (e) {
                  return M(e, "previousSibling");
                },
                nextAll: function (e) {
                  return A(e, "nextSibling");
                },
                prevAll: function (e) {
                  return A(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return A(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return A(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return L((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return L(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && a(e.contentDocument)
                    ? e.contentDocument
                    : (N(e, "template") && (e = e.content || e),
                      E.merge([], e.childNodes));
                },
              },
              function (e, t) {
                E.fn[e] = function (n, r) {
                  var o = E.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (o = E.filter(r, o)),
                    this.length > 1 &&
                      (I[e] || E.uniqueSort(o), R.test(e) && o.reverse()),
                    this.pushStack(o)
                  );
                };
              }
            );
          var q = /[^\x20\t\r\n\f]+/g;
          function H(e) {
            return e;
          }
          function F(e) {
            throw e;
          }
          function W(e, t, n, r) {
            var o;
            try {
              e && y((o = e.promise))
                ? o.call(e).done(t).fail(n)
                : e && y((o = e.then))
                ? o.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (E.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      E.each(e.match(q) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : E.extend({}, e);
            var t,
              n,
              r,
              o,
              i = [],
              a = [],
              s = -1,
              u = function () {
                for (o = o || e.once, r = t = !0; a.length; s = -1)
                  for (n = a.shift(); ++s < i.length; )
                    !1 === i[s].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((s = i.length), (n = !1));
                e.memory || (n = !1), (t = !1), o && (i = n ? [] : "");
              },
              c = {
                add: function () {
                  return (
                    i &&
                      (n && !t && ((s = i.length - 1), a.push(n)),
                      (function t(n) {
                        E.each(n, function (n, r) {
                          y(r)
                            ? (e.unique && c.has(r)) || i.push(r)
                            : r && r.length && "string" !== T(r) && t(r);
                        });
                      })(arguments),
                      n && !t && u()),
                    this
                  );
                },
                remove: function () {
                  return (
                    E.each(arguments, function (e, t) {
                      for (var n; (n = E.inArray(t, i, n)) > -1; )
                        i.splice(n, 1), n <= s && s--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? E.inArray(e, i) > -1 : i.length > 0;
                },
                empty: function () {
                  return i && (i = []), this;
                },
                disable: function () {
                  return (o = a = []), (i = n = ""), this;
                },
                disabled: function () {
                  return !i;
                },
                lock: function () {
                  return (o = a = []), n || t || (i = n = ""), this;
                },
                locked: function () {
                  return !!o;
                },
                fireWith: function (e, n) {
                  return (
                    o ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      a.push(n),
                      t || u()),
                    this
                  );
                },
                fire: function () {
                  return c.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!r;
                },
              };
            return c;
          }),
            E.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      E.Callbacks("memory"),
                      E.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      E.Callbacks("once memory"),
                      E.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      E.Callbacks("once memory"),
                      E.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  o = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return i.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return o.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return E.Deferred(function (n) {
                        E.each(t, function (t, r) {
                          var o = y(e[r[4]]) && e[r[4]];
                          i[r[1]](function () {
                            var e = o && o.apply(this, arguments);
                            e && y(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[r[0] + "With"](this, o ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, o) {
                      var i = 0;
                      function a(e, t, n, o) {
                        return function () {
                          var s = this,
                            u = arguments,
                            c = function () {
                              var r, c;
                              if (!(e < i)) {
                                if ((r = n.apply(s, u)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (c =
                                  r &&
                                  ("object" == typeof r ||
                                    "function" == typeof r) &&
                                  r.then),
                                  y(c)
                                    ? o
                                      ? c.call(r, a(i, t, H, o), a(i, t, F, o))
                                      : (i++,
                                        c.call(
                                          r,
                                          a(i, t, H, o),
                                          a(i, t, F, o),
                                          a(i, t, H, t.notifyWith)
                                        ))
                                    : (n !== H && ((s = void 0), (u = [r])),
                                      (o || t.resolveWith)(s, u));
                              }
                            },
                            l = o
                              ? c
                              : function () {
                                  try {
                                    c();
                                  } catch (r) {
                                    E.Deferred.exceptionHook &&
                                      E.Deferred.exceptionHook(r, l.stackTrace),
                                      e + 1 >= i &&
                                        (n !== F && ((s = void 0), (u = [r])),
                                        t.rejectWith(s, u));
                                  }
                                };
                          e
                            ? l()
                            : (E.Deferred.getStackHook &&
                                (l.stackTrace = E.Deferred.getStackHook()),
                              r.setTimeout(l));
                        };
                      }
                      return E.Deferred(function (r) {
                        t[0][3].add(a(0, r, y(o) ? o : H, r.notifyWith)),
                          t[1][3].add(a(0, r, y(e) ? e : H)),
                          t[2][3].add(a(0, r, y(n) ? n : F));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? E.extend(e, o) : o;
                    },
                  },
                  i = {};
                return (
                  E.each(t, function (e, r) {
                    var a = r[2],
                      s = r[5];
                    (o[r[1]] = a.add),
                      s &&
                        a.add(
                          function () {
                            n = s;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      a.add(r[3].fire),
                      (i[r[0]] = function () {
                        return (
                          i[r[0] + "With"](
                            this === i ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (i[r[0] + "With"] = a.fireWith);
                  }),
                  o.promise(i),
                  e && e.call(i, i),
                  i
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  r = Array(n),
                  o = s.call(arguments),
                  i = E.Deferred(),
                  a = function (e) {
                    return function (n) {
                      (r[e] = this),
                        (o[e] = arguments.length > 1 ? s.call(arguments) : n),
                        --t || i.resolveWith(r, o);
                    };
                  };
                if (
                  t <= 1 &&
                  (W(e, i.done(a(n)).resolve, i.reject, !t),
                  "pending" === i.state() || y(o[n] && o[n].then))
                )
                  return i.then();
                for (; n--; ) W(o[n], a(n), i.reject);
                return i.promise();
              },
            });
          var U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (E.Deferred.exceptionHook = function (e, t) {
            r.console &&
              r.console.warn &&
              e &&
              U.test(e.name) &&
              r.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (E.readyException = function (e) {
              r.setTimeout(function () {
                throw e;
              });
            });
          var B = E.Deferred();
          function $() {
            b.removeEventListener("DOMContentLoaded", $),
              r.removeEventListener("load", $),
              E.ready();
          }
          (E.fn.ready = function (e) {
            return (
              B.then(e).catch(function (e) {
                E.readyException(e);
              }),
              this
            );
          }),
            E.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --E.readyWait : E.isReady) ||
                  ((E.isReady = !0),
                  (!0 !== e && --E.readyWait > 0) || B.resolveWith(b, [E]));
              },
            }),
            (E.ready.then = B.then),
            "complete" === b.readyState ||
            ("loading" !== b.readyState && !b.documentElement.doScroll)
              ? r.setTimeout(E.ready)
              : (b.addEventListener("DOMContentLoaded", $),
                r.addEventListener("load", $));
          var V = function (e, t, n, r, o, i, a) {
              var s = 0,
                u = e.length,
                c = null == n;
              if ("object" === T(n))
                for (s in ((o = !0), n)) V(e, t, s, n[s], !0, i, a);
              else if (
                void 0 !== r &&
                ((o = !0),
                y(r) || (a = !0),
                c &&
                  (a
                    ? (t.call(e, r), (t = null))
                    : ((c = t),
                      (t = function (e, t, n) {
                        return c.call(E(e), n);
                      }))),
                t)
              )
                for (; s < u; s++)
                  t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
              return o ? e : c ? t.call(e) : u ? t(e[0], n) : i;
            },
            G = /^-ms-/,
            z = /-([a-z])/g;
          function Y(e, t) {
            return t.toUpperCase();
          }
          function X(e) {
            return e.replace(G, "ms-").replace(z, Y);
          }
          var J = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function Q() {
            this.expando = E.expando + Q.uid++;
          }
          (Q.uid = 1),
            (Q.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    J(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var r,
                  o = this.cache(e);
                if ("string" == typeof t) o[X(t)] = n;
                else for (r in t) o[X(r)] = t[r];
                return o;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][X(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(X)
                      : (t = X(t)) in r
                      ? [t]
                      : t.match(q) || []).length;
                    for (; n--; ) delete r[t[n]];
                  }
                  (void 0 === t || E.isEmptyObject(r)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !E.isEmptyObject(t);
              },
            });
          var K = new Q(),
            Z = new Q(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ne(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((r = "data-" + t.replace(te, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(r)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                Z.set(e, t, n);
              } else n = void 0;
            return n;
          }
          E.extend({
            hasData: function (e) {
              return Z.hasData(e) || K.hasData(e);
            },
            data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            removeData: function (e, t) {
              Z.remove(e, t);
            },
            _data: function (e, t, n) {
              return K.access(e, t, n);
            },
            _removeData: function (e, t) {
              K.remove(e, t);
            },
          }),
            E.fn.extend({
              data: function (e, t) {
                var n,
                  r,
                  o,
                  i = this[0],
                  a = i && i.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((o = Z.get(i)),
                    1 === i.nodeType && !K.get(i, "hasDataAttrs"))
                  ) {
                    for (n = a.length; n--; )
                      a[n] &&
                        0 === (r = a[n].name).indexOf("data-") &&
                        ((r = X(r.slice(5))), ne(i, r, o[r]));
                    K.set(i, "hasDataAttrs", !0);
                  }
                  return o;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      Z.set(this, e);
                    })
                  : V(
                      this,
                      function (t) {
                        var n;
                        if (i && void 0 === t)
                          return void 0 !== (n = Z.get(i, e)) ||
                            void 0 !== (n = ne(i, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          Z.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  Z.remove(this, e);
                });
              },
            }),
            E.extend({
              queue: function (e, t, n) {
                var r;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (r = K.get(e, t)),
                    n &&
                      (!r || Array.isArray(n)
                        ? (r = K.access(e, t, E.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = E.queue(e, t),
                  r = n.length,
                  o = n.shift(),
                  i = E._queueHooks(e, t);
                "inprogress" === o && ((o = n.shift()), r--),
                  o &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete i.stop,
                    o.call(
                      e,
                      function () {
                        E.dequeue(e, t);
                      },
                      i
                    )),
                  !r && i && i.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  K.get(e, n) ||
                  K.access(e, n, {
                    empty: E.Callbacks("once memory").add(function () {
                      K.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            E.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? E.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = E.queue(this, e, t);
                        E._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            E.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  E.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  r = 1,
                  o = E.Deferred(),
                  i = this,
                  a = this.length,
                  s = function () {
                    --r || o.resolveWith(i, [i]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  a--;

                )
                  (n = K.get(i[a], e + "queueHooks")) &&
                    n.empty &&
                    (r++, n.empty.add(s));
                return s(), o.promise(t);
              },
            });
          var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            oe = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
            ie = ["Top", "Right", "Bottom", "Left"],
            ae = b.documentElement,
            se = function (e) {
              return E.contains(e.ownerDocument, e);
            },
            ue = { composed: !0 };
          ae.getRootNode &&
            (se = function (e) {
              return (
                E.contains(e.ownerDocument, e) ||
                e.getRootNode(ue) === e.ownerDocument
              );
            });
          var ce = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                se(e) &&
                "none" === E.css(e, "display"))
            );
          };
          function le(e, t, n, r) {
            var o,
              i,
              a = 20,
              s = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return E.css(e, t, "");
                  },
              u = s(),
              c = (n && n[3]) || (E.cssNumber[t] ? "" : "px"),
              l =
                e.nodeType &&
                (E.cssNumber[t] || ("px" !== c && +u)) &&
                oe.exec(E.css(e, t));
            if (l && l[3] !== c) {
              for (u /= 2, c = c || l[3], l = +u || 1; a--; )
                E.style(e, t, l + c),
                  (1 - i) * (1 - (i = s() / u || 0.5)) <= 0 && (a = 0),
                  (l /= i);
              (l *= 2), E.style(e, t, l + c), (n = n || []);
            }
            return (
              n &&
                ((l = +l || +u || 0),
                (o = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = c), (r.start = l), (r.end = o))),
              o
            );
          }
          var fe = {};
          function pe(e) {
            var t,
              n = e.ownerDocument,
              r = e.nodeName,
              o = fe[r];
            return (
              o ||
              ((t = n.body.appendChild(n.createElement(r))),
              (o = E.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === o && (o = "block"),
              (fe[r] = o),
              o)
            );
          }
          function de(e, t) {
            for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
              (r = e[i]).style &&
                ((n = r.style.display),
                t
                  ? ("none" === n &&
                      ((o[i] = K.get(r, "display") || null),
                      o[i] || (r.style.display = "")),
                    "" === r.style.display && ce(r) && (o[i] = pe(r)))
                  : "none" !== n && ((o[i] = "none"), K.set(r, "display", n)));
            for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
            return e;
          }
          E.fn.extend({
            show: function () {
              return de(this, !0);
            },
            hide: function () {
              return de(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ce(this) ? E(this).show() : E(this).hide();
                  });
            },
          });
          var he,
            ge,
            ve = /^(?:checkbox|radio)$/i,
            ye = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            me = /^$|^module$|\/(?:java|ecma)script/i;
          (he = b.createDocumentFragment().appendChild(b.createElement("div"))),
            (ge = b.createElement("input")).setAttribute("type", "radio"),
            ge.setAttribute("checked", "checked"),
            ge.setAttribute("name", "t"),
            he.appendChild(ge),
            (v.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (he.innerHTML = "<textarea>x</textarea>"),
            (v.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
            (he.innerHTML = "<option></option>"),
            (v.option = !!he.lastChild);
          var be = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function xe(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && N(e, t)) ? E.merge([e], n) : n
            );
          }
          function we(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
          }
          (be.tbody = be.tfoot = be.colgroup = be.caption = be.thead),
            (be.th = be.td),
            v.option ||
              (be.optgroup = be.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var Te = /<|&#?\w+;/;
          function Se(e, t, n, r, o) {
            for (
              var i,
                a,
                s,
                u,
                c,
                l,
                f = t.createDocumentFragment(),
                p = [],
                d = 0,
                h = e.length;
              d < h;
              d++
            )
              if ((i = e[d]) || 0 === i)
                if ("object" === T(i)) E.merge(p, i.nodeType ? [i] : i);
                else if (Te.test(i)) {
                  for (
                    a = a || f.appendChild(t.createElement("div")),
                      s = (ye.exec(i) || ["", ""])[1].toLowerCase(),
                      u = be[s] || be._default,
                      a.innerHTML = u[1] + E.htmlPrefilter(i) + u[2],
                      l = u[0];
                    l--;

                  )
                    a = a.lastChild;
                  E.merge(p, a.childNodes),
                    ((a = f.firstChild).textContent = "");
                } else p.push(t.createTextNode(i));
            for (f.textContent = "", d = 0; (i = p[d++]); )
              if (r && E.inArray(i, r) > -1) o && o.push(i);
              else if (
                ((c = se(i)),
                (a = xe(f.appendChild(i), "script")),
                c && we(a),
                n)
              )
                for (l = 0; (i = a[l++]); ) me.test(i.type || "") && n.push(i);
            return f;
          }
          var Ee = /^key/,
            ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ce = /^([^.]*)(?:\.(.+)|)/;
          function Ae() {
            return !0;
          }
          function Le() {
            return !1;
          }
          function je(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return b.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function Ne(e, t, n, r, o, i) {
            var a, s;
            if ("object" == typeof t) {
              for (s in ("string" != typeof n && ((r = r || n), (n = void 0)),
              t))
                Ne(e, s, n, r, t[s], i);
              return e;
            }
            if (
              (null == r && null == o
                ? ((o = n), (r = n = void 0))
                : null == o &&
                  ("string" == typeof n
                    ? ((o = r), (r = void 0))
                    : ((o = r), (r = n), (n = void 0))),
              !1 === o)
            )
              o = Le;
            else if (!o) return e;
            return (
              1 === i &&
                ((a = o),
                (o = function (e) {
                  return E().off(e), a.apply(this, arguments);
                }),
                (o.guid = a.guid || (a.guid = E.guid++))),
              e.each(function () {
                E.event.add(this, t, o, r, n);
              })
            );
          }
          function _e(e, t, n) {
            n
              ? (K.set(e, t, !1),
                E.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var r,
                      o,
                      i = K.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (i.length)
                        (E.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((i = s.call(arguments)),
                        K.set(this, t, i),
                        (r = n(this, t)),
                        this[t](),
                        i !== (o = K.get(this, t)) || r
                          ? K.set(this, t, !1)
                          : (o = {}),
                        i !== o)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          o.value
                        );
                    } else
                      i.length &&
                        (K.set(this, t, {
                          value: E.event.trigger(
                            E.extend(i[0], E.Event.prototype),
                            i.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === K.get(e, t) && E.event.add(e, t, Ae);
          }
          (E.event = {
            global: {},
            add: function (e, t, n, r, o) {
              var i,
                a,
                s,
                u,
                c,
                l,
                f,
                p,
                d,
                h,
                g,
                v = K.get(e);
              if (J(e))
                for (
                  n.handler && ((n = (i = n).handler), (o = i.selector)),
                    o && E.find.matchesSelector(ae, o),
                    n.guid || (n.guid = E.guid++),
                    (u = v.events) || (u = v.events = Object.create(null)),
                    (a = v.handle) ||
                      (a = v.handle =
                        function (t) {
                          return void 0 !== E && E.event.triggered !== t.type
                            ? E.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    c = (t = (t || "").match(q) || [""]).length;
                  c--;

                )
                  (d = g = (s = Ce.exec(t[c]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    d &&
                      ((f = E.event.special[d] || {}),
                      (d = (o ? f.delegateType : f.bindType) || d),
                      (f = E.event.special[d] || {}),
                      (l = E.extend(
                        {
                          type: d,
                          origType: g,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: o,
                          needsContext: o && E.expr.match.needsContext.test(o),
                          namespace: h.join("."),
                        },
                        i
                      )),
                      (p = u[d]) ||
                        (((p = u[d] = []).delegateCount = 0),
                        (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                          (e.addEventListener && e.addEventListener(d, a))),
                      f.add &&
                        (f.add.call(e, l),
                        l.handler.guid || (l.handler.guid = n.guid)),
                      o ? p.splice(p.delegateCount++, 0, l) : p.push(l),
                      (E.event.global[d] = !0));
            },
            remove: function (e, t, n, r, o) {
              var i,
                a,
                s,
                u,
                c,
                l,
                f,
                p,
                d,
                h,
                g,
                v = K.hasData(e) && K.get(e);
              if (v && (u = v.events)) {
                for (c = (t = (t || "").match(q) || [""]).length; c--; )
                  if (
                    ((d = g = (s = Ce.exec(t[c]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    d)
                  ) {
                    for (
                      f = E.event.special[d] || {},
                        p =
                          u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                        s =
                          s[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        a = i = p.length;
                      i--;

                    )
                      (l = p[i]),
                        (!o && g !== l.origType) ||
                          (n && n.guid !== l.guid) ||
                          (s && !s.test(l.namespace)) ||
                          (r &&
                            r !== l.selector &&
                            ("**" !== r || !l.selector)) ||
                          (p.splice(i, 1),
                          l.selector && p.delegateCount--,
                          f.remove && f.remove.call(e, l));
                    a &&
                      !p.length &&
                      ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                        E.removeEvent(e, d, v.handle),
                      delete u[d]);
                  } else for (d in u) E.event.remove(e, d + t[c], n, r, !0);
                E.isEmptyObject(u) && K.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                o,
                i,
                a,
                s = new Array(arguments.length),
                u = E.event.fix(e),
                c =
                  (K.get(this, "events") || Object.create(null))[u.type] || [],
                l = E.event.special[u.type] || {};
              for (s[0] = u, t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
              if (
                ((u.delegateTarget = this),
                !l.preDispatch || !1 !== l.preDispatch.call(this, u))
              ) {
                for (
                  a = E.event.handlers.call(this, u, c), t = 0;
                  (o = a[t++]) && !u.isPropagationStopped();

                )
                  for (
                    u.currentTarget = o.elem, n = 0;
                    (i = o.handlers[n++]) && !u.isImmediatePropagationStopped();

                  )
                    (u.rnamespace &&
                      !1 !== i.namespace &&
                      !u.rnamespace.test(i.namespace)) ||
                      ((u.handleObj = i),
                      (u.data = i.data),
                      void 0 !==
                        (r = (
                          (E.event.special[i.origType] || {}).handle ||
                          i.handler
                        ).apply(o.elem, s)) &&
                        !1 === (u.result = r) &&
                        (u.preventDefault(), u.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, u), u.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                o,
                i,
                a,
                s = [],
                u = t.delegateCount,
                c = e.target;
              if (u && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                  if (
                    1 === c.nodeType &&
                    ("click" !== e.type || !0 !== c.disabled)
                  ) {
                    for (i = [], a = {}, n = 0; n < u; n++)
                      void 0 === a[(o = (r = t[n]).selector + " ")] &&
                        (a[o] = r.needsContext
                          ? E(o, this).index(c) > -1
                          : E.find(o, this, null, [c]).length),
                        a[o] && i.push(r);
                    i.length && s.push({ elem: c, handlers: i });
                  }
              return (
                (c = this),
                u < t.length && s.push({ elem: c, handlers: t.slice(u) }),
                s
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(E.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: y(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[E.expando] ? e : new E.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    ve.test(t.type) &&
                      t.click &&
                      N(t, "input") &&
                      _e(t, "click", Ae),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    ve.test(t.type) &&
                      t.click &&
                      N(t, "input") &&
                      _e(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (ve.test(t.type) &&
                      t.click &&
                      N(t, "input") &&
                      K.get(t, "click")) ||
                    N(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (E.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (E.Event = function (e, t) {
              if (!(this instanceof E.Event)) return new E.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Ae
                      : Le),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && E.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[E.expando] = !0);
            }),
            (E.Event.prototype = {
              constructor: E.Event,
              isDefaultPrevented: Le,
              isPropagationStopped: Le,
              isImmediatePropagationStopped: Le,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ae),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ae),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ae),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            E.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                  var t = e.button;
                  return null == e.which && Ee.test(e.type)
                    ? null != e.charCode
                      ? e.charCode
                      : e.keyCode
                    : !e.which && void 0 !== t && ke.test(e.type)
                    ? 1 & t
                      ? 1
                      : 2 & t
                      ? 3
                      : 4 & t
                      ? 2
                      : 0
                    : e.which;
                },
              },
              E.event.addProp
            ),
            E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              E.event.special[e] = {
                setup: function () {
                  return _e(this, e, je), !1;
                },
                trigger: function () {
                  return _e(this, e), !0;
                },
                delegateType: t,
              };
            }),
            E.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                E.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      r = e.relatedTarget,
                      o = e.handleObj;
                    return (
                      (r && (r === this || E.contains(this, r))) ||
                        ((e.type = o.origType),
                        (n = o.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            E.fn.extend({
              on: function (e, t, n, r) {
                return Ne(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return Ne(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    E(e.delegateTarget).off(
                      r.namespace ? r.origType + "." + r.namespace : r.origType,
                      r.selector,
                      r.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (o in e) this.off(o, t, e[o]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = Le),
                  this.each(function () {
                    E.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var Oe = /<script|<style|<link/i,
            Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function Re(e, t) {
            return (
              (N(e, "table") &&
                N(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                E(e).children("tbody")[0]) ||
              e
            );
          }
          function Ie(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function Me(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function qe(e, t) {
            var n, r, o, i, a, s;
            if (1 === t.nodeType) {
              if (K.hasData(e) && (s = K.get(e).events))
                for (o in (K.remove(t, "handle events"), s))
                  for (n = 0, r = s[o].length; n < r; n++)
                    E.event.add(t, o, s[o][n]);
              Z.hasData(e) &&
                ((i = Z.access(e)), (a = E.extend({}, i)), Z.set(t, a));
            }
          }
          function He(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ve.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function Fe(e, t, n, r) {
            t = u(t);
            var o,
              i,
              a,
              s,
              c,
              l,
              f = 0,
              p = e.length,
              d = p - 1,
              h = t[0],
              g = y(h);
            if (
              g ||
              (p > 1 && "string" == typeof h && !v.checkClone && Pe.test(h))
            )
              return e.each(function (o) {
                var i = e.eq(o);
                g && (t[0] = h.call(this, o, i.html())), Fe(i, t, n, r);
              });
            if (
              p &&
              ((i = (o = Se(t, e[0].ownerDocument, !1, e, r)).firstChild),
              1 === o.childNodes.length && (o = i),
              i || r)
            ) {
              for (s = (a = E.map(xe(o, "script"), Ie)).length; f < p; f++)
                (c = o),
                  f !== d &&
                    ((c = E.clone(c, !0, !0)),
                    s && E.merge(a, xe(c, "script"))),
                  n.call(e[f], c, f);
              if (s)
                for (
                  l = a[a.length - 1].ownerDocument, E.map(a, Me), f = 0;
                  f < s;
                  f++
                )
                  (c = a[f]),
                    me.test(c.type || "") &&
                      !K.access(c, "globalEval") &&
                      E.contains(l, c) &&
                      (c.src && "module" !== (c.type || "").toLowerCase()
                        ? E._evalUrl &&
                          !c.noModule &&
                          E._evalUrl(
                            c.src,
                            { nonce: c.nonce || c.getAttribute("nonce") },
                            l
                          )
                        : w(c.textContent.replace(De, ""), c, l));
            }
            return e;
          }
          function We(e, t, n) {
            for (
              var r, o = t ? E.filter(t, e) : e, i = 0;
              null != (r = o[i]);
              i++
            )
              n || 1 !== r.nodeType || E.cleanData(xe(r)),
                r.parentNode &&
                  (n && se(r) && we(xe(r, "script")),
                  r.parentNode.removeChild(r));
            return e;
          }
          E.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                o,
                i,
                a,
                s = e.cloneNode(!0),
                u = se(e);
              if (
                !(
                  v.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  E.isXMLDoc(e)
                )
              )
                for (a = xe(s), r = 0, o = (i = xe(e)).length; r < o; r++)
                  He(i[r], a[r]);
              if (t)
                if (n)
                  for (
                    i = i || xe(e), a = a || xe(s), r = 0, o = i.length;
                    r < o;
                    r++
                  )
                    qe(i[r], a[r]);
                else qe(e, s);
              return (
                (a = xe(s, "script")).length > 0 &&
                  we(a, !u && xe(e, "script")),
                s
              );
            },
            cleanData: function (e) {
              for (
                var t, n, r, o = E.event.special, i = 0;
                void 0 !== (n = e[i]);
                i++
              )
                if (J(n)) {
                  if ((t = n[K.expando])) {
                    if (t.events)
                      for (r in t.events)
                        o[r]
                          ? E.event.remove(n, r)
                          : E.removeEvent(n, r, t.handle);
                    n[K.expando] = void 0;
                  }
                  n[Z.expando] && (n[Z.expando] = void 0);
                }
            },
          }),
            E.fn.extend({
              detach: function (e) {
                return We(this, e, !0);
              },
              remove: function (e) {
                return We(this, e);
              },
              text: function (e) {
                return V(
                  this,
                  function (e) {
                    return void 0 === e
                      ? E.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return Fe(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    Re(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return Fe(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = Re(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return Fe(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return Fe(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (E.cleanData(xe(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return E.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return V(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !Oe.test(e) &&
                      !be[(ye.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = E.htmlPrefilter(e);
                      try {
                        for (; n < r; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (E.cleanData(xe(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return Fe(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    E.inArray(this, e) < 0 &&
                      (E.cleanData(xe(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            E.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                E.fn[e] = function (e) {
                  for (
                    var n, r = [], o = E(e), i = o.length - 1, a = 0;
                    a <= i;
                    a++
                  )
                    (n = a === i ? this : this.clone(!0)),
                      E(o[a])[t](n),
                      c.apply(r, n.get());
                  return this.pushStack(r);
                };
              }
            );
          var Ue = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
            Be = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = r), t.getComputedStyle(e);
            },
            $e = function (e, t, n) {
              var r,
                o,
                i = {};
              for (o in t) (i[o] = e.style[o]), (e.style[o] = t[o]);
              for (o in ((r = n.call(e)), t)) e.style[o] = i[o];
              return r;
            },
            Ve = new RegExp(ie.join("|"), "i");
          function Ge(e, t, n) {
            var r,
              o,
              i,
              a,
              s = e.style;
            return (
              (n = n || Be(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) ||
                  se(e) ||
                  (a = E.style(e, t)),
                !v.pixelBoxStyles() &&
                  Ue.test(a) &&
                  Ve.test(t) &&
                  ((r = s.width),
                  (o = s.minWidth),
                  (i = s.maxWidth),
                  (s.minWidth = s.maxWidth = s.width = a),
                  (a = n.width),
                  (s.width = r),
                  (s.minWidth = o),
                  (s.maxWidth = i))),
              void 0 !== a ? a + "" : a
            );
          }
          function ze(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (l) {
                (c.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (l.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  ae.appendChild(c).appendChild(l);
                var e = r.getComputedStyle(l);
                (n = "1%" !== e.top),
                  (u = 12 === t(e.marginLeft)),
                  (l.style.right = "60%"),
                  (a = 36 === t(e.right)),
                  (o = 36 === t(e.width)),
                  (l.style.position = "absolute"),
                  (i = 12 === t(l.offsetWidth / 3)),
                  ae.removeChild(c),
                  (l = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              o,
              i,
              a,
              s,
              u,
              c = b.createElement("div"),
              l = b.createElement("div");
            l.style &&
              ((l.style.backgroundClip = "content-box"),
              (l.cloneNode(!0).style.backgroundClip = ""),
              (v.clearCloneStyle = "content-box" === l.style.backgroundClip),
              E.extend(v, {
                boxSizingReliable: function () {
                  return e(), o;
                },
                pixelBoxStyles: function () {
                  return e(), a;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), u;
                },
                scrollboxSize: function () {
                  return e(), i;
                },
                reliableTrDimensions: function () {
                  var e, t, n, o;
                  return (
                    null == s &&
                      ((e = b.createElement("table")),
                      (t = b.createElement("tr")),
                      (n = b.createElement("div")),
                      (e.style.cssText = "position:absolute;left:-11111px"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      ae.appendChild(e).appendChild(t).appendChild(n),
                      (o = r.getComputedStyle(t)),
                      (s = parseInt(o.height) > 3),
                      ae.removeChild(e)),
                    s
                  );
                },
              }));
          })();
          var Ye = ["Webkit", "Moz", "ms"],
            Xe = b.createElement("div").style,
            Je = {};
          function Qe(e) {
            return (
              E.cssProps[e] ||
              Je[e] ||
              (e in Xe
                ? e
                : (Je[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Ye.length;
                        n--;

                      )
                        if ((e = Ye[n] + t) in Xe) return e;
                    })(e) || e))
            );
          }
          var Ke = /^(none|table(?!-c[ea]).+)/,
            Ze = /^--/,
            et = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            tt = { letterSpacing: "0", fontWeight: "400" };
          function nt(e, t, n) {
            var r = oe.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }
          function rt(e, t, n, r, o, i) {
            var a = "width" === t ? 1 : 0,
              s = 0,
              u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2)
              "margin" === n && (u += E.css(e, n + ie[a], !0, o)),
                r
                  ? ("content" === n &&
                      (u -= E.css(e, "padding" + ie[a], !0, o)),
                    "margin" !== n &&
                      (u -= E.css(e, "border" + ie[a] + "Width", !0, o)))
                  : ((u += E.css(e, "padding" + ie[a], !0, o)),
                    "padding" !== n
                      ? (u += E.css(e, "border" + ie[a] + "Width", !0, o))
                      : (s += E.css(e, "border" + ie[a] + "Width", !0, o)));
            return (
              !r &&
                i >= 0 &&
                (u +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        i -
                        u -
                        s -
                        0.5
                    )
                  ) || 0),
              u
            );
          }
          function ot(e, t, n) {
            var r = Be(e),
              o =
                (!v.boxSizingReliable() || n) &&
                "border-box" === E.css(e, "boxSizing", !1, r),
              i = o,
              a = Ge(e, t, r),
              s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Ue.test(a)) {
              if (!n) return a;
              a = "auto";
            }
            return (
              ((!v.boxSizingReliable() && o) ||
                (!v.reliableTrDimensions() && N(e, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === E.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((o = "border-box" === E.css(e, "boxSizing", !1, r)),
                (i = s in e) && (a = e[s])),
              (a = parseFloat(a) || 0) +
                rt(e, t, n || (o ? "border" : "content"), i, r, a) +
                "px"
            );
          }
          function it(e, t, n, r, o) {
            return new it.prototype.init(e, t, n, r, o);
          }
          E.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Ge(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o,
                  i,
                  a,
                  s = X(t),
                  u = Ze.test(t),
                  c = e.style;
                if (
                  (u || (t = Qe(s)),
                  (a = E.cssHooks[t] || E.cssHooks[s]),
                  void 0 === n)
                )
                  return a && "get" in a && void 0 !== (o = a.get(e, !1, r))
                    ? o
                    : c[t];
                "string" == (i = typeof n) &&
                  (o = oe.exec(n)) &&
                  o[1] &&
                  ((n = le(e, t, o)), (i = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== i ||
                      u ||
                      (n += (o && o[3]) || (E.cssNumber[s] ? "" : "px")),
                    v.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (c[t] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                      (u ? c.setProperty(t, n) : (c[t] = n)));
              }
            },
            css: function (e, t, n, r) {
              var o,
                i,
                a,
                s = X(t);
              return (
                Ze.test(t) || (t = Qe(s)),
                (a = E.cssHooks[t] || E.cssHooks[s]) &&
                  "get" in a &&
                  (o = a.get(e, !0, n)),
                void 0 === o && (o = Ge(e, t, r)),
                "normal" === o && t in tt && (o = tt[t]),
                "" === n || n
                  ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o)
                  : o
              );
            },
          }),
            E.each(["height", "width"], function (e, t) {
              E.cssHooks[t] = {
                get: function (e, n, r) {
                  if (n)
                    return !Ke.test(E.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? ot(e, t, r)
                      : $e(e, et, function () {
                          return ot(e, t, r);
                        });
                },
                set: function (e, n, r) {
                  var o,
                    i = Be(e),
                    a = !v.scrollboxSize() && "absolute" === i.position,
                    s =
                      (a || r) && "border-box" === E.css(e, "boxSizing", !1, i),
                    u = r ? rt(e, t, r, s, i) : 0;
                  return (
                    s &&
                      a &&
                      (u -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(i[t]) -
                          rt(e, t, "border", !1, i) -
                          0.5
                      )),
                    u &&
                      (o = oe.exec(n)) &&
                      "px" !== (o[3] || "px") &&
                      ((e.style[t] = n), (n = E.css(e, t))),
                    nt(0, n, u)
                  );
                },
              };
            }),
            (E.cssHooks.marginLeft = ze(v.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Ge(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      $e(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            E.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (E.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var r = 0,
                        o = {},
                        i = "string" == typeof n ? n.split(" ") : [n];
                      r < 4;
                      r++
                    )
                      o[e + ie[r] + t] = i[r] || i[r - 2] || i[0];
                    return o;
                  },
                }),
                  "margin" !== e && (E.cssHooks[e + t].set = nt);
              }
            ),
            E.fn.extend({
              css: function (e, t) {
                return V(
                  this,
                  function (e, t, n) {
                    var r,
                      o,
                      i = {},
                      a = 0;
                    if (Array.isArray(t)) {
                      for (r = Be(e), o = t.length; a < o; a++)
                        i[t[a]] = E.css(e, t[a], !1, r);
                      return i;
                    }
                    return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (E.Tween = it),
            (it.prototype = {
              constructor: it,
              init: function (e, t, n, r, o, i) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = o || E.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = i || (E.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = it.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : it.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = it.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        E.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : it.propHooks._default.set(this),
                  this
                );
              },
            }),
            (it.prototype.init.prototype = it.prototype),
            (it.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = E.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  E.fx.step[e.prop]
                    ? E.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!E.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : E.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (it.propHooks.scrollTop = it.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (E.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (E.fx = it.prototype.init),
            (E.fx.step = {});
          var at,
            st,
            ut = /^(?:toggle|show|hide)$/,
            ct = /queueHooks$/;
          function lt() {
            st &&
              (!1 === b.hidden && r.requestAnimationFrame
                ? r.requestAnimationFrame(lt)
                : r.setTimeout(lt, E.fx.interval),
              E.fx.tick());
          }
          function ft() {
            return (
              r.setTimeout(function () {
                at = void 0;
              }),
              (at = Date.now())
            );
          }
          function pt(e, t) {
            var n,
              r = 0,
              o = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
              o["margin" + (n = ie[r])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o;
          }
          function dt(e, t, n) {
            for (
              var r,
                o = (ht.tweeners[t] || []).concat(ht.tweeners["*"]),
                i = 0,
                a = o.length;
              i < a;
              i++
            )
              if ((r = o[i].call(n, t, e))) return r;
          }
          function ht(e, t, n) {
            var r,
              o,
              i = 0,
              a = ht.prefilters.length,
              s = E.Deferred().always(function () {
                delete u.elem;
              }),
              u = function () {
                if (o) return !1;
                for (
                  var t = at || ft(),
                    n = Math.max(0, c.startTime + c.duration - t),
                    r = 1 - (n / c.duration || 0),
                    i = 0,
                    a = c.tweens.length;
                  i < a;
                  i++
                )
                  c.tweens[i].run(r);
                return (
                  s.notifyWith(e, [c, r, n]),
                  r < 1 && a
                    ? n
                    : (a || s.notifyWith(e, [c, 1, 0]),
                      s.resolveWith(e, [c]),
                      !1)
                );
              },
              c = s.promise({
                elem: e,
                props: E.extend({}, t),
                opts: E.extend(
                  !0,
                  { specialEasing: {}, easing: E.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: at || ft(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var r = E.Tween(
                    e,
                    c.opts,
                    t,
                    n,
                    c.opts.specialEasing[t] || c.opts.easing
                  );
                  return c.tweens.push(r), r;
                },
                stop: function (t) {
                  var n = 0,
                    r = t ? c.tweens.length : 0;
                  if (o) return this;
                  for (o = !0; n < r; n++) c.tweens[n].run(1);
                  return (
                    t
                      ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
                      : s.rejectWith(e, [c, t]),
                    this
                  );
                },
              }),
              l = c.props;
            for (
              (function (e, t) {
                var n, r, o, i, a;
                for (n in e)
                  if (
                    ((o = t[(r = X(n))]),
                    (i = e[n]),
                    Array.isArray(i) && ((o = i[1]), (i = e[n] = i[0])),
                    n !== r && ((e[r] = i), delete e[n]),
                    (a = E.cssHooks[r]) && ("expand" in a))
                  )
                    for (n in ((i = a.expand(i)), delete e[r], i))
                      (n in e) || ((e[n] = i[n]), (t[n] = o));
                  else t[r] = o;
              })(l, c.opts.specialEasing);
              i < a;
              i++
            )
              if ((r = ht.prefilters[i].call(c, e, l, c.opts)))
                return (
                  y(r.stop) &&
                    (E._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
                  r
                );
            return (
              E.map(l, dt, c),
              y(c.opts.start) && c.opts.start.call(e, c),
              c
                .progress(c.opts.progress)
                .done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail)
                .always(c.opts.always),
              E.fx.timer(
                E.extend(u, { elem: e, anim: c, queue: c.opts.queue })
              ),
              c
            );
          }
          (E.Animation = E.extend(ht, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return le(n.elem, e, oe.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              y(e) ? ((t = e), (e = ["*"])) : (e = e.match(q));
              for (var n, r = 0, o = e.length; r < o; r++)
                (n = e[r]),
                  (ht.tweeners[n] = ht.tweeners[n] || []),
                  ht.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var r,
                  o,
                  i,
                  a,
                  s,
                  u,
                  c,
                  l,
                  f = "width" in t || "height" in t,
                  p = this,
                  d = {},
                  h = e.style,
                  g = e.nodeType && ce(e),
                  v = K.get(e, "fxshow");
                for (r in (n.queue ||
                  (null == (a = E._queueHooks(e, "fx")).unqueued &&
                    ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function () {
                      a.unqueued || s();
                    })),
                  a.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      a.unqueued--, E.queue(e, "fx").length || a.empty.fire();
                    });
                  })),
                t))
                  if (((o = t[r]), ut.test(o))) {
                    if (
                      (delete t[r],
                      (i = i || "toggle" === o),
                      o === (g ? "hide" : "show"))
                    ) {
                      if ("show" !== o || !v || void 0 === v[r]) continue;
                      g = !0;
                    }
                    d[r] = (v && v[r]) || E.style(e, r);
                  }
                if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(d))
                  for (r in (f &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (c = v && v.display) && (c = K.get(e, "display")),
                    "none" === (l = E.css(e, "display")) &&
                      (c
                        ? (l = c)
                        : (de([e], !0),
                          (c = e.style.display || c),
                          (l = E.css(e, "display")),
                          de([e]))),
                    ("inline" === l || ("inline-block" === l && null != c)) &&
                      "none" === E.css(e, "float") &&
                      (u ||
                        (p.done(function () {
                          h.display = c;
                        }),
                        null == c &&
                          ((l = h.display), (c = "none" === l ? "" : l))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (u = !1),
                  d))
                    u ||
                      (v
                        ? "hidden" in v && (g = v.hidden)
                        : (v = K.access(e, "fxshow", { display: c })),
                      i && (v.hidden = !g),
                      g && de([e], !0),
                      p.done(function () {
                        for (r in (g || de([e]), K.remove(e, "fxshow"), d))
                          E.style(e, r, d[r]);
                      })),
                      (u = dt(g ? v[r] : 0, r, p)),
                      r in v ||
                        ((v[r] = u.start),
                        g && ((u.end = u.start), (u.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? ht.prefilters.unshift(e) : ht.prefilters.push(e);
            },
          })),
            (E.speed = function (e, t, n) {
              var r =
                e && "object" == typeof e
                  ? E.extend({}, e)
                  : {
                      complete: n || (!n && t) || (y(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !y(t) && t),
                    };
              return (
                E.fx.off
                  ? (r.duration = 0)
                  : "number" != typeof r.duration &&
                    (r.duration in E.fx.speeds
                      ? (r.duration = E.fx.speeds[r.duration])
                      : (r.duration = E.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                  y(r.old) && r.old.call(this),
                    r.queue && E.dequeue(this, r.queue);
                }),
                r
              );
            }),
            E.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(ce)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, r);
              },
              animate: function (e, t, n, r) {
                var o = E.isEmptyObject(e),
                  i = E.speed(t, n, r),
                  a = function () {
                    var t = ht(this, E.extend({}, e), i);
                    (o || K.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (a.finish = a),
                  o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
                );
              },
              stop: function (e, t, n) {
                var r = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      o = null != e && e + "queueHooks",
                      i = E.timers,
                      a = K.get(this);
                    if (o) a[o] && a[o].stop && r(a[o]);
                    else
                      for (o in a) a[o] && a[o].stop && ct.test(o) && r(a[o]);
                    for (o = i.length; o--; )
                      i[o].elem !== this ||
                        (null != e && i[o].queue !== e) ||
                        (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
                    (!t && n) || E.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = K.get(this),
                      r = n[e + "queue"],
                      o = n[e + "queueHooks"],
                      i = E.timers,
                      a = r ? r.length : 0;
                    for (
                      n.finish = !0,
                        E.queue(this, e, []),
                        o && o.stop && o.stop.call(this, !0),
                        t = i.length;
                      t--;

                    )
                      i[t].elem === this &&
                        i[t].queue === e &&
                        (i[t].anim.stop(!0), i.splice(t, 1));
                    for (t = 0; t < a; t++)
                      r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            E.each(["toggle", "show", "hide"], function (e, t) {
              var n = E.fn[t];
              E.fn[t] = function (e, r, o) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(pt(t, !0), e, r, o);
              };
            }),
            E.each(
              {
                slideDown: pt("show"),
                slideUp: pt("hide"),
                slideToggle: pt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                E.fn[e] = function (e, n, r) {
                  return this.animate(t, e, n, r);
                };
              }
            ),
            (E.timers = []),
            (E.fx.tick = function () {
              var e,
                t = 0,
                n = E.timers;
              for (at = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || E.fx.stop(), (at = void 0);
            }),
            (E.fx.timer = function (e) {
              E.timers.push(e), E.fx.start();
            }),
            (E.fx.interval = 13),
            (E.fx.start = function () {
              st || ((st = !0), lt());
            }),
            (E.fx.stop = function () {
              st = null;
            }),
            (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (E.fn.delay = function (e, t) {
              return (
                (e = (E.fx && E.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var o = r.setTimeout(t, e);
                  n.stop = function () {
                    r.clearTimeout(o);
                  };
                })
              );
            }),
            (function () {
              var e = b.createElement("input"),
                t = b
                  .createElement("select")
                  .appendChild(b.createElement("option"));
              (e.type = "checkbox"),
                (v.checkOn = "" !== e.value),
                (v.optSelected = t.selected),
                ((e = b.createElement("input")).value = "t"),
                (e.type = "radio"),
                (v.radioValue = "t" === e.value);
            })();
          var gt,
            vt = E.expr.attrHandle;
          E.fn.extend({
            attr: function (e, t) {
              return V(this, E.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                E.removeAttr(this, e);
              });
            },
          }),
            E.extend({
              attr: function (e, t, n) {
                var r,
                  o,
                  i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                  return void 0 === e.getAttribute
                    ? E.prop(e, t, n)
                    : ((1 === i && E.isXMLDoc(e)) ||
                        (o =
                          E.attrHooks[t.toLowerCase()] ||
                          (E.expr.match.bool.test(t) ? gt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void E.removeAttr(e, t)
                          : o && "set" in o && void 0 !== (r = o.set(e, n, t))
                          ? r
                          : (e.setAttribute(t, n + ""), n)
                        : o && "get" in o && null !== (r = o.get(e, t))
                        ? r
                        : null == (r = E.find.attr(e, t))
                        ? void 0
                        : r);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!v.radioValue && "radio" === t && N(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  r = 0,
                  o = t && t.match(q);
                if (o && 1 === e.nodeType)
                  for (; (n = o[r++]); ) e.removeAttribute(n);
              },
            }),
            (gt = {
              set: function (e, t, n) {
                return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = vt[t] || E.find.attr;
              vt[t] = function (e, t, r) {
                var o,
                  i,
                  a = t.toLowerCase();
                return (
                  r ||
                    ((i = vt[a]),
                    (vt[a] = o),
                    (o = null != n(e, t, r) ? a : null),
                    (vt[a] = i)),
                  o
                );
              };
            });
          var yt = /^(?:input|select|textarea|button)$/i,
            mt = /^(?:a|area)$/i;
          function bt(e) {
            return (e.match(q) || []).join(" ");
          }
          function xt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function wt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(q)) || [];
          }
          E.fn.extend({
            prop: function (e, t) {
              return V(this, E.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[E.propFix[e] || e];
              });
            },
          }),
            E.extend({
              prop: function (e, t, n) {
                var r,
                  o,
                  i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                  return (
                    (1 === i && E.isXMLDoc(e)) ||
                      ((t = E.propFix[t] || t), (o = E.propHooks[t])),
                    void 0 !== n
                      ? o && "set" in o && void 0 !== (r = o.set(e, n, t))
                        ? r
                        : (e[t] = n)
                      : o && "get" in o && null !== (r = o.get(e, t))
                      ? r
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = E.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : yt.test(e.nodeName) || (mt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            v.optSelected ||
              (E.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            E.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                E.propFix[this.toLowerCase()] = this;
              }
            ),
            E.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  a,
                  s,
                  u = 0;
                if (y(e))
                  return this.each(function (t) {
                    E(this).addClass(e.call(this, t, xt(this)));
                  });
                if ((t = wt(e)).length)
                  for (; (n = this[u++]); )
                    if (
                      ((o = xt(n)), (r = 1 === n.nodeType && " " + bt(o) + " "))
                    ) {
                      for (a = 0; (i = t[a++]); )
                        r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                      o !== (s = bt(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  a,
                  s,
                  u = 0;
                if (y(e))
                  return this.each(function (t) {
                    E(this).removeClass(e.call(this, t, xt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = wt(e)).length)
                  for (; (n = this[u++]); )
                    if (
                      ((o = xt(n)), (r = 1 === n.nodeType && " " + bt(o) + " "))
                    ) {
                      for (a = 0; (i = t[a++]); )
                        for (; r.indexOf(" " + i + " ") > -1; )
                          r = r.replace(" " + i + " ", " ");
                      o !== (s = bt(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = typeof e,
                  r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : y(e)
                  ? this.each(function (n) {
                      E(this).toggleClass(e.call(this, n, xt(this), t), t);
                    })
                  : this.each(function () {
                      var t, o, i, a;
                      if (r)
                        for (o = 0, i = E(this), a = wt(e); (t = a[o++]); )
                          i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                      else
                        (void 0 !== e && "boolean" !== n) ||
                          ((t = xt(this)) && K.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : K.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  n,
                  r = 0;
                for (t = " " + e + " "; (n = this[r++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + bt(xt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var Tt = /\r/g;
          E.fn.extend({
            val: function (e) {
              var t,
                n,
                r,
                o = this[0];
              return arguments.length
                ? ((r = y(e)),
                  this.each(function (n) {
                    var o;
                    1 === this.nodeType &&
                      (null == (o = r ? e.call(this, n, E(this).val()) : e)
                        ? (o = "")
                        : "number" == typeof o
                        ? (o += "")
                        : Array.isArray(o) &&
                          (o = E.map(o, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        E.valHooks[this.type] ||
                        E.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, o, "value")) ||
                        (this.value = o));
                  }))
                : o
                ? (t =
                    E.valHooks[o.type] ||
                    E.valHooks[o.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(o, "value"))
                  ? n
                  : "string" == typeof (n = o.value)
                  ? n.replace(Tt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            E.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : bt(E.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      r,
                      o = e.options,
                      i = e.selectedIndex,
                      a = "select-one" === e.type,
                      s = a ? null : [],
                      u = a ? i + 1 : o.length;
                    for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                      if (
                        ((n = o[r]).selected || r === i) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))
                      ) {
                        if (((t = E(n).val()), a)) return t;
                        s.push(t);
                      }
                    return s;
                  },
                  set: function (e, t) {
                    for (
                      var n, r, o = e.options, i = E.makeArray(t), a = o.length;
                      a--;

                    )
                      ((r = o[a]).selected =
                        E.inArray(E.valHooks.option.get(r), i) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), i;
                  },
                },
              },
            }),
            E.each(["radio", "checkbox"], function () {
              (E.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = E.inArray(E(e).val(), t) > -1);
                },
              }),
                v.checkOn ||
                  (E.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (v.focusin = "onfocusin" in r);
          var St = /^(?:focusinfocus|focusoutblur)$/,
            Et = function (e) {
              e.stopPropagation();
            };
          E.extend(E.event, {
            trigger: function (e, t, n, o) {
              var i,
                a,
                s,
                u,
                c,
                l,
                f,
                p,
                h = [n || b],
                g = d.call(e, "type") ? e.type : e,
                v = d.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((a = p = s = n = n || b),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !St.test(g + E.event.triggered) &&
                  (g.indexOf(".") > -1 &&
                    ((v = g.split(".")), (g = v.shift()), v.sort()),
                  (c = g.indexOf(":") < 0 && "on" + g),
                  ((e = e[E.expando]
                    ? e
                    : new E.Event(g, "object" == typeof e && e)).isTrigger = o
                    ? 2
                    : 3),
                  (e.namespace = v.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : E.makeArray(t, [e])),
                  (f = E.event.special[g] || {}),
                  o || !f.trigger || !1 !== f.trigger.apply(n, t)))
              ) {
                if (!o && !f.noBubble && !m(n)) {
                  for (
                    u = f.delegateType || g,
                      St.test(u + g) || (a = a.parentNode);
                    a;
                    a = a.parentNode
                  )
                    h.push(a), (s = a);
                  s === (n.ownerDocument || b) &&
                    h.push(s.defaultView || s.parentWindow || r);
                }
                for (i = 0; (a = h[i++]) && !e.isPropagationStopped(); )
                  (p = a),
                    (e.type = i > 1 ? u : f.bindType || g),
                    (l =
                      (K.get(a, "events") || Object.create(null))[e.type] &&
                      K.get(a, "handle")) && l.apply(a, t),
                    (l = c && a[c]) &&
                      l.apply &&
                      J(a) &&
                      ((e.result = l.apply(a, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = g),
                  o ||
                    e.isDefaultPrevented() ||
                    (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                    !J(n) ||
                    (c &&
                      y(n[g]) &&
                      !m(n) &&
                      ((s = n[c]) && (n[c] = null),
                      (E.event.triggered = g),
                      e.isPropagationStopped() && p.addEventListener(g, Et),
                      n[g](),
                      e.isPropagationStopped() && p.removeEventListener(g, Et),
                      (E.event.triggered = void 0),
                      s && (n[c] = s))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var r = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });
              E.event.trigger(r, null, t);
            },
          }),
            E.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  E.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return E.event.trigger(e, t, n, !0);
              },
            }),
            v.focusin ||
              E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  E.event.simulate(t, e.target, E.event.fix(e));
                };
                E.event.special[t] = {
                  setup: function () {
                    var r = this.ownerDocument || this.document || this,
                      o = K.access(r, t);
                    o || r.addEventListener(e, n, !0),
                      K.access(r, t, (o || 0) + 1);
                  },
                  teardown: function () {
                    var r = this.ownerDocument || this.document || this,
                      o = K.access(r, t) - 1;
                    o
                      ? K.access(r, t, o)
                      : (r.removeEventListener(e, n, !0), K.remove(r, t));
                  },
                };
              });
          var kt = r.location,
            Ct = { guid: Date.now() },
            At = /\?/;
          E.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
              t = new r.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {
              t = void 0;
            }
            return (
              (t && !t.getElementsByTagName("parsererror").length) ||
                E.error("Invalid XML: " + e),
              t
            );
          };
          var Lt = /\[\]$/,
            jt = /\r?\n/g,
            Nt = /^(?:submit|button|image|reset|file)$/i,
            _t = /^(?:input|select|textarea|keygen)/i;
          function Ot(e, t, n, r) {
            var o;
            if (Array.isArray(t))
              E.each(t, function (t, o) {
                n || Lt.test(e)
                  ? r(e, o)
                  : Ot(
                      e +
                        "[" +
                        ("object" == typeof o && null != o ? t : "") +
                        "]",
                      o,
                      n,
                      r
                    );
              });
            else if (n || "object" !== T(t)) r(e, t);
            else for (o in t) Ot(e + "[" + o + "]", t[o], n, r);
          }
          (E.param = function (e, t) {
            var n,
              r = [],
              o = function (e, t) {
                var n = y(t) ? t() : t;
                r[r.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
              E.each(e, function () {
                o(this.name, this.value);
              });
            else for (n in e) Ot(n, e[n], t, o);
            return r.join("&");
          }),
            E.fn.extend({
              serialize: function () {
                return E.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = E.prop(this, "elements");
                  return e ? E.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !E(this).is(":disabled") &&
                      _t.test(this.nodeName) &&
                      !Nt.test(e) &&
                      (this.checked || !ve.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = E(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? E.map(n, function (e) {
                          return { name: t.name, value: e.replace(jt, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(jt, "\r\n") };
                  })
                  .get();
              },
            });
          var Pt = /%20/g,
            Dt = /#.*$/,
            Rt = /([?&])_=[^&]*/,
            It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Mt = /^(?:GET|HEAD)$/,
            qt = /^\/\//,
            Ht = {},
            Ft = {},
            Wt = "*/".concat("*"),
            Ut = b.createElement("a");
          function Bt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var r,
                o = 0,
                i = t.toLowerCase().match(q) || [];
              if (y(n))
                for (; (r = i[o++]); )
                  "+" === r[0]
                    ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                    : (e[r] = e[r] || []).push(n);
            };
          }
          function $t(e, t, n, r) {
            var o = {},
              i = e === Ft;
            function a(s) {
              var u;
              return (
                (o[s] = !0),
                E.each(e[s] || [], function (e, s) {
                  var c = s(t, n, r);
                  return "string" != typeof c || i || o[c]
                    ? i
                      ? !(u = c)
                      : void 0
                    : (t.dataTypes.unshift(c), a(c), !1);
                }),
                u
              );
            }
            return a(t.dataTypes[0]) || (!o["*"] && a("*"));
          }
          function Vt(e, t) {
            var n,
              r,
              o = E.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && E.extend(!0, e, r), e;
          }
          (Ut.href = kt.href),
            E.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: kt.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    kt.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Wt,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": E.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Vt(Vt(e, E.ajaxSettings), t) : Vt(E.ajaxSettings, e);
              },
              ajaxPrefilter: Bt(Ht),
              ajaxTransport: Bt(Ft),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  o,
                  i,
                  a,
                  s,
                  u,
                  c,
                  l,
                  f,
                  p,
                  d = E.ajaxSetup({}, t),
                  h = d.context || d,
                  g = d.context && (h.nodeType || h.jquery) ? E(h) : E.event,
                  v = E.Deferred(),
                  y = E.Callbacks("once memory"),
                  m = d.statusCode || {},
                  x = {},
                  w = {},
                  T = "canceled",
                  S = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (c) {
                        if (!a)
                          for (a = {}; (t = It.exec(i)); )
                            a[t[1].toLowerCase() + " "] = (
                              a[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = a[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return c ? i : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == c &&
                          ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                          (x[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == c && (d.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (c) S.always(e[S.status]);
                        else for (t in e) m[t] = [m[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || T;
                      return n && n.abort(t), k(0, t), this;
                    },
                  };
                if (
                  (v.promise(S),
                  (d.url = ((e || d.url || kt.href) + "").replace(
                    qt,
                    kt.protocol + "//"
                  )),
                  (d.type = t.method || t.type || d.method || d.type),
                  (d.dataTypes = (d.dataType || "*").toLowerCase().match(q) || [
                    "",
                  ]),
                  null == d.crossDomain)
                ) {
                  u = b.createElement("a");
                  try {
                    (u.href = d.url),
                      (u.href = u.href),
                      (d.crossDomain =
                        Ut.protocol + "//" + Ut.host !=
                        u.protocol + "//" + u.host);
                  } catch (e) {
                    d.crossDomain = !0;
                  }
                }
                if (
                  (d.data &&
                    d.processData &&
                    "string" != typeof d.data &&
                    (d.data = E.param(d.data, d.traditional)),
                  $t(Ht, d, t, S),
                  c)
                )
                  return S;
                for (f in ((l = E.event && d.global) &&
                  0 == E.active++ &&
                  E.event.trigger("ajaxStart"),
                (d.type = d.type.toUpperCase()),
                (d.hasContent = !Mt.test(d.type)),
                (o = d.url.replace(Dt, "")),
                d.hasContent
                  ? d.data &&
                    d.processData &&
                    0 ===
                      (d.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (d.data = d.data.replace(Pt, "+"))
                  : ((p = d.url.slice(o.length)),
                    d.data &&
                      (d.processData || "string" == typeof d.data) &&
                      ((o += (At.test(o) ? "&" : "?") + d.data), delete d.data),
                    !1 === d.cache &&
                      ((o = o.replace(Rt, "$1")),
                      (p = (At.test(o) ? "&" : "?") + "_=" + Ct.guid++ + p)),
                    (d.url = o + p)),
                d.ifModified &&
                  (E.lastModified[o] &&
                    S.setRequestHeader("If-Modified-Since", E.lastModified[o]),
                  E.etag[o] && S.setRequestHeader("If-None-Match", E.etag[o])),
                ((d.data && d.hasContent && !1 !== d.contentType) ||
                  t.contentType) &&
                  S.setRequestHeader("Content-Type", d.contentType),
                S.setRequestHeader(
                  "Accept",
                  d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                    ? d.accepts[d.dataTypes[0]] +
                        ("*" !== d.dataTypes[0] ? ", " + Wt + "; q=0.01" : "")
                    : d.accepts["*"]
                ),
                d.headers))
                  S.setRequestHeader(f, d.headers[f]);
                if (d.beforeSend && (!1 === d.beforeSend.call(h, S, d) || c))
                  return S.abort();
                if (
                  ((T = "abort"),
                  y.add(d.complete),
                  S.done(d.success),
                  S.fail(d.error),
                  (n = $t(Ft, d, t, S)))
                ) {
                  if (
                    ((S.readyState = 1), l && g.trigger("ajaxSend", [S, d]), c)
                  )
                    return S;
                  d.async &&
                    d.timeout > 0 &&
                    (s = r.setTimeout(function () {
                      S.abort("timeout");
                    }, d.timeout));
                  try {
                    (c = !1), n.send(x, k);
                  } catch (e) {
                    if (c) throw e;
                    k(-1, e);
                  }
                } else k(-1, "No Transport");
                function k(e, t, a, u) {
                  var f,
                    p,
                    b,
                    x,
                    w,
                    T = t;
                  c ||
                    ((c = !0),
                    s && r.clearTimeout(s),
                    (n = void 0),
                    (i = u || ""),
                    (S.readyState = e > 0 ? 4 : 0),
                    (f = (e >= 200 && e < 300) || 304 === e),
                    a &&
                      (x = (function (e, t, n) {
                        for (
                          var r, o, i, a, s = e.contents, u = e.dataTypes;
                          "*" === u[0];

                        )
                          u.shift(),
                            void 0 === r &&
                              (r =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (r)
                          for (o in s)
                            if (s[o] && s[o].test(r)) {
                              u.unshift(o);
                              break;
                            }
                        if (u[0] in n) i = u[0];
                        else {
                          for (o in n) {
                            if (!u[0] || e.converters[o + " " + u[0]]) {
                              i = o;
                              break;
                            }
                            a || (a = o);
                          }
                          i = i || a;
                        }
                        if (i) return i !== u[0] && u.unshift(i), n[i];
                      })(d, S, a)),
                    !f &&
                      E.inArray("script", d.dataTypes) > -1 &&
                      (d.converters["text script"] = function () {}),
                    (x = (function (e, t, n, r) {
                      var o,
                        i,
                        a,
                        s,
                        u,
                        c = {},
                        l = e.dataTypes.slice();
                      if (l[1])
                        for (a in e.converters)
                          c[a.toLowerCase()] = e.converters[a];
                      for (i = l.shift(); i; )
                        if (
                          (e.responseFields[i] && (n[e.responseFields[i]] = t),
                          !u &&
                            r &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (u = i),
                          (i = l.shift()))
                        )
                          if ("*" === i) i = u;
                          else if ("*" !== u && u !== i) {
                            if (!(a = c[u + " " + i] || c["* " + i]))
                              for (o in c)
                                if (
                                  (s = o.split(" "))[1] === i &&
                                  (a = c[u + " " + s[0]] || c["* " + s[0]])
                                ) {
                                  !0 === a
                                    ? (a = c[o])
                                    : !0 !== c[o] &&
                                      ((i = s[0]), l.unshift(s[1]));
                                  break;
                                }
                            if (!0 !== a)
                              if (a && e.throws) t = a(t);
                              else
                                try {
                                  t = a(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: a
                                      ? e
                                      : "No conversion from " + u + " to " + i,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(d, x, S, f)),
                    f
                      ? (d.ifModified &&
                          ((w = S.getResponseHeader("Last-Modified")) &&
                            (E.lastModified[o] = w),
                          (w = S.getResponseHeader("etag")) && (E.etag[o] = w)),
                        204 === e || "HEAD" === d.type
                          ? (T = "nocontent")
                          : 304 === e
                          ? (T = "notmodified")
                          : ((T = x.state), (p = x.data), (f = !(b = x.error))))
                      : ((b = T),
                        (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                    (S.status = e),
                    (S.statusText = (t || T) + ""),
                    f
                      ? v.resolveWith(h, [p, T, S])
                      : v.rejectWith(h, [S, T, b]),
                    S.statusCode(m),
                    (m = void 0),
                    l &&
                      g.trigger(f ? "ajaxSuccess" : "ajaxError", [
                        S,
                        d,
                        f ? p : b,
                      ]),
                    y.fireWith(h, [S, T]),
                    l &&
                      (g.trigger("ajaxComplete", [S, d]),
                      --E.active || E.event.trigger("ajaxStop")));
                }
                return S;
              },
              getJSON: function (e, t, n) {
                return E.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return E.get(e, void 0, t, "script");
              },
            }),
            E.each(["get", "post"], function (e, t) {
              E[t] = function (e, n, r, o) {
                return (
                  y(n) && ((o = o || r), (r = n), (n = void 0)),
                  E.ajax(
                    E.extend(
                      { url: e, type: t, dataType: o, data: n, success: r },
                      E.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            E.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (E._evalUrl = function (e, t, n) {
              return E.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  E.globalEval(e, t, n);
                },
              });
            }),
            E.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (y(e) && (e = e.call(this[0])),
                    (t = E(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return y(e)
                  ? this.each(function (t) {
                      E(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = E(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = y(e);
                return this.each(function (n) {
                  E(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      E(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (E.expr.pseudos.hidden = function (e) {
              return !E.expr.pseudos.visible(e);
            }),
            (E.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (E.ajaxSettings.xhr = function () {
              try {
                return new r.XMLHttpRequest();
              } catch (e) {}
            });
          var Gt = { 0: 200, 1223: 204 },
            zt = E.ajaxSettings.xhr();
          (v.cors = !!zt && "withCredentials" in zt),
            (v.ajax = zt = !!zt),
            E.ajaxTransport(function (e) {
              var t, n;
              if (v.cors || (zt && !e.crossDomain))
                return {
                  send: function (o, i) {
                    var a,
                      s = e.xhr();
                    if (
                      (s.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in (e.mimeType &&
                      s.overrideMimeType &&
                      s.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      o["X-Requested-With"] ||
                      (o["X-Requested-With"] = "XMLHttpRequest"),
                    o))
                      s.setRequestHeader(a, o[a]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            s.onload =
                            s.onerror =
                            s.onabort =
                            s.ontimeout =
                            s.onreadystatechange =
                              null),
                          "abort" === e
                            ? s.abort()
                            : "error" === e
                            ? "number" != typeof s.status
                              ? i(0, "error")
                              : i(s.status, s.statusText)
                            : i(
                                Gt[s.status] || s.status,
                                s.statusText,
                                "text" !== (s.responseType || "text") ||
                                  "string" != typeof s.responseText
                                  ? { binary: s.response }
                                  : { text: s.responseText },
                                s.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (s.onload = t()),
                      (n = s.onerror = s.ontimeout = t("error")),
                      void 0 !== s.onabort
                        ? (s.onabort = n)
                        : (s.onreadystatechange = function () {
                            4 === s.readyState &&
                              r.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      s.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            E.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            E.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return E.globalEval(e), e;
                },
              },
            }),
            E.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            E.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (r, o) {
                    (t = E("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && o("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      b.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Yt,
            Xt = [],
            Jt = /(=)\?(?=&|$)|\?\?/;
          E.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Xt.pop() || E.expando + "_" + Ct.guid++;
              return (this[e] = !0), e;
            },
          }),
            E.ajaxPrefilter("json jsonp", function (e, t, n) {
              var o,
                i,
                a,
                s =
                  !1 !== e.jsonp &&
                  (Jt.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Jt.test(e.data) &&
                      "data");
              if (s || "jsonp" === e.dataTypes[0])
                return (
                  (o = e.jsonpCallback =
                    y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  s
                    ? (e[s] = e[s].replace(Jt, "$1" + o))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                  (e.converters["script json"] = function () {
                    return a || E.error(o + " was not called"), a[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (i = r[o]),
                  (r[o] = function () {
                    a = arguments;
                  }),
                  n.always(function () {
                    void 0 === i ? E(r).removeProp(o) : (r[o] = i),
                      e[o] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(o)),
                      a && y(i) && i(a[0]),
                      (a = i = void 0);
                  }),
                  "script"
                );
            }),
            (v.createHTMLDocument =
              (((Yt = b.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Yt.childNodes.length)),
            (E.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (v.createHTMLDocument
                      ? (((r = (t =
                          b.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = b.location.href),
                        t.head.appendChild(r))
                      : (t = b)),
                  (i = !n && []),
                  (o = _.exec(e))
                    ? [t.createElement(o[1])]
                    : ((o = Se([e], t, i)),
                      i && i.length && E(i).remove(),
                      E.merge([], o.childNodes)));
              var r, o, i;
            }),
            (E.fn.load = function (e, t, n) {
              var r,
                o,
                i,
                a = this,
                s = e.indexOf(" ");
              return (
                s > -1 && ((r = bt(e.slice(s))), (e = e.slice(0, s))),
                y(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (o = "POST"),
                a.length > 0 &&
                  E.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (i = arguments),
                        a.html(
                          r ? E("<div>").append(E.parseHTML(e)).find(r) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          a.each(function () {
                            n.apply(this, i || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (E.expr.pseudos.animated = function (e) {
              return E.grep(E.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (E.offset = {
              setOffset: function (e, t, n) {
                var r,
                  o,
                  i,
                  a,
                  s,
                  u,
                  c = E.css(e, "position"),
                  l = E(e),
                  f = {};
                "static" === c && (e.style.position = "relative"),
                  (s = l.offset()),
                  (i = E.css(e, "top")),
                  (u = E.css(e, "left")),
                  ("absolute" === c || "fixed" === c) &&
                  (i + u).indexOf("auto") > -1
                    ? ((a = (r = l.position()).top), (o = r.left))
                    : ((a = parseFloat(i) || 0), (o = parseFloat(u) || 0)),
                  y(t) && (t = t.call(e, n, E.extend({}, s))),
                  null != t.top && (f.top = t.top - s.top + a),
                  null != t.left && (f.left = t.left - s.left + o),
                  "using" in t
                    ? t.using.call(e, f)
                    : ("number" == typeof f.top && (f.top += "px"),
                      "number" == typeof f.left && (f.left += "px"),
                      l.css(f));
              },
            }),
            E.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        E.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  r = this[0];
                return r
                  ? r.getClientRects().length
                    ? ((t = r.getBoundingClientRect()),
                      (n = r.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    r = this[0],
                    o = { top: 0, left: 0 };
                  if ("fixed" === E.css(r, "position"))
                    t = r.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === E.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== r &&
                      1 === e.nodeType &&
                      (((o = E(e).offset()).top += E.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (o.left += E.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - o.top - E.css(r, "marginTop", !0),
                    left: t.left - o.left - E.css(r, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === E.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || ae;
                });
              },
            }),
            E.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                E.fn[e] = function (r) {
                  return V(
                    this,
                    function (e, r, o) {
                      var i;
                      if (
                        (m(e)
                          ? (i = e)
                          : 9 === e.nodeType && (i = e.defaultView),
                        void 0 === o)
                      )
                        return i ? i[t] : e[r];
                      i
                        ? i.scrollTo(
                            n ? i.pageXOffset : o,
                            n ? o : i.pageYOffset
                          )
                        : (e[r] = o);
                    },
                    e,
                    r,
                    arguments.length
                  );
                };
              }
            ),
            E.each(["top", "left"], function (e, t) {
              E.cssHooks[t] = ze(v.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Ge(e, t)), Ue.test(n) ? E(e).position()[t] + "px" : n
                  );
              });
            }),
            E.each({ Height: "height", Width: "width" }, function (e, t) {
              E.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, r) {
                  E.fn[r] = function (o, i) {
                    var a = arguments.length && (n || "boolean" != typeof o),
                      s = n || (!0 === o || !0 === i ? "margin" : "border");
                    return V(
                      this,
                      function (t, n, o) {
                        var i;
                        return m(t)
                          ? 0 === r.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((i = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              i["scroll" + e],
                              t.body["offset" + e],
                              i["offset" + e],
                              i["client" + e]
                            ))
                          : void 0 === o
                          ? E.css(t, n, s)
                          : E.style(t, n, o, s);
                      },
                      t,
                      a ? o : void 0,
                      a
                    );
                  };
                }
              );
            }),
            E.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                E.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            E.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            E.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                E.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var Qt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (E.proxy = function (e, t) {
            var n, r, o;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
              return (
                (r = s.call(arguments, 2)),
                (o = function () {
                  return e.apply(t || this, r.concat(s.call(arguments)));
                }),
                (o.guid = e.guid = e.guid || E.guid++),
                o
              );
          }),
            (E.holdReady = function (e) {
              e ? E.readyWait++ : E.ready(!0);
            }),
            (E.isArray = Array.isArray),
            (E.parseJSON = JSON.parse),
            (E.nodeName = N),
            (E.isFunction = y),
            (E.isWindow = m),
            (E.camelCase = X),
            (E.type = T),
            (E.now = Date.now),
            (E.isNumeric = function (e) {
              var t = E.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (E.trim = function (e) {
              return null == e ? "" : (e + "").replace(Qt, "");
            }),
            void 0 ===
              (n = function () {
                return E;
              }.apply(t, [])) || (e.exports = n);
          var Kt = r.jQuery,
            Zt = r.$;
          return (
            (E.noConflict = function (e) {
              return (
                r.$ === E && (r.$ = Zt),
                e && r.jQuery === E && (r.jQuery = Kt),
                E
              );
            }),
            void 0 === o && (r.jQuery = r.$ = E),
            E
          );
        });
      },
    },
    t = {};
  !(function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  })(6957);
})();
