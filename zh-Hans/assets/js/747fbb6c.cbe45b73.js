"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[99549],{3905:(t,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>N});var e=a(67294);function l(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function r(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)}return a}function i(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}function d(t,n){if(null==t)return{};var a,e,l=function(t,n){if(null==t)return{};var a,e,l={},r=Object.keys(t);for(e=0;e<r.length;e++)a=r[e],n.indexOf(a)>=0||(l[a]=t[a]);return l}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)a=r[e],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=e.createContext({}),m=function(t){var n=e.useContext(p),a=n;return t&&(a="function"==typeof t?t(n):i(i({},n),t)),a},u=function(t){var n=m(t.components);return e.createElement(p.Provider,{value:n},t.children)},k="mdxType",g={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},o=e.forwardRef((function(t,n){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),k=m(a),o=l,N=k["".concat(p,".").concat(o)]||k[o]||g[o]||r;return a?e.createElement(N,i(i({ref:n},u),{},{components:a})):e.createElement(N,i({ref:n},u))}));function N(t,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=o;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=t,d[k]="string"==typeof t?t:l,i[1]=d;for(var m=2;m<r;m++)i[m]=a[m];return e.createElement.apply(null,i)}return e.createElement.apply(null,a)}o.displayName="MDXCreateElement"},13110:(t,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>d,metadata:()=>m,toc:()=>k});a(67294);var e=a(3905);function l(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function r(t,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):function(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)}return a}(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})),t}function i(t,n){if(null==t)return{};var a,e,l=function(t,n){if(null==t)return{};var a,e,l={},r=Object.keys(t);for(e=0;e<r.length;e++)a=r[e],n.indexOf(a)>=0||(l[a]=t[a]);return l}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)a=r[e],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}const d={sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:2},p="Config",m={unversionedId:"class/init/config",id:"class/init/config",title:"Config",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/sdks/class/init/config.mdx",sourceDirName:"class/init",slug:"/class/init/config",permalink:"/zh-Hans/sdks/class/init/config",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/class/init/config.mdx",tags:[],version:"current",lastUpdatedAt:1715137490,formattedLastUpdatedAt:"2024\u5e745\u67088\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"Class",permalink:"/zh-Hans/sdks/class/"},next:{title:"\u7528\u6237\u76f8\u5173",permalink:"/zh-Hans/sdks/class/user/"}},u={},k=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"InitConfig",id:"initconfig",level:3},{value:"OIMInitConfig",id:"oiminitconfig",level:3},{value:"InitConfig",id:"initconfig-1",level:3},{value:"InitConfig",id:"initconfig-2",level:3},{value:"InitAndLoginConfig",id:"initandloginconfig",level:3},{value:"InitConfig",id:"initconfig-3",level:3},{value:"InitConfig",id:"initconfig-4",level:3}],g=t=>function(n){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,e.kt)("div",n)},o=g("Tabs"),N=g("TabItem"),s={toc:k},b="wrapper";function c(t){var{components:n}=t,a=i(t,["components"]);return(0,e.kt)(b,r(function(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{},e=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),e.forEach((function(n){l(t,n,a[n])}))}return t}({},s,a),{components:n,mdxType:"MDXLayout"}),(0,e.kt)("h1",{id:"config"},"Config"),(0,e.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,e.kt)("admonition",{type:"info"},(0,e.kt)("p",{parentName:"admonition"},"\u521d\u59cb\u5316 SDK \u7684\u914d\u7f6e\u4fe1\u606f\u3002")),(0,e.kt)(o,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/MiniProgram",value:"Web"},{label:"React-Native",value:"React-Native"},{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,e.kt)(N,{value:"Flutter",mdxType:"TabItem"},(0,e.kt)("h3",{id:"initconfig"},"InitConfig"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"platformID"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/platform"},"int")),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5e73\u53f0\u53f7: iOS 1, Android 2, Windows 3, OSX 4, WEB 5, \u5c0f\u7a0b\u5e8f 6\uff0clinux 7")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"apiAddr"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"IM api \u5730\u5740\uff0c\u4e00\u822c\u4e3a",(0,e.kt)("inlineCode",{parentName:"td"},"http://xxx:10002"),"\u6216",(0,e.kt)("inlineCode",{parentName:"td"},"https://xxx/api"))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"wsAddr"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"IM ws \u5730\u5740\uff0c\u4e00\u822c\u4e3a",(0,e.kt)("inlineCode",{parentName:"td"},"ws://xxx:10001"),"\u6216",(0,e.kt)("inlineCode",{parentName:"td"},"wss://xxx/msg_gateway"))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"dataDir"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"IM \u5ba2\u6237\u7aef DB \u5b58\u653e\u76ee\u5f55")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"logLevel"),(0,e.kt)("td",{parentName:"tr",align:null},"int"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,e.kt)("td",{parentName:"tr",align:null},"SDK \u65e5\u5fd7\u6253\u5370\u7ea7\u522b")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"isLogStandardOutput"),(0,e.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5c06\u65e5\u5fd7\u6253\u5370\u5230\u63a7\u5236\u53f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"logFilePath"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,e.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u4fdd\u5b58\u65e5\u5fd7\u6587\u4ef6\u8def\u5f84"))))),(0,e.kt)(N,{value:"iOS",mdxType:"TabItem"},(0,e.kt)("h3",{id:"oiminitconfig"},"OIMInitConfig"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"platformID"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/platform"},"OIMPlatform")),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5e73\u53f0\u53f7: iOS 1, Android 2, Windows 3, OSX 4, WEB 5, \u5c0f\u7a0b\u5e8f 6\uff0clinux 7")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"apiAddr"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"IM api \u5730\u5740\uff0c\u4e00\u822c\u4e3a",(0,e.kt)("inlineCode",{parentName:"td"},"http://xxx:10002"),"\u6216",(0,e.kt)("inlineCode",{parentName:"td"},"https://xxx/api"))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"wsAddr"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"IM ws \u5730\u5740\uff0c\u4e00\u822c\u4e3a",(0,e.kt)("inlineCode",{parentName:"td"},"ws://xxx:10001"),"\u6216",(0,e.kt)("inlineCode",{parentName:"td"},"wss://xxx/msg_gateway"))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"dataDir"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,e.kt)("td",{parentName:"tr",align:null},"IM \u5ba2\u6237\u7aef DB \u5b58\u653e\u76ee\u5f55")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"logLevel"),(0,e.kt)("td",{parentName:"tr",align:null},"NSInteger"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,e.kt)("td",{parentName:"tr",align:null},"SDK \u65e5\u5fd7\u6253\u5370\u7ea7\u522b")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"isLogStandardOutput"),(0,e.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5c06\u65e5\u5fd7\u6253\u5370\u5230\u63a7\u5236\u53f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"logFilePath"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,e.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u4fdd\u5b58\u65e5\u5fd7\u6587\u4ef6\u8def\u5f84"))))),(0,e.kt)(N,{value:"Android",mdxType:"TabItem"},(0,e.kt)("h3",{id:"initconfig-1"},"InitConfig"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"apiAddr"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"IM api \u5730\u5740\uff0c\u4e00\u822c\u4e3a",(0,e.kt)("inlineCode",{parentName:"td"},"http://xxx:10002"),"\u6216",(0,e.kt)("inlineCode",{parentName:"td"},"https://xxx/api"))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"wsAddr"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"IM ws \u5730\u5740\uff0c\u4e00\u822c\u4e3a",(0,e.kt)("inlineCode",{parentName:"td"},"ws://xxx:10001"),"\u6216",(0,e.kt)("inlineCode",{parentName:"td"},"wss://xxx/msg_gateway"))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"dataDir"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"IM \u5ba2\u6237\u7aef DB \u5b58\u653e\u76ee\u5f55")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"platformID"),(0,e.kt)("td",{parentName:"tr",align:null},"number"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5e73\u53f0\u53f7: iOS 1, Android 2, Windows 3, OSX 4, WEB 5, \u5c0f\u7a0b\u5e8f 6\uff0clinux 7")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"logLevel"),(0,e.kt)("td",{parentName:"tr",align:null},"number"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,e.kt)("td",{parentName:"tr",align:null},"SDK \u65e5\u5fd7\u6253\u5370\u7ea7\u522b")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"isLogStandardOutput"),(0,e.kt)("td",{parentName:"tr",align:null},"boolean"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5c06\u65e5\u5fd7\u6253\u5370\u5230\u63a7\u5236\u53f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"logFilePath"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,e.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u4fdd\u5b58\u65e5\u5fd7\u6587\u4ef6\u8def\u5f84"))))),(0,e.kt)(N,{value:"uni-app",mdxType:"TabItem"},(0,e.kt)("h3",{id:"initconfig-2"},"InitConfig"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"platformID"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/platform"},"Platform")),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5e73\u53f0\u53f7: iOS 1, Android 2, Windows 3, OSX 4, WEB 5, \u5c0f\u7a0b\u5e8f 6\uff0clinux 7")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"apiAddr"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"IM api \u5730\u5740\uff0c\u4e00\u822c\u4e3a",(0,e.kt)("inlineCode",{parentName:"td"},"http://xxx:10002"),"\u6216",(0,e.kt)("inlineCode",{parentName:"td"},"https://xxx/api"))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"wsAddr"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"IM ws \u5730\u5740\uff0c\u4e00\u822c\u4e3a",(0,e.kt)("inlineCode",{parentName:"td"},"ws://xxx:10001"),"\u6216",(0,e.kt)("inlineCode",{parentName:"td"},"wss://xxx/msg_gateway"))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"dataDir"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"IM \u5ba2\u6237\u7aef DB \u5b58\u653e\u76ee\u5f55")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"logLevel"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/logLevel"},"LogLevel")),(0,e.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,e.kt)("td",{parentName:"tr",align:null},"SDK \u65e5\u5fd7\u6253\u5370\u7ea7\u522b")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"isLogStandardOutput"),(0,e.kt)("td",{parentName:"tr",align:null},"boolean"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5c06\u65e5\u5fd7\u6253\u5370\u5230\u63a7\u5236\u53f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"logFilePath"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,e.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u4fdd\u5b58\u65e5\u5fd7\u6587\u4ef6\u8def\u5f84"))))),(0,e.kt)(N,{value:"Web",mdxType:"TabItem"},(0,e.kt)("h3",{id:"initandloginconfig"},"InitAndLoginConfig"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,e.kt)("th",{parentName:"tr",align:null}))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"platformID"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/platform"},"Platform")),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5e73\u53f0\u53f7: iOS 1, Android 2, Windows 3, OSX 4, WEB 5, \u5c0f\u7a0b\u5e8f 6\uff0clinux 7"),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"apiAddr"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"IM api \u5730\u5740\uff0c\u4e00\u822c\u4e3a",(0,e.kt)("inlineCode",{parentName:"td"},"http://xxx:10002"),"\u6216",(0,e.kt)("inlineCode",{parentName:"td"},"https://xxx/api")),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"wsAddr"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"IM ws \u5730\u5740\uff0c\u4e00\u822c\u4e3a",(0,e.kt)("inlineCode",{parentName:"td"},"ws://xxx:10001"),"\u6216",(0,e.kt)("inlineCode",{parentName:"td"},"wss://xxx/msg_gateway")),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"userID"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"IM \u7528\u6237 userID"),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"token"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"OpenIM \u7528\u6237\u4ee4\u724c\uff0c\u4e1a\u52a1\u540e\u53f0\u9a8c\u8bc1\u7528\u6237\u8d26\u53f7\u5bc6\u7801\u540e\uff0c\u901a\u8fc7 user_token \u6765\u83b7\u53d6"),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"logLevel"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/logLevel"},"LogLevel")),(0,e.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,e.kt)("td",{parentName:"tr",align:null},"SDK \u65e5\u5fd7\u6253\u5370\u7ea7\u522b"),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"isLogStandardOutput"),(0,e.kt)("td",{parentName:"tr",align:null},"boolean"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u8f93\u5165\u65e5\u5fd7\u5230\u63a7\u5236\u53f0"),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"tryParse"),(0,e.kt)("td",{parentName:"tr",align:null},"boolean"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u81ea\u52a8 parse \u8fd4\u56de\u503c\uff0c\u9ed8\u8ba4\u4e3a true"),(0,e.kt)("td",{parentName:"tr",align:null}))))),(0,e.kt)(N,{value:"React-Native",mdxType:"TabItem"},(0,e.kt)("h3",{id:"initconfig-3"},"InitConfig"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"platformID"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/platform"},"Platform")),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5e73\u53f0\u53f7: iOS 1, Android 2, Windows 3, OSX 4, WEB 5, \u5c0f\u7a0b\u5e8f 6\uff0clinux 7")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"apiAddr"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"IM api \u5730\u5740\uff0c\u4e00\u822c\u4e3a",(0,e.kt)("inlineCode",{parentName:"td"},"http://xxx:10002"),"\u6216",(0,e.kt)("inlineCode",{parentName:"td"},"https://xxx/api"))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"wsAddr"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"IM ws \u5730\u5740\uff0c\u4e00\u822c\u4e3a",(0,e.kt)("inlineCode",{parentName:"td"},"ws://xxx:10001"),"\u6216",(0,e.kt)("inlineCode",{parentName:"td"},"wss://xxx/msg_gateway"))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"dataDir"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"IM \u5ba2\u6237\u7aef DB \u5b58\u653e\u76ee\u5f55")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"logLevel"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/logLevel"},"LogLevel")),(0,e.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,e.kt)("td",{parentName:"tr",align:null},"SDK \u65e5\u5fd7\u6253\u5370\u7ea7\u522b")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"isLogStandardOutput"),(0,e.kt)("td",{parentName:"tr",align:null},"boolean"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5c06\u65e5\u5fd7\u6253\u5370\u5230\u63a7\u5236\u53f0"))))),(0,e.kt)(N,{value:"Unity",mdxType:"TabItem"},(0,e.kt)("h3",{id:"initconfig-4"},"InitConfig"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ApiAddr"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"IM api \u5730\u5740\uff0c\u4e00\u822c\u4e3a",(0,e.kt)("inlineCode",{parentName:"td"},"http://xxx:10002"),"\u6216",(0,e.kt)("inlineCode",{parentName:"td"},"https://xxx/api"))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"WsAddr"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"IM ws \u5730\u5740\uff0c\u4e00\u822c\u4e3a",(0,e.kt)("inlineCode",{parentName:"td"},"ws://xxx:10001"),"\u6216",(0,e.kt)("inlineCode",{parentName:"td"},"wss://xxx/msg_gateway"))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"DataDir"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,e.kt)("td",{parentName:"tr",align:null},"IM \u5ba2\u6237\u7aef DB \u5b58\u653e\u76ee\u5f55")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"PlatformID"),(0,e.kt)("td",{parentName:"tr",align:null},"int"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5e73\u53f0\u53f7: iOS 1, Android 2, Windows 3, OSX 4, WEB 5, \u5c0f\u7a0b\u5e8f 6\uff0clinux 7")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"LogLevel"),(0,e.kt)("td",{parentName:"tr",align:null},"uint"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,e.kt)("td",{parentName:"tr",align:null},"SDK \u65e5\u5fd7\u6253\u5370\u7ea7\u522b")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"IsLogStandardOutput"),(0,e.kt)("td",{parentName:"tr",align:null},"bool"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,e.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5c06\u65e5\u5fd7\u6253\u5370\u5230\u63a7\u5236\u53f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"LogFilePath"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,e.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u4fdd\u5b58\u65e5\u5fd7\u6587\u4ef6\u8def\u5f84")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"IsExternalExtensions"),(0,e.kt)("td",{parentName:"tr",align:null},"bool"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,e.kt)("td",{parentName:"tr",align:null})))))))}c.isMDXComponent=!0}}]);