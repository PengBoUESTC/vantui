;(window.webpackJsonp = window.webpackJsonp || []).push([
  [65],
  {
    582: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Loading
      })
      var c = t(572),
        a = t.n(c),
        i = t(576),
        r = t.n(i),
        o = t(573),
        s = t.n(o),
        l = t(592),
        d = t.n(l),
        j = t(10),
        b = t.n(j),
        u = t(24),
        x = t.n(u),
        O = t(571),
        p = t.n(O),
        f = t(32),
        m = t.n(f),
        h = t(570),
        v = t.n(h),
        g = t(27),
        _ = t.n(g),
        y = t(173),
        z = t.n(y),
        w = t(116),
        S = t.n(w),
        D = t(55),
        N = t.n(D),
        I = t(568),
        L = t(64),
        k = t(569),
        K = t(578)
      function textStyle(e) {
        return Object(k.c)({ 'font-size': Object(K.a)(e.textSize) })
      }
      var F = t(115),
        J = [
          'vertical',
          'type',
          'color',
          'size',
          'textSize',
          'className',
          'children',
          'style',
        ]
      function ownKeys(e, n) {
        var t = x()(e)
        if (p.a) {
          var c = p()(e)
          n &&
            (c = m()(c).call(c, function (n) {
              return v()(e, n).enumerable
            })),
            t.push.apply(t, c)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            c,
            i = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? _()((t = ownKeys(Object(i), !0))).call(t, function (n) {
                a()(e, n, i[n])
              })
            : z.a
            ? S()(e, z()(i))
            : _()((c = ownKeys(Object(i)))).call(c, function (n) {
                N()(e, n, v()(i, n))
              })
        }
        return e
      }
      function Loading(e) {
        var n,
          t = e.vertical,
          c = e.type,
          a = void 0 === c ? 'circular' : c,
          i = e.color,
          o = e.size,
          l = e.textSize,
          j = e.className,
          u = e.children,
          x = e.style,
          O = s()(e, J),
          p = Object(L.useState)(d()({ length: 12 })),
          f = r()(p, 1)[0]
        return Object(F.jsxs)(
          I.n,
          _objectSpread(
            _objectSpread(
              {
                className: ' ' + k.b('loading', { vertical: t }) + ' ' + j,
                style: k.c([x]),
              },
              O,
            ),
            {},
            {
              children: [
                Object(F.jsx)(I.n, {
                  className: 'van-loading__spinner van-loading__spinner--' + a,
                  style:
                    ((n = { color: i, size: o }),
                    Object(k.c)({
                      color: n.color,
                      width: Object(K.a)(n.size),
                      height: Object(K.a)(n.size),
                    })),
                  children:
                    'spinner' === a &&
                    Object(F.jsx)(I.a, {
                      children: b()(f).call(f, function (e, n) {
                        return Object(F.jsx)(
                          I.n,
                          { className: 'van-loading__dot' },
                          'van-loading__dot_'.concat(n),
                        )
                      }),
                    }),
                }),
                Object(F.jsx)(I.n, {
                  className: 'van-loading__text',
                  style: textStyle({ textSize: l }),
                  children: u,
                }),
              ],
            },
          ),
        )
      }
      n.b = Loading
    },
    583: function (e, n, t) {},
    702: function (e, n, t) {
      'use strict'
      t(574), t(583)
    },
    920: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return x
        })
      var c = t(39),
        a = t(40),
        i = t(175),
        r = t(66),
        o = t(65),
        s = t(91),
        l = t(64),
        d = t(587),
        j = t(588),
        b = (t(702), t(582)),
        u = t(115)
      function Demo() {
        return Object(u.jsxs)(u.Fragment, {
          children: [
            Object(u.jsx)(b.b, {}),
            Object(u.jsx)(b.b, { type: 'spinner' }),
          ],
        })
      }
      function demo2_Demo() {
        return Object(u.jsxs)(u.Fragment, {
          children: [
            Object(u.jsx)(b.b, { color: '#1989fa' }),
            Object(u.jsx)(b.b, { type: 'spinner', color: '#1989fa' }),
          ],
        })
      }
      function demo3_Demo() {
        return Object(u.jsx)(b.b, { size: '24px', children: '加载中...' })
      }
      function demo4_Demo() {
        return Object(u.jsx)(b.b, {
          size: '24px',
          vertical: !0,
          children: '加载中...',
        })
      }
      var x = (function (e) {
        Object(r.a)(Index, e)
        var n = Object(o.a)(Index)
        function Index() {
          var e
          return (
            Object(c.a)(this, Index),
            (e = n.call(this)),
            Object(s.a)(Object(i.a)(e), 'state', {}),
            e
          )
        }
        return (
          Object(a.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(u.jsxs)(d.a, {
                  title: 'Loading 加载',
                  className: 'pages-loading-index',
                  children: [
                    Object(u.jsx)(j.a, {
                      title: '加载类型',
                      padding: !0,
                      children: Object(u.jsx)(Demo, {}),
                    }),
                    Object(u.jsx)(j.a, {
                      title: '自定义颜色',
                      padding: !0,
                      children: Object(u.jsx)(demo2_Demo, {}),
                    }),
                    Object(u.jsx)(j.a, {
                      title: '加载文案',
                      padding: !0,
                      children: Object(u.jsx)(demo3_Demo, {}),
                    }),
                    Object(u.jsx)(j.a, {
                      title: '垂直排列',
                      padding: !0,
                      children: Object(u.jsx)(demo4_Demo, {}),
                    }),
                  ],
                })
              },
            },
          ]),
          Index
        )
      })(l.Component)
    },
  },
])
