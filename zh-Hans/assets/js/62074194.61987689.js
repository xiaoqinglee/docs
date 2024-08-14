"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[25174],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=u(n),g=r,k=m["".concat(s,".").concat(g)]||m[g]||d[g]||l;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},90247:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>u,toc:()=>m});n(67294);var a=n(3905);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const o={sidebar_position:4,toc_min_heading_level:2,toc_max_heading_level:2},s="getLoginStatus",u={unversionedId:"api/initialization/getLoginStatus",id:"api/initialization/getLoginStatus",title:"getLoginStatus",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/sdks/api/initialization/getLoginStatus.mdx",sourceDirName:"api/initialization",slug:"/api/initialization/getLoginStatus",permalink:"/zh-Hans/sdks/api/initialization/getLoginStatus",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/api/initialization/getLoginStatus.mdx",tags:[],version:"current",lastUpdatedAt:1723603555,formattedLastUpdatedAt:"2024\u5e748\u670814\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"logout",permalink:"/zh-Hans/sdks/api/initialization/logout"},next:{title:"getLoginUserID",permalink:"/zh-Hans/sdks/api/initialization/getLoginUserID"}},p={},m=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-1",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-1",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-1",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-1",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-2",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-2",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-2",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-3",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-2",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-3",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-3",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-4",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-3",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-4",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-4",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-5",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-4",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-5",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-5",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-6",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-6",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-6",level:3}],d=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)},g=d("Tabs"),k=d("TabItem"),c={toc:m},N="wrapper";function b(t){var{components:e}=t,n=i(t,["components"]);return(0,a.kt)(N,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){r(t,e,n[e])}))}return t}({},c,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getloginstatus"},"getLoginStatus"),(0,a.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,a.kt)("admonition",{title:"\u8bf4\u660e",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u83b7\u53d6\u7528\u6237\u767b\u5f55\u72b6\u6001\uff0c\u8be5\u63a5\u53e3\u5982\u679c\u5728 SDK \u672a\u8c03\u7528\u521d\u59cb\u5316\u7684\u72b6\u6001\u4e0b\u8c03\u7528\uff0c\u4f1a\u8fd4\u56de-1001(Uninitialized)")),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\u8fde\u63a5\u72b6\u6001\u548c\u767b\u5f55\u72b6\u6001\u7684\u533a\u522b\uff0c\u53ea\u80fd\u5728\u672a\u767b\u5f55\u72b6\u6001\u4e0b\u8c03\u7528 login")),(0,a.kt)(g,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/Electron/MiniProgram",value:"Web"},{label:"React-Native",value:"React-Native"},{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,a.kt)(k,{value:"Flutter",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u51fd\u6570\u539f\u578b"},"\u51fd\u6570\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0}," Future<int?> getLoginStatus()\n")),(0,a.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570"},"\u8f93\u5165\u53c2\u6570"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"~"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/loginStatus"},"int")),(0,a.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u72b6\u6001\uff0c1\uff1a\u672a\u767b\u5f55 2\uff1a\u767b\u5f55\u4e2d 3\uff1a\u5df2\u767b\u5f55")))),(0,a.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"   int? status = await OpenIM.iMManager.getLoginStatus();\n"))),(0,a.kt)(k,{value:"iOS",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-1"},"\u51fd\u6570\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"- (OIMLoginStatus)getLoginStatus;\n")),(0,a.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-1"},"\u8f93\u5165\u53c2\u6570"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-1"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/loginStatus"},"OIMLoginStatus")),(0,a.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u72b6\u6001\uff0c1\uff1a\u672a\u767b\u5f55 2\uff1a\u767b\u5f55\u4e2d 3\uff1a\u5df2\u767b\u5f55")))),(0,a.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-1"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\nOIMLoginStatus status = [OIMManager.manager getLoginStatus];\n\n"))),(0,a.kt)(k,{value:"Android",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-2"},"\u51fd\u6570\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"    public int getLoginStatus()\n")),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-2"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"~"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/loginStatus"},"LoginStatus")," \u767b\u5f55\u72b6\u6001")))),(0,a.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-2"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"    int status = OpenIMClient.getInstance().getLoginStatus();\n"))),(0,a.kt)(k,{value:"Web",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-3"},"\u51fd\u6570\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.getLoginStatus(operationID?:string): Promise<WsResponse<LoginStatus>>;\n")),(0,a.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-2"},"\u8f93\u5165\u53c2\u6570"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-3"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<WsResponse<",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/loginStatus"},"LoginStatus"),">",">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u72b6\u6001")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/response"},"WsResponse"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5931\u8d25\u56de\u8c03")))),(0,a.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-3"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSDK } from 'open-im-sdk-wasm';\nconst IMSDK = getSDK();\n\n// use in electron with ffi\n// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';\n// const { instance: IMSDK } = getWithRenderProcess();\n\n// use in mini program\n// import { OpenIMSDK } from 'open-im-sdk';\n// const IMSDK = new OpenIMSDK();\n\nIMSDK.getLoginStatus()\n  .then(({ data }) => {\n    // data: \u767b\u5f55\u72b6\u6001LoginStatus\n  })\n  .catch(({ errCode, errMsg }) => {\n    // \u8c03\u7528\u5931\u8d25\n  });\n"))),(0,a.kt)(k,{value:"uni-app",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-4"},"\u51fd\u6570\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.asyncApi('getLoginStatus',operationID: string): Promise<LoginStatus>;\n")),(0,a.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-3"},"\u8f93\u5165\u53c2\u6570"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-4"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/loginStatus"},"LoginStatus"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u7528\u6237\u767b\u5f55\u72b6\u6001")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/response"},"CatchResponse"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5931\u8d25\u56de\u8c03")))),(0,a.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-4"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.asyncApi('getLoginStatus', 'operationID');\n  .then((data) => {\n    // data: \u767b\u5f55\u72b6\u6001LoginStatus\n  })\n  .catch(({ errCode, errMsg }) => {\n    // \u8c03\u7528\u5931\u8d25\n  });\n"))),(0,a.kt)(k,{value:"React-Native",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-5"},"\u51fd\u6570\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"OpenIMSDKRN.getLoginStatus(operationID: string): Promise<LoginStatus>\n")),(0,a.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-4"},"\u8f93\u5165\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"operationID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c ID\uff0c\u7528\u4e8e\u5b9a\u4f4d\u95ee\u9898\uff0c\u4fdd\u6301\u552f\u4e00\uff0c\u5efa\u8bae\u7528\u5f53\u524d\u65f6\u95f4\u548c\u968f\u673a\u6570")))),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-5"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/loginStatus"},"LoginStatus"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u7528\u6237\u767b\u5f55\u72b6\u6001")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/response"},"CatchResponse"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5931\u8d25\u56de\u8c03")))),(0,a.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-5"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'import OpenIMSDKRN from "open-im-sdk-rn";\n\nOpenIMSDKRN.getLoginStatus("operationID");\n  .then((data) => {\n    // data: \u767b\u5f55\u72b6\u6001LoginStatus\n  })\n  .catch(({ errCode, errMsg }) => {\n    // \u8c03\u7528\u5931\u8d25\n  });\n'))),(0,a.kt)(k,{value:"Unity",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-6"},"\u51fd\u6570\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"public static LoginStatus GetLoginStatus()\n")),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-6"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"enum"),(0,a.kt)("td",{parentName:"tr",align:null},"Empty(0),Logout(1),Logging(2),Logged(3)")))),(0,a.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-6"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"var status = IMSDK.GetLoginStatus()\nif(status == LoginStatus.Logout){\n\n}else if(status == LoginStatus.Logging){\n\n}else if(status == LoginStatus.Logged){\n\n}\n")))))}b.isMDXComponent=!0}}]);