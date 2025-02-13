"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["468836"],{539303:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/stddev-samp","title":"STDDEV_SAMP","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/aggregate-functions/stddev-samp.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/stddev-samp","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/stddev-samp","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"STDDEV_SAMP","language":"zh-CN"},"sidebar":"docs","previous":{"title":"STDDEV,STDDEV_POP","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/stddev"},"next":{"title":"VARIANCE,VAR_POP,VARIANCE_POP","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/variance"}}'),l=t("785893"),r=t("250065");let a={title:"STDDEV_SAMP",language:"zh-CN"},i=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DEexpr\u8868\u8FBE\u5F0F\u7684\u6837\u672C\u6807\u51C6\u5DEE"}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"STDDEV_SAMP(<expr>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<expr>"})}),(0,l.jsx)(e.td,{children:"\u9700\u8981\u88AB\u8BA1\u7B97\u6807\u51C6\u5DEE\u7684\u503C"})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DE\u53C2\u6570 expr \u7684\u6837\u672C\u6807\u51C6\u5DEE"}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:'-- \u521B\u5EFA\u793A\u4F8B\u8868\nCREATE TABLE score_table (\n    student_id INT,\n    score DOUBLE\n) DISTRIBUTED BY HASH(student_id)\nPROPERTIES (\n    "replication_num" = "1"\n);\n\n-- \u63D2\u5165\u6D4B\u8BD5\u6570\u636E\nINSERT INTO score_table VALUES\n(1, 85),\n(2, 90),\n(3, 82),\n(4, 88),\n(5, 95);\n\n-- \u8BA1\u7B97\u6240\u6709\u5B66\u751F\u5206\u6570\u7684\u6837\u672C\u6807\u51C6\u5DEE\nSELECT STDDEV_SAMP(score) as score_stddev\nFROM score_table;\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-------------------+\n| score_stddev      |\n+-------------------+\n| 4.949747468305831 |\n+-------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return a}});var s=t(667294);let l={},r=s.createContext(l);function a(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:a(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);