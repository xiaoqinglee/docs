"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[8846],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),g=i,f=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},80380:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>d});t(67294);var r=t(3905);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const s={title:"Android",hide_title:!0,sidebar_position:2},c=void 0,l={unversionedId:"quickstart/android",id:"quickstart/android",title:"Android",description:"\ud83d\ude80 Using the Demo",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/quickstart/android.mdx",sourceDirName:"quickstart",slug:"/quickstart/android",permalink:"/sdks/quickstart/android",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/quickstart/android.mdx",tags:[],version:"current",lastUpdatedAt:1728373245,formattedLastUpdatedAt:"Oct 8, 2024",sidebarPosition:2,frontMatter:{title:"Android",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"iOS",permalink:"/sdks/quickstart/ios"},next:{title:"Unity",permalink:"/sdks/quickstart/unity"}},p={},d=[{value:"\ud83d\ude80 Using the Demo",id:"-using-the-demo",level:2},{value:"Integration Steps",id:"integration-steps",level:2},{value:"1. Add Dependencies",id:"1-add-dependencies",level:3},{value:"2. Import Package",id:"2-import-package",level:3},{value:"3. Initialization",id:"3-initialization",level:3},{value:"4. Set Listener",id:"4-set-listener",level:3},{value:"5. Login",id:"5-login",level:3}],u={toc:d},g="wrapper";function f(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)(g,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}({},u,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"-using-the-demo"},"\ud83d\ude80 Using the Demo"),(0,r.kt)("p",null,"We strongly recommend that you first run the framework-specific sample ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenIMSDK/Open-IM-Android-Demo"},"DEMO")," we have prepared for you. This will not only give you a firsthand experience of OpenIMSDK's features but will also assist you in quickly identifying and resolving issues during the actual integration process."),(0,r.kt)("h2",{id:"integration-steps"},"Integration Steps"),(0,r.kt)("h3",{id:"1-add-dependencies"},"1. Add Dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"implementation 'io.openim:android-sdk:latest@aar'\nimplementation 'io.openim:core-sdk:latest@aar'\nimplementation 'com.google.code.gson:gson:2.9.0'\n")),(0,r.kt)("h3",{id:"2-import-package"},"2. Import Package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import io.openim.android.sdk.OpenIMClient\n")),(0,r.kt)("h3",{id:"3-initialization"},"3. Initialization"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"InitConfig initConfig=new InitConfig(\n            Constant.getImApiUrl(),//SDK API address\n            Constant.getImWsUrl(),//SDK WebSocket address\n            getStorageDir(),//SDK database storage directory\n            );\n\n OpenIMClient.getInstance().initSDK(\n            application, //Application\n            initConfig,//InitConfig\n            new OnConnListener() {\n                @Override\n                public void onConnectFailed(long code, String error) {\n                    //Connection to server failed\n                }\n\n                @Override\n                public void onConnectSuccess() {\n                    //Successfully connected to the server\n                }\n\n                @Override\n                public void onConnecting() {\n                    //Connecting to the server...\n                }\n\n                @Override\n                public void onKickedOffline() {\n                    //The current user was kicked offline\n                }\n\n                @Override\n                public void onUserTokenExpired() {\n                    //The login token has expired\n                }\n            });\n")),(0,r.kt)("h3",{id:"4-set-listener"},"4. Set Listener"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Set listener\n// The SDK uses the 'set' method, setting multiple times will replace the previous setting. It's recommended to use middleware and the 'add' method for callback execution distribution, see the demo's IMEvent class for reference\n\n   // Callback when current user's profile changes\n   OpenIMClient.getInstance().userInfoManager.setOnUserListener(info -> {});\n   // Listener for receiving new messages, read receipts, and message recalls.\n   OpenIMClient.getInstance().messageManager.setAdvancedMsgListener(new OnAdvanceMsgListener() { }\n   // Listener for changes in friendships\n   OpenIMClient.getInstance().friendshipManager.setOnFriendshipListener(new OnFriendshipListener() {}\n   // Listener for new or changed conversations\n   OpenIMClient.getInstance().conversationManager.setOnConversationListener(new OnConversationListener() {}\n   // Listener for changes in group relationships\n   OpenIMClient.getInstance().groupManager.setOnGroupListener(new OnGroupListener() {}\n   // Signaling listener\n   OpenIMClient.getInstance().signalingManager.setSignalingListener(new OnSignalingListener() {}\n")),(0,r.kt)("h3",{id:"5-login"},"5. Login"),(0,r.kt)("p",null,"Note: Set the listener first, then login"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"OpenIMClient.getInstance().login(new OnBase<String>() {\n          @Override\n          public void onError(int code, String error) {\n          }\n\n          @Override\n          public void onSuccess(String data) {\n          //Other API calls must ensure that the login callback is successful before proceeding\n\n          }\n       }, userID, imToken);\n")))}f.isMDXComponent=!0}}]);