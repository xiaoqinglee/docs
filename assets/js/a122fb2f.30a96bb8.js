"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[73494],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>u,toc:()=>d});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:2},p="setGroupListener",u={unversionedId:"api/group/setGroupListener",id:"api/group/setGroupListener",title:"setGroupListener",description:"Feature Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/api/group/setGroupListener.mdx",sourceDirName:"api/group",slug:"/api/group/setGroupListener",permalink:"/sdks/api/group/setGroupListener",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/api/group/setGroupListener.mdx",tags:[],version:"current",lastUpdatedAt:1708258879,formattedLastUpdatedAt:"Feb 18, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"Group Related",permalink:"/sdks/api/group/"},next:{title:"createGroup",permalink:"/sdks/api/group/createGroup"}},s={},d=[{value:"Feature Introduction",id:"feature-introduction",level:2},{value:"Function Prototype",id:"function-prototype",level:3},{value:"Return Result",id:"return-result",level:3},{value:"Code Example",id:"code-example",level:3},{value:"Function Prototype",id:"function-prototype-1",level:3},{value:"Return Result",id:"return-result-1",level:3},{value:"Code Example",id:"code-example-1",level:3},{value:"Function Prototype",id:"function-prototype-2",level:3},{value:"Input Parameters",id:"input-parameters",level:3},{value:"Return Result",id:"return-result-2",level:3},{value:"Code Example",id:"code-example-2",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=c("Tabs"),f=c("TabItem"),b={toc:d},g="wrapper";function k(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(g,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},b,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setgrouplistener"},"setGroupListener"),(0,r.kt)("h2",{id:"feature-introduction"},"Feature Introduction"),(0,r.kt)("admonition",{title:"Description",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Set the group event listener to asynchronously notify related group changes, allowing the UI to perceive and handle them promptly.")),(0,r.kt)("admonition",{title:"Note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"(1) Call immediately after ",(0,r.kt)("inlineCode",{parentName:"p"},"initSDK"),";\n(2) Can only be called once.")),(0,r.kt)(m,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/MiniProgram",value:"Web"},{label:"React-Native",value:"React-Native"}],mdxType:"Tabs"},(0,r.kt)(f,{value:"Flutter",mdxType:"TabItem"},(0,r.kt)("h3",{id:"function-prototype"},"Function Prototype"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0}," Future setGroupListener(OnGroupListener listener)\n")),(0,r.kt)("h3",{id:"return-result"},"Return Result"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"listener"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/listener/groupListener"},"OnGroupListener")),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"code-example"},"Code Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"  OpenIM.iMManager.groupManager.setGroupListener(OnGroupListener(\n      onGroupApplicationAccepted: (GroupApplicationInfo info){},\n      onGroupApplicationAdded: (GroupApplicationInfo info){},\n      onGroupApplicationDeleted: (GroupApplicationInfo info){},\n      onGroupApplicationRejected: (GroupApplicationInfo info){},\n      onGroupInfoChanged: (GroupInfo info){},\n      onGroupMemberAdded: (GroupMembersInfo info){},\n      onGroupMemberDeleted: (GroupMembersInfo info){},\n      onGroupMemberInfoChanged: (GroupMembersInfo info){},\n      onJoinedGroupAdded: (GroupInfo info){},\n      onJoinedGroupDeleted: (GroupInfo info){},\n    ));\n"))),(0,r.kt)(f,{value:"iOS",mdxType:"TabItem"},(0,r.kt)("h3",{id:"function-prototype-1"},"Function Prototype"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"\n- (void)addGroupListener:(id<OIMGroupListener>)listener NS_SWIFT_NAME(addGroupListener(listener:));\n\n")),(0,r.kt)("h3",{id:"return-result-1"},"Return Result"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"listener"),(0,r.kt)("td",{parentName:"tr",align:null},"id < ",(0,r.kt)("a",{parentName:"td",href:"/sdks/listener/groupListener"},"GroupListener")," >"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"code-example-1"},"Code Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\n[OIMManager.callbacker addGroupListener:self];\n\n"))),(0,r.kt)(f,{value:"Android",mdxType:"TabItem"},(0,r.kt)("h3",{id:"function-prototype-2"},"Function Prototype"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"    public void setOnGroupListener(OnGroupListener listener)\n")),(0,r.kt)("h3",{id:"input-parameters"},"Input Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"listener"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/listener/groupListener"},"OnGroupListener")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback")))),(0,r.kt)("h3",{id:"return-result-2"},"Return Result"),(0,r.kt)("h3",{id:"code-example-2"},"Code Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"OpenIMClient.getInstance().groupManager.setOnGroupListener(new OnGroupListener() {\n            @Override\n            public void onGroupApplicationAccepted(GroupApplicationInfo info) {\n\n            }\n\n            @Override\n            public void onGroupApplicationAdded(GroupApplicationInfo info) {\n\n            }\n\n            @Override\n            public void onGroupApplicationDeleted(GroupApplicationInfo info) {\n\n            }\n\n            @Override\n            public void onGroupApplicationRejected(GroupApplicationInfo info) {\n\n            }\n\n            @Override\n            public void onGroupInfoChanged(GroupInfo info) {\n\n            }\n\n            @Override\n            public void onGroupMemberAdded(GroupMembersInfo info) {\n\n            }\n\n            @Override\n            public void onGroupMemberDeleted(GroupMembersInfo info) {\n\n            }\n\n            @Override\n            public void onGroupMemberInfoChanged(GroupMembersInfo info) {\n\n            }\n\n            @Override\n            public void onJoinedGroupAdded(GroupInfo info) {\n\n            }\n\n            @Override\n            public void onJoinedGroupDeleted(GroupInfo info) {\n\n            }\n        });\n"))),(0,r.kt)(f,{value:"Web",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"Note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Set automatically after successful login. Directly use the listener in the client. ",(0,r.kt)("a",{parentName:"p",href:"/sdks/listener/groupListener"},"See group event details here")))),(0,r.kt)(f,{value:"uni-app",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"Note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Automatically set after successful initialization. The callback will be passed to the client via ",(0,r.kt)("inlineCode",{parentName:"p"},"globalEvent"),". ",(0,r.kt)("a",{parentName:"p",href:"/sdks/listener/groupListener"},"See group event details here")))),(0,r.kt)(f,{value:"React-Native",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"Attention",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"After successful initialization, it's set automatically. You can directly use the listener on the client side. ",(0,r.kt)("a",{parentName:"p",href:"/sdks/listener/groupListener"},"Details on group events can be found here"))))))}k.isMDXComponent=!0}}]);