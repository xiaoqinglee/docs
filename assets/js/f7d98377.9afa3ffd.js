"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[55961],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=i(r),c=a,b=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return r?n.createElement(b,o(o({ref:t},s),{},{components:r})):n.createElement(b,o({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[m]="string"==typeof e?e:a,o[1]=u;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},11607:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>g,frontMatter:()=>u,metadata:()=>i,toc:()=>m});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const u={sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:2},p="onGroupMemberDeleted",i={unversionedId:"callback/onGroupMemberDeleted",id:"callback/onGroupMemberDeleted",title:"onGroupMemberDeleted",description:"Feature Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/callback/onGroupMemberDeleted.mdx",sourceDirName:"callback",slug:"/callback/onGroupMemberDeleted",permalink:"/sdks/callback/onGroupMemberDeleted",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/callback/onGroupMemberDeleted.mdx",tags:[],version:"current",lastUpdatedAt:1708258879,formattedLastUpdatedAt:"Feb 18, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"onGroupDismissed",permalink:"/sdks/callback/onGroupMemberAdded"},next:{title:"onGroupMemberInfoChanged",permalink:"/sdks/callback/onGroupMemberInfoChanged"}},s={},m=[{value:"Feature Introduction",id:"feature-introduction",level:2},{value:"Return Prototype",id:"return-prototype",level:3},{value:"Return Results",id:"return-results",level:3},{value:"Return Prototype",id:"return-prototype-1",level:3},{value:"Return Results",id:"return-results-1",level:3},{value:"Return Prototype",id:"return-prototype-2",level:3},{value:"Return Results",id:"return-results-2",level:3},{value:"Return Prototype",id:"return-prototype-3",level:3},{value:"Return Results",id:"return-results-3",level:3},{value:"Call Example",id:"call-example",level:3},{value:"Return Prototype",id:"return-prototype-4",level:3},{value:"Return Results",id:"return-results-4",level:3},{value:"Call Example",id:"call-example-1",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},c=d("Tabs"),b=d("TabItem"),k={toc:m},f="wrapper";function g(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)(f,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},k,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ongroupmemberdeleted"},"onGroupMemberDeleted"),(0,n.kt)("h2",{id:"feature-introduction"},"Feature Introduction"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"When a group member is removed (e.g., a member leaves the group), other members of the group will receive this callback.")),(0,n.kt)(c,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/MiniProgram",value:"Web"}],mdxType:"Tabs"},(0,n.kt)(b,{value:"Flutter",mdxType:"TabItem"},(0,n.kt)("h3",{id:"return-prototype"},"Return Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"  Function(GroupMembersInfo info)? onGroupMemberDeleted;\n")),(0,n.kt)("h3",{id:"return-results"},"Return Results"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"info"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/sdks/class/group/groupMemberInfo"},"GroupMembersInfo")),(0,n.kt)("td",{parentName:"tr",align:null},"Group Member Info"))))),(0,n.kt)(b,{value:"iOS",mdxType:"TabItem"},(0,n.kt)("h3",{id:"return-prototype-1"},"Return Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\n- (void)onGroupMemberDeleted:(OIMGroupMemberInfo *)memberInfo;\n\n")),(0,n.kt)("h3",{id:"return-results-1"},"Return Results"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"memberInfo"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/sdks/class/group/groupMemberInfo"},"OIMGroupMemberInfo")),(0,n.kt)("td",{parentName:"tr",align:null},"Group Member Info"))))),(0,n.kt)(b,{value:"Android",mdxType:"TabItem"},(0,n.kt)("h3",{id:"return-prototype-2"},"Return Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"void onGroupMemberDeleted(GroupMembersInfo info);\n")),(0,n.kt)("h3",{id:"return-results-2"},"Return Results"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"info"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/sdks/class/group/groupMemberInfo"},"GroupMembersInfo")),(0,n.kt)("td",{parentName:"tr",align:null},"Group Member Info"))))),(0,n.kt)(b,{value:"Web",mdxType:"TabItem"},(0,n.kt)("h3",{id:"return-prototype-3"},"Return Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"\nonGroupMemberDeleted(data: WSEvent<GroupMemberItem>): void;\n\n")),(0,n.kt)("h3",{id:"return-results-3"},"Return Results"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/sdks/class/response"},"WSEvent"),"<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/group/groupMemberInfo"},"GroupMemberItem"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Group Member Info")))),(0,n.kt)("h3",{id:"call-example"},"Call Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSDK, CbEvents } from 'open-im-sdk-wasm';\n// or\n// import { OpenIMSDK, CbEvents } from 'open-im-sdk';\n// const IMSDK = new OpenIMSDK();\nconst IMSDK = getSDK();\n\nIMSDK.on(CbEvents.OnGroupMemberDeleted, ({ data }) => {\n  // data - Group Member Info\n});\n"))),(0,n.kt)(b,{value:"uni-app",mdxType:"TabItem"},(0,n.kt)("h3",{id:"return-prototype-4"},"Return Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"\nonGroupMemberDeleted(data: WSEvent<GroupMemberItem>): void;\n\n")),(0,n.kt)("h3",{id:"return-results-4"},"Return Results"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/sdks/class/response"},"WSEvent"),"<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/group/groupMemberInfo"},"GroupMemberItem"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Group Member Info")))),(0,n.kt)("h3",{id:"call-example-1"},"Call Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.subscribe(IMSDK.IMEvents.OnGroupMemberDeleted, ({ data }) => {\n  // data - Group Member Info\n});\n")))))}g.isMDXComponent=!0}}]);