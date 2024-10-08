"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[33757],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(r),c=a,g=m["".concat(o,".").concat(c)]||m[c]||d[c]||i;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},17090:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>m});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={sidebar_position:21,title:"get_user_req_group_applicationList",hide_title:!0},o=void 0,s={unversionedId:"apis/groupManagement/getUserReqGroupApplicationList",id:"apis/groupManagement/getUserReqGroupApplicationList",title:"get_user_req_group_applicationList",description:"getuserreqgroupapplicationList",source:"@site/i18n/en/docusaurus-plugin-content-docs-restapi/current/apis/groupManagement/getUserReqGroupApplicationList.mdx",sourceDirName:"apis/groupManagement",slug:"/apis/groupManagement/getUserReqGroupApplicationList",permalink:"/restapi/apis/groupManagement/getUserReqGroupApplicationList",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/apis/groupManagement/getUserReqGroupApplicationList.mdx",tags:[],version:"current",lastUpdatedAt:1728373245,formattedLastUpdatedAt:"Oct 8, 2024",sidebarPosition:21,frontMatter:{sidebar_position:21,title:"get_user_req_group_applicationList",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"group_application_response",permalink:"/restapi/apis/groupManagement/groupApplicationResponse"},next:{title:"get_group_users_req_application_list",permalink:"/restapi/apis/groupManagement/getGroupApplicationListByUserID"}},u={},m=[{value:"get_user_req_group_applicationList",id:"get_user_req_group_applicationlist",level:2},{value:"Brief Description",id:"brief-description",level:3},{value:"Request Method",id:"request-method",level:3},{value:"Request URL",id:"request-url",level:3},{value:"Header",id:"header",level:3},{value:"Request Parameter Example",id:"request-parameter-example",level:3},{value:"Successful Response Example",id:"successful-response-example",level:3},{value:"Successful Response Parameter Description",id:"successful-response-parameter-description",level:3},{value:"Failed Response Example",id:"failed-response-example",level:3},{value:"Failed Response Parameter Description",id:"failed-response-parameter-description",level:3}],d={toc:m},c="wrapper";function g(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(c,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("center",null,(0,n.kt)("h2",{id:"get_user_req_group_applicationlist"},"get_user_req_group_applicationList")),(0,n.kt)("h3",{id:"brief-description"},"Brief Description"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Retrieve group join requests initiated by a specified user.")),(0,n.kt)("h3",{id:"request-method"},"Request Method"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"post")," ")),(0,n.kt)("h3",{id:"request-url"},"Request URL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"{API_ADDRESS}/group/get_user_req_group_applicationList")," ")),(0,n.kt)("h3",{id:"header"},"Header"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Header Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Example Value"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"operationID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1646445464564"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"operationID used for global link tracking")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"token"),(0,n.kt)("td",{parentName:"tr",align:"left"},"eyJhbxxxx3Xs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Admin token")))),(0,n.kt)("h3",{id:"request-parameter-example"},"Request Parameter Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userID": "1225441072",\n  "pagination": {\n    "pageNumber": 1,\n    "showNumber": 100\n  }\n}\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"userID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pagination"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:"left"},"object"),(0,n.kt)("td",{parentName:"tr",align:null},"Pagination parameter structure")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pagination.showNumber"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"Current page number, starting from 1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pagination.pageNumber"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of requests on the current page")))),(0,n.kt)("h3",{id:"successful-response-example"},"Successful Response Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 0,\n  "errMsg": "",\n  "errDlt": "",\n  "data": {\n    "total": 1,\n    "groupRequests": [\n      {\n        "userInfo": {\n          "userID": "1225441072",\n          "nickname": "blooming66",\n          "faceURL": "",\n          "ex": ""\n        },\n        "groupInfo": {\n          "groupID": "3666081223",\n          "groupName": "Big Group 1",\n          "notification": "v Announcement 1",\n          "introduction": "",\n          "faceURL": "",\n          "ownerUserID": "1054527962",\n          "createTime": 1687747185342,\n          "memberCount": 14,\n          "ex": "",\n          "status": 0,\n          "creatorUserID": "1054527962",\n          "groupType": 2,\n          "needVerification": 0,\n          "lookMemberInfo": 0,\n          "applyMemberFriend": 0,\n          "notificationUpdateTime": 0,\n          "notificationUserID": ""\n        },\n        "handleResult": 1,\n        "reqMsg": "Goose goose goose",\n        "handleMsg": "reason",\n        "reqTime": 1687747407352,\n        "handleUserID": "",\n        "handleTime": 0,\n        "ex": "",\n        "joinSource": 3,\n        "inviterUserID": ""\n      }\n    ]\n  }\n}\n')),(0,n.kt)("h3",{id:"successful-response-parameter-description"},"Successful Response Parameter Description"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Error code, 0 indicates success")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Brief error message, empty when no error")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Detailed error message")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"data"),(0,n.kt)("td",{parentName:"tr",align:"left"},"object"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Generic data object, specific structure as below")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"total"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total number of group join requests")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"groupRequests"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/restapi/commonFields#grouprequestinfo"},"Group Join Request Object")," list")))),(0,n.kt)("h3",{id:"failed-response-example"},"Failed Response Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 1004,\n  "errMsg": "RecordNotFoundError",\n  "errDlt": ": [1004]RecordNotFoundError"\n}\n')),(0,n.kt)("h3",{id:"failed-response-parameter-description"},"Failed Response Parameter Description"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Error code, refer to global error code documentation for specifics")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Brief error message")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Detailed error message")))))}g.isMDXComponent=!0}}]);