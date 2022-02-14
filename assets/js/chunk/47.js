/*! For license information please see 47.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"525":function(e,t,n){"use strict";n.d(t,"e",(function(){return isPlainObject})),n.d(t,"f",(function(){return isPromise})),n.d(t,"b",(function(){return isDef})),n.d(t,"d",(function(){return isObj})),n.d(t,"a",(function(){return isBoolean})),n.d(t,"c",(function(){return isImageUrl})),n.d(t,"g",(function(){return isVideoUrl}));var c=n(171),r=n.n(c);function isFunction(e){return"function"==typeof e}function isPlainObject(e){return null!==e&&"object"===r()(e)&&!Array.isArray(e)}function isPromise(e){return isPlainObject(e)&&isFunction(e.then)&&isFunction(e.catch)}function isDef(e){return null!=e}function isObj(e){var t=r()(e);return null!==e&&("object"===t||"function"===t)}function isBoolean(e){return"boolean"==typeof e}var a=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,i=/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i;function isImageUrl(e){return a.test(e)}function isVideoUrl(e){return i.test(e)}},"528":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c=n(37),r=n(38),a=n(65),i=n(64),o=n(518),s=n(63),l=(n(529),n(108)),u=function(e){Object(a.a)(Index,e);var t=Object(i.a)(Index);function Index(){return Object(c.a)(this,Index),t.call(this)}return Object(r.a)(Index,[{"key":"render","value":function render(){var e=this.props,t=e.padding,n=e.title,c=e.card;return Object(l.jsxs)(o.n,{"className":"custom-class demo-block van-clearfix "+(t?"demo-block--padding":""),"children":[n&&Object(l.jsx)(o.n,{"className":"demo-block__title","children":n}),c?Object(l.jsx)(o.n,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(s.Component)},"529":function(e,t,n){},"531":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Page}));n(564);var c=n(527),r=n(518),a=n(87),i=n(578),o=n(75),s=n(63),l=(n(538),n(108));function Page(t){var n=t.title,u=t.className,d=void 0===u?"":u,f=t.children,b=a.a.useRouter().path;return Object(s.useEffect)((function(){"react"===e.env.LIBRARY_ENV?document.body.scrollTop=document.documentElement.scrollTop=0:Object(i.a)({"scrollTop":0})}),[b]),a.a.useShareAppMessage((function(){return{"title":"AntM 组件库演示","path":b}})),Object(l.jsxs)(r.n,{"className":"demo-page ".concat(d),"children":[Object(l.jsxs)(r.n,{"className":"demo-nav","children":[Object(l.jsx)(c.b,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return Object(o.d)()}}),Object(l.jsxs)(r.n,{"className":"demo-nav__title","children":[n," "]})]}),f]})}}).call(this,n(227))},"538":function(e,t,n){},"539":function(e,t,n){"use strict";n.d(t,"g",(function(){return range})),n.d(t,"d",(function(){return getSystemInfoSync})),n.d(t,"a",(function(){return addUnit})),n.d(t,"h",(function(){return requestAnimationFrame})),n.d(t,"f",(function(){return pickExclude})),n.d(t,"c",(function(){return getRect})),n.d(t,"b",(function(){return getAllRect})),n.d(t,"i",(function(){return toPromise}));var c,r=n(139),a=n.n(r),i=n(22),o=n.n(i),s=n(15),l=n.n(s),u=n(5),d=n.n(u),f=(n(517),n(835)),b=(n(838),n(87)),j=n(886),h=(n(75),n(525));n(544);function range(e,t,n){return Math.min(Math.max(e,t),n)}function getSystemInfoSync(){return null==c&&(c=Object(f.a)()),c}function addUnit(e){if(Object(h.b)(e))return/^-?\d+(\.\d+)?$/.test(""+e)?b.a.pxTransform(e):e}function requestAnimationFrame(e){return"devtools"===getSystemInfoSync().platform?setTimeout((function(){e()}),33.333333333333336):Object(j.a)().selectViewport().boundingClientRect().exec((function(){e()}))}function pickExclude(e,t){var n;return Object(h.e)(e)?a()(n=o()(e)).call(n,(function(n,c){return l()(t).call(t,c)||(n[c]=e[c]),n}),{}):{}}function getRect(e,t){return new d.a((function(n){var c=Object(j.a)();e&&(c=c.in(e)),c.select(t).boundingClientRect().exec((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n(e[0])}))}))}function getAllRect(e,t){return new d.a((function(n){var c=Object(j.a)();e&&(c=c.in(e)),c.selectAll(t).boundingClientRect().exec((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n(e[0])}))}))}function toPromise(e){return Object(h.f)(e)?e:d.a.resolve(e)}n.d(t,"e",(function(){return h.b}))},"544":function(e,t,n){"use strict";n.d(t,"a",(function(){return canIUseModel})),n.d(t,"b",(function(){return canIUseNextTick}));var c,r=n(110),a=n.n(r),i=n(835),o=n(836);n(837);function gte(e){return function compareVersion(e,t){e=e.split("."),t=t.split(".");for(var n=Math.max(e.length,t.length);e.length<n;)e.push("0");for(;t.length<n;)t.push("0");for(var c=0;c<n;c++){var r=a()(e[c],10),i=a()(t[c],10);if(r>i)return 1;if(r<i)return-1}return 0}(function getSystemInfoSync(){return null==c&&(c=Object(i.a)()),c}().SDKVersion,e)>=0}function canIUseModel(){return gte("2.9.3")}function canIUseNextTick(){return Object(o.a)("nextTick")}},"558":function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return s}));var c=1010,r=1e3,a=805,i=805,o=800,s=600},"579":function(e,t,n){"use strict";var c=n(580);Object.defineProperty(t,"__esModule",{"value":!0}),t.default=function toArray(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[];return r.default.Children.forEach(e,(function(e){(null!=e||t.keepEmpty)&&(Array.isArray(e)?n=n.concat(toArray(e)):(0,a.isFragment)(e)&&e.props?n=n.concat(toArray(e.props.children,t)):n.push(e))})),n};var r=c(n(63)),a=n(581)},"580":function(e,t){e.exports=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}},e.exports.__esModule=!0,e.exports.default=e.exports},"581":function(e,t,n){"use strict";e.exports=n(582)},"582":function(e,t,n){"use strict";var c="function"==typeof Symbol&&Symbol.for,r=c?Symbol.for("react.element"):60103,a=c?Symbol.for("react.portal"):60106,i=c?Symbol.for("react.fragment"):60107,o=c?Symbol.for("react.strict_mode"):60108,s=c?Symbol.for("react.profiler"):60114,l=c?Symbol.for("react.provider"):60109,u=c?Symbol.for("react.context"):60110,d=c?Symbol.for("react.async_mode"):60111,f=c?Symbol.for("react.concurrent_mode"):60111,b=c?Symbol.for("react.forward_ref"):60112,j=c?Symbol.for("react.suspense"):60113,h=c?Symbol.for("react.suspense_list"):60120,m=c?Symbol.for("react.memo"):60115,v=c?Symbol.for("react.lazy"):60116,p=c?Symbol.for("react.block"):60121,g=c?Symbol.for("react.fundamental"):60117,O=c?Symbol.for("react.responder"):60118,x=c?Symbol.for("react.scope"):60119;function z(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case d:case f:case i:case s:case o:case j:return e;default:switch(e=e&&e.$$typeof){case u:case b:case v:case m:case l:return e;default:return t}}case a:return t}}}function A(e){return z(e)===f}t.AsyncMode=d,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=l,t.Element=r,t.ForwardRef=b,t.Fragment=i,t.Lazy=v,t.Memo=m,t.Portal=a,t.Profiler=s,t.StrictMode=o,t.Suspense=j,t.isAsyncMode=function(e){return A(e)||z(e)===d},t.isConcurrentMode=A,t.isContextConsumer=function(e){return z(e)===u},t.isContextProvider=function(e){return z(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return z(e)===b},t.isFragment=function(e){return z(e)===i},t.isLazy=function(e){return z(e)===v},t.isMemo=function(e){return z(e)===m},t.isPortal=function(e){return z(e)===a},t.isProfiler=function(e){return z(e)===s},t.isStrictMode=function(e){return z(e)===o},t.isSuspense=function(e){return z(e)===j},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===f||e===s||e===o||e===j||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===m||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===g||e.$$typeof===O||e.$$typeof===x||e.$$typeof===p)},t.typeOf=z},"585":function(e,t,n){"use strict";n(524),n(530),n(532),n(586)},"586":function(e,t,n){},"588":function(e,t,n){"use strict";var c=n(109),r=n.n(c),a=n(52),i=n.n(a),o=n(22),s=n.n(o),l=n(520),u=n.n(l),d=n(30),f=n.n(d),b=n(519),j=n.n(b),h=n(26),m=n.n(h),v=n(169),p=n.n(v),g=n(522),O=n.n(g),x=n(526),y=n.n(x),_=n(523),C=n.n(_),S=n(63),k=n(518),w=n(521),I=n(527),N=n(533);var F={"none":"scaleToFill","fill":"scaleToFill","cover":"aspectFill","contain":"aspectFit","widthFix":"widthFix","heightFix":"heightFix","scaleDown":"aspectFit"};function mode(e){return F[e]}var $=n(108),T=["src","round","width","height","radius","lazyLoad","showMenuByLongpress","fit","showError","showLoading","className","style","renderError","renderLoading"];function ownKeys(e,t){var n=s()(e);if(u.a){var c=u()(e);t&&(c=f()(c).call(c,(function(t){return j()(e,t).enumerable}))),n.push.apply(n,c)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n,c=null!=arguments[t]?arguments[t]:{};if(t%2)m()(n=ownKeys(Object(c),!0)).call(n,(function(t){O()(e,t,c[t])}));else if(p.a)r()(e,p()(c));else{var a;m()(a=ownKeys(Object(c))).call(a,(function(t){i()(e,t,j()(c,t))}))}}return e}t.a=function Image(e){var t=e.src,n=e.round,c=e.width,r=e.height,a=e.radius,i=e.lazyLoad,o=e.showMenuByLongpress,s=e.fit,l=e.showError,u=void 0===l||l,d=e.showLoading,f=void 0===d||d,b=e.className,j=e.style,h=e.renderError,m=e.renderLoading,v=C()(e,T),p=Object(S.useState)(),g=y()(p,2),O=g[0],x=g[1],_=Object(S.useState)(!1),F=y()(_,2),M=F[0],E=F[1];Object(S.useEffect)((function(){void 0===O&&x(!0),E(!1)}),[O]);var P,L=Object(S.useCallback)((function(){x(!1)}),[]),B=Object(S.useCallback)((function(){E(!0)}),[]),R=Object(S.useMemo)((function(){var e={};return"heightFix"!==s&&"widthFix"!==s||(e={"display":"flex","alignItems":"center","justifyContent":"center"}),e}),[s]);return Object($.jsxs)(k.n,_objectSpread(_objectSpread({"style":w.c([(P={"width":c,"height":r,"radius":a},Object(w.c)([{"width":Object(N.a)(P.width),"height":Object(N.a)(P.height),"border-radius":Object(N.a)(P.radius)},P.radius?"overflow: hidden":null])),j]),"className":" "+w.b("image",{"round":n})+" "+b,"onClick":v.onClick},v),{},{"children":[!M&&Object($.jsx)(k.f,{"src":t,"mode":mode(s||"none"),"lazyLoad":i,"className":"image-class van-image__img","showMenuByLongpress":o,"onLoad":L,"onError":B,"style":R}),O&&f&&Object($.jsx)(k.n,{"className":"loading-class van-image__loading","children":m||Object($.jsx)(I.b,{"name":"photo","className":"van-image__loading-icon"})}),M&&u&&Object($.jsx)(k.n,{"className":"error-class van-image__error","children":h||Object($.jsx)(I.b,{"name":"photo-fail","className":"van-image__error-icon"})})]}))}},"767":function(e,t,n){},"768":function(e,t,n){},"769":function(e,t,n){},"864":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ee}));n(585);var c=n(588),r=(n(524),n(767),n(109)),a=n.n(r),i=n(52),o=n.n(i),s=n(523),l=n.n(s),u=n(526),d=n.n(u),f=n(522),b=n.n(f),j=n(30),h=n.n(j),m=n(9),v=n.n(m),p=n(22),g=n.n(p),O=n(520),x=n.n(O),y=n(519),_=n.n(y),C=n(26),S=n.n(C),k=n(169),w=n.n(k),I=n(517),N=n(63),F=n(579),$=n.n(F),T=n(518),M=n(558),E=n(521),P=n(539),L=n(108),B=["active","activeColor","inactiveColor","border","fixed","safeAreaInsetBottom","zIndex","placeholder","onChange","style","className","children"];function ownKeys(e,t){var n=g()(e);if(x.a){var c=x()(e);t&&(c=h()(c).call(c,(function(t){return _()(e,t).enumerable}))),n.push.apply(n,c)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n,c=null!=arguments[t]?arguments[t]:{};if(t%2)S()(n=ownKeys(Object(c),!0)).call(n,(function(t){b()(e,t,c[t])}));else if(w.a)a()(e,w()(c));else{var r;S()(r=ownKeys(Object(c))).call(r,(function(t){o()(e,t,_()(c,t))}))}}return e}var R=function Tabbar(e){var t=Object(N.useState)({"height":50,"current":0}),n=d()(t,2),c=n[0],r=n[1],a=c.height,i=c.current,o=e.active,s=e.activeColor,u=e.inactiveColor,f=e.border,b=void 0===f||f,j=e.fixed,m=void 0===j||j,p=e.safeAreaInsetBottom,g=void 0===p||p,O=e.zIndex,x=void 0===O?M.e:O,y=e.placeholder,_=e.onChange,C=e.style,S=e.className,k=e.children,w=l()(e,B),F=Object(N.useCallback)((function(e){r((function(t){return _objectSpread(_objectSpread({},t),{},{"current":e})})),null==_||_({"detail":e})}),[_]),R=function parseTabList(e){var t,n;return h()(t=v()(n=$()(e)).call(n,(function(e){return Object(N.isValidElement)(e)?_objectSpread(_objectSpread({"key":void 0!==e.key?String(e.key):void 0},e.props),{},{"node":e}):null}))).call(t,(function(e){return e}))}(k),K=v()(R).call(R,(function(e,t){return Object(N.cloneElement)(e.node,{"key":t,"index":t,"active":i,"activeColor":s,"inactiveColor":u,"onChange":F})}));return Object(N.useEffect)((function(){r((function(e){return _objectSpread(_objectSpread({},e),{},{"current":o})}))}),[o]),Object(N.useEffect)((function(){m&&y&&Object(I.a)((function(){Object(P.c)(null,".van-tabbar").then((function(e){r((function(t){return _objectSpread(_objectSpread({},t),{},{"height":e.height})}))}))}))}),[m,y]),Object(L.jsxs)(T.a,{"children":[Object(L.jsx)(T.n,_objectSpread(_objectSpread({"className":(b?"van-hairline--top-bottom":"")+" "+E.b("tabbar",{"fixed":m,"safe":g})+" custom-class"+" ".concat(S||""),"style":E.c([x?"z-index: "+x:"",C])},w),{},{"children":K})),m&&y&&Object(L.jsx)(T.n,{"style":"height: "+a+"px;"})]})},K=(n(530),n(532),n(768),n(527)),U=n(618),V=["icon","name","iconPrefix","dot","info","renderIconActive","renderIcon","index","active","activeColor","inactiveColor","onChange","children","style","className","onClick"];function tabbar_item_ownKeys(e,t){var n=g()(e);if(x.a){var c=x()(e);t&&(c=h()(c).call(c,(function(t){return _()(e,t).enumerable}))),n.push.apply(n,c)}return n}function tabbar_item_objectSpread(e){for(var t=1;t<arguments.length;t++){var n,c=null!=arguments[t]?arguments[t]:{};if(t%2)S()(n=tabbar_item_ownKeys(Object(c),!0)).call(n,(function(t){b()(e,t,c[t])}));else if(w.a)a()(e,w()(c));else{var r;S()(r=tabbar_item_ownKeys(Object(c))).call(r,(function(t){o()(e,t,_()(c,t))}))}}return e}var D=function TabbarItem(e){var t=e.icon,n=e.name,c=e.iconPrefix,r=void 0===c?"van-icon":c,a=e.dot,i=e.info,o=e.renderIconActive,s=e.renderIcon,u=e.index,d=e.active,f=e.activeColor,b=e.inactiveColor,j=e.onChange,h=e.children,m=e.style,v=e.className,p=e.onClick,g=l()(e,V);return j?Object(L.jsxs)(T.n,tabbar_item_objectSpread(tabbar_item_objectSpread({"className":E.b("tabbar-item",{"active":d===(null!=n?n:u)})+" custom-class"+" ".concat(v||""),"style":E.c([{"color":d===(null!=n?n:u)?f:b},m])},g),{},{"onClick":function _click(){if(j){var e=null!=n?n:u;e!==d&&j(e)}null==p||p(null!=n?n:u)},"children":[Object(L.jsxs)(T.n,{"className":"van-tabbar-item__icon","children":[t?Object(L.jsx)(K.a,{"size":38,"info":i,"name":t,"classPrefix":r,"className":"van-tabbar-item__icon__inner"}):Object(L.jsx)(T.a,{"children":d===(null!=n?n:u)?o:s}),Object(L.jsx)(U.a,{"dot":a,"className":"van-tabbar-item__info"})]}),Object(L.jsx)(T.n,{"className":"van-tabbar-item__text","children":h})]})):Object(L.jsx)(L.Fragment,{})},q=n(37),J=n(38),Y=n(170),G=n(65),H=n(64),Q=n(88),W=n(878),X=n(531),Z=n(528),ee=(n(769),function(e){Object(G.a)(Index,e);var t=Object(H.a)(Index);function Index(){var e;return Object(q.a)(this,Index),e=t.call(this),Object(Q.a)(Object(Y.a)(e),"state",{"active":0,"active2":"home","active3":0,"active4":0,"active5":0,"active6":0,"icon":{"normal":"https://img.yzcdn.cn/vant/user-inactive.png","active":"https://img.yzcdn.cn/vant/user-active.png"}}),Object(Q.a)(Object(Y.a)(e),"onChange",(function(t){var n=t.currentTarget.dataset.key;e.setState(Object(Q.a)({},n,t.detail))})),Object(Q.a)(Object(Y.a)(e),"handleChange",(function(t){var n=t.currentTarget.dataset.key;e.setState(Object(Q.a)({},n,t.detail)),Object(W.c)({"title":"点击标签 ".concat(t.detail+1),"icon":"none"})})),e}return Object(J.a)(Index,[{"key":"render","value":function render(){var e=this,t=this.state,n=t.active,r=t.active2,a=t.active3,i=t.active4,o=t.icon,s=t.active5,l=t.active6;return Object(L.jsx)(X.a,{"title":"Tabbar 标签栏","children":Object(L.jsxs)(L.Fragment,{"children":[Object(L.jsx)(Z.a,{"title":"基础用法","children":Object(L.jsxs)(R,{"active":n,"className":"tabbar-position","safeAreaInsetBottom":!1,"onChange":function onChange(t){e.onChange({"detail":t.detail,"currentTarget":{"dataset":{"key":"active"}},"target":{"dataset":{"key":"active"}}})},"children":[Object(L.jsx)(D,{"icon":"home-o","children":"标签"}),Object(L.jsx)(D,{"icon":"search","children":"标签"}),Object(L.jsx)(D,{"icon":"friends-o","children":"标签"}),Object(L.jsx)(D,{"icon":"setting-o","children":"标签"})]})}),Object(L.jsx)(Z.a,{"title":"通过名称匹配","children":Object(L.jsxs)(R,{"active":r,"className":"tabbar-position","safeAreaInsetBottom":!1,"onChange":function onChange(t){e.onChange({"detail":t.detail,"currentTarget":{"dataset":{"key":"active2"}},"target":{"dataset":{"key":"active2"}}})},"children":[Object(L.jsx)(D,{"name":"home","icon":"home-o","children":"标签"}),Object(L.jsx)(D,{"name":"search","icon":"search","children":"标签"}),Object(L.jsx)(D,{"name":"friends","icon":"friends-o","children":"标签"}),Object(L.jsx)(D,{"name":"setting","icon":"setting-o","children":"标签"})]})}),Object(L.jsx)(Z.a,{"title":"显示徽标","children":Object(L.jsxs)(R,{"active":a,"className":"tabbar-position","safeAreaInsetBottom":!1,"onChange":function onChange(t){e.onChange({"detail":t.detail,"currentTarget":{"dataset":{"key":"active3"}},"target":{"dataset":{"key":"active3"}}})},"children":[Object(L.jsx)(D,{"icon":"home-o","children":"标签"}),Object(L.jsx)(D,{"icon":"search","dot":!0,"children":"标签"}),Object(L.jsx)(D,{"icon":"friends-o","info":"5","children":"标签"}),Object(L.jsx)(D,{"icon":"setting-o","info":"20","children":"标签"})]})}),Object(L.jsx)(Z.a,{"title":"自定义图标","children":Object(L.jsxs)(R,{"active":i,"className":"tabbar-position","safeAreaInsetBottom":!1,"onChange":function onChange(t){e.onChange({"detail":t.detail,"currentTarget":{"dataset":{"key":"active4"}},"target":{"dataset":{"key":"active4"}}})},"children":[Object(L.jsx)(D,{"info":"3","renderIcon":Object(L.jsx)(L.Fragment,{"children":Object(L.jsx)(c.a,{"src":o.normal,"mode":"aspectFit","style":"width: 30px; height: 18px;"})}),"renderIconActive":Object(L.jsx)(L.Fragment,{"children":Object(L.jsx)(c.a,{"src":o.active,"mode":"aspectFit","style":"width: 30px; height: 18px;"})}),"children":"自定义"}),Object(L.jsx)(D,{"icon":"search","children":"标签"}),Object(L.jsx)(D,{"icon":"setting-o","children":"标签"})]})}),Object(L.jsx)(Z.a,{"title":"自定义颜色","children":Object(L.jsxs)(R,{"active":s,"className":"tabbar-position","activeColor":"#07c160","inactiveColor":"#000","safeAreaInsetBottom":!1,"onChange":function onChange(t){e.onChange({"detail":t.detail,"currentTarget":{"dataset":{"key":"active5"}},"target":{"dataset":{"key":"active5"}}})},"children":[Object(L.jsx)(D,{"icon":"home-o","children":"标签"}),Object(L.jsx)(D,{"icon":"search","children":"标签"}),Object(L.jsx)(D,{"icon":"friends-o","children":"标签"}),Object(L.jsx)(D,{"icon":"setting-o","children":"标签"})]})}),Object(L.jsx)(Z.a,{"title":"切换标签事件","children":Object(L.jsxs)(R,{"active":l,"className":"tabbar-position","safeAreaInsetBottom":!1,"onChange":function onChange(t){e.handleChange({"detail":t.detail,"currentTarget":{"dataset":{"key":"active6"}},"target":{"dataset":{"key":"active6"}}})},"children":[Object(L.jsx)(D,{"icon":"home-o","children":"标签1"}),Object(L.jsx)(D,{"icon":"search","children":"标签2"}),Object(L.jsx)(D,{"icon":"friends-o","children":"标签3"}),Object(L.jsx)(D,{"icon":"setting-o","children":"标签4"})]})})]})})}}]),Index}(N.Component))}}]);