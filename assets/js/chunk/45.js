;(window.webpackJsonp = window.webpackJsonp || []).push([
  [45],
  {
    575: function (n, e, t) {
      'use strict'
      t.d(e, 'e', function () {
        return isPlainObject
      }),
        t.d(e, 'f', function () {
          return isPromise
        }),
        t.d(e, 'b', function () {
          return isDef
        }),
        t.d(e, 'd', function () {
          return isObj
        }),
        t.d(e, 'a', function () {
          return isBoolean
        }),
        t.d(e, 'c', function () {
          return isImageUrl
        }),
        t.d(e, 'g', function () {
          return isVideoUrl
        })
      var r = t(586),
        c = t.n(r)
      function isFunction(n) {
        return 'function' == typeof n
      }
      function isPlainObject(n) {
        return null !== n && 'object' === c()(n) && !Array.isArray(n)
      }
      function isPromise(n) {
        return isPlainObject(n) && isFunction(n.then) && isFunction(n.catch)
      }
      function isDef(n) {
        return null != n
      }
      function isObj(n) {
        var e = c()(n)
        return null !== n && ('object' === e || 'function' === e)
      }
      function isBoolean(n) {
        return 'boolean' == typeof n
      }
      var i = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,
        o = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i
      function isImageUrl(n) {
        return i.test(n)
      }
      function isVideoUrl(n) {
        return o.test(n)
      }
    },
    582: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return Loading
      })
      var r = t(572),
        c = t.n(r),
        i = t(576),
        o = t.n(i),
        a = t(573),
        l = t.n(a),
        u = t(592),
        s = t.n(u),
        f = t(10),
        d = t.n(f),
        b = t(24),
        j = t.n(b),
        p = t(571),
        v = t.n(p),
        h = t(32),
        g = t.n(h),
        x = t(570),
        m = t.n(x),
        y = t(27),
        O = t.n(y),
        S = t(173),
        k = t.n(S),
        _ = t(116),
        w = t.n(_),
        T = t(55),
        I = t.n(T),
        z = t(568),
        N = t(64),
        P = t(569),
        C = t(578)
      function textStyle(n) {
        return Object(P.c)({ 'font-size': Object(C.a)(n.textSize) })
      }
      var K = t(115),
        R = [
          'vertical',
          'type',
          'color',
          'size',
          'textSize',
          'className',
          'children',
          'style',
        ]
      function ownKeys(n, e) {
        var t = j()(n)
        if (v.a) {
          var r = v()(n)
          e &&
            (r = g()(r).call(r, function (e) {
              return m()(n, e).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function _objectSpread(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t,
            r,
            i = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? O()((t = ownKeys(Object(i), !0))).call(t, function (e) {
                c()(n, e, i[e])
              })
            : k.a
            ? w()(n, k()(i))
            : O()((r = ownKeys(Object(i)))).call(r, function (e) {
                I()(n, e, m()(i, e))
              })
        }
        return n
      }
      function Loading(n) {
        var e,
          t = n.vertical,
          r = n.type,
          c = void 0 === r ? 'circular' : r,
          i = n.color,
          a = n.size,
          u = n.textSize,
          f = n.className,
          b = n.children,
          j = n.style,
          p = l()(n, R),
          v = Object(N.useState)(s()({ length: 12 })),
          h = o()(v, 1)[0]
        return Object(K.jsxs)(
          z.n,
          _objectSpread(
            _objectSpread(
              {
                className: ' ' + P.b('loading', { vertical: t }) + ' ' + f,
                style: P.c([j]),
              },
              p,
            ),
            {},
            {
              children: [
                Object(K.jsx)(z.n, {
                  className: 'van-loading__spinner van-loading__spinner--' + c,
                  style:
                    ((e = { color: i, size: a }),
                    Object(P.c)({
                      color: e.color,
                      width: Object(C.a)(e.size),
                      height: Object(C.a)(e.size),
                    })),
                  children:
                    'spinner' === c &&
                    Object(K.jsx)(z.a, {
                      children: d()(h).call(h, function (n, e) {
                        return Object(K.jsx)(
                          z.n,
                          { className: 'van-loading__dot' },
                          'van-loading__dot_'.concat(e),
                        )
                      }),
                    }),
                }),
                Object(K.jsx)(z.n, {
                  className: 'van-loading__text',
                  style: textStyle({ textSize: u }),
                  children: b,
                }),
              ],
            },
          ),
        )
      }
      e.b = Loading
    },
    583: function (n, e, t) {},
    584: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return Button
      })
      var r = t(24),
        c = t.n(r),
        i = t(571),
        o = t.n(i),
        a = t(32),
        l = t.n(a),
        u = t(570),
        s = t.n(u),
        f = t(27),
        d = t.n(f),
        b = t(173),
        j = t.n(b),
        p = t(116),
        v = t.n(p),
        h = t(55),
        g = t.n(h),
        x = t(572),
        m = t.n(x),
        y = t(573),
        O = t.n(y),
        S = t(90),
        k = t(568),
        _ = t(569),
        w = t(577),
        T = t(582),
        I = t(28),
        z = t.n(I),
        N = t(579)
      function rootStyle(n) {
        var e
        if (!n.color) return ''
        var t = {
          color: n.plain ? n.color : '#fff',
          background: n.plain ? null : n.color,
        }
        return (
          -1 !== z()((e = n.color)).call(e, 'gradient')
            ? (t.border = 0)
            : (t['border-color'] = n.color),
          Object(N.a)([t])
        )
      }
      var P = t(115),
        C = [
          'type',
          'size',
          'block',
          'round',
          'plain',
          'square',
          'loading',
          'disabled',
          'hairline',
          'color',
          'loadingSize',
          'loadingType',
          'loadingText',
          'icon',
          'classPrefix',
          'onClick',
          'children',
          'style',
          'className',
        ]
      function ownKeys(n, e) {
        var t = c()(n)
        if (o.a) {
          var r = o()(n)
          e &&
            (r = l()(r).call(r, function (e) {
              return s()(n, e).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function _objectSpread(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t,
            r,
            c = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? d()((t = ownKeys(Object(c), !0))).call(t, function (e) {
                m()(n, e, c[e])
              })
            : j.a
            ? v()(n, j()(c))
            : d()((r = ownKeys(Object(c)))).call(r, function (e) {
                g()(n, e, s()(c, e))
              })
        }
        return n
      }
      var K = !1,
        R = 10
      if (!K)
        var U = setInterval(function () {
          if (--R > 0)
            for (
              var n = document.getElementsByTagName('style') || [],
                e = n.length - 1;
              e >= 0;
              e--
            ) {
              var t = n[e],
                r = t.innerHTML
              if (r && /^taro-button-core{/.test(r)) {
                t.remove(), (K = !0), U && clearInterval(U)
                break
              }
            }
          else U && clearInterval(U)
        }, 200)
      function Button(n) {
        var e,
          t = n.type,
          r = void 0 === t ? 'default' : t,
          c = n.size,
          i = void 0 === c ? 'normal' : c,
          o = n.block,
          a = n.round,
          l = n.plain,
          u = n.square,
          s = n.loading,
          f = n.disabled,
          d = n.hairline,
          b = n.color,
          j = n.loadingSize,
          p = void 0 === j ? S.a.pxTransform(40) : j,
          v = n.loadingType,
          h = void 0 === v ? 'circular' : v,
          g = n.loadingText,
          x = n.icon,
          m = n.classPrefix,
          y = void 0 === m ? 'van-icon' : m,
          I = n.onClick,
          z = n.children,
          N = n.style,
          K = n.className,
          R = O()(n, C)
        return Object(P.jsx)(
          k.b,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ' ' +
                  _.b('button', [
                    r,
                    i,
                    {
                      block: o,
                      round: a,
                      plain: l,
                      square: u,
                      loading: s,
                      disabled: f,
                      hairline: d,
                      unclickable: f || s,
                    },
                  ]) +
                  ' ' +
                  (d ? 'van-hairline--surround' : '') +
                  ' '.concat(K || ''),
                hoverClass: 'van-button--active hover-class',
                style: _.c([rootStyle({ plain: l, color: b }), N]),
                onClick: f || s ? void 0 : I,
              },
              R,
            ),
            {},
            {
              children: s
                ? Object(P.jsxs)(k.n, {
                    style: 'display: flex',
                    children: [
                      Object(P.jsx)(T.a, {
                        className: 'loading-class',
                        size: p,
                        type: h,
                        color:
                          ((e = { type: r, color: b, plain: l }),
                          e.plain
                            ? e.color
                              ? e.color
                              : '#c9c9c9'
                            : 'default' === e.type
                            ? '#c9c9c9'
                            : '#fff'),
                      }),
                      g &&
                        Object(P.jsx)(k.n, {
                          className: 'van-button__loading-text',
                          children: g,
                        }),
                    ],
                  })
                : Object(P.jsxs)(k.a, {
                    children: [
                      x &&
                        Object(P.jsx)(w.a, {
                          size: '1.2em',
                          name: x,
                          classPrefix: y,
                          className: 'van-button__icon',
                          style: 'line-height: inherit;',
                        }),
                      Object(P.jsx)(k.n, {
                        className: 'van-button__text',
                        children: z,
                      }),
                    ],
                  }),
            },
          ),
        )
      }
      e.b = Button
    },
    590: function (n, e, t) {
      'use strict'
      t.d(e, 'g', function () {
        return range
      }),
        t.d(e, 'd', function () {
          return getSystemInfoSync
        }),
        t.d(e, 'a', function () {
          return addUnit
        }),
        t.d(e, 'h', function () {
          return requestAnimationFrame
        }),
        t.d(e, 'f', function () {
          return pickExclude
        }),
        t.d(e, 'c', function () {
          return getRect
        }),
        t.d(e, 'b', function () {
          return getAllRect
        }),
        t.d(e, 'i', function () {
          return toPromise
        })
      var r,
        c = t(148),
        i = t.n(c),
        o = t(24),
        a = t.n(o),
        l = t(21),
        u = t.n(l),
        s = t(5),
        f = t.n(s),
        d = (t(567), t(863)),
        b = (t(866), t(90)),
        j = t(790),
        p = (t(77), t(575))
      t(593)
      function range(n, e, t) {
        return Math.min(Math.max(n, e), t)
      }
      function getSystemInfoSync() {
        return null == r && (r = Object(d.a)()), r
      }
      function addUnit(n) {
        if (Object(p.b)(n))
          return /^-?\d+(\.\d+)?$/.test('' + n) ? b.a.pxTransform(n) : n
      }
      function requestAnimationFrame(n) {
        return 'devtools' === getSystemInfoSync().platform
          ? setTimeout(function () {
              n()
            }, 33.333333333333336)
          : Object(j.a)()
              .selectViewport()
              .boundingClientRect()
              .exec(function () {
                n()
              })
      }
      function pickExclude(n, e) {
        var t
        return Object(p.e)(n)
          ? i()((t = a()(n))).call(
              t,
              function (t, r) {
                return u()(e).call(e, r) || (t[r] = n[r]), t
              },
              {},
            )
          : {}
      }
      function getRect(n, e) {
        return new f.a(function (t) {
          var r = Object(j.a)()
          n && (r = r.in(n)),
            r
              .select(e)
              .boundingClientRect()
              .exec(function () {
                var n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : []
                return t(n[0])
              })
        })
      }
      function getAllRect(n, e) {
        return new f.a(function (t) {
          var r = Object(j.a)()
          n && (r = r.in(n)),
            r
              .selectAll(e)
              .boundingClientRect()
              .exec(function () {
                var n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : []
                return t(n[0])
              })
        })
      }
      function toPromise(n) {
        return Object(p.f)(n) ? n : f.a.resolve(n)
      }
      t.d(e, 'e', function () {
        return p.b
      })
    },
    591: function (n, e, t) {
      'use strict'
      t(574), t(583), t(580), t(581), t(595)
    },
    593: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return canIUseModel
      }),
        t.d(e, 'b', function () {
          return canIUseNextTick
        })
      var r,
        c = t(117),
        i = t.n(c),
        o = t(863),
        a = t(864)
      t(865)
      function gte(n) {
        return (
          (function compareVersion(n, e) {
            ;(n = n.split('.')), (e = e.split('.'))
            for (var t = Math.max(n.length, e.length); n.length < t; )
              n.push('0')
            for (; e.length < t; ) e.push('0')
            for (var r = 0; r < t; r++) {
              var c = i()(n[r], 10),
                o = i()(e[r], 10)
              if (c > o) return 1
              if (c < o) return -1
            }
            return 0
          })(
            (function getSystemInfoSync() {
              return null == r && (r = Object(o.a)()), r
            })().SDKVersion,
            n,
          ) >= 0
        )
      }
      function canIUseModel() {
        return gte('2.9.3')
      }
      function canIUseNextTick() {
        return Object(a.a)('nextTick')
      }
    },
    595: function (n, e, t) {},
    701: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return usePageScroll
      })
      var r = t(64),
        c = t(90)
      function usePageScroll(n) {
        Object(r.useEffect)(function () {
          var e = document
          function listener(t) {
            if (t.target) {
              var r = {
                scrollTop: e.scrollingElement.scrollTop,
                scrollLeft: e.scrollingElement.scrollLeft,
              }
              n(r)
            }
          }
          return (
            e.addEventListener('scroll', listener),
            function () {
              e.removeEventListener('scroll', listener)
            }
          )
        }),
          c.a.usePageScroll(function (n) {})
      }
    },
    715: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return Sticky
      })
      var r = t(572),
        c = t.n(r),
        i = t(573),
        o = t.n(i),
        a = t(576),
        l = t.n(a),
        u = t(5),
        s = t.n(u),
        f = t(148),
        d = t.n(f),
        b = t(24),
        j = t.n(b),
        p = t(571),
        v = t.n(p),
        h = t(32),
        g = t.n(h),
        x = t(570),
        m = t.n(x),
        y = t(27),
        O = t.n(y),
        S = t(173),
        k = t.n(S),
        _ = t(116),
        w = t.n(_),
        T = t(55),
        I = t.n(T),
        z = t(64),
        N = t(568),
        P = t(569),
        C = t(590),
        K = t(575),
        R = t(701),
        U = t(579)
      function wrapStyle(n) {
        return Object(U.a)({
          transform: n.transform
            ? 'translate3d(0, ' + n.transform + 'px, 0)'
            : '',
          top: n.fixed ? n.offsetTop + 'px' : '',
          'z-index': n.zIndex,
        })
      }
      var E = t(115),
        D = [
          'zIndex',
          'offsetTop',
          'scrollTop',
          'disabled',
          'container',
          'onScroll',
          'style',
          'className',
          'children',
        ]
      function ownKeys(n, e) {
        var t = j()(n)
        if (v.a) {
          var r = v()(n)
          e &&
            (r = g()(r).call(r, function (e) {
              return m()(n, e).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function _objectSpread(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t,
            r,
            i = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? O()((t = ownKeys(Object(i), !0))).call(t, function (e) {
                c()(n, e, i[e])
              })
            : k.a
            ? w()(n, k()(i))
            : O()((r = ownKeys(Object(i)))).call(r, function (e) {
                I()(n, e, m()(i, e))
              })
        }
        return n
      }
      function Sticky(n) {
        var e,
          t = Object(z.useRef)(+new Date()),
          r = Object(z.useState)({ height: 0, fixed: !1, transform: 0 }),
          c = l()(r, 2),
          i = c[0],
          a = c[1],
          u = n.zIndex,
          f = n.offsetTop,
          b = void 0 === f ? 0 : f,
          p = n.scrollTop,
          v = n.disabled,
          h = n.container,
          g = n.onScroll,
          x = n.style,
          m = n.className,
          y = n.children,
          O = o()(n, D),
          S = Object(z.useRef)({}),
          k = Object(z.useCallback)(
            function () {
              var n = null == h ? void 0 : h()
              return new s.a(function (e) {
                return null == n
                  ? void 0
                  : n.boundingClientRect().exec(function () {
                      var n =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : []
                      return e(n[0])
                    })
              })
            },
            [h],
          ),
          _ = Object(z.useCallback)(
            function (n) {
              var e,
                t = d()((e = j()(n))).call(
                  e,
                  function (e, t) {
                    return n[t] !== i[t] && (e[t] = n[t]), e
                  },
                  {},
                )
              j()(t).length > 0 &&
                a(function (n) {
                  return _objectSpread(_objectSpread({}, n), t)
                }),
                null == g ||
                  g({
                    detail: {
                      scrollTop: S.current.scrollTop,
                      isFixed: n.fixed || i.fixed,
                    },
                  })
            },
            [g, i],
          ),
          w = Object(z.useCallback)(
            function (n) {
              v
                ? _({ fixed: !1, transform: 0 })
                : ((S.current.scrollTop = n || S.current.scrollTop),
                  'function' != typeof h
                    ? Object(C.c)(
                        null,
                        '.sticky-com-index'.concat(t.current),
                      ).then(function (n) {
                        Object(K.b)(n) &&
                          (b >= n.top
                            ? _({ fixed: !0, height: n.height })
                            : _({ fixed: !1 }))
                      })
                    : s.a
                        .all([
                          Object(C.c)(
                            null,
                            '.sticky-com-index'.concat(t.current),
                          ),
                          k(),
                        ])
                        .then(function (n) {
                          var e = l()(n, 2),
                            t = e[0],
                            r = e[1]
                          t &&
                            r &&
                            (b + t.height > r.height + r.top
                              ? _({ fixed: !1, transform: r.height - t.height })
                              : b >= t.top
                              ? _({ fixed: !0, height: t.height, transform: 0 })
                              : _({ fixed: !1, transform: 0 }))
                        })
                        .catch(function (n) {
                          console.log(n)
                        }))
            },
            [h, v, k, b, _],
          )
        return (
          Object(z.useEffect)(
            function () {
              w(p)
            },
            [p, h, v, b],
          ),
          Object(R.a)(function (n) {
            w(n.scrollTop)
          }),
          Object(E.jsx)(
            N.n,
            _objectSpread(
              _objectSpread(
                {
                  className:
                    'sticky-com-index'.concat(t.current, ' ') +
                    ' van-sticky ' +
                    (m || ''),
                  style: P.c([
                    ((e = { fixed: i.fixed, height: i.height, zIndex: u }),
                    Object(U.a)({
                      height: e.fixed ? e.height + 'px' : '',
                      'z-index': e.zIndex,
                    })),
                    x,
                  ]),
                },
                O,
              ),
              {},
              {
                children: Object(E.jsx)(N.n, {
                  className:
                    P.b('sticky-wrap', { fixed: i.fixed }) +
                    ' '.concat(m || ''),
                  style: P.c([
                    wrapStyle({
                      fixed: i.fixed,
                      offsetTop: b,
                      transform: i.transform,
                      zIndex: u,
                    }),
                    x,
                  ]),
                  children: y,
                }),
              },
            ),
          )
        )
      }
      e.b = Sticky
    },
    721: function (n, e, t) {},
    925: function (n, e, t) {
      'use strict'
      t.r(e),
        t.d(e, 'default', function () {
          return p
        })
      var r = t(39),
        c = t(40),
        i = t(175),
        o = t(66),
        a = t(65),
        l = t(91),
        u = t(64),
        s = t(587),
        f = t(588),
        d = (t(574), t(721), t(715)),
        b = (t(591), t(584)),
        j = t(115)
      function Demo() {
        return Object(j.jsx)(d.b, {
          children: Object(j.jsx)(b.b, {
            type: 'primary',
            style: 'margin-left: 15px',
            children: '基础用法',
          }),
        })
      }
      function demo2_Demo() {
        return Object(j.jsx)(d.b, {
          offsetTop: 50,
          children: Object(j.jsx)(b.b, {
            type: 'primary',
            children: '吸顶距离',
          }),
        })
      }
      var p = (function (n) {
        Object(o.a)(Index, n)
        var e = Object(a.a)(Index)
        function Index() {
          var n
          return (
            Object(r.a)(this, Index),
            (n = e.call(this)),
            Object(l.a)(Object(i.a)(n), 'state', {}),
            n
          )
        }
        return (
          Object(c.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(j.jsxs)(s.a, {
                  title: 'Sticky 粘性布局',
                  className: 'pages-sticky-index',
                  children: [
                    Object(j.jsx)(f.a, {
                      title: '基础用法',
                      padding: !0,
                      children: Object(j.jsx)(Demo, {}),
                    }),
                    Object(j.jsx)(f.a, {
                      title: '吸顶距离',
                      padding: !0,
                      children: Object(j.jsx)(demo2_Demo, {}),
                    }),
                  ],
                })
              },
            },
          ]),
          Index
        )
      })(u.Component)
    },
  },
])
