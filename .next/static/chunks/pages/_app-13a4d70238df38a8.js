(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3801)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,u=n(7273).Z,a=o(n(7294)),i=n(6273),c=n(2725),l=n(3462),f=n(1018),s=n(7190),d=n(1210),p=n(8684),v="undefined"!==typeof a.default.useTransition,y={};function h(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;y[t+"%"+n+(o?"%"+o:"")]=!0}}var _=a.default.forwardRef((function(e,t){var n,o=e.href,_=e.as,b=e.children,g=e.prefetch,m=e.passHref,j=e.replace,x=e.soft,O=e.shallow,C=e.scroll,M=e.locale,R=e.onClick,P=e.onMouseEnter,T=e.onTouchStart,E=e.legacyBehavior,L=void 0===E?!0!==Boolean(!1):E,w=u(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,!L||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var k=!1!==g,N=r(v?a.default.useTransition():[],2)[1],S=a.default.useContext(l.RouterContext),I=a.default.useContext(f.AppRouterContext);I&&(S=I);var U,A=a.default.useMemo((function(){var e=r(i.resolveHref(S,o,!0),2),t=e[0],n=e[1];return{href:t,as:_?i.resolveHref(S,_):n||t}}),[S,o,_]),D=A.href,Z=A.as,q=a.default.useRef(D),B=a.default.useRef(Z);L&&(U=a.default.Children.only(n));var H=L?U&&"object"===typeof U&&U.ref:t,K=r(s.useIntersection({rootMargin:"200px"}),3),W=K[0],X=K[1],G=K[2],z=a.default.useCallback((function(e){B.current===Z&&q.current===D||(G(),B.current=Z,q.current=D),W(e),H&&("function"===typeof H?H(e):"object"===typeof H&&(H.current=e))}),[Z,H,D,G,W]);a.default.useEffect((function(){var e=X&&k&&i.isLocalURL(D),t="undefined"!==typeof M?M:S&&S.locale,n=y[D+"%"+Z+(t?"%"+t:"")];e&&!n&&h(S,D,Z,{locale:t})}),[Z,D,X,M,k,S]);var F={ref:z,onClick:function(e){L||"function"!==typeof R||R(e),L&&U.props&&"function"===typeof U.props.onClick&&U.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,a,c,l,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n)){e.preventDefault();var s=function(){"softPush"in t&&"softReplace"in t?t[u?o?"softReplace":"softPush":o?"replace":"push"](n):t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:c})};f?f(s):s()}}(e,S,D,Z,j,x,O,C,M,I?N:void 0)},onMouseEnter:function(e){L||"function"!==typeof P||P(e),L&&U.props&&"function"===typeof U.props.onMouseEnter&&U.props.onMouseEnter(e),i.isLocalURL(D)&&h(S,D,Z,{priority:!0})},onTouchStart:function(e){L||"function"!==typeof T||T(e),L&&U.props&&"function"===typeof U.props.onTouchStart&&U.props.onTouchStart(e),i.isLocalURL(D)&&h(S,D,Z,{priority:!0})}};if(!L||m||"a"===U.type&&!("href"in U.props)){var J="undefined"!==typeof M?M:S&&S.locale,Q=S&&S.isLocaleDomain&&d.getDomainLocale(Z,J,S.locales,S.domainLocales);F.href=Q||p.addBasePath(c.addLocale(Z,J,S&&S.defaultLocale))}return L?a.default.cloneElement(U,F):a.default.createElement("a",Object.assign({},w,F),n)}));t.default=_,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,l=e.disabled||!a,f=o.useRef(),s=r(o.useState(!1),2),d=s[0],p=s[1],v=r(o.useState(null),2),y=v[0],h=v[1];o.useEffect((function(){if(a){if(f.current&&(f.current(),f.current=void 0),l||d)return;return y&&y.tagName&&(f.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=i.get(r)))return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:u,elements:o},c.push(n),i.set(n,t),t}(n),o=r.id,u=r.observer,a=r.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),i.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(y,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==f.current||f.current(),f.current=void 0}}if(!d){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[y,l,n,t,d]);var _=o.useCallback((function(){p(!1)}),[]);return[h,d,_]};var o=n(7294),u=n(9311),a="function"===typeof IntersectionObserver;var i=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var u=r.default.createContext(null);t.LayoutRouterContext=u;var a=r.default.createContext(null);t.GlobalLayoutRouterContext=a},3801:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}n.r(t),n.d(t,{default:function(){return b}});var u=n(5893),a=(n(7294),n(5697)),i=n.n(a),c=n(1664),l=n.n(c),f=n(4568),s=n.n(f);var d=function(){return(0,u.jsxs)("header",{className:s().header,children:[(0,u.jsx)("div",{className:s().logo,children:"React Meetups"}),(0,u.jsx)("nav",{children:(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(l(),{href:"/",children:"All Meetups"})}),(0,u.jsx)("li",{children:(0,u.jsx)(l(),{href:"/new-meetup",children:"Add New Meetup"})})]})})]})},p=n(8239),v=n.n(p);function y(e){return(0,u.jsxs)("div",{children:[(0,u.jsx)(d,{}),(0,u.jsx)("main",{className:v().main,children:e.children})]})}y.propTypes={children:i().node.isRequired};var h=y;n(906);function _(e){var t=e.Component,n=e.pageProps;return(0,u.jsx)(h,{children:(0,u.jsx)(t,o({},n))})}_.propTypes={Component:i().func.isRequired,pageProps:i().object.isRequired};var b=_},8239:function(e){e.exports={main:"Layout_main__NgJgX"}},4568:function(e){e.exports={header:"MainNavigation_header__WuiTa",logo:"MainNavigation_logo__oTonQ",active:"MainNavigation_active__eKPZi"}},906:function(){},1664:function(e,t,n){e.exports=n(8418)},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function u(){}u.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,u,a){if(a!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var n=e.O();_N_E=n}]);