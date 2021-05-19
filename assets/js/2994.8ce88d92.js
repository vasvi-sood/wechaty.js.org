(self.webpackChunk=self.webpackChunk||[]).push([[2994],{6573:function(e,t,n){"use strict";n.d(t,{W:function(){return a}});var r=n(7378);function a(){return r.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},3204:function(e,t,n){"use strict";var r=n(9603),a=n(120),o=n(7378);t.Z=function(e){var t=e.width,n=void 0===t?30:t,l=e.height,c=void 0===l?30:l,i=e.className,s=(0,a.Z)(e,["width","height","className"]);return o.createElement("svg",(0,r.Z)({"aria-label":"Menu",className:i,width:n,height:c,viewBox:"0 0 30 30",role:"img",focusable:"false"},s),o.createElement("title",null,"Menu"),o.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},2994:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ve}});var r=n(7378),a=n(8944),o=n(1787),l=n(9635),c="skipToContent_3wvD";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var s=function(){var e=(0,r.useRef)(null),t=(0,l.TH)();return(0,r.useEffect)((function(){!t.hash&&e.current&&i(e.current)}),[t.pathname]),r.createElement("div",{ref:e},r.createElement("a",{href:"#main",className:c,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},r.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},u=n(4801),m=n(4309),d="announcementBar_2FrG",f="announcementBarClose_QGKR",v="announcementBarContent_1th2",h="announcementBarCloseable_B17v";var g=function(){var e,t=(0,m.Z)(),n=t.isAnnouncementBarClosed,l=t.closeAnnouncementBar,c=(0,u.LU)().announcementBar;if(!c)return null;var i=c.content,s=c.backgroundColor,g=c.textColor,b=c.isCloseable;return!i||b&&n?null:r.createElement("div",{className:d,style:{backgroundColor:s,color:g},role:"banner"},r.createElement("div",{className:(0,a.Z)(v,(e={},e[h]=b,e)),dangerouslySetInnerHTML:{__html:i}}),b?r.createElement("button",{type:"button",className:f,onClick:l,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},b=n(9603),p=n(120),E=n(1542),k=n(353),y=n(8948),Z=n(4142),C=n(5361),w=n(9033);function N(){return r.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var _=n(6573);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var D="Ctrl";var B=r.forwardRef((function(e,t){var n=e.translations,a=void 0===n?{}:n,o=A(e,["translations"]),l=a.buttonText,c=void 0===l?"Search":l,i=a.buttonAriaLabel,s=void 0===i?"Search":i,u=L((0,r.useState)(null),2),m=u[0],d=u[1];return(0,r.useEffect)((function(){"undefined"!=typeof navigator&&d(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":D)}),[]),r.createElement("button",S({type:"button",className:"DocSearch DocSearch-Button","aria-label":s},o,{ref:t}),r.createElement("span",{className:"DocSearch-Button-Container"},r.createElement(_.W,null),r.createElement("span",{className:"DocSearch-Button-Placeholder"},c)),null!==m&&r.createElement("span",{className:"DocSearch-Button-Keys"},r.createElement("span",{className:"DocSearch-Button-Key"},m===D?r.createElement(N,null):m),r.createElement("span",{className:"DocSearch-Button-Key"},"K")))})),T=n(6889);function M(){var e=function(){var e=(0,k.default)().i18n,t=(0,T.useAllDocsData)(),n=(0,T.useActivePluginAndVersion)(),r=(0,u.Oh)(),a=[u.HX].concat(Object.keys(t).map((function(e){var a,o,l=(null==n||null==(a=n.activePlugin)?void 0:a.pluginId)===e?n.activeVersion:void 0,c=r[e],i=t[e].versions.find((function(e){return e.isLast})),s=null!=(o=null!=l?l:c)?o:i;return(0,u.os)(e,s.name)})));return{locale:e.currentLocale,tags:a}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}var x=null;function P(e){var t=e.hit,n=e.children;return r.createElement(Z.Z,{to:t.url},n)}function O(e){var t=e.state,n=e.onClose,a=(0,w.Z)().generateSearchPageLink;return r.createElement(Z.Z,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function U(e){var t,a,c=e.contextualSearch,i=(0,p.Z)(e,["contextualSearch"]),s=(0,k.default)().siteMetadata,u=M(),m=null!=(t=null==(a=i.searchParameters)?void 0:a.facetFilters)?t:[],d=c?[].concat(u,m):m,f=Object.assign({},i.searchParameters,{facetFilters:d}),v=(0,y.C)().withBaseUrl,h=(0,l.k6)(),g=(0,r.useRef)(null),Z=(0,r.useRef)(null),w=(0,r.useState)(!1),N=w[0],_=w[1],S=(0,r.useState)(null),L=S[0],I=S[1],A=(0,r.useCallback)((function(){return x?Promise.resolve():Promise.all([n.e(1596).then(n.bind(n,1596)),Promise.all([n.e(532),n.e(9127)]).then(n.bind(n,9127)),Promise.all([n.e(532),n.e(3729)]).then(n.bind(n,3729))]).then((function(e){var t=e[0].DocSearchModal;x=t}))}),[]),D=(0,r.useCallback)((function(){A().then((function(){g.current=document.createElement("div"),document.body.insertBefore(g.current,document.body.firstChild),_(!0)}))}),[A,_]),T=(0,r.useCallback)((function(){_(!1),g.current.remove()}),[_]),U=(0,r.useCallback)((function(e){A().then((function(){_(!0),I(e.key)}))}),[A,_,I]),R=(0,r.useRef)({navigate:function(e){var t=e.itemUrl;h.push(t)}}).current,V=(0,r.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:v(""+t.pathname+t.hash)})}))})).current,H=(0,r.useMemo)((function(){return function(e){return r.createElement(O,(0,b.Z)({},e,{onClose:T}))}}),[T]),j=(0,r.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",s.docusaurusVersion),e}),[s.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,o=e.onInput,l=e.searchButtonRef;r.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),l&&l.current===document.activeElement&&o&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&o(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,o,l])}({isOpen:N,onOpen:D,onClose:T,onInput:U,searchButtonRef:Z});var W=(0,o.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return r.createElement(r.Fragment,null,r.createElement(C.Z,null,r.createElement("link",{rel:"preconnect",href:"https://"+i.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),r.createElement(B,{onTouchStart:A,onFocus:A,onMouseOver:A,onClick:D,ref:Z,translations:{buttonText:W,buttonAriaLabel:W}}),N&&(0,E.createPortal)(r.createElement(x,(0,b.Z)({onClose:T,initialScrollY:window.scrollY,initialQuery:L,navigator:R,transformItems:V,hitComponent:P,resultsFooterComponent:H,transformSearchClient:j},i,{searchParameters:f})),g.current))}var R=function(){var e=(0,k.default)().siteConfig;return r.createElement(U,e.themeConfig.algolia)},V={toggle:"toggle_2wFP"},H=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(V.toggle,V.dark),style:n},t)},j=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(V.toggle,V.light),style:n},t)},W=(0,r.memo)((function(e){var t=e.className,n=e.icons,o=e.checked,l=e.disabled,c=e.onChange,i=(0,r.useState)(o),s=i[0],u=i[1],m=(0,r.useState)(!1),d=m[0],f=m[1],v=(0,r.useRef)(null);return r.createElement("div",{className:(0,a.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":l}),role:"button",tabIndex:-1,onClick:function(e){var t=v.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void u(null==t?void 0:t.checked)}},r.createElement("div",{className:"react-toggle-track"},r.createElement("div",{className:"react-toggle-track-check"},n.checked),r.createElement("div",{className:"react-toggle-track-x"},n.unchecked)),r.createElement("div",{className:"react-toggle-thumb"}),r.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}}))}));function K(e){var t=(0,u.LU)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,o=t.lightIcon,l=t.lightIconStyle,c=(0,k.default)().isClient;return r.createElement(W,(0,b.Z)({disabled:!c,icons:{checked:r.createElement(H,{icon:n,style:a}),unchecked:r.createElement(j,{icon:o,style:l})}},e))}var z=n(9237),F=n(5135),q=function(e){var t=(0,l.TH)(),n=(0,r.useState)(e),a=n[0],o=n[1],c=(0,r.useRef)(!1),i=(0,r.useState)(0),s=i[0],u=i[1],m=(0,r.useCallback)((function(e){null!==e&&u(e.getBoundingClientRect().height)}),[]);return(0,F.Z)((function(t,n){var r=t.scrollY,a=n.scrollY;if(e)if(r<s)o(!0);else{if(c.current)return c.current=!1,void o(!1);a&&0===r&&o(!0);var l=document.documentElement.scrollHeight-s,i=window.innerHeight;a&&r>=a?o(!1):r+i<l&&o(!0)}}),[s,c]),(0,r.useEffect)((function(){e&&o(!0)}),[t.pathname]),(0,r.useEffect)((function(){e&&t.hash&&(c.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:a}},G=n(1080),X=n(8245),Y=n(9970),Q=function(e){var t=e.width,n=void 0===t?20:t,a=e.height,o=void 0===a?20:a,l=(0,p.Z)(e,["width","height"]);return r.createElement("svg",(0,b.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:n,height:o},l),r.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};function J(e){var t=e.mobile,n=e.dropdownItemsBefore,a=e.dropdownItemsAfter,o=(0,p.Z)(e,["mobile","dropdownItemsBefore","dropdownItemsAfter"]),l=(0,k.default)().i18n,c=l.currentLocale,i=l.locales,s=l.localeConfigs,m=(0,u.l5)();function d(e){return s[e].label}var f=i.map((function(e){var t="pathname://"+m.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:d(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===c?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),v=[].concat(n,f,a),h=t?"Languages":d(c);return r.createElement(Y.Z,(0,b.Z)({},o,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(Q,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.createElement("span",null,h)),items:v}))}var $="searchWrapper_36Ie";function ee(e){return e.mobile?null:r.createElement("div",{className:$},r.createElement(R,null))}var te={default:function(){return Y.Z},localeDropdown:function(){return J},search:function(){return ee},docsVersion:function(){return n(1393).Z},docsVersionDropdown:function(){return n(8259).Z},doc:function(){return n(5807).Z}};function ne(e){var t=e.type,n=(0,p.Z)(e,["type"]),a=function(e){void 0===e&&(e="default");var t=te[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.createElement(a,n)}var re=n(3059),ae=n(3204),oe="displayOnlyInLargeViewport_2XYw",le="navbarHideable_z9Sw",ce="navbarHidden_2kTK",ie="right";var se=function(){var e,t=(0,u.LU)(),n=t.navbar,o=n.items,l=n.hideOnScroll,c=n.style,i=t.colorMode.disableSwitch,s=(0,r.useState)(!1),m=s[0],d=s[1],f=(0,z.Z)(),v=f.isDarkTheme,h=f.setLightTheme,g=f.setDarkTheme,p=q(l),E=p.navbarRef,k=p.isNavbarVisible;(0,G.Z)(m);var y=(0,r.useCallback)((function(){d(!0)}),[d]),Z=(0,r.useCallback)((function(){d(!1)}),[d]),C=(0,r.useCallback)((function(e){return e.target.checked?g():h()}),[h,g]),w=(0,X.Z)();(0,r.useEffect)((function(){w===X.D.desktop&&d(!1)}),[w]);var N=o.some((function(e){return"search"===e.type})),_=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:ie)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:ie)}))}}(o),S=_.leftItems,L=_.rightItems;return r.createElement("nav",{ref:E,className:(0,a.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===c,"navbar--primary":"primary"===c,"navbar-sidebar--show":m},e[le]=l,e[ce]=l&&!k,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},null!=o&&0!==o.length&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:y,onKeyDown:y},r.createElement(ae.Z,null)),r.createElement(re.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:(0,a.Z)("navbar__title")}),S.map((function(e,t){return r.createElement(ne,(0,b.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},L.map((function(e,t){return r.createElement(ne,(0,b.Z)({},e,{key:t}))})),!i&&r.createElement(K,{className:oe,checked:v,onChange:C}),!N&&r.createElement(R,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:Z}),r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(re.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:Z}),!i&&m&&r.createElement(K,{checked:v,onChange:C})),r.createElement("div",{className:"navbar-sidebar__items"},r.createElement("div",{className:"menu"},r.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.createElement(ne,(0,b.Z)({mobile:!0},e,{onClick:Z,key:t}))})))))))},ue="footerLogoLink_1gX9",me=n(8167);function de(e){var t=e.to,n=e.href,a=e.label,o=e.prependBaseUrlToHref,l=(0,p.Z)(e,["to","href","label","prependBaseUrlToHref"]),c=(0,y.Z)(t),i=(0,y.Z)(n,{forcePrependBaseUrl:!0});return r.createElement(Z.Z,(0,b.Z)({className:"footer__link-item"},n?{href:o?i:n}:{to:c},l),a)}var fe=function(e){var t=e.sources,n=e.alt;return r.createElement(me.Z,{className:"footer__logo",alt:n,sources:t})};var ve=function(){var e=(0,u.LU)().footer,t=e||{},n=t.copyright,o=t.links,l=void 0===o?[]:o,c=t.logo,i=void 0===c?{}:c,s={light:(0,y.Z)(i.src),dark:(0,y.Z)(i.srcDark||i.src)};return e?r.createElement("footer",{className:(0,a.Z)("footer",{"footer--dark":"dark"===e.style})},r.createElement("div",{className:"container"},l&&l.length>0&&r.createElement("div",{className:"row footer__links"},l.map((function(e,t){return r.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.createElement("li",{key:e.href||e.to,className:"footer__item"},r.createElement(de,e))}))):null)}))),(i||n)&&r.createElement("div",{className:"footer__bottom text--center"},i&&(i.src||i.srcDark)&&r.createElement("div",{className:"margin-bottom--sm"},i.href?r.createElement(Z.Z,{href:i.href,className:ue},r.createElement(fe,{alt:i.alt,sources:s})):r.createElement(fe,{alt:i.alt,sources:s})),n?r.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},he=n(161),ge=(0,u.WA)("theme"),be="light",pe="dark",Ee=function(e){return e===pe?pe:be},ke=function(e){(0,u.WA)("theme").set(Ee(e))},ye=function(){var e=(0,u.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,o=(0,r.useState)(function(e){return he.Z.canUseDOM?Ee(document.documentElement.getAttribute("data-theme")):Ee(e)}(t)),l=o[0],c=o[1],i=(0,r.useCallback)((function(){c(be),ke(be)}),[]),s=(0,r.useCallback)((function(){c(pe),ke(pe)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",Ee(l))}),[l]),(0,r.useEffect)((function(){if(!n)try{var e=ge.get();null!==e&&c(Ee(e))}catch(t){console.error(t)}}),[c]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?pe:be)}))}),[]),{isDarkTheme:l===pe,setLightTheme:i,setDarkTheme:s}},Ze=n(579);var Ce=function(e){var t=ye(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.createElement(Ze.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)};function we(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ne(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return we(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?we(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var _e="docusaurus.tab.",Se=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,u.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{for(var e,t={},r=Ne((0,u._f)());!(e=r()).done;){var a=e.value;if(a.startsWith(_e))t[a.substring(_e.length)]=(0,u.WA)(a).get()}n(t)}catch(o){console.error(o)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},Le=(0,u.WA)("docusaurus.announcement.dismiss"),Ie=(0,u.WA)("docusaurus.announcement.id"),Ae=function(){var e=(0,u.LU)().announcementBar,t=(0,r.useState)(!0),n=t[0],a=t[1],o=(0,r.useCallback)((function(){Le.set("true"),a(!0)}),[]);return(0,r.useEffect)((function(){if(e){var t=e.id,n=Ie.get();"annoucement-bar"===n&&(n="announcement-bar");var r=t!==n;Ie.set(t),r&&Le.set("false"),(r||"false"===Le.get())&&a(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:o}},De=n(4956);var Be=function(e){var t=Se(),n=t.tabGroupChoices,a=t.setTabGroupChoices,o=Ae(),l=o.isAnnouncementBarClosed,c=o.closeAnnouncementBar;return r.createElement(De.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:l,closeAnnouncementBar:c}},e.children)};function Te(e){var t=e.children;return r.createElement(Ce,null,r.createElement(Be,null,r.createElement(u.L5,null,t)))}function Me(e){var t=e.locale,n=e.version,a=e.tag,o=t;return r.createElement(C.Z,null,o&&r.createElement("meta",{name:"docsearch:language",content:o}),n&&r.createElement("meta",{name:"docsearch:version",content:n}),a&&r.createElement("meta",{name:"docsearch:docusaurus_tag",content:a}))}var xe=n(1956);function Pe(){var e=(0,k.default)().i18n,t=e.defaultLocale,n=e.locales,a=(0,u.l5)();return r.createElement(C.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function Oe(e){var t=e.permalink,n=(0,k.default)().siteConfig.url,a=function(){var e=(0,k.default)().siteConfig.url,t=(0,l.TH)().pathname;return e+(0,y.Z)(t)}(),o=t?""+n+t:a;return r.createElement(C.Z,null,r.createElement("meta",{property:"og:url",content:o}),r.createElement("link",{rel:"canonical",href:o}))}function Ue(e){var t=(0,k.default)(),n=t.siteConfig,a=n.favicon,o=n.themeConfig.metadatas,l=t.i18n,c=l.currentLocale,i=l.localeConfigs,s=e.title,m=e.description,d=e.image,f=e.keywords,v=e.searchMetadatas,h=(0,y.Z)(a),g=(0,u.pe)(s),p=c,E=i[c].direction;return r.createElement(r.Fragment,null,r.createElement(C.Z,null,r.createElement("html",{lang:p,dir:E}),a&&r.createElement("link",{rel:"shortcut icon",href:h}),r.createElement("title",null,g),r.createElement("meta",{property:"og:title",content:g})),r.createElement(xe.Z,{description:m,keywords:f,image:d}),r.createElement(Oe,null),r.createElement(Pe,null),r.createElement(Me,(0,b.Z)({tag:u.HX,locale:c},v)),r.createElement(C.Z,null,o.map((function(e,t){return r.createElement("meta",(0,b.Z)({key:"metadata_"+t},e))}))))}var Re=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var Ve=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,l=e.pageClassName;return Re(),r.createElement(Te,null,r.createElement(Ue,e),r.createElement(s,null),r.createElement(g,null),r.createElement(se,null),r.createElement("div",{className:(0,a.Z)(u.kM.wrapper.main,o,l)},t),!n&&r.createElement(ve,null))}},3059:function(e,t,n){"use strict";var r=n(9603),a=n(120),o=n(7378),l=n(4142),c=n(8167),i=n(8948),s=n(353),u=n(4801);t.Z=function(e){var t=(0,s.default)().isClient,n=(0,u.LU)().navbar,m=n.title,d=n.logo,f=void 0===d?{src:""}:d,v=e.imageClassName,h=e.titleClassName,g=(0,a.Z)(e,["imageClassName","titleClassName"]),b=(0,i.Z)(f.href||"/"),p={light:(0,i.Z)(f.src),dark:(0,i.Z)(f.srcDark||f.src)};return o.createElement(l.Z,(0,r.Z)({to:b},g,f.target&&{target:f.target}),f.src&&o.createElement(c.Z,{key:t,className:v,sources:p,alt:f.alt||m||"Logo"}),null!=m&&o.createElement("strong",{className:h},m))}},9970:function(e,t,n){"use strict";var r=n(9603),a=n(120),o=n(7378),l=n(8944),c=n(4142),i=n(8948),s=n(9635),u=n(4801);function m(e){var t=e.activeBasePath,n=e.activeBaseRegex,l=e.to,s=e.href,u=e.label,m=e.activeClassName,d=void 0===m?"navbar__link--active":m,f=e.prependBaseUrlToHref,v=(0,a.Z)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),h=(0,i.Z)(l),g=(0,i.Z)(t),b=(0,i.Z)(s,{forcePrependBaseUrl:!0});return o.createElement(c.Z,(0,r.Z)({},s?{href:f?b:s}:Object.assign({isNavLink:!0,activeClassName:d,to:h},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(g)}}:null),v),u)}function d(e){var t,n=e.items,c=e.position,i=e.className,s=(0,a.Z)(e,["items","position","className"]),u=(0,o.useRef)(null),d=(0,o.useRef)(null),f=(0,o.useState)(!1),v=f[0],h=f[1];(0,o.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&h(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var g=function(e,t){return void 0===t&&(t=!1),(0,l.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?o.createElement("div",{ref:u,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===c,"dropdown--right":"right"===c,"dropdown--show":v})},o.createElement(m,(0,r.Z)({className:g(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),h(!v))}}),null!=(t=s.children)?t:s.label),o.createElement("ul",{ref:d,className:"dropdown__menu"},n.map((function(e,t){var l=e.className,c=(0,a.Z)(e,["className"]);return o.createElement("li",{key:t},o.createElement(m,(0,r.Z)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),h(!1);var r=u.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active",className:g(l,!0)},c)))})))):o.createElement(m,(0,r.Z)({className:g(i)},s))}function f(e){var t,n,c,i=e.items,d=e.className,f=(e.position,(0,a.Z)(e,["items","className","position"])),v=(0,o.useRef)(null),h=(0,s.TH)().pathname,g=(0,o.useState)((function(){var e;return null==(e=!(null!=i&&i.some((function(e){return(0,u.Mg)(e.to,h)}))))||e})),b=g[0],p=g[1],E=function(e,t){return void 0===t&&(t=!1),(0,l.Z)("menu__link",{"menu__link--sublist":t},e)};if(!i)return o.createElement("li",{className:"menu__list-item"},o.createElement(m,(0,r.Z)({className:E(d)},f)));var k=null!=(t=v.current)&&t.scrollHeight?(null==(n=v.current)?void 0:n.scrollHeight)+"px":void 0;return o.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":b})},o.createElement(m,(0,r.Z)({role:"button",className:E(d,!0)},f,{onClick:function(e){e.preventDefault(),p((function(e){return!e}))}}),null!=(c=f.children)?c:f.label),o.createElement("ul",{className:"menu__list",ref:v,style:{height:b?void 0:k}},i.map((function(e,t){var n=e.className,l=(0,a.Z)(e,["className"]);return o.createElement("li",{className:"menu__list-item",key:t},o.createElement(m,(0,r.Z)({activeClassName:"menu__link--active",className:E(n)},l,{onClick:f.onClick})))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,["mobile"]),l=n?f:d;return o.createElement(l,r)}},5807:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(9603),a=n(120),o=n(7378),l=n(9970),c=n(6889),i=n(8944),s=n(4801);function u(e){var t,n,u=e.docId,m=e.activeSidebarClassName,d=e.label,f=e.docsPluginId,v=(0,a.Z)(e,["docId","activeSidebarClassName","label","docsPluginId"]),h=(0,c.useActiveDocContext)(f),g=h.activeVersion,b=h.activeDoc,p=(0,s.J)(f).preferredVersion,E=(0,c.useLatestVersion)(f),k=null!=(t=null!=g?g:p)?t:E,y=k.docs.find((function(e){return e.id===u}));if(!y){var Z=k.docs.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id="+u+" in version "+k.name+".\nAvailable docIds=\n- "+Z)}return o.createElement(l.Z,(0,r.Z)({exact:!0},v,{className:(0,i.Z)(v.className,(n={},n[m]=b&&b.sidebar===y.sidebar,n)),label:null!=d?d:y.id,to:y.path}))}},8259:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(9603),a=n(120),o=n(7378),l=n(9970),c=n(6889),i=n(4801),s=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function u(e){var t,n,u=e.mobile,m=e.docsPluginId,d=e.dropdownActiveClassDisabled,f=e.dropdownItemsBefore,v=e.dropdownItemsAfter,h=(0,a.Z)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),g=(0,c.useActiveDocContext)(m),b=(0,c.useVersions)(m),p=(0,c.useLatestVersion)(m),E=(0,i.J)(m),k=E.preferredVersion,y=E.savePreferredVersionName;var Z=null!=(t=null!=(n=g.activeVersion)?n:k)?t:p,C=u?"Versions":Z.label,w=u?void 0:s(Z).path;return o.createElement(l.Z,(0,r.Z)({},h,{mobile:u,label:C,to:w,items:function(){var e=b.map((function(e){var t=(null==g?void 0:g.alternateDocVersions[e.name])||s(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==g?void 0:g.activeVersion)},onClick:function(){y(e.name)}}})),t=[].concat(f,e,v);if(!(t.length<=1))return t}(),isActive:d?function(){return!1}:void 0}))}},1393:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(9603),a=n(120),o=n(7378),l=n(9970),c=n(6889),i=n(4801);function s(e){var t,n=e.label,s=e.to,u=e.docsPluginId,m=(0,a.Z)(e,["label","to","docsPluginId"]),d=(0,c.useActiveVersion)(u),f=(0,i.J)(u).preferredVersion,v=(0,c.useLatestVersion)(u),h=null!=(t=null!=d?d:f)?t:v,g=null!=n?n:h.label,b=null!=s?s:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(h).path;return o.createElement(l.Z,(0,r.Z)({},m,{label:g,to:b}))}},579:function(e,t,n){"use strict";var r=n(7378).createContext(void 0);t.Z=r},8167:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(9603),a=n(120),o=n(7378),l=n(8944),c=n(353),i=n(9237),s={themedImage:"themedImage_Ir0T","themedImage--light":"themedImage--light_2_E0","themedImage--dark":"themedImage--dark_2JiM"},u=function(e){var t=(0,c.default)().isClient,n=(0,i.Z)().isDarkTheme,u=e.sources,m=e.className,d=e.alt,f=void 0===d?"":d,v=(0,a.Z)(e,["sources","className","alt"]),h=t?n?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,h.map((function(e){return o.createElement("img",(0,r.Z)({key:e,src:u[e],alt:f,className:(0,l.Z)(s.themedImage,s["themedImage--"+e],m)},v))})))}},4956:function(e,t,n){"use strict";var r=(0,n(7378).createContext)(void 0);t.Z=r},1080:function(e,t,n){"use strict";var r=n(7378);t.Z=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},5135:function(e,t,n){"use strict";var r=n(7378),a=n(161),o=function(){return{scrollX:a.Z.canUseDOM?window.pageXOffset:0,scrollY:a.Z.canUseDOM?window.pageYOffset:0}};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,r.useRef)(o()),a=function(){var t=o();e&&e(t,n.current),n.current=t};(0,r.useEffect)((function(){var e={passive:!0};return a(),window.addEventListener("scroll",a,e),function(){return window.removeEventListener("scroll",a,e)}}),t)}},9237:function(e,t,n){"use strict";var r=n(7378),a=n(579);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},4309:function(e,t,n){"use strict";var r=n(7378),a=n(4956);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},8245:function(e,t,n){"use strict";n.d(t,{D:function(){return o}});var r=n(7378),a=n(161),o={desktop:"desktop",mobile:"mobile"};t.Z=function(){var e=a.Z.canUseDOM;function t(){if(e)return window.innerWidth>996?o.desktop:o.mobile}var n=(0,r.useState)(t),l=n[0],c=n[1];return(0,r.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){c(t())}}),[]),l}},9033:function(e,t,n){"use strict";var r=n(9635),a=n(161),o=n(353);t.Z=function(){var e=(0,r.k6)(),t=(0,r.TH)(),n=(0,o.default)().siteConfig,l=(n=void 0===n?{}:n).baseUrl;return{searchValue:a.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var r=new URLSearchParams(t.search);n?r.set("q",n):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:function(e){return l+"search?q="+encodeURIComponent(e)}}}}}]);