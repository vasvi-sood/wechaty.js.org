(self.webpackChunk=self.webpackChunk||[]).push([[4562],{5318:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(7378);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),l=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),f=l(n),d=o,y=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(y,s(s({ref:e},u),{},{components:n})):r.createElement(y,s({ref:e},u))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,s=new Array(a);s[0]=f;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:o,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3171:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return i},default:function(){return u}});var r=n(9603),o=n(120),a=(n(7378),n(5318)),s={},c={unversionedId:"polyglot/dotnet/transclusions/shortest-chatbot",id:"polyglot/dotnet/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`csharp",source:"@site/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/dotnet/transclusions",slug:"/polyglot/dotnet/transclusions/shortest-chatbot",permalink:"/docs/polyglot/dotnet/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1621426354,formattedLastUpdatedAt:"5/19/2021",frontMatter:{}},i=[],l={toc:i};function u(t){var e=t.components,n=(0,o.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var wechaty = new Wechaty(options, logger).onScan((qrcode, status) => {\n  Console.WriteLine($"Scan QR Code to login: {status} https://wechaty.js.org/qrcode/{(qrcode)}`");\n}).OnLogin( user => {\n  Console.WriteLine("User {user} logined");\n}).OnMessage( message => {\n  Console.WriteLine($"Message: {message}");\n}).Start();\n')))}u.isMDXComponent=!0}}]);