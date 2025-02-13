"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["943354"],{114902:function(e,n,d){d.r(n),d.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>x,assets:()=>o,toc:()=>t,frontMatter:()=>c});var s=JSON.parse('{"id":"admin-manual/log-management/fe-log","title":"FE \u65E5\u5FD7\u7BA1\u7406","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/log-management/fe-log.md","sourceDirName":"admin-manual/log-management","slug":"/admin-manual/log-management/fe-log","permalink":"/zh-CN/docs/dev/admin-manual/log-management/fe-log","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"FE \u65E5\u5FD7\u7BA1\u7406","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u4ECE\u56DE\u6536\u7AD9\u6062\u590D","permalink":"/zh-CN/docs/dev/admin-manual/data-admin/recyclebin"},"next":{"title":"BE \u65E5\u5FD7\u7BA1\u7406","permalink":"/zh-CN/docs/dev/admin-manual/log-management/be-log"}}'),l=d("785893"),r=d("250065");let c={title:"FE \u65E5\u5FD7\u7BA1\u7406",language:"zh-CN"},i=void 0,o={},t=[{value:"\u65E5\u5FD7\u5206\u7C7B",id:"\u65E5\u5FD7\u5206\u7C7B",level:2},{value:"\u65E5\u5FD7\u914D\u7F6E",id:"\u65E5\u5FD7\u914D\u7F6E",level:2},{value:"\u5F00\u542F DEBUG \u65E5\u5FD7",id:"\u5F00\u542F-debug-\u65E5\u5FD7",level:2},{value:"\u5BB9\u5668\u73AF\u5883\u65E5\u5FD7\u914D\u7F6E",id:"\u5BB9\u5668\u73AF\u5883\u65E5\u5FD7\u914D\u7F6E",level:2}];function h(e){let n={admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"\u672C\u6587\u4E3B\u8981\u4ECB\u7ECD Frontend(FE) \u8FDB\u7A0B\u7684\u65E5\u5FD7\u7BA1\u7406\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u8BE5\u6587\u6863\u9002\u7528\u4E8E 2.1.4 \u53CA\u4E4B\u540E\u7684 Doris \u7248\u672C\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u65E5\u5FD7\u5206\u7C7B",children:"\u65E5\u5FD7\u5206\u7C7B"}),"\n",(0,l.jsxs)(n.p,{children:["\u5F53\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"sh bin/start_fe.sh --daemon"})," \u65B9\u5F0F\u542F\u52A8 FE \u8FDB\u7A0B\u540E\uFF0CFE \u65E5\u5FD7\u76EE\u5F55\u4E0B\u4F1A\u4EA7\u751F\u4EE5\u4E0B\u7C7B\u578B\u7684\u65E5\u5FD7\u6587\u4EF6\uFF1A"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"fe.log"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"FE \u8FDB\u7A0B\u8FD0\u884C\u65E5\u5FD7\u3002FE \u7684\u4E3B\u65E5\u5FD7\u6587\u4EF6\u3002FE \u8FDB\u7A0B\u6240\u6709\u7B49\u7EA7\uFF08DEBUG\u3001INFO\u3001WARN\u3001ERROR \u7B49\uFF09\u7684\u8FD0\u884C\u65E5\u5FD7\u90FD\u4F1A\u6253\u5370\u5230\u8FD9\u4E2A\u65E5\u5FD7\u6587\u4EF6\u4E2D\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"fe.warn.log"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"FE \u8FDB\u7A0B\u8FD0\u884C\u65E5\u5FD7\u3002\u4F46\u53EA\u4F1A\u6253\u5370 WARN \u7EA7\u522B\u4EE5\u4E0A\u7684\u8FD0\u884C\u65E5\u5FD7\u3002fe.warn.log \u4E2D\u7684\u5185\u5BB9\u662F fe.log \u65E5\u5FD7\u5185\u5BB9\u7684\u5B50\u96C6\u3002\u4E3B\u8981\u7528\u4E8E\u5FEB\u901F\u67E5\u770B\u544A\u8B66\u6216\u9519\u8BEF\u7EA7\u522B\u65E5\u5FD7\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"fe.audit.log"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u5BA1\u8BA1\u65E5\u5FD7\u3002\u7528\u4E8E\u8BB0\u5F55\u901A\u8FC7\u8FD9\u4E2A FE \u8282\u70B9\u6267\u884C\u7684\u6240\u6709\u6570\u636E\u5E93\u64CD\u4F5C\u8BB0\u5F55\u3002\u5305\u62EC SQL\u3001DDL\u3001DML \u8BED\u53E5\u7B49\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"fe.out"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u7528\u4E8E\u63A5\u6536\u6807\u51C6\u8F93\u51FA\u6D41\u548C\u9519\u8BEF\u6570\u636E\u6D41\u7684\u65E5\u5FD7\u3002\u6BD4\u5982 start \u811A\u672C\u4E2D\u7684 ",(0,l.jsx)(n.code,{children:"echo"})," \u547D\u4EE4\u8F93\u51FA\u7B49\uFF0C\u6216\u5176\u4ED6\u672A\u88AB log4j \u6846\u67B6\u6355\u83B7\u5230\u7684\u65E5\u5FD7\u4FE1\u606F\u3002\u901A\u5E38\u4F5C\u4E3A\u8FD0\u884C\u65E5\u5FD7\u7684\u8865\u5145\u3002\u5C11\u6570\u60C5\u51B5\u4E0B\uFF0C\u9700\u8981\u67E5\u770B fe.out \u7684\u5185\u5BB9\u4EE5\u83B7\u53D6\u66F4\u591A\u4FE1\u606F\u3002"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"fe.gc.log"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["FE JVM \u7684 GC \u65E5\u5FD7\u3002\u8BE5\u65E5\u5FD7\u7684\u884C\u4E3A\u7531 fe.conf \u4E2D\u7684 JVM \u542F\u52A8\u9879 ",(0,l.jsx)(n.code,{children:"JAVA_OPTS"})," \u63A7\u5236\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u65E5\u5FD7\u914D\u7F6E",children:"\u65E5\u5FD7\u914D\u7F6E"}),"\n",(0,l.jsx)(n.p,{children:"\u5305\u62EC\u914D\u7F6E\u65E5\u5FD7\u7684\u5B58\u653E\u8DEF\u5F84\u3001\u4FDD\u7559\u65F6\u95F4\u3001\u4FDD\u7559\u6570\u76EE\u3001\u5927\u5C0F\u7B49\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u4EE5\u4E0B\u914D\u7F6E\u9879\u5747\u5728 ",(0,l.jsx)(n.code,{children:"fe.conf"})," \u6587\u4EF6\u4E2D\u914D\u7F6E\u3002"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u914D\u7F6E\u9879"}),(0,l.jsx)(n.th,{children:"\u9ED8\u8BA4\u503C"}),(0,l.jsx)(n.th,{children:"\u53EF\u9009\u9879"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"LOG_DIR"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"ENV(DORIS_HOME)/log"})}),(0,l.jsx)(n.td,{}),(0,l.jsxs)(n.td,{children:["\u6240\u6709\u65E5\u5FD7\u7684\u5B58\u653E\u8DEF\u5F84\u3002\u9ED8\u8BA4\u4E3A FE \u90E8\u7F72\u8DEF\u5F84\u7684 ",(0,l.jsx)(n.code,{children:"log/"})," \u76EE\u5F55\u4E0B\u3002\u6CE8\u610F\u8FD9\u662F\u4E00\u4E2A\u73AF\u5883\u53D8\u91CF\uFF0C\u914D\u7F6E\u540D\u9700\u5927\u5199\u3002"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"sys_log_level"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"INFO"})}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"INFO"}),", ",(0,l.jsx)(n.code,{children:"WARN"}),", ",(0,l.jsx)(n.code,{children:"ERROR"}),", ",(0,l.jsx)(n.code,{children:"FATAL"})]}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"fe.log"})," \u7684\u65E5\u5FD7\u7B49\u7EA7\u3002\u9ED8\u8BA4\u4E3A INFO\u3002\u4E0D\u5EFA\u8BAE\u4FEE\u6539\uFF0CINFO \u7B49\u7EA7\u5305\u542B\u8BB8\u591A\u5173\u952E\u65E5\u5FD7\u4FE1\u606F\u3002"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"sys_log_roll_num"})}),(0,l.jsx)(n.td,{children:"10"}),(0,l.jsx)(n.td,{}),(0,l.jsxs)(n.td,{children:["\u63A7\u5236 ",(0,l.jsx)(n.code,{children:"fe.log"})," \u548C ",(0,l.jsx)(n.code,{children:"fe.warn.log"})," \u4E00\u5929\u5185\u7684\u6700\u5927\u6587\u4EF6\u6570\u91CF\u3002\u9ED8\u8BA4 10\u3002\u5F53\u56E0\u4E3A\u65E5\u5FD7\u6EDA\u52A8\u6216\u5207\u5206\u540E\uFF0C\u65E5\u5FD7\u6587\u4EF6\u6570\u91CF\u5927\u4E8E\u8FD9\u4E2A\u9608\u503C\u540E\uFF0C\u8001\u7684\u65E5\u5FD7\u6587\u4EF6\u5C06\u88AB\u5220\u9664"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"sys_log_verbose_modules"})}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:'\u53EF\u4EE5\u8BBE\u7F6E\u6307\u5B9A\u7684 Java package \u4E0B\u7684\u6587\u4EF6\u5F00\u542F DEBUG \u7EA7\u522B\u65E5\u5FD7\u3002\u8BF7\u53C2\u9605 "\u5F00\u542F DEBUG \u65E5\u5FD7" \u7AE0\u8282'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"sys_log_enable_compress"})}),(0,l.jsx)(n.td,{children:"false"}),(0,l.jsx)(n.td,{children:"true, false"}),(0,l.jsxs)(n.td,{children:["\u662F\u5426\u5F00\u542F\u5386\u53F2 ",(0,l.jsx)(n.code,{children:"fe.log"})," \u548C ",(0,l.jsx)(n.code,{children:"fe.warn.log"})," \u65E5\u5FD7\u538B\u7F29\u3002\u9ED8\u8BA4\u5173\u95ED\u3002\u5F00\u542F\u540E\uFF0C\u5386\u53F2\u5BA1\u8BA1\u65E5\u5FD7\u4F1A\u4F7F\u7528 gzip \u538B\u7F29\u5F52\u6863"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"log_rollover_strategy"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"age"})}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"age"}),", ",(0,l.jsx)(n.code,{children:"size"})]}),(0,l.jsxs)(n.td,{children:["\u65E5\u5FD7\u4FDD\u7559\u7B56\u7565\uFF0C\u9ED8\u8BA4\u4E3A ",(0,l.jsx)(n.code,{children:"age"}),"\uFF0C\u5373\u6839\u636E\u65F6\u95F4\u7B56\u7565\u4FDD\u7559\u5386\u53F2\u65E5\u5FD7\u3002",(0,l.jsx)(n.code,{children:"size"})," \u4E3A\u6309\u65E5\u5FD7\u5927\u5C0F\u4FDD\u7559\u5386\u53F2\u65E5\u5FD7"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"sys_log_delete_age"})}),(0,l.jsx)(n.td,{children:"7d"}),(0,l.jsx)(n.td,{children:"\u652F\u6301\u683C\u5F0F\u5982 7d, 10h, 60m, 120s"}),(0,l.jsxs)(n.td,{children:["\u4EC5\u5F53 ",(0,l.jsx)(n.code,{children:"log_rollover_strategy"})," \u4E3A ",(0,l.jsx)(n.code,{children:"age"})," \u65F6\u751F\u6548\u3002\u63A7\u5236 ",(0,l.jsx)(n.code,{children:"fe.log"})," \u548C ",(0,l.jsx)(n.code,{children:"fe.warn.log"})," \u6587\u4EF6\u7684\u4FDD\u7559\u5929\u6570\u3002\u9ED8\u8BA4 7 \u5929\u3002\u4F1A\u81EA\u52A8\u5220\u9664 7 \u5929\u524D\u7684\u65E5\u5FD7"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"audit_log_delete_age"})}),(0,l.jsx)(n.td,{children:"7d"}),(0,l.jsx)(n.td,{children:"\u652F\u6301\u683C\u5F0F\u5982 7d, 10h, 60m, 120s"}),(0,l.jsxs)(n.td,{children:["\u4EC5\u5F53 ",(0,l.jsx)(n.code,{children:"log_rollover_strategy"})," \u4E3A ",(0,l.jsx)(n.code,{children:"age"})," \u65F6\u751F\u6548\u3002\u63A7\u5236 ",(0,l.jsx)(n.code,{children:"fe.audit.log"})," \u6587\u4EF6\u7684\u4FDD\u7559\u5929\u6570\u3002\u9ED8\u8BA4 30 \u5929\u3002\u4F1A\u81EA\u52A8\u5220\u9664 30 \u5929\u524D\u7684\u65E5\u5FD7"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"info_sys_accumulated_file_size"})}),(0,l.jsx)(n.td,{children:"4"}),(0,l.jsx)(n.td,{}),(0,l.jsxs)(n.td,{children:["\u4EC5\u5F53 ",(0,l.jsx)(n.code,{children:"log_rollover_strategy"})," \u4E3A ",(0,l.jsx)(n.code,{children:"size"})," \u65F6\u751F\u6548\u3002\u63A7\u5236 ",(0,l.jsx)(n.code,{children:"fe.log"})," \u6587\u4EF6\u7684\u7D2F\u8BA1\u5927\u5C0F\u3002\u9ED8\u8BA4\u4E3A 4GB\u3002\u5F53\u7D2F\u8BA1\u65E5\u5FD7\u5927\u5C0F\u8D85\u8FC7\u8FD9\u4E2A\u9608\u503C\u540E\uFF0C\u4F1A\u5220\u9664\u5386\u53F2\u65E5\u5FD7\u6587\u4EF6"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"warn_sys_accumulated_file_size"})}),(0,l.jsx)(n.td,{children:"2"}),(0,l.jsx)(n.td,{}),(0,l.jsxs)(n.td,{children:["\u4EC5\u5F53 ",(0,l.jsx)(n.code,{children:"log_rollover_strategy"})," \u4E3A ",(0,l.jsx)(n.code,{children:"size"})," \u65F6\u751F\u6548\u3002\u63A7\u5236 ",(0,l.jsx)(n.code,{children:"fe.warn.log"})," \u6587\u4EF6\u7684\u7D2F\u8BA1\u5927\u5C0F\u3002\u9ED8\u8BA4\u4E3A 2GB\u3002\u5F53\u7D2F\u8BA1\u65E5\u5FD7\u5927\u5C0F\u8D85\u8FC7\u8FD9\u4E2A\u9608\u503C\u540E\uFF0C\u4F1A\u5220\u9664\u5386\u53F2\u65E5\u5FD7\u6587\u4EF6"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"audit_sys_accumulated_file_size"})}),(0,l.jsx)(n.td,{children:"4"}),(0,l.jsx)(n.td,{}),(0,l.jsxs)(n.td,{children:["\u4EC5\u5F53 ",(0,l.jsx)(n.code,{children:"log_rollover_strategy"})," \u4E3A ",(0,l.jsx)(n.code,{children:"size"})," \u65F6\u751F\u6548\u3002\u63A7\u5236 ",(0,l.jsx)(n.code,{children:"fe.audit.log"})," \u6587\u4EF6\u7684\u7D2F\u8BA1\u5927\u5C0F\u3002\u9ED8\u8BA4\u4E3A 4GB\u3002\u5F53\u7D2F\u8BA1\u65E5\u5FD7\u5927\u5C0F\u8D85\u8FC7\u8FD9\u4E2A\u9608\u503C\u540E\uFF0C\u4F1A\u5220\u9664\u5386\u53F2\u65E5\u5FD7\u6587\u4EF6"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"log_roll_size_mb"})}),(0,l.jsx)(n.td,{children:"1024"}),(0,l.jsx)(n.td,{}),(0,l.jsxs)(n.td,{children:["\u63A7\u5236 ",(0,l.jsx)(n.code,{children:"fe.log"}),", ",(0,l.jsx)(n.code,{children:"fe.warn.log"}),", ",(0,l.jsx)(n.code,{children:"fe.audit.log"})," \u5355\u4E2A\u6587\u4EF6\u6700\u5927\u5927\u5C0F\u3002\u9ED8\u8BA4 1024MB\u3002\u5355\u4E2A\u65E5\u5FD7\u6587\u4EF6\u8D85\u8FC7\u8FD9\u4E2A\u9608\u503C\u540E\uFF0C\u4F1A\u81EA\u52A8\u5207\u5206\u65B0\u7684\u6587\u4EF6"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"sys_log_roll_interval"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"DAY"})}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"DAY"}),", ",(0,l.jsx)(n.code,{children:"HOUR"})]}),(0,l.jsxs)(n.td,{children:["\u63A7\u5236 ",(0,l.jsx)(n.code,{children:"fe.log"})," \u548C ",(0,l.jsx)(n.code,{children:"fe.warn.log"})," \u7684\u6EDA\u52A8\u95F4\u9694\u3002\u9ED8\u8BA4\u4E3A 1 \u5929\u3002\u5373\u6BCF\u5929\u751F\u6210\u4E00\u4E2A\u65B0\u65E5\u5FD7\u6587\u4EF6"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"audit_log_roll_num"})}),(0,l.jsx)(n.td,{children:"90"}),(0,l.jsx)(n.td,{}),(0,l.jsxs)(n.td,{children:["\u63A7\u5236 ",(0,l.jsx)(n.code,{children:"fe.audit.log"})," \u6700\u5927\u6587\u4EF6\u6570\u91CF\u3002\u9ED8\u8BA4 90\u3002\u5F53\u56E0\u4E3A\u65E5\u5FD7\u6EDA\u52A8\u6216\u5207\u5206\u540E\uFF0C\u65E5\u5FD7\u6587\u4EF6\u6570\u91CF\u5927\u4E8E\u8FD9\u4E2A\u9608\u503C\u540E\uFF0C\u8001\u7684\u65E5\u5FD7\u6587\u4EF6\u5C06\u88AB\u5220\u9664"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"audit_log_roll_interval"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"DAY"})}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"DAY"}),", ",(0,l.jsx)(n.code,{children:"HOUR"})]}),(0,l.jsxs)(n.td,{children:["\u63A7\u5236 ",(0,l.jsx)(n.code,{children:"fe.audit.log"})," \u7684\u6EDA\u52A8\u95F4\u9694\u3002\u9ED8\u8BA4\u4E3A 1 \u5929\u3002\u5373\u6BCF\u5929\u751F\u6210\u4E00\u4E2A\u65B0\u65E5\u5FD7\u6587\u4EF6"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"audit_log_dir"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"ENV(DORIS_HOME)/log"})}),(0,l.jsxs)(n.td,{children:["\u53EF\u4EE5\u5355\u72EC\u6307\u5B9A ",(0,l.jsx)(n.code,{children:"fe.audit.log"})," \u7684\u5B58\u653E\u8DEF\u5F84\u3002\u9ED8\u8BA4\u4E3A FE \u90E8\u7F72\u8DEF\u5F84\u7684 ",(0,l.jsx)(n.code,{children:"log/"})," \u76EE\u5F55\u4E0B\u3002"]}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"audit_log_modules"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:'{"slow_query", "query", "load", "stream_load"}'})}),(0,l.jsx)(n.td,{}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"fe.audit.log"})," \u4E2D\u7684\u6A21\u5757\u7C7B\u578B\u3002\u9ED8\u8BA4\u5305\u62EC\u6162\u67E5\u8BE2\u3001\u67E5\u8BE2\u3001\u5BFC\u5165\u3001stream load\u3002\u5176\u4E2D\u201C\u67E5\u8BE2\u201D\u53EA\u6240\u6709 DDL\u3001DML\u3001SQL \u64CD\u4F5C\u3002\u201C\u6162\u67E5\u8BE2\u201D\u6307\u8FD9\u4E9B\u64CD\u4F5C\u6267\u884C\u65F6\u95F4\u8D85\u8FC7 ",(0,l.jsx)(n.code,{children:"qe_slow_log_ms"})," \u9608\u503C\u7684\u64CD\u4F5C\u3002\u201C\u5BFC\u5165\u201D\u6307 Broker Load\u3002\u201Cstream load\u201D\u6307 stream load \u64CD\u4F5C\u3002"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"qe_slow_log_ms"})}),(0,l.jsx)(n.td,{children:"5000"}),(0,l.jsx)(n.td,{}),(0,l.jsxs)(n.td,{children:["\u5F53 DDL\u3001DML\u3001SQL \u8BED\u53E5\u7684\u6267\u884C\u65F6\u95F4\u8D85\u8FC7\u8FD9\u4E2A\u9608\u503C\u540E\uFF0C\u4F1A\u5728 ",(0,l.jsx)(n.code,{children:"fe.audit.log"})," \u7684 ",(0,l.jsx)(n.code,{children:"slow_query"})," \u6A21\u5757\u4E2D\u5355\u72EC\u8BB0\u5F55\u3002\u9ED8\u8BA4 5000 ms"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"audit_log_enable_compress"})}),(0,l.jsx)(n.td,{children:"false"}),(0,l.jsx)(n.td,{children:"true, false"}),(0,l.jsxs)(n.td,{children:["\u662F\u5426\u5F00\u542F\u5386\u53F2 ",(0,l.jsx)(n.code,{children:"fe.audit.log"})," \u65E5\u5FD7\u538B\u7F29\u3002\u9ED8\u8BA4\u5173\u95ED\u3002\u5F00\u542F\u540E\uFF0C\u5386\u53F2\u5BA1\u8BA1\u65E5\u5FD7\u4F1A\u4F7F\u7528 gzip \u538B\u7F29\u5F52\u6863"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"sys_log_mode"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"NORMAL"})}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"NORMAL"}),", ",(0,l.jsx)(n.code,{children:"BRIEF"}),", ",(0,l.jsx)(n.code,{children:"ASYNC"})]}),(0,l.jsxs)(n.td,{children:["FE \u65E5\u5FD7\u7684\u8F93\u51FA\u6A21\u5F0F\uFF0C\u5176\u4E2D ",(0,l.jsx)(n.code,{children:"NORMAL"})," \u4E3A\u9ED8\u8BA4\u7684\u8F93\u51FA\u6A21\u5F0F\uFF0C\u65E5\u5FD7\u540C\u6B65\u8F93\u51FA\u4E14\u5305\u542B\u4F4D\u7F6E\u4FE1\u606F\u3002",(0,l.jsx)(n.code,{children:"ASYNC"})," \u9ED8\u8BA4\u662F\u65E5\u5FD7\u5F02\u6B65\u8F93\u51FA\u4E14\u5305\u542B\u4F4D\u7F6E\u4FE1\u606F\u3002 ",(0,l.jsx)(n.code,{children:"BRIEF"})," \u6A21\u5F0F\u662F\u65E5\u5FD7\u5F02\u6B65\u8F93\u51FA\u4F46\u4E0D\u5305\u542B\u4F4D\u7F6E\u4FE1\u606F\u3002\u4E09\u79CD\u65E5\u5FD7\u8F93\u51FA\u6A21\u5F0F\u7684\u6027\u80FD\u4F9D\u6B21\u9012\u589E"]})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["::: note\n\u4ECE 3.0.2 \u7248\u672C\u5F00\u59CB\uFF0C",(0,l.jsx)(n.code,{children:"sys_log_mode"})," \u914D\u7F6E\u9ED8\u8BA4\u6539\u4E3A ",(0,l.jsx)(n.code,{children:"AYSNC"}),"\u3002\n:::"]}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"sys_log_roll_num"})," \u63A7\u5236\u7684\u662F\u4E00\u5929\u7684\u4FDD\u7559\u65E5\u5FD7\u6570\u91CF\uFF0C\u800C\u4E0D\u662F\u603B\u6570\u91CF\uFF0C\u9700\u8981\u914D\u5408 ",(0,l.jsx)(n.code,{children:"sys_log_delete_age"})," \u5171\u540C\u786E\u5B9A\u603B\u4FDD\u7559\u65E5\u5FD7\u6570\u91CF\u3002"]})}),"\n",(0,l.jsx)(n.h2,{id:"\u5F00\u542F-debug-\u65E5\u5FD7",children:"\u5F00\u542F DEBUG \u65E5\u5FD7"}),"\n",(0,l.jsx)(n.p,{children:"FE \u7684 Debug \u7EA7\u522B\u65E5\u5FD7\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u5F00\u542F\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u754C\u9762\u6216 API \u5728\u8FD0\u884C\u65F6\u6253\u5F00\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u5F00\u542F"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728 fe.conf \u4E2D\u6DFB\u52A0\u914D\u7F6E\u9879 ",(0,l.jsx)(n.code,{children:"sys_log_verbose_modules"}),"\u3002\u4E3E\u4F8B\u5982\u4E0B\uFF1A"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"# \u4EC5\u5F00\u542F\u7C7B org.apache.doris.catalog.Catalog \u7684 Debug \u65E5\u5FD7\nsys_log_verbose_modules=org.apache.doris.catalog.Catalog\n\n# \u5F00\u542F\u5305 org.apache.doris.catalog \u4E0B\u6240\u6709\u7C7B\u7684 Debug \u65E5\u5FD7\nsys_log_verbose_modules=org.apache.doris.catalog\n\n# \u5F00\u542F\u5305 org \u4E0B\u6240\u6709\u7C7B\u7684 Debug \u65E5\u5FD7\nsys_log_verbose_modules=org\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6DFB\u52A0\u914D\u7F6E\u9879\u5E76\u91CD\u542F FE \u8282\u70B9\uFF0C\u5373\u53EF\u751F\u6548\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u901A\u8FC7 FE UI \u754C\u9762"}),"\n",(0,l.jsxs)(n.p,{children:["\u901A\u8FC7 UI \u754C\u9762\u53EF\u4EE5\u5728\u8FD0\u884C\u65F6\u4FEE\u6539\u65E5\u5FD7\u7EA7\u522B\u3002\u65E0\u9700\u91CD\u542F FE \u8282\u70B9\u3002\u5728\u6D4F\u89C8\u5668\u6253\u5F00 FE \u8282\u70B9\u7684 http \u7AEF\u53E3\uFF08\u9ED8\u8BA4\u4E3A 8030\uFF09\uFF0C\u5E76\u767B\u9646 UI \u754C\u9762\u3002\u4E4B\u540E\u70B9\u51FB\u4E0A\u65B9\u5BFC\u822A\u680F\u7684 ",(0,l.jsx)(n.code,{children:"Log"})," \u6807\u7B7E\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\u901A\u8FC7 FE UI \u754C\u9762",src:d(61588).Z+"",width:"956",height:"354"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6211\u4EEC\u5728 Add \u8F93\u5165\u6846\u4E2D\u53EF\u4EE5\u8F93\u5165\u5305\u540D\u6216\u8005\u5177\u4F53\u7684\u7C7B\u540D\uFF0C\u53EF\u4EE5\u6253\u5F00\u5BF9\u5E94\u7684 Debug \u65E5\u5FD7\u3002\u5982\u8F93\u5165 ",(0,l.jsx)(n.code,{children:"org.apache.doris.catalog.Catalog"})," \u5219\u53EF\u4EE5\u6253\u5F00 Catalog \u7C7B\u7684 Debug \u65E5\u5FD7\uFF1A"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\u901A\u8FC7 FE UI \u754C\u9762",src:d(265194).Z+"",width:"958",height:"362"})}),"\n",(0,l.jsx)(n.p,{children:"\u4F60\u4E5F\u53EF\u4EE5\u5728 Delete \u8F93\u5165\u6846\u4E2D\u8F93\u5165\u5305\u540D\u6216\u8005\u5177\u4F53\u7684\u7C7B\u540D\uFF0C\u6765\u5173\u95ED\u5BF9\u5E94\u7684 Debug \u65E5\u5FD7\u3002"}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsx)(n.p,{children:"\u8FD9\u91CC\u7684\u4FEE\u6539\u53EA\u4F1A\u5F71\u54CD\u5BF9\u5E94\u7684 FE \u8282\u70B9\u7684\u65E5\u5FD7\u7EA7\u522B\u3002\u4E0D\u4F1A\u5F71\u54CD\u5176\u4ED6 FE \u8282\u70B9\u7684\u65E5\u5FD7\u7EA7\u522B\u3002"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u901A\u8FC7 API \u4FEE\u6539"}),"\n",(0,l.jsx)(n.p,{children:"\u901A\u8FC7\u4EE5\u4E0B API \u4E5F\u53EF\u4EE5\u5728\u8FD0\u884C\u65F6\u4FEE\u6539\u65E5\u5FD7\u7EA7\u522B\u3002\u65E0\u9700\u91CD\u542F FE \u8282\u70B9\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"curl -X POST -uuser:passwd fe_host:http_port/rest/v1/log?add_verbose=org.apache.doris.catalog.Catalog\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5176\u4E2D\u7528\u6237\u540D\u5BC6\u7801\u4E3A\u767B\u9646 Doris \u7684 root \u6216 admin \u7528\u6237\u3002",(0,l.jsx)(n.code,{children:"add_verbose"})," \u53C2\u6570\u6307\u5B9A\u8981\u5F00\u542F Debug \u65E5\u5FD7\u7684\u5305\u540D\u6216\u7C7B\u540D\u3002\u82E5\u6210\u529F\u5219\u8FD4\u56DE\uFF1A"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n    "msg": "success", \n    "code": 0, \n    "data": {\n        "LogConfiguration": {\n            "VerboseNames": "org,org.apache.doris.catalog.Catalog", \n            "AuditNames": "slow_query,query,load", \n            "Level": "INFO"\n        }\n    }, \n    "count": 0\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B API \u5173\u95ED Debug \u65E5\u5FD7\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"curl -X POST -uuser:passwd fe_host:http_port/rest/v1/log?del_verbose=org.apache.doris.catalog.Catalog\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"del_verbose"})," \u53C2\u6570\u6307\u5B9A\u8981\u5173\u95ED Debug \u65E5\u5FD7\u7684\u5305\u540D\u6216\u7C7B\u540D\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5BB9\u5668\u73AF\u5883\u65E5\u5FD7\u914D\u7F6E",children:"\u5BB9\u5668\u73AF\u5883\u65E5\u5FD7\u914D\u7F6E"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u901A\u8FC7\u5BB9\u5668\u73AF\u5883\uFF08\u5982 k8s\uFF09\u90E8\u7F72 FE \u8FDB\u7A0B\u3002\u6240\u6709\u65E5\u5FD7\u9700\u8981\u901A\u8FC7\u6807\u51C6\u8F93\u51FA\u6D41\u800C\u4E0D\u662F\u6587\u4EF6\u8FDB\u884C\u8F93\u51FA\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u6B64\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,l.jsx)(n.code,{children:"sh bin/start_fe.sh --console"})," \u547D\u4EE4\u524D\u53F0\u542F\u52A8 FE \u8FDB\u7A0B\uFF0C\u5E76\u5C06\u6240\u6709\u65E5\u5FD7\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u6D41\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u4E3A\u4E86\u5728\u540C\u4E00\u6807\u51C6\u8F93\u51FA\u6D41\u4E2D\u533A\u5206\u4E0D\u540C\u65E5\u5FD7\u7C7B\u578B\uFF0C\u4F1A\u5728\u6BCF\u6761\u65E5\u5FD7\u524D\u6DFB\u52A0\u4E0D\u540C\u7684\u524D\u7F00\u4EE5\u793A\u533A\u5206\u3002\u5982\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"RuntimeLogger 2024-06-24 00:05:21,522 INFO (main|1) [DorisFE.start():158] Doris FE starting...\nRuntimeLogger 2024-06-24 00:05:21,530 INFO (main|1) [FrontendOptions.analyzePriorityCidrs():194] configured prior_cidrs value: 172.20.32.136/24\nRuntimeLogger 2024-06-24 00:05:21,535 INFO (main|1) [FrontendOptions.initAddrUseIp():101] local address: /172.20.32.136.\nRuntimeLogger 2024-06-24 00:05:21,740 INFO (main|1) [ConsistencyChecker.initWorkTime():106] consistency checker will work from 23:00 to 23:00\nRuntimeLogger 2024-06-24 00:05:21,889 ERROR (main|1) [Util.report():128] SLF4J: Class path contains multiple SLF4J bindings.\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u4E0D\u540C\u7684\u524D\u7F00\u8BF4\u660E\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"StdoutLogger"}),"\uFF1A\u6807\u51C6\u8F93\u51FA\u6D41\u4E2D\u7684\u65E5\u5FD7\uFF0C\u5BF9\u5E94 ",(0,l.jsx)(n.code,{children:"fe.out"})," \u4E2D\u7684\u5185\u5BB9\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"StderrLogger"}),"\uFF1A\u6807\u51C6\u9519\u8BEF\u6D41\u4E2D\u7684\u65E5\u5FD7\uFF0C\u5BF9\u5E94 ",(0,l.jsx)(n.code,{children:"fe.out"})," \u4E2D\u7684\u5185\u5BB9\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"RuntimeLogger"}),"\uFF1A\u5BF9\u5E94 ",(0,l.jsx)(n.code,{children:"fe.log"})," \u4E2D\u7684\u65E5\u5FD7\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"AuditLogger"}),"\uFF1A\u5BF9\u5E94 ",(0,l.jsx)(n.code,{children:"fe.audit.log"})," \u4E2D\u7684\u65E5\u5FD7\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u65E0\u524D\u7F00\uFF1A\u5BF9\u5E94 ",(0,l.jsx)(n.code,{children:"fe.gc.log"})," \u4E2D\u7684\u65E5\u5FD7\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u6B64\u5916\uFF0C\u9488\u5BF9\u5BB9\u5668\u73AF\u5883\u8FD8\u6709\u4E00\u4E2A\u989D\u5916\u914D\u7F6E\u53C2\u6570\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u914D\u7F6E\u9879"}),(0,l.jsx)(n.th,{children:"\u9ED8\u8BA4\u503C"}),(0,l.jsx)(n.th,{children:"\u53EF\u9009\u9879"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"enable_file_logger"})}),(0,l.jsx)(n.td,{children:"true"}),(0,l.jsx)(n.td,{children:"true, false"}),(0,l.jsxs)(n.td,{children:["\u662F\u5426\u542F\u7528\u6587\u4EF6\u65E5\u5FD7\u3002\u9ED8\u8BA4\u4E3A ",(0,l.jsx)(n.code,{children:"true"}),"\u3002\u5F53\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"--console"})," \u547D\u4EE4\u542F\u52A8 FE \u8FDB\u7A0B\u65F6\uFF0C\u65E5\u5FD7\u4F1A\u540C\u65F6\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u6D41\uFF0C\u4EE5\u53CA\u6B63\u5E38\u7684\u65E5\u5FD7\u6587\u4EF6\u4E2D\u3002\u5F53\u4E3A ",(0,l.jsx)(n.code,{children:"false"})," \u65F6\uFF0C\u65E5\u5FD7\u53EA\u4F1A\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u6D41\uFF0C\u4E0D\u4F1A\u518D\u4EA7\u751F\u65E5\u5FD7\u6587\u4EF6"]})]})})]})]})}function x(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},61588:function(e,n,d){d.d(n,{Z:function(){return s}});let s=d.p+"assets/images/fe_web_log1-160d3f6483c6ba534afcbc475367173d.png"},265194:function(e,n,d){d.d(n,{Z:function(){return s}});let s=d.p+"assets/images/fe_web_log2-b3b575c3553626afc751ec6efa2b15d5.png"},250065:function(e,n,d){d.d(n,{Z:function(){return i},a:function(){return c}});var s=d(667294);let l={},r=s.createContext(l);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);