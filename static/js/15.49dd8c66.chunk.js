(window["webpackJsonpunasus-infographic"]=window["webpackJsonpunasus-infographic"]||[]).push([[15],{100:function(e,t,n){"use strict";var r=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),i=(0,r(n(49)).default)(o.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=i},206:function(e,t,n){"use strict";var r=n(32),o=n(1),i=(n(4),n(77));var a=function(e,t){return t?Object(i.a)(e,t,{clone:!1}):e};var c=function(e){var t=function(t){var n=e(t);return t.css?Object(o.a)({},a(n,e(Object(o.a)({theme:t.theme},t.css))),{},function(e,t){var n={};return Object.keys(e).forEach(function(r){-1===t.indexOf(r)&&(n[r]=e[r])}),n}(t.css,[e.filterProps])):n};return t.propTypes={},t.filterProps=["css"].concat(Object(r.a)(e.filterProps)),t};var u=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=function(e){return t.reduce(function(t,n){var r=n(e);return r?a(t,r):t},{})};return r.propTypes={},r.filterProps=t.reduce(function(e,t){return e.concat(t.filterProps)},[]),r},l=n(15),s=n(23),f={xs:0,sm:600,md:960,lg:1280,xl:1920},p={keys:["xs","sm","md","lg","xl"],up:function(e){return"@media (min-width:".concat(f[e],"px)")}};function d(e,t,n){if(Array.isArray(t)){var r=e.theme.breakpoints||p;return t.reduce(function(e,o,i){return e[r.up(r.keys[i])]=n(t[i]),e},{})}if("object"===Object(s.a)(t)){var o=e.theme.breakpoints||p;return Object.keys(t).reduce(function(e,r){return e[o.up(r)]=n(t[r]),e},{})}return n(t)}function m(e,t){return t&&"string"===typeof t?t.split(".").reduce(function(e,t){return e&&e[t]?e[t]:null},e):null}var h=function(e){var t=e.prop,n=e.cssProperty,r=void 0===n?e.prop:n,o=e.themeKey,i=e.transform,a=function(e){if(null==e[t])return null;var n=e[t],a=m(e.theme,o)||{};return d(e,n,function(e){var t;return"function"===typeof a?t=a(e):Array.isArray(a)?t=a[e]||e:(t=m(a,e)||e,i&&(t=i(t))),!1===r?t:Object(l.a)({},r,t)})};return a.propTypes={},a.filterProps=[t],a};function v(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var y=u(h({prop:"border",themeKey:"borders",transform:v}),h({prop:"borderTop",themeKey:"borders",transform:v}),h({prop:"borderRight",themeKey:"borders",transform:v}),h({prop:"borderBottom",themeKey:"borders",transform:v}),h({prop:"borderLeft",themeKey:"borders",transform:v}),h({prop:"borderColor",themeKey:"palette"}),h({prop:"borderRadius",themeKey:"shape"})),b=u(h({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),h({prop:"display"}),h({prop:"overflow"}),h({prop:"textOverflow"}),h({prop:"visibility"}),h({prop:"whiteSpace"})),g=u(h({prop:"flexBasis"}),h({prop:"flexDirection"}),h({prop:"flexWrap"}),h({prop:"justifyContent"}),h({prop:"alignItems"}),h({prop:"alignContent"}),h({prop:"order"}),h({prop:"flex"}),h({prop:"flexGrow"}),h({prop:"flexShrink"}),h({prop:"alignSelf"}),h({prop:"justifyItems"}),h({prop:"justifySelf"})),E=u(h({prop:"position"}),h({prop:"zIndex",themeKey:"zIndex"}),h({prop:"top"}),h({prop:"right"}),h({prop:"bottom"}),h({prop:"left"})),x=u(h({prop:"color",themeKey:"palette"}),h({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),w=h({prop:"boxShadow",themeKey:"shadows"});function k(e){return e<=1?"".concat(100*e,"%"):e}var O=h({prop:"width",transform:k}),j=h({prop:"maxWidth",transform:k}),R=h({prop:"minWidth",transform:k}),P=h({prop:"height",transform:k}),A=h({prop:"maxHeight",transform:k}),C=h({prop:"minHeight",transform:k}),T=(h({prop:"size",cssProperty:"width",transform:k}),h({prop:"size",cssProperty:"height",transform:k}),u(O,j,R,P,A,C)),S=n(95);var K=n(96);function I(e,t){return Object(S.a)(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||Object(K.a)()}var L={m:"margin",p:"padding"},N={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},B={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},M=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}(function(e){if(e.length>2){if(!B[e])return[e];e=B[e]}var t=I(e.split(""),2),n=t[0],r=t[1],o=L[n],i=N[r]||"";return Array.isArray(i)?i.map(function(e){return o+e}):[o+i]}),F=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function D(e,t){return function(n){return e.reduce(function(e,r){return e[r]=function(e,t){if("string"===typeof t)return t;var n=e(Math.abs(t));return t>=0?n:"number"===typeof n?-n:"-".concat(n)}(t,n),e},{})}}function z(e){var t=function(e){var t=e.spacing||8;return"number"===typeof t?function(e){return t*e}:Array.isArray(t)?function(e){return t[e]}:"function"===typeof t?t:function(){}}(e.theme);return Object.keys(e).map(function(n){if(-1===F.indexOf(n))return null;var r=D(M(n),t),o=e[n];return d(e,o,r)}).reduce(a,{})}z.propTypes={},z.filterProps=F;var W=z,H=u(h({prop:"fontFamily",themeKey:"typography"}),h({prop:"fontSize",themeKey:"typography"}),h({prop:"fontStyle",themeKey:"typography"}),h({prop:"fontWeight",themeKey:"typography"}),h({prop:"letterSpacing"}),h({prop:"lineHeight"}),h({prop:"textAlign"})),Y=n(3),X=n(0),V=n.n(X),J=n(12),_=n(34),q=n.n(_),G=n(81);function Q(e,t){var n={};return Object.keys(e).forEach(function(r){-1===t.indexOf(r)&&(n[r]=e[r])}),n}var U=function(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.name,i=Object(Y.a)(n,["name"]);var a,c=r,u="function"===typeof t?function(e){return{root:function(n){return t(Object(o.a)({theme:e},n))}}}:{root:t},l=Object(G.a)(u,Object(o.a)({Component:e,name:r||e.displayName,classNamePrefix:c},i));t.filterProps&&(a=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var s=V.a.forwardRef(function(t,n){var r=t.children,i=t.className,c=t.clone,u=t.component,s=Object(Y.a)(t,["children","className","clone","component"]),f=l(t),p=Object(J.a)(f.root,i),d=s;if(a&&(d=Q(d,a)),c)return V.a.cloneElement(r,Object(o.a)({className:Object(J.a)(r.props.className,p)},d));if("function"===typeof r)return r(Object(o.a)({className:p},d));var m=u||e;return V.a.createElement(m,Object(o.a)({ref:n,className:p},d),r)});return q()(s,e),s}},Z=n(17),$=function(e){var t=U(e);return function(e,n){return t(e,Object(o.a)({defaultTheme:Z.a},n))}},ee=c(u(y,b,g,E,x,w,T,W,H)),te=$("div")(ee,{name:"MuiBox"});t.a=te},208:function(e,t,n){"use strict";var r=n(3),o=n(1),i=n(0),a=n.n(i),c=n(33),u=n.n(c),l=(n(4),n(65)),s=n(78);var f=function(e){return e&&e.ownerDocument||document};function p(e,t){"function"===typeof e?e(t):e&&(e.current=t)}function d(e,t){return a.a.useMemo(function(){return null==e&&null==t?null:function(n){p(e,n),p(t,n)}},[e,t])}var m="undefined"!==typeof window?a.a.useLayoutEffect:a.a.useEffect;var h=a.a.forwardRef(function(e,t){var n=e.children,r=e.container,o=e.disablePortal,i=void 0!==o&&o,c=e.onRendered,l=a.a.useState(null),s=l[0],f=l[1],h=d(a.a.isValidElement(n)?n.ref:null,t);return m(function(){i||f(function(e){return e="function"===typeof e?e():e,u.a.findDOMNode(e)}(r)||document.body)},[r,i]),m(function(){if(s&&!i)return p(t,s),function(){p(t,null)}},[t,s,i]),m(function(){c&&(s||i)&&c()},[c,s,i]),i?a.a.isValidElement(n)?a.a.cloneElement(n,{ref:h}):n:s?u.a.createPortal(n,s):s});function v(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(function(e,t){return null==t?e:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e.apply(this,r),t.apply(this,r)}},function(){})}var y="undefined"!==typeof window?a.a.useLayoutEffect:a.a.useEffect;function b(e){var t=a.a.useRef(e);return y(function(){t.current=e}),a.a.useCallback(function(){return t.current.apply(void 0,arguments)},[])}var g=n(38);var E=n(19),x=n(32);var w=function(){var e=document.createElement("div");e.style.width="99px",e.style.height="99px",e.style.position="absolute",e.style.top="-9999px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t};var k=function(e){return f(e).defaultView||window};function O(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function j(e){return parseInt(window.getComputedStyle(e)["padding-right"],10)||0}function R(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=[t,n].concat(Object(x.a)(r)),a=["TEMPLATE","SCRIPT","STYLE"];[].forEach.call(e.children,function(e){1===e.nodeType&&-1===i.indexOf(e)&&-1===a.indexOf(e.tagName)&&O(e,o)})}function P(e,t){var n=-1;return e.some(function(e,r){return!!t(e)&&(n=r,!0)}),n}function A(e,t){var n,r=[],o=[],i=e.container;if(!t.disableScrollLock){if(function(e){var t=f(e);return t.body===e?k(t).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(i)){var a=w();r.push({value:i.style.paddingRight,key:"padding-right",el:i}),i.style["padding-right"]="".concat(j(i)+a,"px"),n=f(i).querySelectorAll(".mui-fixed"),[].forEach.call(n,function(e){o.push(e.style.paddingRight),e.style.paddingRight="".concat(j(e)+a,"px")})}var c=i.parentElement,u="HTML"===c.nodeName&&"scroll"===window.getComputedStyle(c)["overflow-y"]?c:i;r.push({value:u.style.overflow,key:"overflow",el:u}),u.style.overflow="hidden"}return function(){n&&[].forEach.call(n,function(e,t){o[t]?e.style.paddingRight=o[t]:e.style.removeProperty("padding-right")}),r.forEach(function(e){var t=e.value,n=e.el,r=e.key;t?n.style.setProperty(r,t):n.style.removeProperty(r)})}}var C=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.modals=[],this.containers=[]}return Object(E.a)(e,[{key:"add",value:function(e,t){var n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&O(e.modalRef,!1);var r=function(e){var t=[];return[].forEach.call(e.children,function(e){e.getAttribute&&"true"===e.getAttribute("aria-hidden")&&t.push(e)}),t}(t);R(t,e.mountNode,e.modalRef,r,!0);var o=P(this.containers,function(e){return e.container===t});return-1!==o?(this.containers[o].modals.push(e),n):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblingNodes:r}),n)}},{key:"mount",value:function(e,t){var n=P(this.containers,function(t){return-1!==t.modals.indexOf(e)}),r=this.containers[n];r.restore||(r.restore=A(r,t))}},{key:"remove",value:function(e){var t=this.modals.indexOf(e);if(-1===t)return t;var n=P(this.containers,function(t){return-1!==t.modals.indexOf(e)}),r=this.containers[n];if(r.modals.splice(r.modals.indexOf(e),1),this.modals.splice(t,1),0===r.modals.length)r.restore&&r.restore(),e.modalRef&&O(e.modalRef,!0),R(r.container,e.mountNode,e.modalRef,r.hiddenSiblingNodes,!1),this.containers.splice(n,1);else{var o=r.modals[r.modals.length-1];o.modalRef&&O(o.modalRef,!1)}return t}},{key:"isTopModal",value:function(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}]),e}();var T=function(e){var t=e.children,n=e.disableAutoFocus,r=void 0!==n&&n,o=e.disableEnforceFocus,i=void 0!==o&&o,c=e.disableRestoreFocus,l=void 0!==c&&c,s=e.getDoc,p=e.isEnabled,m=e.open,h=a.a.useRef(),v=a.a.useRef(null),y=a.a.useRef(null),b=a.a.useRef(),g=a.a.useRef(null),E=a.a.useCallback(function(e){g.current=u.a.findDOMNode(e)},[]),x=d(t.ref,E);return a.a.useMemo(function(){m&&"undefined"!==typeof window&&(b.current=s().activeElement)},[m]),a.a.useEffect(function(){if(m){var e=f(g.current);r||!g.current||g.current.contains(e.activeElement)||(g.current.hasAttribute("tabIndex")||g.current.setAttribute("tabIndex",-1),g.current.focus());var t=function(){i||!p()||h.current?h.current=!1:g.current&&!g.current.contains(e.activeElement)&&g.current.focus()},n=function(t){!i&&p()&&9===t.keyCode&&e.activeElement===g.current&&(h.current=!0,t.shiftKey?y.current.focus():v.current.focus())};e.addEventListener("focus",t,!0),e.addEventListener("keydown",n,!0);var o=setInterval(function(){t()},50);return function(){clearInterval(o),e.removeEventListener("focus",t,!0),e.removeEventListener("keydown",n,!0),l||(b.current&&b.current.focus&&b.current.focus(),b.current=null)}}},[r,i,l,p,m]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{tabIndex:0,ref:v,"data-test":"sentinelStart"}),a.a.cloneElement(t,{ref:x}),a.a.createElement("div",{tabIndex:0,ref:y,"data-test":"sentinelEnd"}))},S={root:{zIndex:-1,position:"fixed",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",touchAction:"none"},invisible:{backgroundColor:"transparent"}},K=a.a.forwardRef(function(e,t){var n=e.invisible,i=void 0!==n&&n,c=e.open,u=Object(r.a)(e,["invisible","open"]);return c?a.a.createElement("div",Object(o.a)({"aria-hidden":!0,ref:t},u,{style:Object(o.a)({},S.root,{},i?S.invisible:{},{},u.style)})):null});var I=new C,L=a.a.forwardRef(function(e,t){var n=Object(l.a)(),i=Object(s.a)({name:"MuiModal",props:Object(o.a)({},e),theme:n}),c=i.BackdropComponent,p=void 0===c?K:c,m=i.BackdropProps,y=i.children,E=i.closeAfterTransition,x=void 0!==E&&E,w=i.container,k=i.disableAutoFocus,j=void 0!==k&&k,R=i.disableBackdropClick,P=void 0!==R&&R,A=i.disableEnforceFocus,C=void 0!==A&&A,S=i.disableEscapeKeyDown,L=void 0!==S&&S,N=i.disablePortal,B=void 0!==N&&N,M=i.disableRestoreFocus,F=void 0!==M&&M,D=i.disableScrollLock,z=void 0!==D&&D,W=i.hideBackdrop,H=void 0!==W&&W,Y=i.keepMounted,X=void 0!==Y&&Y,V=i.manager,J=void 0===V?I:V,_=i.onBackdropClick,q=i.onClose,G=i.onEscapeKeyDown,Q=i.onRendered,U=i.open,Z=Object(r.a)(i,["BackdropComponent","BackdropProps","children","closeAfterTransition","container","disableAutoFocus","disableBackdropClick","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onEscapeKeyDown","onRendered","open"]),$=a.a.useState(!0),ee=$[0],te=$[1],ne=a.a.useRef({}),re=a.a.useRef(null),oe=a.a.useRef(null),ie=d(oe,t),ae=function(e){return!!e.children&&e.children.props.hasOwnProperty("in")}(i),ce=function(){return f(re.current)},ue=function(){return ne.current.modalRef=oe.current,ne.current.mountNode=re.current,ne.current},le=function(){J.mount(ue(),{disableScrollLock:z}),oe.current.scrollTop=0},se=b(function(){var e=function(e){return e="function"===typeof e?e():e,u.a.findDOMNode(e)}(w)||ce().body;J.add(ue(),e),oe.current&&le()}),fe=a.a.useCallback(function(){return J.isTopModal(ue())},[J]),pe=b(function(e){re.current=e,e&&(Q&&Q(),U&&fe()?le():O(oe.current,!0))}),de=a.a.useCallback(function(){J.remove(ue())},[J]);if(a.a.useEffect(function(){return function(){de()}},[de]),a.a.useEffect(function(){U?se():ae&&x||de()},[U,de,ae,x,se]),!X&&!U&&(!ae||ee))return null;var me=function(e){return{root:{position:"fixed",zIndex:e.zIndex.modal,right:0,bottom:0,top:0,left:0},hidden:{visibility:"hidden"}}}(n||{zIndex:g.a}),he={};return void 0===y.props.tabIndex&&(he.tabIndex=y.props.tabIndex||"-1"),ae&&(he.onEnter=v(function(){te(!1)},y.props.onEnter),he.onExited=v(function(){te(!0),x&&de()},y.props.onExited)),a.a.createElement(h,{ref:pe,container:w,disablePortal:B},a.a.createElement("div",Object(o.a)({ref:ie,onKeyDown:function(e){"Escape"===e.key&&fe()&&(e.stopPropagation(),G&&G(e),!L&&q&&q(e,"escapeKeyDown"))},role:"presentation"},Z,{style:Object(o.a)({},me.root,{},!U&&ee?me.hidden:{},{},Z.style)}),H?null:a.a.createElement(p,Object(o.a)({open:U,onClick:function(e){e.target===e.currentTarget&&(_&&_(e),!P&&q&&q(e,"backdropClick"))}},m)),a.a.createElement(T,{disableEnforceFocus:C,disableAutoFocus:j,disableRestoreFocus:F,getDoc:ce,isEnabled:fe,open:U},a.a.cloneElement(y,he))))});t.a=L},95:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",function(){return r})},96:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}n.d(t,"a",function(){return r})}}]);
//# sourceMappingURL=15.49dd8c66.chunk.js.map