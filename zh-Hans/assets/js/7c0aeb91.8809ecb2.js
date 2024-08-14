"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[28490],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>b});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),i=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):u(u({},e),t)),a},m=function(t){var e=i(t.components);return r.createElement(o.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),d=i(a),s=n,b=d["".concat(o,".").concat(s)]||d[s]||k[s]||l;return a?r.createElement(b,u(u({ref:e},m),{},{components:a})):r.createElement(b,u({ref:e},m))}));function b(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,u=new Array(l);u[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[d]="string"==typeof t?t:n,u[1]=p;for(var i=2;i<l;i++)u[i]=a[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},50386:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>d});a(67294);var r=a(3905);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function u(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const p={sidebar_position:2,toc_min_heading_level:2,toc_max_heading_level:2},o="GroupStatus",i={unversionedId:"enum/groupStatus",id:"enum/groupStatus",title:"GroupStatus",description:"\u7fa4\u72b6\u6001\u3002",source:"@site/docs/sdks/enum/groupStatus.mdx",sourceDirName:"enum",slug:"/enum/groupStatus",permalink:"/zh-Hans/sdks/enum/groupStatus",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/enum/groupStatus.mdx",tags:[],version:"current",lastUpdatedAt:1723603555,formattedLastUpdatedAt:"2024\u5e748\u670814\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"GroupMemberFilter",permalink:"/zh-Hans/sdks/enum/groupMemberFilter"},next:{title:"GroupType",permalink:"/zh-Hans/sdks/enum/groupType"}},m={},d=[{value:"\u7fa4\u72b6\u6001\u9009\u9879",id:"GroupStatus",level:2},{value:"GroupStatus",id:"groupstatus-1",level:3},{value:"OIMGroupStatus",id:"oimgroupstatus",level:3},{value:"GroupStatus",id:"groupstatus-2",level:3},{value:"GroupStatus",id:"groupstatus-3",level:3},{value:"GroupStatus",id:"groupstatus-4",level:3},{value:"GroupStatus",id:"groupstatus-5",level:3},{value:"GroupStatus",id:"groupstatus-6",level:3}],k=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},s=k("Tabs"),b=k("TabItem"),N={toc:d},g="wrapper";function c(t){var{components:e}=t,a=u(t,["components"]);return(0,r.kt)(g,l(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),r.forEach((function(e){n(t,e,a[e])}))}return t}({},N,a),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"groupstatus"},"GroupStatus"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u7fa4\u72b6\u6001\u3002")),(0,r.kt)("h2",{id:"GroupStatus"},"\u7fa4\u72b6\u6001\u9009\u9879"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u679a\u4e3e\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b63\u5e38")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c01\u7981\uff08\u6682\u672a\u4f7f\u7528\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"\u89e3\u6563")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7981\u8a00")))),(0,r.kt)(s,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/Electron/MiniProgram",value:"Web"},{label:"React-Native",value:"React-Native"},{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,r.kt)(b,{value:"Flutter",mdxType:"TabItem"},(0,r.kt)("h3",{id:"groupstatus-1"},"GroupStatus"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u679a\u4e3e\u503c\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u679a\u4e3e\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nomal"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"baned"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dismissed"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"muted"),(0,r.kt)("td",{parentName:"tr",align:null},"3"))))),(0,r.kt)(b,{value:"iOS",mdxType:"TabItem"},(0,r.kt)("h3",{id:"oimgroupstatus"},"OIMGroupStatus"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u679a\u4e3e\u503c\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u679a\u4e3e\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OIMGroupStatusOk"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OIMGroupStatusBanChat"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OIMGroupStatusDismissed"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OIMGroupStatusMuted"),(0,r.kt)("td",{parentName:"tr",align:null},"3"))))),(0,r.kt)(b,{value:"Android",mdxType:"TabItem"},(0,r.kt)("h3",{id:"groupstatus-2"},"GroupStatus"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u679a\u4e3e\u503c\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u679a\u4e3e\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GROUP_OK"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GROUP_BANNED"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GROUP_DISSOLVE"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GROUP_MUTED"),(0,r.kt)("td",{parentName:"tr",align:null},"3"))))),(0,r.kt)(b,{value:"Web",mdxType:"TabItem"},(0,r.kt)("h3",{id:"groupstatus-3"},"GroupStatus"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u679a\u4e3e\u503c\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u679a\u4e3e\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nomal"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Baned"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dismissed"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Muted"),(0,r.kt)("td",{parentName:"tr",align:null},"3"))))),(0,r.kt)(b,{value:"uni-app",mdxType:"TabItem"},(0,r.kt)("h3",{id:"groupstatus-4"},"GroupStatus"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u679a\u4e3e\u503c\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u679a\u4e3e\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nomal"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Baned"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dismissed"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Muted"),(0,r.kt)("td",{parentName:"tr",align:null},"3"))))),(0,r.kt)(b,{value:"React-Native",mdxType:"TabItem"},(0,r.kt)("h3",{id:"groupstatus-5"},"GroupStatus"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u679a\u4e3e\u503c\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u679a\u4e3e\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nomal"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Baned"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dismissed"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Muted"),(0,r.kt)("td",{parentName:"tr",align:null},"3"))))),(0,r.kt)(b,{value:"Unity",mdxType:"TabItem"},(0,r.kt)("h3",{id:"groupstatus-6"},"GroupStatus"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u679a\u4e3e\u503c\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u679a\u4e3e\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nomal"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Baned"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dismissed"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Muted"),(0,r.kt)("td",{parentName:"tr",align:null},"3")))))))}c.isMDXComponent=!0}}]);