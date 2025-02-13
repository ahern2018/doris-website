"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["11595"],{575226:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>a,default:()=>x,assets:()=>i,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKENDS","title":"SHOW BACKENDS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKENDS.md","sourceDirName":"sql-manual/sql-statements/cluster-management/instance-management","slug":"/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKENDS","permalink":"/zh-CN/docs/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKENDS","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW BACKENDS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MODIFY BACKEND","permalink":"/zh-CN/docs/sql-manual/sql-statements/cluster-management/instance-management/MODIFY-BACKEND"},"next":{"title":"DECOMMISSION BACKEND","permalink":"/zh-CN/docs/sql-manual/sql-statements/cluster-management/instance-management/DECOMMISSION-BACKEND"}}'),r=t("785893"),d=t("250065");let l={title:"SHOW BACKENDS",language:"zh-CN"},a=void 0,i={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function h(n){let e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(e.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u67E5\u770B BE \u8282\u70B9\u7684\u57FA\u672C\u72B6\u6001\u4FE1\u606F\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:" SHOW BACKENDS\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5217\u540D"}),(0,r.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"BackendId"}),(0,r.jsx)(e.td,{children:"\u5F53\u524D BE \u7684 ID"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Host"}),(0,r.jsx)(e.td,{children:"\u5F53\u524D BE \u7684 IP \u5730\u5740\u6216\u4E3B\u673A\u540D"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"HeartbeatPort"}),(0,r.jsx)(e.td,{children:"\u5F53\u524D BE \u7684\u5FC3\u8DF3\u670D\u52A1\u901A\u4FE1\u7AEF\u53E3"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"BePort"}),(0,r.jsx)(e.td,{children:"\u5F53\u524D BE \u7684 thrift RPC \u901A\u4FE1\u7AEF\u53E3"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"HttpPort"}),(0,r.jsx)(e.td,{children:"\u5F53\u524D BE \u7684 http \u901A\u4FE1\u7AEF\u53E3"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"BrpcPort"}),(0,r.jsx)(e.td,{children:"\u5F53\u524D BE \u7684 bRPC \u901A\u4FE1\u7AEF\u53E3"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ArrowFlightSqlPort"}),(0,r.jsx)(e.td,{children:"\u5F53\u524D BE \u7684 ArrowFlight \u534F\u8BAE\u901A\u4FE1\u7AEF\u53E3"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"LastStartTime"}),(0,r.jsx)(e.td,{children:"\u5F53\u524D BE \u542F\u52A8\u7684\u65F6\u95F4\u6233"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"LastHeartbeat"}),(0,r.jsx)(e.td,{children:"\u5F53\u524D BE \u4E0A\u4E00\u6B21\u6210\u529F\u53D1\u9001\u5FC3\u8DF3\u7684\u65F6\u95F4\u6233"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Alive"}),(0,r.jsx)(e.td,{children:"\u5F53\u524D BE \u662F\u5426\u5B58\u6D3B"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"SystemDecommissioned"}),(0,r.jsx)(e.td,{children:"\u8BE5\u503C\u4E3A true \u65F6\uFF0C\u8868\u793A\u5F53\u524D BE \u8282\u70B9\u6B63\u5728\u5B89\u5168\u4E0B\u7EBF\u4E2D"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"TabletNum"}),(0,r.jsx)(e.td,{children:"\u5F53\u524D BE \u4E0A\u5B58\u50A8\u7684\u6570\u636E\u5206\u7247\u6570\u91CF"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DataUsedCapacity"}),(0,r.jsx)(e.td,{children:"\u5F53\u524D BE \u6570\u636E\u6240\u5360\u7528\u7684\u78C1\u76D8\u7A7A\u95F4"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"TrashUsedCapacity"}),(0,r.jsx)(e.td,{children:"\u5F53\u524D BE \u5783\u573E\u56DE\u6536\u7AD9\u4E2D\u6570\u636E\u6240\u5360\u7528\u7684\u78C1\u76D8\u7A7A\u95F4"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"AvailCapacity"}),(0,r.jsx)(e.td,{children:"\u5F53\u524D BE \u53EF\u7528\u7684\u78C1\u76D8\u7A7A\u95F4"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"TotalCapacity"}),(0,r.jsx)(e.td,{children:"\u5F53\u524D BE \u603B\u7684\u78C1\u76D8\u7A7A\u95F4\uFF0CTotalCapacity = AvailCapacity + TrashUsedCapacity + DataUsedCapacity + \u5176\u4ED6\u975E\u7528\u6237\u6570\u636E\u6587\u4EF6\u5360\u7528\u7A7A\u95F4"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"UsedPct"}),(0,r.jsx)(e.td,{children:"\u5F53\u524D BE \u6240\u6709\u78C1\u76D8\u603B\u7684\u5DF2\u4F7F\u7528\u91CF\u767E\u5206\u6BD4"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"MaxDiskUsedPct"}),(0,r.jsx)(e.td,{children:"\u5F53\u524D BE \u6240\u6709\u78C1\u76D8\u7684\u5DF2\u4F7F\u7528\u91CF\u767E\u5206\u6BD4\u4E2D\u6700\u5927\u7684\u4E00\u4E2A"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"RemoteUsedCapacity"}),(0,r.jsx)(e.td,{children:"\u5F53\u524D BE \u5728\u4F7F\u7528\u4E86\u51B7\u70ED\u5206\u5C42\u529F\u80FD\u540E\uFF0C\u4E0A\u4F20\u5230\u8FDC\u7AEF\u5B58\u50A8\u7684\u6570\u636E\u5360\u7528\u7A7A\u95F4"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Tag"}),(0,r.jsx)(e.td,{children:"\u5F53\u524D BE \u7684\u6807\u7B7E\u4FE1\u606F\uFF0C\u4EE5 JSON \u683C\u5F0F\u5C55\u793A\uFF0C\u4FDD\u5B58\u5F53\u524D BE \u8D44\u6E90\u7EC4\u540D\u79F0"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ErrMsg"}),(0,r.jsx)(e.td,{children:"\u5F53\u524D BE \u5FC3\u8DF3\u5931\u8D25\u65F6\u7684\u9519\u8BEF\u4FE1\u606F"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Version"}),(0,r.jsx)(e.td,{children:"\u5F53\u524D BE \u7684\u7248\u672C\u4FE1\u606F"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Status"}),(0,r.jsx)(e.td,{children:"\u5F53\u524D BE \u7684\u4E00\u4E9B\u72B6\u6001\u4FE1\u606F\uFF0C\u4EE5 JSON \u683C\u5F0F\u5C55\u793A\uFF0C\u5305\u62EC\uFF1A\u4E0A\u4E00\u6B21\u6210\u529F\u4E0A\u62A5 tablet \u7684\u65F6\u95F4\u3001\u4E0A\u4E00\u6B21 StreamLoad \u7684\u65F6\u95F4\u3001\u662F\u5426\u5141\u8BB8\u67E5\u8BE2\u3001\u662F\u5426\u5141\u8BB8\u5BFC\u5165\u7B49\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4E0D\u540C\u7248\u672C\u4FDD\u5B58\u7684\u4FE1\u606F\u4F1A\u6709\u4E9B\u8BB8\u5DEE\u5F02"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"HeartbeatFailureCounter"}),(0,r.jsxs)(e.td,{children:["\u5F53\u524D BE \u8FDE\u7EED\u5931\u8D25\u7684\u5FC3\u8DF3\u6B21\u6570\uFF0C\u5982\u679C\u6B21\u6570\u8D85\u8FC7 FE Master \u914D\u7F6E",(0,r.jsx)(e.code,{children:"max_backend_heartbeat_failure_tolerance_count"}),"\uFF08\u9ED8\u8BA4\u503C\u4E3A 1\uFF09\uFF0C\u5219 ",(0,r.jsx)(e.code,{children:"Alive"})," \u5B57\u6BB5\u4F1A\u7F6E\u4E3A false"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"NodeRole"}),(0,r.jsxs)(e.td,{children:["\u5F53\u524D BE \u7684\u89D2\u8272\uFF0C\u6709\u4E24\u79CD\uFF1A",(0,r.jsx)(e.code,{children:"mix"}),"\u662F\u9ED8\u8BA4\u7684\u89D2\u8272\uFF0C",(0,r.jsx)(e.code,{children:"computation"}),"\u8868\u793A\u5F53\u524D\u8282\u70B9\u53EA\u7528\u4E8E\u8054\u90A6\u5206\u6790\u67E5\u8BE2"]})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884C\u6B64 SQL \u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u81F3\u5C11\u5177\u6709\u4EE5\u4E0B\u6743\u9650\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u6743\u9650"}),(0,r.jsx)(e.th,{children:"\u5BF9\u8C61"}),(0,r.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ADMIN_PRIV"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]})})]}),"\n",(0,r.jsx)(e.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679C\u9700\u8981\u5BF9\u67E5\u8BE2\u7ED3\u679C\u8FDB\u884C\u8FDB\u4E00\u6B65\u7684\u8FC7\u6EE4\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8868\u503C\u51FD\u6570",(0,r.jsx)(e.a,{href:"/zh-CN/docs/sql-manual/sql-functions/table-valued-functions/backends",children:"backends()"}),"\u3002",(0,r.jsx)(e.code,{children:"SHOW BACKENDS"})," \u4E0E\u4E0B\u9762\u8BED\u53E5\u7B49\u4EF7\uFF1A"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT * FROM BACKENDS();\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SHOW BACKENDS;\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:'+-----------+-----------+---------------+--------+----------+----------+--------------------+---------------------+---------------------+-------+----------------------+-----------+------------------+-------------------+---------------+---------------+---------+----------------+--------------------+--------------------------+--------+-----------------------------+------------------------------------------------------------------------------------------------------------------------------------------+-------------------------+----------+\n| BackendId | Host      | HeartbeatPort | BePort | HttpPort | BrpcPort | ArrowFlightSqlPort | LastStartTime       | LastHeartbeat       | Alive | SystemDecommissioned | TabletNum | DataUsedCapacity | TrashUsedCapacity | AvailCapacity | TotalCapacity | UsedPct | MaxDiskUsedPct | RemoteUsedCapacity | Tag                      | ErrMsg | Version                     | Status                                                                                                                                   | HeartbeatFailureCounter | NodeRole |\n+-----------+-----------+---------------+--------+----------+----------+--------------------+---------------------+---------------------+-------+----------------------+-----------+------------------+-------------------+---------------+---------------+---------+----------------+--------------------+--------------------------+--------+-----------------------------+------------------------------------------------------------------------------------------------------------------------------------------+-------------------------+----------+\n| 10002     | 127.0.0.1 | 9050          | 9060   | 8040     | 8060     | 10040              | 2025-01-20 02:11:39 | 2025-01-21 11:52:40 | true  | false                | 281       | 9.690 MB         | 0.000             | 10.505 GB     | 71.750 GB     | 85.36 % | 85.36 %        | 0.000              | {"location" : "default"} |        | doris-2.1.7-rc03-443e87e203 | {"lastSuccessReportTabletsTime":"2025-01-21 11:51:59","lastStreamLoadTime":1737460114345,"isQueryDisabled":false,"isLoadDisabled":false} | 0                       | mix      |\n+-----------+-----------+---------------+--------+----------+----------+--------------------+---------------------+---------------------+-------+----------------------+-----------+------------------+-------------------+---------------+---------------+---------+----------------+--------------------+--------------------------+--------+-----------------------------+------------------------------------------------------------------------------------------------------------------------------------------+-------------------------+----------+\n'})})]})}function x(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return l}});var s=t(667294);let r={},d=s.createContext(r);function l(n){let e=s.useContext(d);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);