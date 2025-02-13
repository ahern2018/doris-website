"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["648923"],{117300:function(n,e,i){i.r(e),i.d(e,{metadata:()=>t,contentTitle:()=>r,default:()=>o,assets:()=>c,toc:()=>a,frontMatter:()=>s});var t=JSON.parse('{"id":"admin-manual/audit-plugin","title":"\u5BA1\u8BA1\u65E5\u5FD7","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/audit-plugin.md","sourceDirName":"admin-manual","slug":"/admin-manual/audit-plugin","permalink":"/zh-CN/docs/dev/admin-manual/audit-plugin","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u5BA1\u8BA1\u65E5\u5FD7","language":"zh-CN"},"sidebar":"docs","previous":{"title":"HTTP \u5B89\u5168\u4F20\u8F93","permalink":"/zh-CN/docs/dev/admin-manual/auth/fe-certificate"},"next":{"title":"\u52A0\u5BC6\u548C\u8131\u654F\u51FD\u6570","permalink":"/zh-CN/docs/dev/admin-manual/auth/encryption-function"}}'),d=i("785893"),l=i("250065");let s={title:"\u5BA1\u8BA1\u65E5\u5FD7",language:"zh-CN"},r=void 0,c={},a=[{value:"\u5F00\u542F\u5BA1\u8BA1\u65E5\u5FD7",id:"\u5F00\u542F\u5BA1\u8BA1\u65E5\u5FD7",level:2},{value:"\u67E5\u770B\u5BA1\u8BA1\u65E5\u5FD7\u8868",id:"\u67E5\u770B\u5BA1\u8BA1\u65E5\u5FD7\u8868",level:2},{value:"\u5BA1\u8BA1\u65E5\u5FD7\u6587\u4EF6",id:"\u5BA1\u8BA1\u65E5\u5FD7\u6587\u4EF6",level:2},{value:"\u5BA1\u8BA1\u65E5\u5FD7\u76F8\u5173\u914D\u7F6E",id:"\u5BA1\u8BA1\u65E5\u5FD7\u76F8\u5173\u914D\u7F6E",level:2}];function h(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.p,{children:"Doris \u63D0\u4F9B\u4E86\u5BF9\u4E8E\u6570\u636E\u5E93\u64CD\u4F5C\u7684\u5BA1\u8BA1\u80FD\u529B\uFF0C\u53EF\u4EE5\u8BB0\u5F55\u7528\u6237\u5BF9\u6570\u636E\u5E93\u7684\u767B\u9646\u3001\u67E5\u8BE2\u3001\u4FEE\u6539\u64CD\u4F5C\u3002\u5728 Doris \u4E2D\uFF0C\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u5185\u7F6E\u7CFB\u7EDF\u8868\u67E5\u8BE2\u5BA1\u8BA1\u65E5\u5FD7\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u67E5\u770B Doris \u7684\u5BA1\u8BA1\u65E5\u5FD7\u6587\u4EF6\u3002"}),"\n",(0,d.jsx)(e.h2,{id:"\u5F00\u542F\u5BA1\u8BA1\u65E5\u5FD7",children:"\u5F00\u542F\u5BA1\u8BA1\u65E5\u5FD7"}),"\n",(0,d.jsxs)(e.p,{children:["\u901A\u8FC7\u5168\u5C40\u53D8\u91CF ",(0,d.jsx)(e.code,{children:"enable_audit_plugin"})," \u53EF\u4EE5\u968F\u65F6\u5F00\u542F\u6216\u5173\u95ED\u5BA1\u8BA1\u65E5\u5FD7\u63D2\u4EF6\uFF08\u9ED8\u8BA4\u4E3A\u5173\u95ED\u72B6\u6001\uFF09\uFF0C\u5982\uFF1A"]}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.code,{children:"set global enable_audit_plugin = true;"})}),"\n",(0,d.jsxs)(e.p,{children:["\u5F00\u542F\u540E\uFF0CDoris \u4F1A\u5C06\u5F00\u542F\u540E\u7684\u5BA1\u8BA1\u65E5\u5FD7\u5199\u5165 ",(0,d.jsx)(e.code,{children:"audit_log"})," \u8868\u3002"]}),"\n",(0,d.jsx)(e.p,{children:"\u53EF\u4EE5\u968F\u65F6\u5173\u95ED\u5BA1\u8BA1\u65E5\u5FD7\u63D2\u4EF6\uFF1A"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.code,{children:"set global enable_audit_plugin = false;"})}),"\n",(0,d.jsxs)(e.p,{children:["\u5173\u95ED\u540E\uFF0CDoris \u5C06\u4F1A\u505C\u6B62 ",(0,d.jsx)(e.code,{children:"audit_log"})," \u8868\u7684\u5199\u5165\u3002\u5DF2\u5199\u5165\u7684\u5BA1\u8BA1\u65E5\u5FD7\u4E0D\u4F1A\u53D8\u5316\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u67E5\u770B\u5BA1\u8BA1\u65E5\u5FD7\u8868",children:"\u67E5\u770B\u5BA1\u8BA1\u65E5\u5FD7\u8868"}),"\n",(0,d.jsx)(e.admonition,{title:"\u6CE8\u610F",type:"caution",children:(0,d.jsxs)(e.p,{children:["\u5728 2.1.8 \u7248\u672C\u4E4B\u524D\uFF0C\u968F\u7740\u7CFB\u7EDF\u7248\u672C\u7684\u5347\u7EA7\uFF0C\u5BA1\u8BA1\u65E5\u5FD7\u5B57\u6BB5\u4F1A\u6709\u589E\u52A0\uFF0C\u5728\u5347\u7EA7\u540E\u9700\u8981\u6839\u636E\u5BA1\u8BA1\u65E5\u5FD7\u8868\u4E2D\u7684\u5B57\u6BB5\uFF0C\u901A\u8FC7 ",(0,d.jsx)(e.code,{children:"ALTER TALBE"})," \u547D\u4EE4\u4E3A ",(0,d.jsx)(e.code,{children:"audit_log"})," \u8868\u589E\u52A0\u5B57\u6BB5\u3002"]})}),"\n",(0,d.jsxs)(e.p,{children:["\u4ECE Doris 2.1 \u7248\u672C\u5F00\u59CB\uFF0CDoirs \u53EF\u4EE5\u901A\u8FC7\u5F00\u542F\u5BA1\u8BA1\u65E5\u5FD7\u529F\u80FD\uFF0C\u5C06\u7528\u6237\u884C\u4E3A\u64CD\u4F5C\u5199\u5165\u5230 ",(0,d.jsx)(e.code,{children:"__internal_schema"})," \u5E93\u7684 ",(0,d.jsx)(e.a,{href:"../admin-manual/system-tables/internal_schema/audit_log",children:(0,d.jsx)(e.code,{children:"audit_log"})})," \u8868\u4E2D\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u5BA1\u8BA1\u65E5\u5FD7\u8868\u662F\u4E00\u5F20\u52A8\u6001\u5206\u533A\u8868\uFF0C\u6309\u5929\u8FDB\u884C\u5206\u533A\uFF0C\u9ED8\u8BA4\u4FDD\u7559\u6700\u8FD1 30 \u5929\u7684\u6570\u636E\u3002\u53EF\u4EE5\u901A\u8FC7 ALTER TABLE \u8BED\u53E5\u4FEE\u6539\u52A8\u6001\u5206\u533A\u7684 ",(0,d.jsx)(e.code,{children:"dynamic_partition.start"})," \u5C5E\u6027\u8C03\u6574\u52A8\u6001\u5206\u533A\u7684\u4FDD\u7559\u5929\u6570\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u5BA1\u8BA1\u65E5\u5FD7\u6587\u4EF6",children:"\u5BA1\u8BA1\u65E5\u5FD7\u6587\u4EF6"}),"\n",(0,d.jsx)(e.p,{children:"\u5728 fe.conf \u4E2D\uFF0CLOG_DIR \u5B9A\u4E49\u4E86 FE \u65E5\u5FD7\u7684\u5B58\u50A8\u8DEF\u5F84\u3002\u5728 ${LOG_DIR}/fe.audit.log \u4E2D\u8BB0\u5F55\u4E86\u8FD9\u53F0 FE \u8282\u70B9\u6267\u884C\u7684\u6240\u6709\u6570\u636E\u5E93\u64CD\u4F5C\u3002\u5982\u679C\u9700\u8981\u67E5\u770B\u96C6\u7FA4\u6240\u6709\u7684\u64CD\u4F5C\uFF0C\u9700\u8981\u4FBF\u5229\u6BCF\u4E00\u53F0 FE \u7684\u5BA1\u8BA1\u65E5\u5FD7\u3002"}),"\n",(0,d.jsx)(e.h2,{id:"\u5BA1\u8BA1\u65E5\u5FD7\u76F8\u5173\u914D\u7F6E",children:"\u5BA1\u8BA1\u65E5\u5FD7\u76F8\u5173\u914D\u7F6E"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u5168\u5C40\u53D8\u91CF\uFF1A"})}),"\n",(0,d.jsxs)(e.p,{children:["\u53EF\u4EE5\u901A\u8FC7 ",(0,d.jsx)(e.code,{children:"set [global] <var_name> = <var_value>"})," \u4FEE\u6539\u5BA1\u8BA1\u65E5\u5FD7\u53D8\u91CF\u3002"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u53D8\u91CF"}),(0,d.jsx)(e.th,{children:"\u9ED8\u8BA4\u503C"}),(0,d.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"audit_plugin_max_batch_interval_sec"})}),(0,d.jsx)(e.td,{children:"60 \u79D2"}),(0,d.jsx)(e.td,{children:"\u5BA1\u8BA1\u65E5\u5FD7\u8868\u7684\u6700\u5927\u5199\u5165\u95F4\u9694\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"audit_plugin_max_batch_bytes"})}),(0,d.jsx)(e.td,{children:"50MB"}),(0,d.jsx)(e.td,{children:"\u5BA1\u8BA1\u65E5\u5FD7\u8868\u6BCF\u6279\u6B21\u6700\u5927\u5199\u5165\u6570\u636E\u91CF"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"audit_plugin_max_sql_length"})}),(0,d.jsx)(e.td,{children:"4096"}),(0,d.jsx)(e.td,{children:"\u5BA1\u8BA1\u65E5\u5FD7\u8868\u91CC\u8BB0\u5F55\u7684\u8BED\u53E5\u7684\u6700\u5927\u957F\u5EA6"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"audit_plugin_load_timeout"})}),(0,d.jsx)(e.td,{children:"600 \u79D2"}),(0,d.jsx)(e.td,{children:"\u5BA1\u8BA1\u65E5\u5FD7\u5BFC\u5165\u4F5C\u4E1A\u7684\u9ED8\u8BA4\u8D85\u65F6\u65F6\u95F4"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"FE \u914D\u7F6E\u9879\uFF1A"})}),"\n",(0,d.jsx)(e.p,{children:"\u901A\u8FC7\u4FEE\u6539 fe.conf \u76EE\u5F55\u53EF\u4EE5\u4FEE\u6539 FE \u914D\u7F6E\u9879\u3002"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u914D\u7F6E\u9879"}),(0,d.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,d.jsx)(e.tbody,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"skip_audit_user_list"})}),(0,d.jsx)(e.td,{children:"\u5982\u679C\u4E0D\u5E0C\u671B\u67D0\u4E9B\u7528\u6237\u7684\u64CD\u4F5C\u88AB\u5BA1\u8BA1\u65E5\u5FD7\u8BB0\u5F55\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u914D\u7F6E\u4FEE\u6539\uFF08\u81EA 3.0.01 \u652F\u6301\uFF09\u3002\u5982\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u5C4F\u853D user1 \u4E0E user2 \u7684\u5BA1\u8BA1\u65E5\u5FD7\u8BB0\u5F55\uFF1A"})]})})]})]})}function o(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(h,{...n})}):h(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return r},a:function(){return s}});var t=i(667294);let d={},l=t.createContext(d);function s(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:s(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);