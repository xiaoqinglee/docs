"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[57052],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(r),m=a,g=s["".concat(p,".").concat(m)]||s[m]||c[m]||o;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21451:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>s});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"Error Codes",sidebar_position:11},p=void 0,d={unversionedId:"errcode",id:"errcode",title:"Error Codes",description:"\ud83d\udeab Global Error Codes",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/errcode.mdx",sourceDirName:".",slug:"/errcode",permalink:"/sdks/errcode",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/errcode.mdx",tags:[],version:"current",lastUpdatedAt:1727593474,formattedLastUpdatedAt:"Sep 29, 2024",sidebarPosition:11,frontMatter:{title:"Error Codes",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/sdks/faq"}},u={},s=[{value:"\ud83d\udeab Global Error Codes",id:"-global-error-codes",level:2},{value:"\ud83d\udda5 Client Error Codes",id:"-client-error-codes",level:2}],c={toc:s},m="wrapper";function g(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(m,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},c,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"-global-error-codes"},"\ud83d\udeab Global Error Codes"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,n.kt)("strong",{parentName:"p"},"Note"),": Error codes are divided into three categories:"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Client Error Codes"),": Range ",(0,n.kt)("inlineCode",{parentName:"li"},"10000~20000")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Server Error Codes"),": Range ",(0,n.kt)("inlineCode",{parentName:"li"},"0~9999")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"App Server Custom Webhooks Error Codes"),": Range ",(0,n.kt)("inlineCode",{parentName:"li"},"20001-29999")))),(0,n.kt)("h2",{id:"-client-error-codes"},"\ud83d\udda5 Client Error Codes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Error Code")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Error Explanation")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10000"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83c\udf10 Network request error")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10001"),(0,n.kt)("td",{parentName:"tr",align:null},"\u23f1 Network wait timeout")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10002"),(0,n.kt)("td",{parentName:"tr",align:null},"\u274c Parameter error")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10003"),(0,n.kt)("td",{parentName:"tr",align:null},"\u231b Context timeout, usually when a user has already exited")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10004"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 Resources not fully loaded, typically uninitialized or login response not yet received")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10005"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2753 Unknown error, identify the cause based on ",(0,n.kt)("inlineCode",{parentName:"td"},"errmsg"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10006"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udea8 SDK internal error, identify the cause based on ",(0,n.kt)("inlineCode",{parentName:"td"},"errmsg"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10100"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab User does not exist or is not registered")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10101"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udeaa User has logged out")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10102"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 User has logged in repeatedly. Use ",(0,n.kt)("inlineCode",{parentName:"td"},"getloginstatus")," to verify login status and prevent re-login")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10200"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab Required file does not exist")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10201"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab Message decompression failed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10202"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab Message decoding failed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10203"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab Unsupported long-connection binary protocol")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10204"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab Message sent repeatedly")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10205"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab Unsupported message content type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10301"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab Unsupported session operation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10400"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab Group ID does not exist")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10401"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab Incorrect group type")))))}g.isMDXComponent=!0}}]);