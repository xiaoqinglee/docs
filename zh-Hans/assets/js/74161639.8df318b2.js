"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[63172],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54703:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});t(67294);var r=t(3905);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={title:"Mini Program",hide_title:!0,sidebar_position:7},c=void 0,l={unversionedId:"quickstart/miniProgram",id:"quickstart/miniProgram",title:"Mini Program",description:"\u96c6\u6210\u6b65\u9aa4",source:"@site/docs/sdks/quickstart/miniProgram.mdx",sourceDirName:"quickstart",slug:"/quickstart/miniProgram",permalink:"/zh-Hans/sdks/quickstart/miniProgram",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/quickstart/miniProgram.mdx",tags:[],version:"current",lastUpdatedAt:1714035485,formattedLastUpdatedAt:"2024\u5e744\u670825\u65e5",sidebarPosition:7,frontMatter:{title:"Mini Program",hide_title:!0,sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"uni-app",permalink:"/zh-Hans/sdks/quickstart/uniapp"},next:{title:"\u5404\u7aef SDK",permalink:"/zh-Hans/sdks/api/"}},p={},u=[{value:"\u96c6\u6210\u6b65\u9aa4",id:"\u96c6\u6210\u6b65\u9aa4",level:2},{value:"1. \u6dfb\u52a0\u4f9d\u8d56",id:"1-\u6dfb\u52a0\u4f9d\u8d56",level:3},{value:"2. \u5f15\u5165 SDK",id:"2-\u5f15\u5165-sdk",level:3},{value:"3. \u767b\u9646",id:"3-\u767b\u9646",level:3},{value:"4. \u6536\u53d1\u6d88\u606f",id:"4-\u6536\u53d1\u6d88\u606f",level:3}],d={toc:u},m="wrapper";function f(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)(m,s(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},d,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u96c6\u6210\u6b65\u9aa4"},"\u96c6\u6210\u6b65\u9aa4"),(0,r.kt)("h3",{id:"1-\u6dfb\u52a0\u4f9d\u8d56"},"1. \u6dfb\u52a0\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install open-im-sdk\n")),(0,r.kt)("h3",{id:"2-\u5f15\u5165-sdk"},"2. \u5f15\u5165 SDK"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f15\u5165 SDK")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { OpenIMSDK } from 'open-im-sdk';\n\nconst OpenIM = new OpenIMSDK();\n")),(0,r.kt)("h3",{id:"3-\u767b\u9646"},"3. \u767b\u9646"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { CbEvents } from 'open-im-sdk';\nimport type { WsResponse } from 'open-im-sdk';\n\nOpenIM.on(CbEvents.OnConnecting, handleConnecting);\nOpenIM.on(CbEvents.OnConnectFailed, handleConnectFailed);\nOpenIM.on(CbEvents.OnConnectSuccess, handleConnectSuccess);\n\nOpenIM.login({\n  userID: 'IM user ID',\n  token: 'IM user token',\n  platformID: 5,\n  wsAddr: 'ws://your-server-ip:10003',\n  apiAddr: 'http://your-server-ip:10002',\n});\n\nfunction handleConnecting() {\n  // Connecting...\n}\n\nfunction handleConnectFailed({ errCode, errMsg }: WsResponse) {\n  // Connection failed \u274c\n  console.log(errCode, errMsg);\n}\n\nfunction handleConnectSuccess() {\n  // Connection successful \u2705\n}\n")),(0,r.kt)("h3",{id:"4-\u6536\u53d1\u6d88\u606f"},"4. \u6536\u53d1\u6d88\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { CbEvents } from 'open-im-sdk';\nimport type { WsResponse, MessageItem } from 'open-im-sdk';\n\n// Listenfor new messages \ud83d\udce9\nOpenIM.on(CbEvents.OnRecvNewMessages, handleNewMessages);\n\nconst message = (await OpenIM.createTextMessage('hello openim')).data;\n\nOpenIM.sendMessage({\n  recvID: 'recipient user ID',\n  groupID: '',\n  message,\n})\n  .then(() => {\n    // Message sent successfully \u2709\ufe0f\n  })\n  .catch(err => {\n    // Failed to send message \u274c\n    console.log(err);\n  });\n\nfunction handleNewMessages({ data }: WsResponse<MessageItem[]>) {\n  // New message list \ud83d\udce8\n  console.log(data);\n}\n")))}f.isMDXComponent=!0}}]);