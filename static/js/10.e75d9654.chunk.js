(this["webpackJsonpbalanced-network-interface"]=this["webpackJsonpbalanced-network-interface"]||[]).push([[10],{1018:function(n,e,t){"use strict";t.r(e),t.d(e,"VotePage",(function(){return i}));var r=t(0),a=t.n(r),c=t(183),o=t(965);function i(){return a.a.createElement(o.a,{title:"Vote"},a.a.createElement(c.a,null,a.a.createElement("title",null,"Vote")))}},944:function(n,e,t){"use strict";t.d(e,"a",(function(){return d})),t.d(e,"c",(function(){return p})),t.d(e,"b",(function(){return s}));var r=t(20),a=t(38),c=t(21);function o(){var n=Object(r.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  background-color: #2395aa;\n  border-radius: 100px;\n  color: ",";\n  cursor: pointer;\n  padding: 4px;\n  outline: none;\n\n  &:hover,\n  &:focus {\n    background-color: #087083;\n    transition: background-color 0.2s ease;\n  }\n\n  &:disabled {\n    cursor: default;\n    pointer-events: none;\n    color: rgba(255, 255, 255, 0.15);\n  }\n"]);return o=function(){return n},n}function i(){var n=Object(r.a)(["\n    padding: 7px 25px;\n  "]);return i=function(){return n},n}function u(){var n=Object(r.a)(["\n  background: transparent;\n  font-size: 14px;\n  padding: 5px 15px;\n  text-decoration: none;\n  color: rgba(255, 255, 255, 0.75);\n  cursor: pointer;\n  transition: color 0.3s ease;\n  user-select: none;\n  line-height: 1.4;\n\n  &:hover {\n    color: rgba(255, 255, 255, 1);\n    transition: color 0.2s ease;\n  }\n\n  &:disabled {\n    cursor: default;\n    pointer-events: none;\n    color: rgba(255, 255, 255, 0.15);\n  }\n\n  ","\n"]);return u=function(){return n},n}function l(){var n=Object(r.a)(["\n    padding: 7px 25px;\n  "]);return l=function(){return n},n}function f(){var n=Object(r.a)(["\n  display: inline-block;\n  border-radius: 10px;\n  padding: 5px 15px;\n  color: #ffffff;\n  text-decoration: none;\n  background-color: ",";\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n  user-select: none;\n  line-height: 1.4;\n\n  &:hover {\n    background-color: #087083;\n    transition: background-color 0.2s ease;\n  }\n\n  &:disabled {\n    background: rgba(255, 255, 255, 0.15);\n    cursor: default;\n    pointer-events: none;\n  }\n\n  ","\n"]);return f=function(){return n},n}var d=Object(c.default)(a.Button)(f(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.mediaWidth.upExtraSmall(l())})),p=Object(c.default)(a.Button)(u(),(function(n){return n.theme.mediaWidth.upExtraSmall(i())})),s=Object(c.default)(a.Button)(o(),(function(n){return n.theme.colors.bg1}))},946:function(n,e,t){"use strict";t.d(e,"c",(function(){return x})),t.d(e,"b",(function(){return O})),t.d(e,"a",(function(){return E}));var r=t(45),a=t(20),c=t(0),o=t.n(c),i=t(311),u=t(1019),l=t(21),f=t(308);function d(){var n=Object(a.a)(["\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  z-index: -1;\n\n  ::before {\n    position: absolute;\n    width: 12px;\n    height: 12px;\n    z-index: -1;\n\n    content: '';\n    transform: rotate(45deg);\n    background: ",";\n  }\n\n  &.arrow-top,\n  &.arrow-top-start,\n  &.arrow-top-end {\n    bottom: -6px;\n  }\n\n  &.arrow-bottom,\n  &.arrow-bottom-start,\n  &.arrow-bottom-end {\n    top: -6px;\n  }\n\n  &.arrow-left,\n  &.arrow-left-start,\n  &.arrow-left-end {\n    right: -6px;\n  }\n\n  &.arrow-right,\n  &.arrow-right-start,\n  &.arrow-right-end {\n    left: -6px;\n  }\n"]);return d=function(){return n},n}function p(){var n=Object(a.a)(["\n  display: inline-block;\n  line-height: 0;\n"]);return p=function(){return n},n}function s(){var n=Object(a.a)(["\n  background: ",";\n  border: 2px solid ",";\n  color: ",";\n  border-radius: 8px;\n  overflow: hidden;\n"]);return s=function(){return n},n}function m(){var n=Object(a.a)(["\n  z-index: ",";\n  visibility: ",";\n  opacity: ",";\n  transition: visibility 150ms linear, opacity 150ms linear;\n"]);return m=function(){return n},n}var b=l.default.div(m(),(function(n){return n.theme.zIndices.tooltip}),(function(n){return n.show?"visible":"hidden"}),(function(n){return n.show?1:0})),v=l.default.div(s(),(function(n){return n.theme.colors.bg4}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.text1})),h=l.default.div(p()),g=l.default.div(d(),(function(n){return n.theme.colors.primary}));function x(n){var e,t,a=n.content,l=n.show,d=n.children,p=n.placement,s=void 0===p?"auto":p,m=Object(c.useState)(null),x=Object(r.a)(m,2),O=x[0],E=x[1],j=Object(c.useState)(null),w=Object(r.a)(j,2),y=w[0],k=w[1],z=Object(c.useState)(null),M=Object(r.a)(z,2),C=M[0],S=M[1],I=Object(u.a)(O,y,{placement:s,strategy:"fixed",modifiers:[{name:"offset",options:{offset:[0,12]}},{name:"arrow",options:{element:C}}]}),R=I.styles,T=I.update,A=I.attributes,L=Object(c.useCallback)((function(){T&&T()}),[T]);return Object(f.a)(L,l?100:null),o.a.createElement(o.a.Fragment,null,o.a.createElement(h,{ref:E},d),o.a.createElement(i.b,null,o.a.createElement(b,Object.assign({show:l,ref:k,style:R.popper},A.popper),o.a.createElement(v,null,a),o.a.createElement(g,Object.assign({className:"arrow-".concat(null!==(e=null===(t=A.popper)||void 0===t?void 0:t["data-popper-placement"])&&void 0!==e?e:""),ref:S,style:R.arrow},A.arrow)))))}function O(n){var e=n.show,t=n.children,a=n.placement,l=void 0===a?"auto":a,d=n.anchorEl,p=Object(c.useState)(null),s=Object(r.a)(p,2),m=s[0],h=s[1],g=Object(u.a)(d,m,{placement:l,strategy:"fixed",modifiers:[{name:"offset",options:{offset:[0,2]}}]}),x=g.styles,O=g.update,E=g.attributes,j=Object(c.useCallback)((function(){O&&O()}),[O]);return Object(f.a)(j,e?100:null),o.a.createElement(i.b,null,o.a.createElement(b,Object.assign({show:e,ref:h,style:x.popper},E.popper),o.a.createElement(v,null,t)))}function E(n){var e,t,a=n.show,l=n.children,d=n.placement,p=void 0===d?"auto":d,s=n.anchorEl,m=Object(c.useState)(null),h=Object(r.a)(m,2),x=h[0],O=h[1],E=Object(c.useState)(null),j=Object(r.a)(E,2),w=j[0],y=j[1],k=o.a.useMemo((function(){return[{name:"offset",options:{offset:[20,12]}},{name:"arrow",options:{element:w}}]}),[w]),z=Object(u.a)(s,x,{placement:p,strategy:"fixed",modifiers:k}),M=z.styles,C=z.update,S=z.attributes,I=Object(c.useCallback)((function(){C&&C()}),[C]);return Object(f.a)(I,a?100:null),o.a.createElement(i.b,null,o.a.createElement(b,Object.assign({show:a,ref:O,style:M.popper},S.popper),o.a.createElement(v,null,l),o.a.createElement(g,Object.assign({className:"arrow-".concat(null!==(e=null===(t=S.popper)||void 0===t?void 0:t["data-popper-placement"])&&void 0!==e?e:""),ref:y,style:M.arrow},S.arrow))))}},948:function(n,e,t){"use strict";t.d(e,"b",(function(){return p})),t.d(e,"a",(function(){return s}));var r=t(45),a=t(122),c=t(20),o=t(0),i=t.n(o),u=t(21),l=t(946);function f(){var n=Object(c.a)(["\n  width: ",";\n  padding: 12px 1rem;\n  line-height: 150%;\n  font-weight: 400;\n  font-size: 14px;\n  color: ",";\n"]);return f=function(){return n},n}var d=u.default.div(f(),(function(n){return n.wide?"300px":"244px"}),(function(n){return n.theme.colors.white}));function p(n){var e=n.text,t=n.wide,r=Object(a.a)(n,["text","wide"]);return i.a.createElement(l.c,Object.assign({content:i.a.createElement(d,{wide:t},e)},r))}function s(n){var e=n.children,t=Object(a.a)(n,["children"]),c=Object(o.useState)(!1),u=Object(r.a)(c,2),l=u[0],f=u[1],d=Object(o.useCallback)((function(){return f(!0)}),[f]),s=Object(o.useCallback)((function(){return f(!1)}),[f]);return i.a.createElement(p,Object.assign({},t,{show:l}),i.a.createElement("div",{onMouseEnter:d,onMouseLeave:s},e))}},950:function(n,e,t){"use strict";var r=t(0),a=t.n(r);e.a=function(n){var e=n.children,t=n.onClickAway,c=n.mouseEvent,o=void 0===c?"click":c,i=n.touchEvent,u=void 0===i?"touchend":i,l=Object(r.useRef)(null),f=Object(r.useRef)(null),d=function(n){var t=n.event,r=n.type;f.current=t.target;var a=null==e?void 0:e.props[r];a&&a(t)};return Object(r.useEffect)((function(){var n=function(n){l.current&&l.current.contains(n.target)||f.current===n.target||t(n)};return document.addEventListener(o,n),document.addEventListener(u,n),function(){document.removeEventListener(o,n),document.removeEventListener(u,n)}}),[o,t,u]),a.a.Children.only(a.a.cloneElement(e,{ref:function(n){l.current=n;var t=e.ref;"function"==typeof t?t(n):t&&(t.current=n)},onClick:function(n){return d({type:"onClick",event:n})},onTouchEnd:function(n){return d({type:"onTouchEnd",event:n})}}))}},957:function(n,e,t){"use strict";t.d(e,"a",(function(){return p}));var r=t(20),a=t(0),c=t.n(a),o=t(21),i=t.p+"static/media/balanced-logo.8d12c8b0.png",u=t(948);function l(){var n=Object(r.a)(["\n    width: 100px;\n  "]);return l=function(){return n},n}function f(){var n=Object(r.a)(["\n  width: 75px;\n  cursor: pointer;\n\n  ","\n"]);return f=function(){return n},n}var d=o.default.img(f(),(function(n){return n.theme.mediaWidth.upSmall(l())}));function p(n){return c.a.createElement("div",n,c.a.createElement("a",{href:"https://balanced.network"},c.a.createElement(u.a,{text:"Back to the Balanced website",placement:"right"},c.a.createElement(d,{src:i,alt:"Balanced logo"}))))}},965:function(n,e,t){"use strict";t.d(e,"a",(function(){return Pn}));var r=t(20),a=t(0),c=t.n(a),o=t(1024),i=t(38),u=t(21),l=t(312);function f(){return(f=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function d(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},c=Object.keys(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var p=a.createElement("path",{d:"M33.293 15.645a.708.708 0 01-.466-.175L17.002 1.648 1.177 15.47a.704.704 0 01-.469.178A.711.711 0 010 14.94c0-.206.089-.402.245-.536L16.535.174a.712.712 0 01.933 0l16.29 14.23a.707.707 0 01-.465 1.241z",fill:"currentcolor"}),s=a.createElement("path",{d:"M17.002 1.484a.704.704 0 01-.696-.7c0-.384.316-.7.7-.7a.699.699 0 11-.004 1.4zM21.253 31.223h-.002a.71.71 0 01-.707-.707v-9.915a.713.713 0 00-.708-.708h-5.667a.712.712 0 00-.707.708v9.914c0 .389-.32.709-.709.709a.712.712 0 01-.709-.709v-9.914a2.137 2.137 0 012.125-2.124h5.667a2.137 2.137 0 012.125 2.124v9.914c0 .388-.32.708-.708.708z",fill:"currentcolor"}),m=a.createElement("path",{d:"M28.336 31.223H5.67a2.139 2.139 0 01-2.125-2.125V15.645c0-.388.32-.708.708-.708.388 0 .708.32.708.708v13.453c.001.389.32.708.709.709h22.666a.713.713 0 00.707-.709V15.645a.712.712 0 01.709-.682c.378 0 .694.303.708.682v13.453a2.137 2.137 0 01-2.124 2.125z",fill:"currentcolor"}),b=a.createElement("path",{d:"M17.002 15.055a3.676 3.676 0 01-3.657-3.658 3.675 3.675 0 013.658-3.658 3.675 3.675 0 013.658 3.658 3.68 3.68 0 01-3.659 3.658zm0-5.9a2.254 2.254 0 00-2.243 2.243 2.254 2.254 0 002.243 2.243 2.254 2.254 0 002.243-2.243 2.256 2.256 0 00-2.243-2.244v.001zM29.043 11.397a.71.71 0 01-.707-.707V5.732h-2.125v2.124a.712.712 0 01-.708.682.712.712 0 01-.709-.682V5.732a1.424 1.424 0 011.417-1.416h2.125a1.424 1.424 0 011.416 1.416v4.957c0 .388-.32.708-.708.708h-.001z",fill:"currentcolor"});function v(n,e){var t=n.title,r=n.titleId,c=d(n,["title","titleId"]);return a.createElement("svg",f({viewBox:"0 0 34 32",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2,ref:e,"aria-labelledby":r},c),t?a.createElement("title",{id:r},t):null,p,s,m,b)}var h=a.forwardRef(v);t.p;function g(){return(g=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function x(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},c=Object.keys(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var O=a.createElement("path",{d:"M36.199 29.339H.805A.808.808 0 010 28.534c0-.441.364-.804.805-.804h35.394c.44 0 .805.363.805.804a.809.809 0 01-.805.805zM36.199 19.308c-3.53 0-5.122-4.777-6.662-9.4-1.36-4.08-2.768-8.3-5.136-8.3-2.37 0-3.777 4.218-5.14 8.3-1.54 4.62-3.13 9.4-6.66 9.4-3.53 0-5.12-4.777-6.66-9.4-1.359-4.08-2.763-8.3-5.131-8.3A.808.808 0 01.005.804C.005.363.37 0 .81 0c3.527 0 5.118 4.777 6.656 9.4 1.361 4.08 2.767 8.3 5.135 8.3s3.776-4.217 5.137-8.3C19.278 4.779 20.87 0 24.4 0c3.53 0 5.12 4.777 6.66 9.4 1.36 4.08 2.769 8.3 5.138 8.3.44 0 .804.363.804.804a.808.808 0 01-.804.804z",fill:"currrentcolor"}),E=a.createElement("path",{d:"M18.499 15.93c-4.87 0-7.24-3.791-9.53-7.455-2.154-3.446-4.187-6.7-8.164-6.7A.808.808 0 010 .97C0 .529.364.166.805.166c4.87 0 7.237 3.791 9.527 7.456 2.156 3.445 4.19 6.7 8.167 6.7 3.977 0 6.011-3.255 8.167-6.7C28.955 3.957 31.325.166 36.194.166c.44 0 .805.363.805.804a.809.809 0 01-.805.805c-3.978 0-6.012 3.254-8.166 6.7-2.29 3.664-4.658 7.455-9.53 7.455zM1.617 28.535h-.008a.804.804 0 01-.8-.8v-.805c0-.441.363-.804.804-.804.44 0 .804.363.804.804v.805c0 .439-.361.8-.8.8zM6.442 28.535h-.009a.804.804 0 01-.8-.8v-.805c0-.441.364-.804.804-.804.442 0 .805.363.805.804v.805c0 .439-.362.8-.8.8zM11.264 28.535h-.004a.804.804 0 01-.8-.8v-.805c0-.441.362-.804.804-.804.442 0 .805.363.805.804v.8a.808.808 0 01-.805.805zM16.096 28.535h-.01a.804.804 0 01-.8-.8v-.805c0-.441.363-.804.805-.804.442 0 .805.363.805.804v.805c0 .439-.362.8-.8.8zM20.92 28.535h-.007a.804.804 0 01-.8-.8v-.805c0-.441.363-.804.804-.804.44 0 .804.363.804.804v.805c0 .439-.361.8-.8.8zM25.742 28.535h-.008a.804.804 0 01-.8-.8v-.805c0-.441.363-.804.804-.804.44 0 .804.363.804.804v.805c0 .439-.361.8-.8.8zM30.572 28.535h-.008a.804.804 0 01-.8-.8v-.805c0-.441.363-.804.805-.804.44 0 .804.363.804.804v.805c0 .439-.361.8-.8.8zM35.394 28.535h-.005a.808.808 0 01-.804-.805v-.8c0-.441.362-.804.804-.804.442 0 .805.363.805.804v.805c0 .439-.362.8-.8.8z",fill:"currrentcolor"});function j(n,e){var t=n.title,r=n.titleId,c=x(n,["title","titleId"]);return a.createElement("svg",g({viewBox:"0 0 38 30",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2,ref:e,"aria-labelledby":r},c),t?a.createElement("title",{id:r},t):null,O,E)}var w=a.forwardRef(j);t.p;function y(){var n=Object(r.a)(["\n    width: 114px;\n    padding: 15px;\n  "]);return y=function(){return n},n}function k(){var n=Object(r.a)(["\n  display: block;\n  margin-left: 50%;\n  transform: translate(-50%);\n  padding: 10px 15px;\n  width: 114px;\n  border-radius: 25px;\n  color: #8695a6;\n  text-decoration: none;\n  text-align: center;\n  transition: background-color 0.3s ease, color 0.3s ease;\n  font-size: 14px;\n\n  &."," {\n    color: ",";\n    background-color: ",";\n    opacity: 1;\n  }\n\n  :hover,\n  :focus {\n    color: ",";\n    background-color: ",";\n    opacity: 1;\n  }\n\n  ","\n\n  > svg {\n    margin-bottom: 5px;\n  }\n"]);return k=function(){return n},n}function z(){var n=Object(r.a)(["\n    display: block;\n    margin-bottom: 15px;\n    margin-right: 0;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  "]);return z=function(){return n},n}function M(){var n=Object(r.a)(["\n  &::before {\n    content: '';\n  }\n\n  display: inline-block;\n  margin-bottom: 0;\n  margin-right: 3px;\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  ","\n"]);return M=function(){return n},n}function C(){var n=Object(r.a)(["\n    box-shadow: none;\n  "]);return C=function(){return n},n}function S(){var n=Object(r.a)(["\n  width: 100%;\n  border-radius: 25px;\n  padding: 0;\n  margin: 0;\n  background-color: ",";\n  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.068), 0 6.7px 5.3px rgba(0, 0, 0, 0.096), 0 12.5px 10px rgba(0, 0, 0, 0.12),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.144), 0 41.8px 33.4px rgba(0, 0, 0, 0.172), 0 100px 80px rgba(0, 0, 0, 0.24);\n  ","\n"]);return S=function(){return n},n}function I(){var n=Object(r.a)(["\n    display: block;\n    width: 100px;\n  "]);return I=function(){return n},n}function R(){var n=Object(r.a)(["\n  display: inline-block;\n  width: initial;\n\n  ","\n"]);return R=function(){return n},n}var T=u.default.nav(R(),(function(n){return n.theme.mediaWidth.upLarge(I())})),A=u.default.ul(S(),(function(n){return n.theme.colors.bg2}),(function(n){return n.theme.mediaWidth.upLarge(C())})),L=u.default.li(M(),(function(n){return n.theme.mediaWidth.upLarge(z())})),B="ACTIVE",P=Object(u.default)(l.b).attrs({activeClassName:B})(k(),B,(function(n){return n.theme.colors.bg1}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.bg1}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.mediaWidth.upLarge(y())})),N=c.a.memo((function(){return c.a.createElement(T,null,c.a.createElement(A,null,c.a.createElement(L,null,c.a.createElement(P,{exact:!0,to:"/"},c.a.createElement(h,{width:"35",height:"33"}),c.a.createElement(i.Text,null,"Home"))),c.a.createElement(L,null,c.a.createElement(P,{exact:!0,to:"/trade"},c.a.createElement(w,{width:"35",height:"33"}),c.a.createElement(i.Text,null,"Trade")))))})),W=t(8),_=t.n(W),D=t(22),H=t(45),F=t(12),V=t(46),U=t(950),J=t(944),K=t(310),Y=t(957),G=t(946),q=t(948),Q=t(56);function X(){return(X=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function Z(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},c=Object.keys(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var $=a.createElement("g",{fill:"currentcolor",fillRule:"nonzero"},a.createElement("path",{d:"M41 42.963H3c-1.7 0-3-1.3-3-3v-30.4c0-1.4 1-2.6 2.4-2.9l31-6.6c.9-.2 1.8.1 2.5.6.7.6 1.1 1.4 1.1 2.3v5.1c0 .6-.4 1-1 1s-1-.4-1-1v-5.1c0-.4-.2-.7-.4-.8-.1-.1-.4-.3-.8-.2l-31 6.6c-.5.1-.8.5-.8 1v30.4c0 .6.4 1 1 1h38c.6 0 1-.4 1-1v-10c0-.6.4-1 1-1s1 .4 1 1v10c0 1.7-1.3 3-3 3z"}),a.createElement("path",{d:"M43 20.963c-.6 0-1-.4-1-1v-8.9c0-.6-.4-1-1-1H2c-.6 0-1-.4-1-1s.4-1 1-1h39c1.7 0 3 1.3 3 3v8.9c0 .6-.4 1-1 1z"}),a.createElement("path",{d:"M43 30.963H31c-1.7 0-3-1.3-3-3v-6c0-1.7 1.3-3 3-3h12c1.7 0 3 1.3 3 3v6c0 1.7-1.3 3-3 3zm-12-10c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1H31z"}),a.createElement("path",{d:"M35 27.963c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0-4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z"}));function nn(n,e){var t=n.title,r=n.titleId,c=Z(n,["title","titleId"]);return a.createElement("svg",X({viewBox:"0 0 46 43",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2,width:27,height:26,ref:e,"aria-labelledby":r},c),t?a.createElement("title",{id:r},t):null,$)}var en,tn,rn=a.forwardRef(nn),an=(t.p,t(121)),cn=t(182);function on(){var n=Object(r.a)(["\n  :hover {\n    color: #2fccdc;\n    cursor: pointer;\n  }\n"]);return on=function(){return n},n}function un(){var n=Object(r.a)(["\n  cursor: pointer;\n"]);return un=function(){return n},n}function ln(){var n=Object(r.a)(["\n  padding: 7px 25px;\n"]);return ln=function(){return n},n}function fn(){var n=Object(r.a)(["\n  max-width: 160px;\n  font-size: 14px;\n  padding: 25px;\n  display: grid;\n  grid-template-rows: auto;\n  grid-gap: 20px;\n"]);return fn=function(){return n},n}function dn(){var n=Object(r.a)([""]);return dn=function(){return n},n}function pn(){var n=Object(r.a)(["\n  text-align: right;\n  margin-right: 15px;\n  min-height: 42px;\n"]);return pn=function(){return n},n}function sn(){var n=Object(r.a)(["\n    margin-right: 75px;\n  "]);return sn=function(){return n},n}function mn(){var n=Object(r.a)(["\n  margin-right: 15px;\n\n  ","\n"]);return mn=function(){return n},n}var bn,vn=Object(u.default)(Y.a)(mn(),(function(n){return n.theme.mediaWidth.upSmall(sn())})),hn=Object(u.default)(i.Box)(pn()),gn=u.default.div(dn()),xn=u.default.div(fn()),On=Object(u.default)(J.a)(ln()),En=Object(u.default)(K.a)(un()),jn=Object(u.default)(Q.c)(on());!function(n){n[n.MAINNET=1]="MAINNET",n[n.YEOUIDO=3]="YEOUIDO",n[n.EULJIRO=2]="EULJIRO",n[n.PAGODA=80]="PAGODA"}(bn||(bn={}));var wn=parseInt(null!==(en=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_NETWORK_ID)&&void 0!==en?en:"1"),yn=(tn={},Object(F.a)(tn,bn.MAINNET,"Mainet"),Object(F.a)(tn,bn.YEOUIDO,"YEOUDIO"),tn),kn=c.a.memo((function(n){var e=n.className,t=n.title,r=Object(V.d)(),a=r.account,u=r.disconnect,l=c.a.useState(null),f=Object(H.a)(l,2),d=f[0],p=f[1],s=c.a.useRef(null),m=c.a.useState(!1),b=Object(H.a)(m,2),v=b[0],h=b[1],g=function(){return p(null)},x=Object(an.g)(),O=c.a.useCallback(function(){var n=Object(D.a)(_.a.mark((function n(e){return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,navigator.clipboard.writeText(e);case 2:h(!0);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[]),E=Object(o.a)("(min-width: 800px)");return c.a.createElement("header",{className:e},c.a.createElement(i.Flex,{justifyContent:"space-between"},c.a.createElement(i.Flex,{alignItems:"center"},c.a.createElement(vn,null),c.a.createElement(Q.c,{variant:"h1"},t),wn!==bn.MAINNET&&c.a.createElement(Q.c,{variant:"h3",color:"alert"},yn[wn])),!a&&c.a.createElement(i.Flex,{alignItems:"center"},c.a.createElement(J.a,{onClick:x},"Sign in")),a&&E&&c.a.createElement(i.Flex,{alignItems:"center"},c.a.createElement(hn,null,c.a.createElement(Q.c,{variant:"p",textAlign:"right"},"Wallet"),a&&c.a.createElement(q.a,{text:v?"Copied":"Copy address",placement:"left"},c.a.createElement(jn,{onMouseLeave:function(){setTimeout((function(){return h(!1)}),250)},onClick:function(){return O(a)}},Object(cn.i)(a)))),c.a.createElement(gn,null,c.a.createElement(U.a,{onClickAway:g},c.a.createElement("div",null,c.a.createElement(J.b,{ref:s,onClick:function(){p(d?null:s.current)}},c.a.createElement(rn,null)),c.a.createElement(G.a,{show:Boolean(d),anchorEl:d,placement:"bottom-end"},c.a.createElement(xn,null,c.a.createElement(En,{onClick:function(){g(),x()}},"Change wallet"),c.a.createElement(On,{onClick:function(){g(),u()}},"Sign out")))))))))}));function zn(){var n=Object(r.a)(["\n  z-index: ",";\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: fit-content;\n  position: sticky;\n  margin-top: 48px;\n  bottom: 24px;\n  ul {\n    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.068), 0 6.7px 5.3px rgba(0, 0, 0, 0.096),\n      0 12.5px 10px rgba(0, 0, 0, 0.12), 0 22.3px 17.9px rgba(0, 0, 0, 0.144), 0 41.8px 33.4px rgba(0, 0, 0, 0.172),\n      0 100px 80px rgba(0, 0, 0, 0.24);\n  }\n"]);return zn=function(){return n},n}function Mn(){var n=Object(r.a)(["\n  z-index: ",";\n  margin-right: 75px;\n"]);return Mn=function(){return n},n}function Cn(){var n=Object(r.a)(["\n    padding-left: 40px;\n    padding-right: 40px;\n  "]);return Cn=function(){return n},n}function Sn(){var n=Object(r.a)(["\n  /* disable margin collapse */\n  display: flex;\n  flex-direction: column;\n  max-width: 1280px;\n  min-height: 100vh;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 16px;\n  padding-right: 16px;\n\n  ","\n"]);return Sn=function(){return n},n}function In(){var n=Object(r.a)(["\n    margin-top: 50px;\n    margin-bottom: 50px;\n  "]);return In=function(){return n},n}function Rn(){var n=Object(r.a)(["\n  margin-top: 25px;\n  margin-bottom: 25px;\n\n  ","\n"]);return Rn=function(){return n},n}var Tn=Object(u.default)(kn)(Rn(),(function(n){return n.theme.mediaWidth.upMedium(In())})),An=Object(u.default)(i.Box)(Sn(),(function(n){return n.theme.mediaWidth.upMedium(Cn())})),Ln=Object(u.default)(i.Box)(Mn(),(function(n){return n.theme.zIndices.appBar})),Bn=Object(u.default)(i.Box)(zn(),(function(n){return n.theme.zIndices.appBar})),Pn=function(n){var e=n.children,t=n.title,r=void 0===t?"Home":t,a=Object(o.a)("(min-width: 1200px)");return c.a.createElement(c.a.Fragment,null,c.a.createElement(An,null,c.a.createElement(Tn,{title:r}),c.a.createElement(i.Flex,{flex:[1,1,1,1,"initial"]},a&&c.a.createElement(Ln,null,c.a.createElement(N,null)),e),!a&&c.a.createElement(Bn,null,c.a.createElement(N,null))))}}}]);
//# sourceMappingURL=10.e75d9654.chunk.js.map