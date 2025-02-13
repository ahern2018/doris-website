"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["490296"],{979453:function(e,t,s){s.r(t),s.d(t,{metadata:()=>n,contentTitle:()=>i,default:()=>p,assets:()=>d,toc:()=>a,frontMatter:()=>o});var n=JSON.parse('{"id":"data-operate/export/export-with-mysql-dump","title":"MySQL Dump","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/data-operate/export/export-with-mysql-dump.md","sourceDirName":"data-operate/export","slug":"/data-operate/export/export-with-mysql-dump","permalink":"/zh-CN/docs/3.0/data-operate/export/export-with-mysql-dump","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"MySQL Dump","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SELECT INTO OUTFILE","permalink":"/zh-CN/docs/3.0/data-operate/export/outfile"},"next":{"title":"MySQL \u517C\u5BB9\u6027","permalink":"/zh-CN/docs/3.0/query-data/mysql-compatibility"}}'),l=s("785893"),r=s("250065");let o={title:"MySQL Dump",language:"zh-CN"},i=void 0,d={},a=[{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"\u5BFC\u51FA",id:"\u5BFC\u51FA",level:3},{value:"\u5BFC\u5165",id:"\u5BFC\u5165",level:3},{value:"\u6CE8\u610F",id:"\u6CE8\u610F",level:2}];function c(e){let t={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:["Doris \u5728 0.15 \u4E4B\u540E\u7684\u7248\u672C\u5DF2\u7ECF\u652F\u6301\u901A\u8FC7 ",(0,l.jsx)(t.code,{children:"mysqldump"})," \u5DE5\u5177\u5BFC\u51FA\u6570\u636E\u6216\u8005\u8868\u7ED3\u6784"]}),"\n",(0,l.jsx)(t.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,l.jsx)(t.h3,{id:"\u5BFC\u51FA",children:"\u5BFC\u51FA"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["\u5BFC\u51FA test \u6570\u636E\u5E93\u4E2D\u7684 table1 \u8868\uFF1A",(0,l.jsx)(t.code,{children:"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test --tables table1"})]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["\u5BFC\u51FA test \u6570\u636E\u5E93\u4E2D\u7684 table1 \u8868\u7ED3\u6784\uFF1A",(0,l.jsx)(t.code,{children:"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test --tables table1 --no-data"})]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["\u5BFC\u51FA test1, test2 \u6570\u636E\u5E93\u4E2D\u6240\u6709\u8868\uFF1A",(0,l.jsx)(t.code,{children:"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test1 test2"})]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["\u5BFC\u51FA\u6240\u6709\u6570\u636E\u5E93\u548C\u8868 ",(0,l.jsx)(t.code,{children:"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --all-databases"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["\u66F4\u591A\u7684\u4F7F\u7528\u53C2\u6570\u53EF\u4EE5\u53C2\u8003",(0,l.jsx)(t.code,{children:"mysqldump"})," \u7684\u4F7F\u7528\u624B\u518C"]}),"\n",(0,l.jsx)(t.h3,{id:"\u5BFC\u5165",children:"\u5BFC\u5165"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"mysqldump"}),"\u5BFC\u51FA\u7684\u7ED3\u679C\u53EF\u4EE5\u91CD\u5B9A\u5411\u5230\u6587\u4EF6\u4E2D\uFF0C\u4E4B\u540E\u53EF\u4EE5\u901A\u8FC7 source \u547D\u4EE4\u5BFC\u5165\u5230 Doris \u4E2D ",(0,l.jsx)(t.code,{children:"source filenamme.sql"})]}),"\n",(0,l.jsx)(t.h2,{id:"\u6CE8\u610F",children:"\u6CE8\u610F"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["\u7531\u4E8E Doris  \u4E2D\u6CA1\u6709 MySQL \u91CC\u7684 tablespace \u6982\u5FF5\uFF0C\u56E0\u6B64\u5728\u4F7F\u7528 MySQL Dump \u65F6\u8981\u52A0\u4E0A ",(0,l.jsx)(t.code,{children:"--no-tablespaces"})," \u53C2\u6570"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"\u4F7F\u7528 MySQL Dump \u5BFC\u51FA\u6570\u636E\u548C\u8868\u7ED3\u6784\u4EC5\u7528\u4E8E\u5F00\u53D1\u6D4B\u8BD5\u6216\u8005\u6570\u636E\u91CF\u5F88\u5C0F\u7684\u60C5\u51B5\uFF0C\u8BF7\u52FF\u7528\u4E8E\u5927\u6570\u636E\u91CF\u7684\u751F\u4EA7\u73AF\u5883"}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return i},a:function(){return o}});var n=s(667294);let l={},r=n.createContext(l);function o(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);