"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["344607"],{770762:function(n,e,s){s.r(e),s.d(e,{metadata:()=>i,contentTitle:()=>c,default:()=>a,assets:()=>o,toc:()=>h,frontMatter:()=>r});var i=JSON.parse('{"id":"admin-manual/cluster-management/time-zone","title":"\u65F6\u533A\u7BA1\u7406","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/cluster-management/time-zone.md","sourceDirName":"admin-manual/cluster-management","slug":"/admin-manual/cluster-management/time-zone","permalink":"/zh-CN/docs/3.0/admin-manual/cluster-management/time-zone","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u65F6\u533A\u7BA1\u7406","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u8D1F\u8F7D\u5747\u8861","permalink":"/zh-CN/docs/3.0/admin-manual/cluster-management/load-balancing"},"next":{"title":"FQDN","permalink":"/zh-CN/docs/3.0/admin-manual/cluster-management/fqdn"}}'),l=s("785893"),d=s("250065");let r={title:"\u65F6\u533A\u7BA1\u7406",language:"zh-CN"},c=void 0,o={},h=[{value:"\u57FA\u672C\u6982\u5FF5",id:"\u57FA\u672C\u6982\u5FF5",level:2},{value:"\u5177\u4F53\u64CD\u4F5C",id:"\u5177\u4F53\u64CD\u4F5C",level:2},{value:"\u6570\u636E\u6765\u6E90",id:"\u6570\u636E\u6765\u6E90",level:2},{value:"\u65F6\u533A\u7684\u5F71\u54CD",id:"\u65F6\u533A\u7684\u5F71\u54CD",level:2},{value:"1. \u51FD\u6570",id:"1-\u51FD\u6570",level:3},{value:"2. \u65F6\u95F4\u7C7B\u578B\u7684\u503C",id:"2-\u65F6\u95F4\u7C7B\u578B\u7684\u503C",level:3},{value:"3. \u590F\u4EE4\u65F6",id:"3-\u590F\u4EE4\u65F6",level:3},{value:"\u4F7F\u7528\u65B9\u5F0F",id:"\u4F7F\u7528\u65B9\u5F0F",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2},{value:"\u65F6\u533A\u654F\u611F\u6570\u636E",id:"\u65F6\u533A\u654F\u611F\u6570\u636E",level:3},{value:"\u590F\u4EE4\u65F6",id:"\u590F\u4EE4\u65F6",level:3},{value:"\u4FE1\u606F\u66F4\u65B0",id:"\u4FE1\u606F\u66F4\u65B0",level:3},{value:"\u62D3\u5C55\u9605\u8BFB",id:"\u62D3\u5C55\u9605\u8BFB",level:2}];function t(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"Doris \u652F\u6301\u81EA\u5B9A\u4E49\u65F6\u533A\u8BBE\u7F6E"}),"\n",(0,l.jsx)(e.h2,{id:"\u57FA\u672C\u6982\u5FF5",children:"\u57FA\u672C\u6982\u5FF5"}),"\n",(0,l.jsx)(e.p,{children:"Doris \u5185\u90E8\u5B58\u5728\u4EE5\u4E0B\u4E24\u4E2A\u65F6\u533A\u76F8\u5173\u53C2\u6570\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"system_time_zone : \u5F53\u670D\u52A1\u5668\u542F\u52A8\u65F6\uFF0C\u4F1A\u6839\u636E\u673A\u5668\u8BBE\u7F6E\u65F6\u533A\u81EA\u52A8\u8BBE\u7F6E\uFF0C\u8BBE\u7F6E\u540E\u4E0D\u53EF\u4FEE\u6539\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["time_zone : \u96C6\u7FA4\u5F53\u524D\u65F6\u533A\uFF0C\u53EF\u4EE5\u4FEE\u6539\u3002\u96C6\u7FA4\u542F\u52A8\u65F6\uFF0C\u8BE5\u53D8\u91CF\u4F1A\u8BBE\u7F6E\u4E3A\u4E0E ",(0,l.jsx)(e.code,{children:"system_time_zone"})," \u76F8\u540C\uFF0C\u4E4B\u540E\u4E0D\u518D\u53D8\u52A8\uFF0C\u9664\u975E\u7528\u6237\u624B\u52A8\u4FEE\u6539\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u5177\u4F53\u64CD\u4F5C",children:"\u5177\u4F53\u64CD\u4F5C"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"show variables like '%time_zone%'"})}),"\n",(0,l.jsx)(e.p,{children:"\u67E5\u770B\u5F53\u524D\u65F6\u533A\u76F8\u5173\u914D\u7F6E"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"SET [global] time_zone = 'Asia/Shanghai'"})}),"\n",(0,l.jsxs)(e.p,{children:["\u8BE5\u547D\u4EE4\u53EF\u4EE5\u8BBE\u7F6E Session \u7EA7\u522B\u7684\u65F6\u533A\uFF0C\u5982\u4F7F\u7528 ",(0,l.jsx)(e.code,{children:"global"})," \u5173\u952E\u5B57\uFF0C\u5219 Doris FE \u4F1A\u5C06\u53C2\u6570\u6301\u4E45\u5316\uFF0C\u4E4B\u540E\u5BF9\u6240\u6709\u65B0 Session \u751F\u6548\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u6570\u636E\u6765\u6E90",children:"\u6570\u636E\u6765\u6E90"}),"\n",(0,l.jsxs)(e.p,{children:["\u65F6\u533A\u6570\u636E\u5305\u542B\u65F6\u533A\u540D\u3001\u5BF9\u5E94\u65F6\u95F4\u504F\u79FB\u91CF\u3001\u590F\u4EE4\u65F6\u53D8\u5316\u60C5\u51B5\u7B49\u3002\u5728 BE \u6240\u5728\u673A\u5668\u4E0A\uFF0C\u5176\u6570\u636E\u6765\u6E90\u4E3A ",(0,l.jsx)(e.code,{children:"TZDIR"})," \u547D\u4EE4\u8FD4\u56DE\u7684\u76EE\u5F55\uFF0C\u5982\u4E0D\u652F\u6301\u8BE5\u547D\u4EE4\uFF0C\u5219\u4E3A ",(0,l.jsx)(e.code,{children:"/usr/share/zoneinfo"})," \u76EE\u5F55\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u65F6\u533A\u7684\u5F71\u54CD",children:"\u65F6\u533A\u7684\u5F71\u54CD"}),"\n",(0,l.jsx)(e.h3,{id:"1-\u51FD\u6570",children:"1. \u51FD\u6570"}),"\n",(0,l.jsxs)(e.p,{children:["\u5305\u62EC ",(0,l.jsx)(e.code,{children:"NOW()"})," \u6216 ",(0,l.jsx)(e.code,{children:"CURTIME()"})," \u7B49\u65F6\u95F4\u51FD\u6570\u663E\u793A\u7684\u503C\uFF0C\u4E5F\u5305\u62EC ",(0,l.jsx)(e.code,{children:"show load"}),", ",(0,l.jsx)(e.code,{children:"show backends"})," \u4E2D\u7684\u65F6\u95F4\u503C\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u4F46\u4E0D\u4F1A\u5F71\u54CD ",(0,l.jsx)(e.code,{children:"create table"})," \u4E2D\u65F6\u95F4\u7C7B\u578B\u5206\u533A\u5217\u7684 less than \u503C\uFF0C\u4E5F\u4E0D\u4F1A\u5F71\u54CD\u5B58\u50A8\u4E3A ",(0,l.jsx)(e.code,{children:"date/datetime"})," \u7C7B\u578B\u7684\u503C\u7684\u663E\u793A\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u53D7\u65F6\u533A\u5F71\u54CD\u7684\u51FD\u6570\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"FROM_UNIXTIME"}),"\uFF1A\u7ED9\u5B9A\u4E00\u4E2A UTC \u65F6\u95F4\u6233\uFF0C\u8FD4\u56DE\u5176\u5728 Doris session ",(0,l.jsx)(e.code,{children:"time_zone"})," \u6307\u5B9A\u65F6\u533A\u7684\u65E5\u671F\u65F6\u95F4\uFF0C\u5982",(0,l.jsx)(e.code,{children:"time_zone"}),"\u4E3A",(0,l.jsx)(e.code,{children:"CST"}),"\u65F6",(0,l.jsx)(e.code,{children:"FROM_UNIXTIME(0)"}),"\u8FD4\u56DE",(0,l.jsx)(e.code,{children:"1970-01-01 08:00:00"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"UNIX_TIMESTAMP"}),"\uFF1A\u7ED9\u5B9A\u4E00\u4E2A\u65E5\u671F\u65F6\u95F4\uFF0C\u8FD4\u56DE\u5176\u5728 Doris session ",(0,l.jsx)(e.code,{children:"time_zone"})," \u6307\u5B9A\u65F6\u533A\u4E0B\u7684 UTC \u65F6\u95F4\u6233\uFF0C\u5982",(0,l.jsx)(e.code,{children:"time_zone"}),"\u4E3A",(0,l.jsx)(e.code,{children:"CST"}),"\u65F6",(0,l.jsx)(e.code,{children:"UNIX_TIMESTAMP('1970-01-01 08:00:00')"}),"\u8FD4\u56DE",(0,l.jsx)(e.code,{children:"0"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"CURTIME"}),"\uFF1A\u8FD4\u56DE\u5F53\u524D Doris session ",(0,l.jsx)(e.code,{children:"time_zone"})," \u6307\u5B9A\u65F6\u533A\u7684\u65F6\u95F4\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"NOW"}),"\uFF1A\u8FD4\u56DE\u5F53\u524D Doris session ",(0,l.jsx)(e.code,{children:"time_zone"})," \u6307\u5B9A\u65F6\u533A\u7684\u65E5\u671F\u65F6\u95F4\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"CONVERT_TZ"}),"\uFF1A\u5C06\u4E00\u4E2A\u65E5\u671F\u65F6\u95F4\u4ECE\u4E00\u4E2A\u6307\u5B9A\u65F6\u533A\u8F6C\u6362\u5230\u53E6\u4E00\u4E2A\u6307\u5B9A\u65F6\u533A\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"2-\u65F6\u95F4\u7C7B\u578B\u7684\u503C",children:"2. \u65F6\u95F4\u7C7B\u578B\u7684\u503C"}),"\n",(0,l.jsxs)(e.p,{children:["\u5BF9\u4E8E",(0,l.jsx)(e.code,{children:"DATE"}),"\u3001",(0,l.jsx)(e.code,{children:"DATETIME"}),"\u7C7B\u578B\uFF0C\u6211\u4EEC\u652F\u6301\u5BFC\u5165\u6570\u636E\u65F6\u5BF9\u65F6\u533A\u8FDB\u884C\u8F6C\u6362\u3002"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:['\u5982\u679C\u6570\u636E\u5E26\u6709\u65F6\u533A\uFF0C\u5982 "2020-12-12 12:12:12+08:00"\uFF0C\u800C Stream Load \u6307\u5B9A\u7684 Header ',(0,l.jsx)(e.code,{children:"timezone"})," \u4E3A ",(0,l.jsx)(e.code,{children:"+00:00"}),' \uFF0C\u5219\u6570\u636E\u5BFC\u5165 Doris \u5F97\u5230\u5B9E\u9645\u503C\u4E3A "2020-12-12 04:12:12"\u3002']}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:'\u5982\u679C\u6570\u636E\u4E0D\u5E26\u6709\u65F6\u533A\uFF0C\u5982 "2020-12-12 12:12:12"\uFF0C\u5219\u8BA4\u4E3A\u8BE5\u65F6\u95F4\u4E3A\u7EDD\u5BF9\u65F6\u95F4\uFF0C\u4E0D\u53D1\u751F\u4EFB\u4F55\u8F6C\u6362\u3002'}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"3-\u590F\u4EE4\u65F6",children:"3. \u590F\u4EE4\u65F6"}),"\n",(0,l.jsx)(e.p,{children:"\u590F\u4EE4\u65F6\u7684\u672C\u8D28\u662F\u5177\u540D\u65F6\u533A\u7684\u5B9E\u9645\u65F6\u95F4\u504F\u79FB\u91CF\uFF0C\u5728\u4E00\u5B9A\u65E5\u671F\u5185\u53D1\u751F\u6539\u53D8\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u4F8B\u5982\uFF0C",(0,l.jsx)(e.code,{children:"America/Los_Angeles"}),"\u65F6\u533A\u5305\u542B\u4E00\u6B21\u590F\u4EE4\u65F6\u8C03\u6574\uFF0C\u8D77\u6B62\u65F6\u95F4\u4E3A\u7EA6\u4E3A\u6BCF\u5E74 3 \u6708\u81F3 11 \u6708\u3002\u5373\uFF0C\u4E09\u6708\u4EFD\u590F\u4EE4\u65F6\u5F00\u59CB\u65F6\uFF0C",(0,l.jsx)(e.code,{children:"America/Los_Angeles"}),"\u5B9E\u9645\u65F6\u533A\u504F\u79FB\u7531",(0,l.jsx)(e.code,{children:"-08:00"}),"\u53D8\u4E3A",(0,l.jsx)(e.code,{children:"-07:00"}),"\uFF0C11 \u6708\u590F\u4EE4\u65F6\u7ED3\u675F\u65F6\uFF0C\u53C8\u4ECE",(0,l.jsx)(e.code,{children:"-07:00"}),"\u53D8\u4E3A",(0,l.jsx)(e.code,{children:"-08:00"}),"\u3002\n\u5982\u679C\u4E0D\u5E0C\u671B\u5F00\u542F\u590F\u4EE4\u65F6\uFF0C\u5219\u5E94\u8BBE\u5B9A ",(0,l.jsx)(e.code,{children:"time_zone"})," \u4E3A ",(0,l.jsx)(e.code,{children:"-08:00"})," \u800C\u975E ",(0,l.jsx)(e.code,{children:"America/Los_Angeles"}),"\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u4F7F\u7528\u65B9\u5F0F",children:"\u4F7F\u7528\u65B9\u5F0F"}),"\n",(0,l.jsx)(e.p,{children:"\u65F6\u533A\u503C\u53EF\u4EE5\u4F7F\u7528\u591A\u79CD\u683C\u5F0F\u7ED9\u51FA\uFF0C\u4EE5\u4E0B\u662F Doris \u4E2D\u5B8C\u5584\u652F\u6301\u7684\u6807\u51C6\u683C\u5F0F\uFF1A"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:['\u6807\u51C6\u5177\u540D\u65F6\u533A\u683C\u5F0F\uFF0C\u5982 "Asia/Shanghai", "America/Los_Angeles"\u3002\u6B64\u7C7B\u683C\u5F0F\u6765\u6E90\u4E8E',(0,l.jsx)(e.a,{href:"#%E6%95%B0%E6%8D%AE%E6%9D%A5%E6%BA%90",children:"\u672C\u673A\u6240\u5E26\u65F6\u533A\u6570\u636E"}),'\uFF0C\u5982 "Etc/GMT+3" \u7B49\u4EA6\u5C5E\u6B64\u5217\u3002']}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:'\u6807\u51C6\u504F\u79FB\u683C\u5F0F\uFF0C\u5982 "+02:30", "-10:00"\uFF08\u4E0D\u652F\u6301\u8BF8\u5982 "+12:03" \u7B49\u7279\u6B8A\u504F\u79FB\uFF09'}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u7F29\u5199\u65F6\u533A\u683C\u5F0F\uFF0C\u5F53\u524D\u4EC5\u652F\u6301\uFF1A"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:'"GMT", "UTC"\uFF0C\u7B49\u540C\u4E8E "+00:00" \u65F6\u533A'}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:'"CST", \u7B49\u540C\u4E8E "Asia/Shanghai" \u65F6\u533A'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:'\u5355\u5B57\u6BCD Z\uFF0C\u4EE3\u8868 Zulu \u65F6\u533A\uFF0C\u7B49\u540C\u4E8E "+00:00" \u65F6\u533A'}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u6B64\u5916\uFF0C\u5BF9\u4EFB\u4F55\u5B57\u6BCD\u7684\u89E3\u6790\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u6CE8\u610F\uFF1A\u7531\u4E8E\u5B9E\u73B0\u65B9\u5F0F\u7684\u4E0D\u540C\uFF0C\u5F53\u524D Doris \u5B58\u5728\u90E8\u5206\u5176\u4ED6\u683C\u5F0F\u5728\u90E8\u5206\u5BFC\u5165\u65B9\u5F0F\u4E2D\u5F97\u5230\u4E86\u652F\u6301\u3002",(0,l.jsx)(e.strong,{children:"\u751F\u4EA7\u73AF\u5883\u4E0D\u5E94\u5F53\u4F9D\u8D56\u8FD9\u4E9B\u672A\u5217\u4E8E\u6B64\u7684\u683C\u5F0F\uFF0C\u5B83\u4EEC\u7684\u884C\u4E3A\u968F\u65F6\u53EF\u80FD\u53D1\u751F\u53D8\u5316"}),"\uFF0C\u8BF7\u5173\u6CE8\u7248\u672C\u66F4\u65B0\u65F6\u7684\u76F8\u5173 changelog\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,l.jsx)(e.h3,{id:"\u65F6\u533A\u654F\u611F\u6570\u636E",children:"\u65F6\u533A\u654F\u611F\u6570\u636E"}),"\n",(0,l.jsx)(e.p,{children:"\u65F6\u533A\u95EE\u9898\u4E3B\u8981\u6D89\u53CA\u4E09\u4E2A\u5F71\u54CD\u56E0\u7D20\uFF1A"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["session variable ",(0,l.jsx)(e.code,{children:"time_zone"})," \u2014\u2014 \u96C6\u7FA4\u65F6\u533A"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Stream Load\u3001Broker Load \u7B49\u5BFC\u5165\u65F6\u6307\u5B9A\u7684 header ",(0,l.jsx)(e.code,{children:"timezone"})," \u2014\u2014 \u5BFC\u5165\u65F6\u533A"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:'\u65F6\u533A\u7C7B\u578B\u5B57\u9762\u91CF "2023-12-12 08:00:00+08:00" \u4E2D\u7684 "+08:00" \u2014\u2014 \u6570\u636E\u65F6\u533A'}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u6211\u4EEC\u53EF\u4EE5\u505A\u5982\u4E0B\u7406\u89E3\uFF1A"}),"\n",(0,l.jsxs)(e.p,{children:["Doris \u76EE\u524D\u517C\u5BB9\u5404\u65F6\u533A\u4E0B\u7684\u6570\u636E\u5411 Doris \u4E2D\u8FDB\u884C\u5BFC\u5165\u3002\u800C\u7531\u4E8E Doris \u81EA\u8EAB ",(0,l.jsx)(e.code,{children:"DATETIME"})," \u7B49\u5404\u4E2A\u65F6\u95F4\u7C7B\u578B\u672C\u8EAB\u4E0D\u5185\u542B\u65F6\u533A\u4FE1\u606F\uFF0C\u4E14\u6570\u636E\u5728\u5BFC\u5165\u540E\u4E0D\u4F1A\u968F\u65F6\u533A\u53D8\u5316\u800C\u53D8\u66F4\uFF0C\u56E0\u6B64\u65F6\u95F4\u6570\u636E\u5BFC\u5165 Doris \u65F6\uFF0C\u53EF\u5206\u4E3A\u5982\u4E0B\u4E24\u7C7B\uFF1A"]}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u7EDD\u5BF9\u65F6\u95F4"}),"\n",(0,l.jsx)(e.p,{children:"\u7EDD\u5BF9\u65F6\u95F4\u662F\u6307\uFF0C\u5B83\u6240\u5173\u8054\u7684\u6570\u636E\u573A\u666F\u4E0E\u65F6\u533A\u65E0\u5173\u3002\u5BF9\u4E8E\u8FD9\u7C7B\u6570\u636E\uFF0C\u5728\u5BFC\u5165\u65F6\u5E94\u8BE5\u4E0D\u5E26\u6709\u4EFB\u4F55\u65F6\u533A\u540E\u7F00\uFF0C\u5B83\u4EEC\u5C06\u88AB\u539F\u6837\u5B58\u50A8\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u7279\u5B9A\u65F6\u533A\u4E0B\u7684\u65F6\u95F4"}),"\n",(0,l.jsxs)(e.p,{children:["\u67D0\u4E2A\u7279\u5B9A\u65F6\u533A\u4E0B\u7684\u65F6\u95F4\u662F\u6307\uFF0C\u5B83\u6240\u5173\u8054\u7684\u6570\u636E\u573A\u666F\u4E0E\u65F6\u533A\u6709\u5173\u3002\u5BF9\u4E8E\u8FD9\u7C7B\u6570\u636E\uFF0C\u5728\u5BFC\u5165\u65F6\u5E94\u8BE5\u5E26\u6709\u5177\u4F53\u65F6\u533A\u540E\u7F00\uFF0C\u5BFC\u5165\u65F6\u5B83\u4EEC\u5C06\u88AB\u8F6C\u5316\u81F3 Doris \u96C6\u7FA4 ",(0,l.jsx)(e.code,{children:"time_zone"})," \u65F6\u533A\u6216 Stream Load/Broker Load \u4E2D\u6307\u5B9A\u7684 header ",(0,l.jsx)(e.code,{children:"timezone"}),"\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u8FD9\u7C7B\u6570\u636E\u5728\u5BFC\u5165\u540E\u5373\u88AB\u8F6C\u5316\u81F3\u5BFC\u5165\u65F6\u6307\u5B9A\u65F6\u533A\u4E0B\u7684\u7EDD\u5BF9\u65F6\u95F4\u5B58\u50A8\uFF0C\u6545\u540E\u7EED\u5BFC\u5165\u548C\u67E5\u8BE2\u5E94\u5F53\u4FDD\u6301\u6B64\u65F6\u533A\uFF0C\u4EE5\u514D\u6570\u636E\u610F\u4E49\u53D1\u751F\u7D0A\u4E71\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5BF9\u4E8E Insert \u8BED\u53E5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4F8B\u5B50\u6765\u8BF4\u660E\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"Doris > select @@time_zone;\n+---------------+\n| @@time_zone   |\n+---------------+\n| Asia/Shanghai |\n+---------------+\n \nDoris > insert into dt values('2020-12-12 12:12:12+02:00'); --- \u5BFC\u5165\u7684\u6570\u636E\u4E2D\u6307\u5B9A\u4E86\u65F6\u533A\u4E3A +02:00\n \nDoris > select * from dt;\n+---------------------+\n| dt                  |\n+---------------------+\n| 2020-12-12 18:12:12 | --- \u88AB\u8F6C\u6362\u4E3A Doris \u96C6\u7FA4\u65F6\u533A Asia/Shanghai\uFF0C\u540E\u7EED\u5BFC\u5165\u548C\u67E5\u8BE2\u5E94\u5F53\u4FDD\u6301\u6B64\u65F6\u533A\u3002\n+---------------------+\n \nDoris > set time_zone = 'America/Los_Angeles';\n \nDoris > select * from dt;\n+---------------------+\n| dt                  |\n+---------------------+\n| 2020-12-12 18:12:12 | --- \u5982\u679C\u4FEE\u6539 time_zone\uFF0C\u65F6\u95F4\u503C\u4E0D\u4F1A\u968F\u4E4B\u6539\u53D8\uFF0C\u5176\u67E5\u8BE2\u65F6\u7684\u610F\u4E49\u53D1\u751F\u7D0A\u4E71\u3002\n+---------------------+\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5BF9\u4E8E Stream Load\u3001Broker Load \u7B49\u5BFC\u5165\u65B9\u5F0F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u6307\u5B9A header ",(0,l.jsx)(e.code,{children:"timezone"})," \u6765\u5B9E\u73B0\u3002\u4F8B\u5982\uFF0C\u5BF9\u4E8E Stream Load\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4F8B\u5B50\u6765\u8BF4\u660E\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:' cat dt.csv\n 2020-12-12 12:12:12+02:00\n  \n curl --location-trusted -u root: \\\n  -H "Expect:100-continue" \\\n  -H "strict_mode: true" \\\n  -H "timezone: Asia/Shanghai" \\\n  -T dt.csv -XPUT \\\n  http://127.0.0.1:8030/api/test/dt/_stream_load\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"Doris > select @@time_zone;\n+---------------+\n| @@time_zone   |\n+---------------+\n| Asia/Shanghai |\n+---------------+\n \nDoris > select * from dt;\n+---------------------+\n| dt                  |\n+---------------------+\n| 2020-12-12 18:12:12 | --- \u88AB\u8F6C\u6362\u4E3A Doris \u96C6\u7FA4\u65F6\u533A Asia/Shanghai\uFF0C\u540E\u7EED\u5BFC\u5165\u548C\u67E5\u8BE2\u5E94\u5F53\u4FDD\u6301\u6B64\u65F6\u533A\u3002\n+---------------------+\n"})}),"\n",(0,l.jsx)(e.admonition,{type:"tip",children:(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Stream Load\u3001Broker Load \u7B49\u5BFC\u5165\u65B9\u5F0F\u4E2D\uFF0Cheader ",(0,l.jsx)(e.code,{children:"timezone"})," \u4F1A\u8986\u76D6 Doris \u96C6\u7FA4 ",(0,l.jsx)(e.code,{children:"time_zone"}),"\uFF0C\u56E0\u6B64\u5728\u5BFC\u5165\u65F6\u5E94\u5F53\u4FDD\u6301\u4E00\u81F4\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["Stream Load\u3001Broker Load \u7B49\u5BFC\u5165\u65B9\u5F0F\u4E2D\uFF0Cheader ",(0,l.jsx)(e.code,{children:"timezone"})," \u4F1A\u5F71\u54CD\u5BFC\u5165\u8F6C\u6362\u4E2D\u4F7F\u7528\u7684\u51FD\u6570\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u5982\u679C\u5BFC\u5165\u65F6\u672A\u6307\u5B9A header ",(0,l.jsx)(e.code,{children:"timezone"}),"\uFF0C\u5219\u9ED8\u8BA4\u4F7F\u7528\u4E1C\u516B\u533A\u3002"]}),"\n"]})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u7EFC\u4E0A\u6240\u8FF0\uFF0C\u5904\u7406\u65F6\u533A\u95EE\u9898\u6700\u4F73\u7684\u5B9E\u8DF5\u662F\uFF1A"})}),"\n",(0,l.jsx)(e.admonition,{title:"\u6700\u4F73\u5B9E\u8DF5",type:"info",children:(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5728\u4F7F\u7528\u524D\u786E\u8BA4\u8BE5\u96C6\u7FA4\u6240\u8868\u5F81\u7684\u65F6\u533A\u5E76\u8BBE\u7F6E ",(0,l.jsx)(e.code,{children:"time_zone"}),"\uFF0C\u5728\u6B64\u4E4B\u540E\u4E0D\u518D\u66F4\u6539\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5728\u5BFC\u5165\u65F6\u8BBE\u5B9A header ",(0,l.jsx)(e.code,{children:"timezone"})," \u540C\u96C6\u7FA4 ",(0,l.jsx)(e.code,{children:"time_zone"})," \u4E00\u81F4\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5BF9\u4E8E\u7EDD\u5BF9\u65F6\u95F4\uFF0C\u5BFC\u5165\u65F6\u4E0D\u5E26\u65F6\u533A\u540E\u7F00\uFF1B\u5BF9\u4E8E\u6709\u65F6\u533A\u7684\u65F6\u95F4\uFF0C\u5BFC\u5165\u65F6\u5E26\u5177\u4F53\u65F6\u533A\u540E\u7F00\uFF0C\u5BFC\u5165\u540E\u5C06\u88AB\u8F6C\u5316\u81F3 Doris ",(0,l.jsx)(e.code,{children:"time_zone"})," \u65F6\u533A\u3002"]}),"\n"]}),"\n"]})}),"\n",(0,l.jsx)(e.h3,{id:"\u590F\u4EE4\u65F6",children:"\u590F\u4EE4\u65F6"}),"\n",(0,l.jsxs)(e.p,{children:["\u590F\u4EE4\u65F6\u7684\u8D77\u8BAB\u65F6\u95F4\u6765\u81EA",(0,l.jsx)(e.a,{href:"#%E6%95%B0%E6%8D%AE%E6%9D%A5%E6%BA%90",children:"\u5F53\u524D\u65F6\u533A\u6570\u636E\u6E90"}),"\uFF0C\u4E0D\u4E00\u5B9A\u4E0E\u5F53\u5E74\u5EA6\u65F6\u533A\u6240\u5728\u5730\u5B98\u65B9\u5B9E\u9645\u786E\u8BA4\u65F6\u95F4\u5B8C\u5168\u4E00\u81F4\u3002\u8BE5\u6570\u636E\u7531 ICANN \u8FDB\u884C\u7EF4\u62A4\u3002\u5982\u679C\u9700\u8981\u786E\u4FDD\u590F\u4EE4\u65F6\u8868\u73B0\u4E0E\u5F53\u5E74\u5EA6\u5B9E\u9645\u89C4\u5B9A\u4E00\u81F4\uFF0C\u8BF7\u4FDD\u8BC1 Doris \u6240\u9009\u62E9\u7684\u6570\u636E\u6E90\u4E3A\u6700\u65B0\u7684 ICANN \u6240\u516C\u5E03\u65F6\u533A\u6570\u636E\uFF0C\u4E0B\u8F7D\u9014\u5F84\u89C1\u4E0B\u6587\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"\u4FE1\u606F\u66F4\u65B0",children:"\u4FE1\u606F\u66F4\u65B0"}),"\n",(0,l.jsx)(e.p,{children:"\u771F\u5B9E\u4E16\u754C\u4E2D\u7684\u65F6\u533A\u4E0E\u590F\u4EE4\u65F6\u76F8\u5173\u6570\u636E\uFF0C\u5C06\u4F1A\u56E0\u5404\u79CD\u539F\u56E0\u800C\u4E0D\u5B9A\u671F\u53D1\u751F\u53D8\u5316\u3002IANA \u4F1A\u5B9A\u671F\u8BB0\u5F55\u8FD9\u4E9B\u53D8\u5316\u5E76\u66F4\u65B0\u76F8\u5E94\u65F6\u533A\u6587\u4EF6\u3002\u5982\u679C\u5E0C\u671B Doris \u4E2D\u7684\u65F6\u533A\u4FE1\u606F\u4E0E\u6700\u65B0\u7684 IANA \u6570\u636E\u4FDD\u6301\u4E00\u81F4\uFF0C\u8BF7\u91C7\u53D6\u4E0B\u5217\u65B9\u5F0F\u8FDB\u884C\u66F4\u65B0\uFF1A"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u4F7F\u7528\u5305\u7BA1\u7406\u5668\u66F4\u65B0"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u6839\u636E\u5F53\u524D\u64CD\u4F5C\u7CFB\u7EDF\u4F7F\u7528\u7684\u5305\u7BA1\u7406\u5668\uFF0C\u7528\u6237\u53EF\u4EE5\u4F7F\u7528\u5BF9\u5E94\u7684\u547D\u4EE4\u76F4\u63A5\u66F4\u65B0\u65F6\u533A\u6570\u636E\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"# yum\n> sudo yum update tzdata\n# apt\n> sudo apt update tzdata\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u8BE5\u65B9\u5F0F\u66F4\u65B0\u7684\u6570\u636E\u4F4D\u4E8E\u7CFB\u7EDF ",(0,l.jsx)(e.code,{children:"$TZDIR"})," \u4E0B\uFF08\u4E00\u822C\u4E3A ",(0,l.jsx)(e.code,{children:"usr/share/zoneinfo"}),"\uFF09\u3002"]}),"\n",(0,l.jsxs)(e.ol,{start:"2",children:["\n",(0,l.jsx)(e.li,{children:"\u76F4\u63A5\u62C9\u53D6 IANA \u65F6\u533A\u6570\u636E\u5E93\uFF08\u63A8\u8350\uFF09"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u5927\u591A\u6570 Linux \u53D1\u884C\u7248\u7684\u5305\u7BA1\u7406\u5668\uFF0Ctzdata \u7684\u540C\u6B65\u5E76\u4E0D\u53CA\u65F6\u3002\u5982\u679C\u5BF9\u65F6\u533A\u6570\u636E\u51C6\u786E\u6027\u8981\u6C42\u8F83\u9AD8\uFF0C\u53EF\u4EE5\u76F4\u63A5\u62C9\u53D6 IANA \u5B9A\u671F\u516C\u5E03\u7684\u6570\u636E\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"wget https://www.iana.org/time-zones/repository/tzdb-latest.tar.lz\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u7136\u540E\u6839\u636E\u89E3\u538B\u540E\u6587\u4EF6\u5939\u4E2D\u7684 README \u6587\u4EF6\uFF0C\u751F\u6210\u5177\u4F53\u7684 zoneinfo \u6570\u636E\u3002\u751F\u6210\u7684\u6570\u636E\u5E94\u5F53\u62F7\u8D1D\u5E76\u8986\u76D6 ",(0,l.jsx)(e.code,{children:"$TZDIR"})," \u76EE\u5F55\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u8BF7\u6CE8\u610F\uFF0C\u4EE5\u4E0A\u6240\u6709\u64CD\u4F5C\u5728 BE \u6240\u5728\u673A\u5668\u4E0A\u5B8C\u6210\u540E\uFF0C\u90FD",(0,l.jsx)(e.strong,{children:"\u5FC5\u987B\u91CD\u542F"}),"\u5BF9\u5E94 BE \u624D\u80FD\u751F\u6548\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u62D3\u5C55\u9605\u8BFB",children:"\u62D3\u5C55\u9605\u8BFB"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u65F6\u533A\u683C\u5F0F\u5217\u8868\uFF1A",(0,l.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones",children:"List of tz database time zones"})]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["IANA \u65F6\u533A\u6570\u636E\u5E93\uFF1A",(0,l.jsx)(e.a,{href:"https://www.iana.org/time-zones",children:"IANA Time Zone Database"})]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["ICANN \u65F6\u533A\u6570\u636E\u5E93\uFF1A",(0,l.jsx)(e.a,{href:"https://mm.icann.org/pipermail/tz-announce/",children:"The tz-announce Archives"})]}),"\n"]}),"\n"]})]})}function a(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(t,{...n})}):t(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return r}});var i=s(667294);let l={},d=i.createContext(l);function r(n){let e=i.useContext(d);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),i.createElement(d.Provider,{value:e},n.children)}}}]);