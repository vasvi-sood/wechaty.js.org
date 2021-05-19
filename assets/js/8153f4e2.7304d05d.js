(self.webpackChunk=self.webpackChunk||[]).push([[399],{5318:function(e,t,a){"use strict";a.d(t,{Zo:function(){return l},kt:function(){return m}});var p=a(7378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,p)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,p,n=function(e,t){if(null==e)return{};var a,p,n={},o=Object.keys(e);for(p=0;p<o.length;p++)a=o[p],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(p=0;p<o.length;p++)a=o[p],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=p.createContext({}),s=function(e){var t=p.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=s(e.components);return p.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},u=p.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,d=u["".concat(c,".").concat(m)]||u[m]||h[m]||o;return a?p.createElement(d,i(i({ref:t},l),{},{components:a})):p.createElement(d,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,i[1]=r;for(var s=2;s<o;s++)i[s]=a[s];return p.createElement.apply(null,i)}return p.createElement.apply(null,a)}u.displayName="MDXCreateElement"},776:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return r},toc:function(){return c},default:function(){return l}});var p=a(9603),n=a(120),o=(a(7378),a(5318)),i={title:"Wechaty Puppet",sidebar_label:"Puppet"},r={unversionedId:"specs/puppet",id:"specs/puppet",isDocsHomePage:!1,title:"Wechaty Puppet",description:"The term Puppet in Wechaty is an Abstract Class for implementing protocol plugins. The plugins are the component that helps Wechaty to control the IMs like WeChat(that's the reason we call it puppet!).",source:"@site/docs/specs/puppet.md",sourceDirName:"specs",slug:"/specs/puppet",permalink:"/docs/specs/puppet",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/specs/puppet.md",version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1621426354,formattedLastUpdatedAt:"5/19/2021",sidebar_label:"Puppet",frontMatter:{title:"Wechaty Puppet",sidebar_label:"Puppet"},sidebar:"docs",previous:{title:"Wechaty Plugin",permalink:"/docs/specs/plugin"},next:{title:"Wechaty Puppet Service",permalink:"/docs/specs/service"}},c=[{value:"What is Wechaty Puppet",id:"what-is-wechaty-puppet",children:[]},{value:"Show me the code",id:"show-me-the-code",children:[{value:"Important Puppets",id:"important-puppets",children:[]}]},{value:"Using Puppet with Wechaty Examples",id:"using-puppet-with-wechaty-examples",children:[]},{value:"Basic Rules",id:"basic-rules",children:[]},{value:"MemoryCard",id:"memorycard",children:[{value:"Wechaty bot login with memory card module",id:"wechaty-bot-login-with-memory-card-module",children:[]},{value:"Conclusion",id:"conclusion",children:[]}]},{value:"Event Order",id:"event-order",children:[{value:"Potential Solution",id:"potential-solution",children:[]}]},{value:"Event: <code>ready</code>",id:"event-ready",children:[]},{value:"NPM Publication",id:"npm-publication",children:[]},{value:"Event: <code>heartbeat</code>",id:"event-heartbeat",children:[{value:"The <code>heartbeat</code> design",id:"the-heartbeat-design",children:[]},{value:"<code>heartbeat</code> Example",id:"heartbeat-example",children:[]}]},{value:"Wechaty Puppet Message Processing Flow",id:"wechaty-puppet-message-processing-flow",children:[{value:"Wechaty Puppet Message Processing Flow",id:"wechaty-puppet-message-processing-flow-1",children:[]},{value:"What to Do Next",id:"what-to-do-next",children:[]}]},{value:"<code>Ding</code>/<code>Dong</code> Protocol",id:"dingdong-protocol",children:[]},{value:"Learn More",id:"learn-more",children:[]}],s={toc:c};function l(e){var t=e.components,i=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,p.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The term ",(0,o.kt)("inlineCode",{parentName:"p"},"Puppet")," in Wechaty is an Abstract Class for implementing protocol plugins. The plugins are the component that helps Wechaty to control the IMs like WeChat(that's the reason we call it puppet!)."),(0,o.kt)("p",null,"The plugins are named ",(0,o.kt)("inlineCode",{parentName:"p"},"PuppetXXX"),", like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-puppeteer"},"PuppetPuppeteer")," is using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/GoogleChrome/puppeteer"},"google puppeteer")," to control the ",(0,o.kt)("a",{parentName:"p",href:"https://wx.qq.com"},"WeChat Web API")," via a chrome browser, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/padlocal/wechaty-puppet-padlocal"},"PuppetPadLocal")," is using the Pad Protocol to connect with WeChat Server."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Puppet Providers Directory: ",(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/docs/puppet-providers/"},"https://wechaty.js.org/docs/puppet-providers/")),(0,o.kt)("li",{parentName:"ul"},"Puppet Compatibility Table: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet/wiki/Compatibility"},"https://github.com/wechaty/wechaty-puppet/wiki/Compatibility")),(0,o.kt)("li",{parentName:"ul"},"Puppet Development Guide: ",(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/docs/puppet-providers/diy"},"https://wechaty.js.org/docs/puppet-providers/diy")),(0,o.kt)("li",{parentName:"ul"},"Puppet Related Links: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet/wiki/Links"},"https://github.com/wechaty/wechaty-puppet/wiki/Links")),(0,o.kt)("li",{parentName:"ul"},"Puppet Documentation: ",(0,o.kt)("a",{parentName:"li",href:"https://wechaty.github.io/wechaty-puppet/typedoc/classes/puppet.html"},"https://wechaty.github.io/wechaty-puppet/typedoc/classes/puppet.html"))),(0,o.kt)("h2",{id:"what-is-wechaty-puppet"},"What is Wechaty Puppet"),(0,o.kt)("p",null,"The term ",(0,o.kt)("inlineCode",{parentName:"p"},"Puppet")," in Wechaty is a name that we had picked up to describe part of our system: Puppet is an Abstract Class for implementing plugins, the plugins are the component that helps Wechaty to control the Wechat, that's the reason we call it ",(0,o.kt)("inlineCode",{parentName:"p"},"puppet"),"."),(0,o.kt)("p",null,"Plugins are named PuppetXXX, like PuppetPuppeteer is using the chrome puppeteer to control the WeChat Web API via a chrome browser, PuppetService is using the gRPC protocol to connect with a Protocol Server for controlling an iPad/Windows/whatever program."),(0,o.kt)("h2",{id:"show-me-the-code"},"Show me the code"),(0,o.kt)("p",null,"For a deeper understanding of the Puppet in Wechaty, you can read its documentation from ",(0,o.kt)("a",{parentName:"p",href:"https://wechaty.github.io/wechaty-puppet/typedoc/classes/puppet.html"},"https://wechaty.github.io/wechaty-puppet/typedoc/classes/puppet.html")," and source code if you like at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet/blob/master/src/puppet.ts"},"https://github.com/wechaty/wechaty-puppet/blob/master/src/puppet.ts")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"abstract puppet",src:a(1031).Z})),(0,o.kt)("h3",{id:"important-puppets"},"Important Puppets"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"PuppetPuppeteer"),(0,o.kt)("p",{parentName:"li"},"A web solution to connect WeChat, Wechaty init implement is by web WeChat, which inject js code into chrome.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"PuppetMock"),(0,o.kt)("p",{parentName:"li"},"A mock function to connect WeChat, not a real implement, for testing other connectors to connect with Wechaty, in other words: a mock solution to implement puppet. This is used for further to connect other solutions, such as iPad, Xposed, iOs, windows client...")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"PuppetPadLocal"),(0,o.kt)("p",{parentName:"li"},"An iPad solution to connect WeChat")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"PuppetService"),(0,o.kt)("p",{parentName:"li"},"See: </docs/puppet-services/>"))),(0,o.kt)("h2",{id:"using-puppet-with-wechaty-examples"},"Using Puppet with Wechaty Examples"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Using ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-mock"},"wechaty-puppet-mock")," to run ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/blob/master/examples/ding-dong-bot.ts"},"ding-dong-bot")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"WECHATY_PUPPET=wechaty-puppet-mock npm start\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Using ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-padpro"},"wechaty-puppet-padpro")," to run ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/blob/master/examples/ding-dong-bot.ts"},"ding-dong-bot")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"WECHATY_PUPPET=wechaty-puppet-padpro npm start\n")))),(0,o.kt)("h2",{id:"basic-rules"},"Basic Rules"),(0,o.kt)("p",null,"Here are some rules that a Wechaty Puppet should follow:"),(0,o.kt)("ol",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ol",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("strong",{parentName:"li"},"Emit Self Messages"),": when the bot says anything, the bot should receive a message said by itself. (and the ",(0,o.kt)("inlineCode",{parentName:"li"},"message.self()")," will return true for this message)"),(0,o.kt)("li",{parentName:"ol",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("strong",{parentName:"li"},"Perfect Logout"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"logout")," method should clean all the user session data from the puppet service, and the status of the App on the phone should display correctly (not log in on any devices)."),(0,o.kt)("li",{parentName:"ol",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("strong",{parentName:"li"},"State-less Session Management")," (with MemoryCard support): the puppet service should save the user session data to the memory card, and can be restored from the memory card. (See: #16)"),(0,o.kt)("li",{parentName:"ol",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("strong",{parentName:"li"},"MIME File Name Extension Convention"),": FileBoxChunk.name must be able to convert to a MIME type and versa visa. The puppet needs to set the name with the right extension (.jpg, .pdf, etc) to the name of the file box. See: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-hostie/discussions/115"},"https://github.com/wechaty/wechaty-puppet-hostie/discussions/115"),","),(0,o.kt)("li",{parentName:"ol",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","To be added.")),(0,o.kt)("p",null,"See: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/puppet-services/discussions/54"},"https://github.com/wechaty/puppet-services/discussions/54")),(0,o.kt)("h2",{id:"memorycard"},"MemoryCard"),(0,o.kt)("p",null,"When a Wechaty bots logged in, it will have a authorized secret data to store their logged-in session, for example, the device information (62 data for pad protocol), the cookie (if you are using the web protocol), and the user session secrets, etc."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/huan/memory-card"},"memory card")," is a module designed to store those data."),(0,o.kt)("h3",{id:"wechaty-bot-login-with-memory-card-module"},"Wechaty bot login with memory card module"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"wechaty start()"),(0,o.kt)("li",{parentName:"ol"},"wechaty instanciates memory card (see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/blob/30c446b2b78c92166a1d613952e77d3e3fdbbe1f/src/wechaty.ts#L681"},"wechaty.ts:start()"),")"),(0,o.kt)("li",{parentName:"ol"},"wechaty set memory card to puppet (see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/blob/30c446b2b78c92166a1d613952e77d3e3fdbbe1f/src/wechaty.ts#L406"},"wechaty.ts:initPuppet()"),")",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"puppet start()"),(0,o.kt)("li",{parentName:"ol"},"puppet load session from memory card"),(0,o.kt)("li",{parentName:"ol"},"puppet logged in",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"by loaded session, or"),(0,o.kt)("li",{parentName:"ol"},"by scan qr code"))),(0,o.kt)("li",{parentName:"ol"},"puppet save the session secret data to memory card"))),(0,o.kt)("li",{parentName:"ol"},"memory card will be saved to file or network storage for future reuse")),(0,o.kt)("h3",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"By saving the user login session secret data to memory card, the Wechaty system can save the state to local, so that it can make the puppet service provider service stateless."),(0,o.kt)("p",null,"Current neither of the Donut, WXWork, Rock, PadLocal have not support this stateless feature, nor the Wechaty system are ready for it."),(0,o.kt)("p",null,"To be implemented for our ecosystem."),(0,o.kt)("p",null,"See: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/puppet-services/discussions/16"},"https://github.com/wechaty/puppet-services/discussions/16")),(0,o.kt)("h2",{id:"event-order"},"Event Order"),(0,o.kt)("p",null,"I think I can contribute some analytics to this problem:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"As the log & puppet testing shows: the ",(0,o.kt)("inlineCode",{parentName:"li"},"ready")," event is after the ",(0,o.kt)("inlineCode",{parentName:"li"},"login")," event"),(0,o.kt)("li",{parentName:"ol"},"However, the Wechaty system needs to load the contact payload of the ",(0,o.kt)("inlineCode",{parentName:"li"},"userSelf")," before it emits the ",(0,o.kt)("inlineCode",{parentName:"li"},"login")," event because the login event of Wechaty needs to take a ",(0,o.kt)("inlineCode",{parentName:"li"},"userSelf")," instance, and it needs to be ",(0,o.kt)("inlineCode",{parentName:"li"},"ready-ed"),".")),(0,o.kt)("p",null,"So there will be some delay before the Wechaty emit the ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," event after it received the ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," event from its puppet."),(0,o.kt)("p",null,"Please pay attention to this behavior and let me know if this issue was caused by it."),(0,o.kt)("h3",{id:"potential-solution"},"Potential Solution"),(0,o.kt)("p",null,"For a more robust Wechaty system, we can consider saving the ",(0,o.kt)("inlineCode",{parentName:"p"},"ready")," event if the ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," event is not emitted in Wechaty."),(0,o.kt)("p",null,"And when we emit the ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," event in Wechaty, we can check if the puppet has already ",(0,o.kt)("inlineCode",{parentName:"p"},"ready-ed"),", and if so, it can emit the ",(0,o.kt)("inlineCode",{parentName:"p"},"ready")," event right after the ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," event."),(0,o.kt)("p",null,"See: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/puppet-services/issues/31"},"https://github.com/wechaty/puppet-services/issues/31")),(0,o.kt)("h2",{id:"event-ready"},"Event: ",(0,o.kt)("inlineCode",{parentName:"h2"},"ready")),(0,o.kt)("p",null,"Need to fire ",(0,o.kt)("inlineCode",{parentName:"p"},"ready")," event after the bot logined and all data has been synced."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For example, after we re-installed the WeChat app on our phone, it has to load contacts/rooms from the server for a long time.")),(0,o.kt)("p",null,"See: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-service/issues/18"},"https://github.com/wechaty/wechaty-puppet-service/issues/18")),(0,o.kt)("h2",{id:"npm-publication"},"NPM Publication"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("inlineCode",{parentName:"li"},"wechaty-puppet")," must not a dependency. It should be put in devDependencies and peerDependencies"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("inlineCode",{parentName:"li"},"wechaty")," must not a dependency. It should be put in devDependencies and peerDependencies"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","must exist ",(0,o.kt)("inlineCode",{parentName:"li"},"examples/ding-dong-bot.ts")," to implement the ding/dong logic, use puppet api only.")),(0,o.kt)("h2",{id:"event-heartbeat"},"Event: ",(0,o.kt)("inlineCode",{parentName:"h2"},"heartbeat")),(0,o.kt)("p",null,"Puppet must emit heartbeats for provide a health check signal."),(0,o.kt)("h3",{id:"the-heartbeat-design"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"heartbeat")," design"),(0,o.kt)("p",null,"Here are the details:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Wechaty Puppet is designed to emit at least one event in 60 seconds. If we do not have any events to emit, then we need to emit a ",(0,o.kt)("inlineCode",{parentName:"li"},"heartbeat")," event so that it can prove itself is alive and healthy. See: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet/blob/bab9e29c088c33fa8bc6e148d9bdadbd453fd138/src/puppet.ts#L253-L254"},"https://github.com/wechaty/wechaty-puppet/blob/bab9e29c088c33fa8bc6e148d9bdadbd453fd138/src/puppet.ts#L253-L254")),(0,o.kt)("li",{parentName:"ol"},"It seems that the PadLocal does not have any ",(0,o.kt)("inlineCode",{parentName:"li"},"heartbeat")," event to emit when there are no other events, so if your bot idle for more than 60 seconds, then the Wechaty Puppet system will think the puppet provider has dead, so it will call ",(0,o.kt)("inlineCode",{parentName:"li"},"reset")," to try to recover the puppet.")),(0,o.kt)("p",null,"A leaking of ",(0,o.kt)("inlineCode",{parentName:"p"},"heartbeat")," example logs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'02:00:13 INFO StarterBot Message#Text[\ud83d\udde3Contact<OssChat>@\ud83d\udc65Room<ChatOps - Heartbeat \ud83d\udc96>] [\u592a\u9633]\n\n02:01:13 WARN Puppet dogReset() reason: {"data":"onGrpcStreamEvent(EVENT_TYPE_MESSAGE)","timeout":60000}\n02:01:13 VERB Puppet reset(onGrpcStreamEvent(EVENT_TYPE_MESSAGE))\n02:01:13 VERB PuppetService stop()\n02:01:13 VERB StateSwitch <PuppetService> off(pending) <- (false)\n02:01:13 VERB PuppetService stopGrpcStream()\n02:01:13 VERB PuppetService stopGrpcClient()\n02:01:13 VERB Puppet selfId()\n02:01:13 VERB StateSwitch <PuppetService> off(true) <- (pending)\n02:01:13 INFO StarterBot Contact<Mike (\u674e\u5353\u6853)> logout\n02:01:13 VERB PuppetService start()\n02:01:13 VERB StateSwitch <PuppetService> on(pending) <- (false)\n02:01:13 VERB PuppetService startGrpcClient()\n02:01:13 VERB PuppetService discoverServiceIp(e49007b7-7523-4a80-bfdb-1be0de3844b9)\n02:01:14 VERB PuppetService startGrpcStream()\n02:01:14 VERB StateSwitch <PuppetService> on(true) <- (pending)\n02:01:14 VERB PuppetService onGrpcStreamEvent({type:EVENT_TYPE_LOGIN(25), payload:"{"contactId":"wxid_a8d806dzznm822"}"})\n02:01:14 INFO StarterBot Contact<Mike (\u674e\u5353\u6853)> login\n02:01:15 VERB PuppetService onGrpcStreamEvent({type:EVENT_TYPE_READY(23), payload:"{"data":"ready"}"})\n02:01:15 VERB StateSwitch <WechatyReady> on(true) <- (true)\n02:01:20 VERB PuppetService onGrpcStreamEvent({type:EVENT_TYPE_READY(23), payload:"{"data":"ready"}"})\n02:01:20 VERB StateSwitch <WechatyReady> on(true) <- (true)\n')),(0,o.kt)("h3",{id:"heartbeat-example"},(0,o.kt)("inlineCode",{parentName:"h3"},"heartbeat")," Example"),(0,o.kt)("p",null,"Here's an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-puppeteer/blob/07f6260b3784c65bcee24bd003aac5d2968a9efc/src/wechaty-bro.js#L103-L112"},"example")," from our puppeteer puppet, which emits heartbeats in the browser, so if the browser dead, we will get to know because the heartbeat will be lost."),(0,o.kt)("p",null,"See: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/puppet-services/issues/85#issuecomment-769967606"},"https://github.com/wechaty/puppet-services/issues/85#issuecomment-769967606")),(0,o.kt)("h2",{id:"wechaty-puppet-message-processing-flow"},"Wechaty Puppet Message Processing Flow"),(0,o.kt)("p",null,"Yes, ",(0,o.kt)("inlineCode",{parentName:"p"},"video")," messagge is not supported now, and pr is welcome. I believe this feature is simple for you. You can have a try so you can become a wechaty contributor \ud83d\udc4d\nPlease refer to :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/New_temporary_materials.html"},"message material in official-account")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-official-account/blob/master/src/official-account/official-account.ts#L299"},"sendFile method")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-official-account/blob/master/src/puppet-oa.ts#L495"},"messageSend method"))),(0,o.kt)("p",null,"We now support very limit message types:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/official-account/webhook.ts#L241-L244"},"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/official-account/webhook.ts#L241-L244")),(0,o.kt)("p",null,"In order to support receiving more message types, like audio, you need to look at:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/official-account/webhook.ts#L247-L252"},"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/official-account/webhook.ts#L247-L252")),(0,o.kt)("p",null,"Congratulations! It seems that you can receive the right webhook payload from WeChat Official Server when you sent an audio message to your Official Account!"),(0,o.kt)("p",null,"However, it seems that the ",(0,o.kt)("em",{parentName:"p"},"Wechaty Message Payload")," has not been set correctly. In order to make it correct, you need to understand the message processing flow in Wechaty Puppet."),(0,o.kt)("h3",{id:"wechaty-puppet-message-processing-flow-1"},"Wechaty Puppet Message Processing Flow"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The Webhook get called by the Tencent Server (what you have done already)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The message ",(0,o.kt)("strong",{parentName:"p"},"event")," will be propagated from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Webhook")," class to the ",(0,o.kt)("inlineCode",{parentName:"p"},"OfficialAccount")," class:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/official-account/official-account.ts#L116-L119"},"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/official-account/official-account.ts#L116-L119"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The message ",(0,o.kt)("strong",{parentName:"p"},"event")," will be propagated from the ",(0,o.kt)("inlineCode",{parentName:"p"},"OfficialAccount")," class to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PuppetOA")," class:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/puppet-oa.ts#L188-L189"},"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/puppet-oa.ts#L188-L189"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After message ",(0,o.kt)("strong",{parentName:"p"},"event")," be propagated from the PuppetOA to Wechaty, then the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet/blob/763e94194fd1104007fccad4ba4994365890cde8/src/puppet.ts#L834"},"puppet.messagePayload()")," will be called to get the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet/blob/763e94194fd1104007fccad4ba4994365890cde8/src/schemas/message.ts#L103"},"Wechaty Message Payload"),".  Here is the most important part: we need to construct a Wechaty Message Payload from the Raw Message Payload (source code at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet/blob/763e94194fd1104007fccad4ba4994365890cde8/src/puppet.ts#L854-L855"},"here"),"):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const rawPayload = await this.messageRawPayload(messageId)\nconst payload    = await this.messageRawPayloadParser(rawPayload)\n")))),(0,o.kt)("h3",{id:"what-to-do-next"},"What to Do Next"),(0,o.kt)("p",null,"So it will be very clear that, what we need to do to support the new Message Type (audio in this case), is to implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"messageRawPayload")," methods, which you can find here:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/puppet-oa.ts#L456-L478"},"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/puppet-oa.ts#L456-L478")),(0,o.kt)("p",null,"I hope the above explanation could help you to move forward, please feel free to let me know if you have more questions."),(0,o.kt)("p",null,"See: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-official-account/issues/19"},"https://github.com/wechaty/wechaty-puppet-official-account/issues/19")),(0,o.kt)("h2",{id:"dingdong-protocol"},(0,o.kt)("inlineCode",{parentName:"h2"},"Ding"),"/",(0,o.kt)("inlineCode",{parentName:"h2"},"Dong")," Protocol"),(0,o.kt)("p",null,"Puppet has a API named ",(0,o.kt)("inlineCode",{parentName:"p"},"ding(data: string): void"),", and the Puppet must:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"emit a ",(0,o.kt)("inlineCode",{parentName:"li"},"dong")," event when the ",(0,o.kt)("inlineCode",{parentName:"li"},"ding()")," method has been called"),(0,o.kt)("li",{parentName:"ol"},"the payload of the ",(0,o.kt)("inlineCode",{parentName:"li"},"dong")," event might contains a ",(0,o.kt)("inlineCode",{parentName:"li"},"data")," key with the value exactly match the ",(0,o.kt)("inlineCode",{parentName:"li"},"data")," when calling the ",(0,o.kt)("inlineCode",{parentName:"li"},"ding()")," method.")),(0,o.kt)("p",null,"This is for active(passive) health checking, and this is also a workaround for some edge case communication between the top puppet with the bottom puppet."),(0,o.kt)("h2",{id:"learn-more"},"Learn More"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Puppet Related Links: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet/wiki/Links"},"https://github.com/wechaty/wechaty-puppet/wiki/Links"))))}l.isMDXComponent=!0},1031:function(e,t,a){"use strict";t.Z=a.p+"assets/images/architecture-ef4e78c0bf9d9b359328f3de8751ebb1.png"}}]);