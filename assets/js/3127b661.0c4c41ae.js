(self.webpackChunk=self.webpackChunk||[]).push([[2076],{5318:function(t,e,n){"use strict";n.d(e,{Zo:function(){return l},kt:function(){return y}});var r=n(7378);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},l=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),f=u(n),y=o,m=f["".concat(i,".").concat(y)]||f[y]||p[y]||a;return n?r.createElement(m,c(c({ref:e},l),{},{components:n})):r.createElement(m,c({ref:e},l))}));function y(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,c=new Array(a);c[0]=f;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:o,c[1]=s;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2928:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return i},default:function(){return l}});var r=n(9603),o=n(120),a=(n(7378),n(5318)),c={},s={unversionedId:"polyglot/java/transclusions/shortest-chatbot",id:"polyglot/java/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`java",source:"@site/docs/polyglot/java/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/java/transclusions",slug:"/polyglot/java/transclusions/shortest-chatbot",permalink:"/docs/polyglot/java/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/java/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1621426354,formattedLastUpdatedAt:"5/19/2021",frontMatter:{}},i=[],u={toc:i};function l(t){var e=t.components,n=(0,o.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package io.github.wechaty;\n\nclass Bot{\n  public static void main(String args[]){\n    Wechaty bot = Wechaty.instance()\n      .onScan((qrcode, statusScanStatus, data) -> System.out.println(QrcodeUtils.getQr(qrcode)))\n      .onLogin(user -> System.out.println("User logged in :" + user))\n      .onMessage(message -> System.out.println("Message:" + message))\n      .start(true);\n  }\n}\n')))}l.isMDXComponent=!0}}]);