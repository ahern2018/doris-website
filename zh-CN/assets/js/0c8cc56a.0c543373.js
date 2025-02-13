"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["401907"],{846952:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>c,default:()=>h,assets:()=>t,toc:()=>o,frontMatter:()=>d});var l=JSON.parse('{"id":"admin-manual/cluster-management/fqdn","title":"FQDN","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/cluster-management/fqdn.md","sourceDirName":"admin-manual/cluster-management","slug":"/admin-manual/cluster-management/fqdn","permalink":"/zh-CN/docs/dev/admin-manual/cluster-management/fqdn","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"FQDN","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u65F6\u533A\u7BA1\u7406","permalink":"/zh-CN/docs/dev/admin-manual/cluster-management/time-zone"},"next":{"title":"\u8D1F\u8F7D\u7BA1\u7406\u6982\u8FF0","permalink":"/zh-CN/docs/dev/admin-manual/workload-management/workload-management-summary"}}'),i=s("785893"),r=s("250065");let d={title:"FQDN",language:"zh-CN"},c=void 0,t={},o=[{value:"\u524D\u7F6E\u6761\u4EF6",id:"\u524D\u7F6E\u6761\u4EF6",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2},{value:"\u65B0\u96C6\u7FA4\u542F\u7528 FQDN",id:"\u65B0\u96C6\u7FA4\u542F\u7528-fqdn",level:3},{value:"K8s \u90E8\u7F72 Doris",id:"k8s-\u90E8\u7F72-doris",level:3},{value:"\u670D\u52A1\u5668\u53D8\u66F4 IP",id:"\u670D\u52A1\u5668\u53D8\u66F4-ip",level:3},{value:"\u65E7\u96C6\u7FA4\u542F\u7528 FQDN",id:"\u65E7\u96C6\u7FA4\u542F\u7528-fqdn",level:3},{value:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u672C\u6587\u4ECB\u7ECD\u5982\u4F55\u542F\u7528\u57FA\u4E8E FQDN\uFF08Fully Qualified Domain Name\uFF0C\u5B8C\u5168\u9650\u5B9A\u57DF\u540D\uFF09\u4F7F\u7528 Apache Doris\u3002FQDN \u662F Internet \u4E0A\u7279\u5B9A\u8BA1\u7B97\u673A\u6216\u4E3B\u673A\u7684\u5B8C\u6574\u57DF\u540D\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["Doris \u652F\u6301 FQDN \u4E4B\u540E\uFF0C\u5404\u8282\u70B9\u4E4B\u95F4\u901A\u4FE1\u5B8C\u5168\u57FA\u4E8E FQDN\u3002\u6DFB\u52A0\u5404\u7C7B\u8282\u70B9\u65F6\u5E94\u76F4\u63A5\u6307\u5B9A FQDN\uFF0C\u4F8B\u5982\u6DFB\u52A0 BE \u8282\u70B9\u7684\u547D\u4EE4\u4E3A",(0,i.jsx)(n.code,{children:'ALTER SYSTEM ADD BACKEND "be_host:heartbeat_service_port"'}),"\uFF0C"]}),"\n",(0,i.jsx)(n.p,{children:'"be_host" \u6B64\u524D\u662F BE \u8282\u70B9\u7684 IP\uFF0C\u542F\u52A8 FQDN \u540E\uFF0Cbe_host \u5E94\u6307\u5B9A BE \u8282\u70B9\u7684 FQDN\u3002'}),"\n",(0,i.jsx)(n.h2,{id:"\u524D\u7F6E\u6761\u4EF6",children:"\u524D\u7F6E\u6761\u4EF6"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["fe.conf \u6587\u4EF6 \u8BBE\u7F6E ",(0,i.jsx)(n.code,{children:"enable_fqdn_mode = true"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u96C6\u7FA4\u4E2D\u7684\u6240\u6709\u673A\u5668\u90FD\u5FC5\u987B\u914D\u7F6E\u6709\u4E3B\u673A\u540D\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5FC5\u987B\u5728\u96C6\u7FA4\u4E2D\u6BCF\u53F0\u673A\u5668\u7684 ",(0,i.jsx)(n.code,{children:"/etc/hosts"})," \u6587\u4EF6\u4E2D\u6307\u5B9A\u96C6\u7FA4\u4E2D\u5176\u4ED6\u673A\u5668\u5BF9\u5E94\u7684 IP \u5730\u5740\u548C FQDN\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"/etc/hosts \u6587\u4EF6\u4E2D\u4E0D\u80FD\u6709\u91CD\u590D\u7684 IP \u5730\u5740\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,i.jsx)(n.h3,{id:"\u65B0\u96C6\u7FA4\u542F\u7528-fqdn",children:"\u65B0\u96C6\u7FA4\u542F\u7528 FQDN"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u51C6\u5907\u673A\u5668\uFF0C\u4F8B\u5982\u60F3\u90E8\u7F72 3FE 3BE \u7684\u96C6\u7FA4\uFF0C\u53EF\u4EE5\u51C6\u5907 6 \u53F0\u673A\u5668\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u6BCF\u53F0\u673A\u5668\u6267\u884C",(0,i.jsx)(n.code,{children:"host"}),"\u8FD4\u56DE\u7ED3\u679C\u90FD\u552F\u4E00\uFF0C\u5047\u8BBE\u516D\u53F0\u673A\u5668\u7684\u6267\u884C\u7ED3\u679C\u5206\u522B\u4E3A fe1,fe2,fe3,be1,be2,be3\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5728 6 \u53F0\u673A\u5668\u7684",(0,i.jsx)(n.code,{children:"/etc/hosts"})," \u4E2D\u914D\u7F6E 6 \u4E2A FQDN \u5BF9\u5E94\u7684\u771F\u5B9E IP\uFF0C\u4F8B\u5982\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"172.22.0.1 fe1\n172.22.0.2 fe2\n172.22.0.3 fe3\n172.22.0.4 be1\n172.22.0.5 be2\n172.22.0.6 be3\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u9A8C\u8BC1\uFF1A\u53EF\u4EE5\u5728 FE1 \u4E0A ",(0,i.jsx)(n.code,{children:"ping fe2"})," \u7B49\uFF0C\u80FD\u89E3\u6790\u51FA\u6B63\u786E\u7684 IP \u5E76\u4E14\u80FD Ping \u901A\uFF0C\u4EE3\u8868\u7F51\u7EDC\u73AF\u5883\u53EF\u7528\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u6BCF\u4E2A FE \u8282\u70B9\u7684 fe.conf \u8BBE\u7F6E ",(0,i.jsx)(n.code,{children:"enable_fqdn_mode = true"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u53C2\u8003",(0,i.jsx)(n.a,{href:"../../install/cluster-deployment/standard-deployment",children:"\u624B\u52A8\u90E8\u7F72"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u6309\u9700\u5728\u516D\u53F0\u673A\u5668\u4E0A\u9009\u62E9\u51E0\u53F0\u673A\u5668\u90E8\u7F72 broker\uFF0C\u6267\u884C",(0,i.jsx)(n.code,{children:'ALTER SYSTEM ADD BROKER broker_name "fe1:8000","be1:8000",...;'}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"k8s-\u90E8\u7F72-doris",children:"K8s \u90E8\u7F72 Doris"}),"\n",(0,i.jsx)(n.p,{children:"Pod \u610F\u5916\u91CD\u542F\u540E\uFF0CK8s \u4E0D\u80FD\u4FDD\u8BC1 Pod \u7684 IP \u4E0D\u53D1\u751F\u53D8\u5316\uFF0C\u4F46\u662F\u80FD\u4FDD\u8BC1\u57DF\u540D\u4E0D\u53D8\uFF0C\u57FA\u4E8E\u8FD9\u4E00\u7279\u6027\uFF0CDoris \u5F00\u542F FQDN \u65F6\uFF0C\u80FD\u4FDD\u8BC1 Pod \u610F\u5916\u91CD\u542F\u540E\uFF0C\u8FD8\u80FD\u6B63\u5E38\u63D0\u4F9B\u670D\u52A1\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["K8s \u90E8\u7F72 Doris \u7684\u65B9\u6CD5\u8BF7\u53C2\u8003",(0,i.jsx)(n.a,{href:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-doris-cluster",children:"K8s \u90E8\u7F72 Doris"})]}),"\n",(0,i.jsx)(n.h3,{id:"\u670D\u52A1\u5668\u53D8\u66F4-ip",children:"\u670D\u52A1\u5668\u53D8\u66F4 IP"}),"\n",(0,i.jsxs)(n.p,{children:["\u6309\u7167'\u65B0\u96C6\u7FA4\u542F\u7528 FQDN'\u90E8\u7F72\u597D\u96C6\u7FA4\u540E\uFF0C\u5982\u679C\u60F3\u53D8\u66F4\u673A\u5668\u7684 IP\uFF0C\u65E0\u8BBA\u662F\u5207\u6362\u7F51\u5361\uFF0C\u6216\u8005\u662F\u66F4\u6362\u673A\u5668\uFF0C\u53EA\u9700\u8981\u66F4\u6539\u5404\u673A\u5668\u7684",(0,i.jsx)(n.code,{children:"/etc/hosts"}),"\u5373\u53EF\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u65E7\u96C6\u7FA4\u542F\u7528-fqdn",children:"\u65E7\u96C6\u7FA4\u542F\u7528 FQDN"}),"\n",(0,i.jsxs)(n.p,{children:["\u524D\u63D0\u6761\u4EF6\uFF1A\u5F53\u524D\u7A0B\u5E8F\u652F\u6301",(0,i.jsx)(n.code,{children:'ALTER SYSTEM MODIFY FRONTEND "<fe_ip>:<edit_log_port>" HOSTNAME "<fe_hostname>"'}),"\u8BED\u6CD5\uFF0C\n\u5982\u679C\u4E0D\u652F\u6301\uFF0C\u9700\u8981\u5347\u7EA7\u5230\u652F\u6301\u8BE5\u8BED\u6CD5\u7684\u7248\u672C"]}),"\n",(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsx)(n.p,{children:"\u6CE8\u610F\uFF1A"}),(0,i.jsx)(n.p,{children:"\u81F3\u5C11\u6709\u4E09\u53F0 follower \u624D\u80FD\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF0C\u5426\u5219\u4F1A\u9020\u6210\u96C6\u7FA4\u65E0\u6CD5\u6B63\u5E38\u542F\u52A8"})]}),"\n",(0,i.jsx)(n.p,{children:"\u63A5\u4E0B\u6765\u6309\u7167\u5982\u4E0B\u6B65\u9AA4\u64CD\u4F5C\uFF1A"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"1. \u9010\u4E00\u5BF9 Follower\u3001Observer \u8282\u70B9\u8FDB\u884C\u4EE5\u4E0B\u64CD\u4F5C (\u6700\u540E\u64CD\u4F5C Master \u8282\u70B9)\uFF1A"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u505C\u6B62\u8282\u70B9\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u68C0\u67E5\u8282\u70B9\u662F\u5426\u505C\u6B62\u3002\u901A\u8FC7 MySQL \u5BA2\u6237\u7AEF\u6267\u884C",(0,i.jsx)(n.code,{children:"show frontends"}),"\uFF0C\u67E5\u770B\u8BE5 FE \u8282\u70B9\u7684 Alive \u72B6\u6001\u76F4\u81F3\u53D8\u4E3A false"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4E3A\u8282\u70B9\u8BBE\u7F6E FQDN: ",(0,i.jsx)(n.code,{children:'ALTER SYSTEM MODIFY FRONTEND "<fe_ip>:<edit_log_port>" HOSTNAME "<fe_hostname>"'}),"\uFF08\u505C\u6389 master \u540E\uFF0C\u4F1A\u9009\u4E3E\u51FA\u65B0\u7684 master \u8282\u70B9\uFF0C\u7528\u65B0\u7684 master \u8282\u70B9\u6765\u6267\u884C sql \u8BED\u53E5\uFF09"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4FEE\u6539\u8282\u70B9\u914D\u7F6E\u3002\u4FEE\u6539 FE \u6839\u76EE\u5F55\u4E2D\u7684",(0,i.jsx)(n.code,{children:"conf/fe.conf"}),"\u6587\u4EF6\uFF0C\u6DFB\u52A0\u914D\u7F6E\uFF1A",(0,i.jsx)(n.code,{children:"enable_fqdn_mode = true"}),"\u3002\u5982\u679C\u5728\u521A\u505C\u6B62\u7684\u8282\u70B9\u5BF9\u5E94 fe.conf \u6DFB\u52A0\u4E86\u914D\u7F6E\u540E\u65E0\u6CD5\u6B63\u5E38\u542F\u52A8\uFF0C\u8BF7\u5728\u6240\u6709 fe.conf \u4E2D\u6DFB\u52A0\u914D\u7F6E",(0,i.jsx)(n.code,{children:"enable_fqdn_mode = true"}),"\u540E\u518D\u542F\u52A8\u521A\u521A\u505C\u6B62\u7684 fe \u8282\u70B9"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u542F\u52A8\u8282\u70B9\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"2. BE \u8282\u70B9\u542F\u7528 FQDN \u53EA\u9700\u8981\u901A\u8FC7 MySQL \u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u4E0D\u9700\u8981\u5BF9 BE \u6267\u884C\u91CD\u542F\u64CD\u4F5C\u3002"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'ALTER SYSTEM MODIFY BACKEND "<backend_ip>:<HeartbeatPort>" HOSTNAME "<be_hostname>"'}),"\uFF0C\u5982\u679C\u4F60\u4E0D\u77E5\u9053\u7AEF\u53E3 HeartbeatPort \u662F\u591A\u5C11\uFF0C\u8BF7\u4F7F\u7528 show backends \u547D\u4EE4\u6765\u5E2E\u52A9\u5BFB\u627E\u6B64\u7AEF\u53E3;"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u914D\u7F6E\u9879 enable_fqdn_mode \u53EF\u4EE5\u968F\u610F\u66F4\u6539\u4E48\uFF1F"}),"\n",(0,i.jsx)(n.p,{children:"\u4E0D\u80FD\u968F\u610F\u66F4\u6539\uFF0C\u66F4\u6539\u8BE5\u914D\u7F6E\u8981\u6309\u7167'\u65E7\u96C6\u7FA4\u542F\u7528 FQDN'\u8FDB\u884C\u64CD\u4F5C\u3002"}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var l=s(667294);let i={},r=l.createContext(i);function d(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);