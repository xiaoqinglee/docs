"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[79901],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=i,u=c["".concat(l,".").concat(g)]||c[g]||d[g]||r;return n?o.createElement(u,a(a({ref:t},m),{},{components:n})):o.createElement(u,a({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},46174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>c});n(67294);var o=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={title:"Docker Deployment",sidebar_position:2},l="\ud83d\udee0 Docker Deployment",p={unversionedId:"gettingStarted/dockerCompose",id:"gettingStarted/dockerCompose",title:"Docker Deployment",description:"1. Environment and Component Requirements",source:"@site/i18n/en/docusaurus-plugin-content-docs-guides/current/gettingStarted/dockerCompose.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/dockerCompose",permalink:"/guides/gettingStarted/dockerCompose",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/guides/gettingStarted/dockerCompose.mdx",tags:[],version:"current",lastUpdatedAt:1710476043,formattedLastUpdatedAt:"Mar 15, 2024",sidebarPosition:2,frontMatter:{title:"Docker Deployment",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Source Code Deployment",permalink:"/guides/gettingStarted/imSourceCodeDeployment"},next:{title:"Quick Verification",permalink:"/guides/gettingStarted/quickTestServer"}},m={},c=[{value:"1. Environment and Component Requirements",id:"1-environment-and-component-requirements",level:2},{value:"2. Docker Deployment",id:"2-docker-deployment",level:2},{value:"2.1 Clone the Repository and Initialize",id:"21-clone-the-repository-and-initialize",level:3},{value:"2.2 Setting OPENIM_IP",id:"22-setting-openim_ip",level:2},{value:"2.3 Start Services and View Logs",id:"23-start-services-and-view-logs",level:3},{value:"3. Quick Verification",id:"3-quick-verification",level:2},{value:"4. Admin Panel and Monitoring System",id:"4-admin-panel-and-monitoring-system",level:2},{value:"5. About Modifying Configuration Items",id:"5-about-modifying-configuration-items",level:2},{value:"5.1 Shared Configuration Items",id:"51-shared-configuration-items",level:3},{value:"5.2 Modification Methods",id:"52-modification-methods",level:3},{value:"5.3 Modifying Other Configuration Items",id:"53-modifying-other-configuration-items",level:3},{value:"\u2753 6. Common Issues",id:"-6-common-issues",level:2},{value:"6.1 Can send text messages normally, but sending images fails \ud83d\ude15",id:"61-can-send-text-messages-normally-but-sending-images-fails-",level:3},{value:"Solution:",id:"solution",level:4},{value:"6.3. Regarding Docker Version \ud83d\udc0b",id:"63-regarding-docker-version-",level:3},{value:"6.2 \ud83d\udcdc Viewing Logs",id:"62--viewing-logs",level:3}],d={toc:c},g="wrapper";function u(e){var{components:t}=e,n=a(e,["components"]);return(0,o.kt)(g,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){i(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-docker-deployment"},"\ud83d\udee0 Docker Deployment"),(0,o.kt)("h2",{id:"1-environment-and-component-requirements"},"1. Environment and Component Requirements"),(0,o.kt)("p",null,"For server environment, system, and storage components, refer to ",(0,o.kt)("a",{parentName:"p",href:"./env-comp"},"this document")),(0,o.kt)("h2",{id:"2-docker-deployment"},"2. Docker Deployment"),(0,o.kt)("h3",{id:"21-clone-the-repository-and-initialize"},"2.1 Clone the Repository and Initialize"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"git clone https://github.com/openimsdk/openim-docker openim-docker && cd openim-docker && make init\n")),(0,o.kt)("p",null,"\ud83d\udca1 ",(0,o.kt)("strong",{parentName:"p"},"Tips")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you didn't clone directly on your machine, but instead downloaded the ",(0,o.kt)("strong",{parentName:"p"},"openim-docker")," as a compressed package, run the command ",(0,o.kt)("strong",{parentName:"p"},'find ./ -name "*.sh" | xargs chmod +x')," to grant execution permissions to the scripts.")),(0,o.kt)("h2",{id:"22-setting-openim_ip"},"2.2 Setting OPENIM_IP"),(0,o.kt)("p",null,"\ud83d\udd14 ",(0,o.kt)("strong",{parentName:"p"},"It is mandatory to set OPENIM_IP, and it cannot be 127.0.0.1")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'# If the server has a public IP\nexport OPENIM_IP="Public IP"\n\n# If only providing internal network service\nexport OPENIM_IP="Internal IP"\n')),(0,o.kt)("h3",{id:"23-start-services-and-view-logs"},"2.3 Start Services and View Logs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"docker compose up -d\ndocker ps\ndocker compose logs -f openim-chat\ndocker compose logs -f openim-server\n")),(0,o.kt)("h2",{id:"3-quick-verification"},"3. Quick Verification"),(0,o.kt)("p",null,"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"./quickTestServer"},"Quick Verification")," document."),(0,o.kt)("h2",{id:"4-admin-panel-and-monitoring-system"},"4. Admin Panel and Monitoring System"),(0,o.kt)("p",null,"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"./admin"},"Admin Panel and Monitoring System")," document."),(0,o.kt)("h2",{id:"5-about-modifying-configuration-items"},"5. About Modifying Configuration Items"),(0,o.kt)("p",null,"This project's configuration items are quite complex, primarily because some configurations involve multiple files such as ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},".env")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"openim-chat/config/config.yaml")),", and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"openim-server/config/config.yaml")),". The modification instructions are divided into two parts: shared configuration items and other configuration items."),(0,o.kt)("h3",{id:"51-shared-configuration-items"},"5.1 Shared Configuration Items"),(0,o.kt)("p",null,"Shared configuration items for ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},".env")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"openim-chat/config/config.yaml")),", and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"openim-server/config/config.yaml")),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"mysql/mongo/redis/kafka/zookeeper/minio ports and passwords;"),(0,o.kt)("li",{parentName:"ol"},"SECRET;"),(0,o.kt)("li",{parentName:"ol"},"API_OPENIM_PORT;"),(0,o.kt)("li",{parentName:"ol"},"OPENIM_IP;"),(0,o.kt)("li",{parentName:"ol"},"MINIO_PORT;"),(0,o.kt)("li",{parentName:"ol"},"GRAFANA_PORT.")),(0,o.kt)("h3",{id:"52-modification-methods"},"5.2 Modification Methods"),(0,o.kt)("p",null,"For modifying shared configuration items in section 5.1, choose one of the two methods below."),(0,o.kt)("p",null,"Method One: Regenerate All Configurations"),(0,o.kt)("p",null,"If a comprehensive update of configurations is needed, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Delete existing configuration files: delete ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"openim-server/config/config.yaml"))," and ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"openim-chat/config/config.yaml"))," files."),(0,o.kt)("li",{parentName:"ol"},"Modify ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file: update the related configuration items in the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},".env"))," file."),(0,o.kt)("li",{parentName:"ol"},"Regenerate configurations and restart services: execute ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"docker compose down ; docker compose up -d")),". This will regenerate configuration files based on new settings in the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},".env"))," file and restart the services.")),(0,o.kt)("p",null,"Method Two: Modify Multiple Configuration Files Separately"),(0,o.kt)("p",null,"If only partial updates are needed, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Modify ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file: update the related configuration items in the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},".env"))," file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Manually update configuration files: according to the changes in the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},".env"))," file, correspondingly update the configuration items in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"openim-server/config/config.yaml"))," and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"openim-chat/config/config.yaml")),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Special handling for specific variables: if ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"OPENIM_IP")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"API_OPENIM_PORT")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"MINIO_PORT")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"GRAFANA_PORT"))," are modified, update the following configuration items in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"openim-server/config/config.yaml")),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'object:\n  apiURL: "http://$OPENIM_IP:$API_OPENIM_PORT"\n  minio:\n    endpoint: "http://$DOCKER_BRIDGE_GATEWAY:$MINIO_PORT"\n    signEndpoint: "http://$OPENIM_IP:$MINIO_PORT"\n\ngrafanaUrl: http://$OPENIM_IP:$GRAFANA_PORT\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Restart services: execute ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"docker compose down ; docker compose up -d"))," to apply changes and restart services."))),(0,o.kt)("h3",{id:"53-modifying-other-configuration-items"},"5.3 Modifying Other Configuration Items"),(0,o.kt)("p",null,"For non-shared variables in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},".env")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"openim-chat/config/config.yaml")),", and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"openim-server/config/config.yaml")),", these configuration items can be modified individually in the respective files. Execute ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"docker compose down ; docker compose up -d"))," to apply changes and restart services."),(0,o.kt)("h2",{id:"-6-common-issues"},"\u2753 6. Common Issues"),(0,o.kt)("h3",{id:"61-can-send-text-messages-normally-but-sending-images-fails-"},"6.1 Can send text messages normally, but sending images fails \ud83d\ude15"),(0,o.kt)("p",null,"This issue might occur if the ",(0,o.kt)("inlineCode",{parentName:"p"},"OPENIM_IP")," environment variable was not set before executing the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose up -d"),' command. You can confirm this by checking the startup logs or using the following command to search for the "127.0.0.1" address in the logs:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'grep "127.0.0.1" openim-server/_output/logs/openim-docker.log\n')),(0,o.kt)("h4",{id:"solution"},"Solution:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"OPENIM_IP")," environment variable to your public IP address, or to your internal IP address if you are providing services within a LAN:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export OPENIM_IP="<Public-IP>"\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"sed")," command to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"apiURL")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"signEndpoint")," configuration items in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml")," file, changing the address to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"OPENIM_IP")," environment variable specified IP address:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sed -i -e "s/apiURL: \\"http:\\/\\/127\\.0\\.0\\.1/apiURL: \\"http:\\/\\/${OPENIM_IP}/" \\\n       -e "s/signEndpoint: \\"http:\\/\\/127\\.0\\.0\\.1/signEndpoint: \\"http:\\/\\/${OPENIM_IP}/" \\\n       openim-server/config/config.yaml\n')))),(0,o.kt)("p",null,"After modifying the configuration and restarting the service with the above steps, sending images should work normally."),(0,o.kt)("h3",{id:"63-regarding-docker-version-"},"6.3. Regarding Docker Version \ud83d\udc0b"),(0,o.kt)("p",null,"It is strongly recommended to use the docker compose command instead of docker-compose, as older Docker versions might not support the gateway feature\u274c. We advise upgrading to a newer version, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"23.0.1"),"\ud83d\udd1d."),(0,o.kt)("h3",{id:"62--viewing-logs"},"6.2 \ud83d\udcdc Viewing Logs"),(0,o.kt)("p",null,"Log locations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Runtime logs: ",(0,o.kt)("inlineCode",{parentName:"li"},"{openim-server, openim-chat}/_output/logs/openim-all.*")),(0,o.kt)("li",{parentName:"ul"},"Startup logs: ",(0,o.kt)("inlineCode",{parentName:"li"},"{openim-server, openim-chat}/_output/logs/openim-docker.log"))),(0,o.kt)("hr",null))}u.isMDXComponent=!0}}]);