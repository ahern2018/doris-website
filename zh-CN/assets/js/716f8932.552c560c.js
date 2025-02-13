"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["637354"],{939367:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>a,default:()=>u,assets:()=>i,toc:()=>d,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/count","title":"COUNT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/aggregate-functions/count.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/count","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/count","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"COUNT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"TOPN_WEIGHTED","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/topn-weighted"},"next":{"title":"COUNT_BY_ENUM","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/count-by-enum"}}'),l=t("785893"),c=t("250065");let r={title:"COUNT",language:"zh-CN"},a=void 0,i={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DE\u6307\u5B9A\u5217\u7684\u975ENULL\u8BB0\u5F55\u6570\uFF0C\u6216\u8005\u8BB0\u5F55\u603B\u6570"}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"COUNT(DISTINCT <expr> [,<expr>,...])\nCOUNT(*)\nCOUNT(<expr>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<expr>"})}),(0,l.jsx)(e.td,{children:"\u6761\u4EF6\u8868\u8FBE\u5F0F\uFF08\u5217\u540D\uFF09"})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DE\u503C\u4E3A\u6570\u503C\u7C7B\u578B\u3002\u5982\u679Cexpr\u4E3ANULL\uFF0C\u5219\u4E0D\u53C2\u6570\u7EDF\u8BA1"}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select * from test_count;\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+------+------+------+\n| id   | name | sex  |\n+------+------+------+\n|    1 | 1    |    1 |\n|    2 | 2    |    1 |\n|    3 | 3    |    1 |\n|    4 | 0    |    1 |\n|    4 | 4    |    1 |\n|    5 | NULL |    1 |\n+------+------+------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select count(*) from test_count;\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+----------+\n| count(*) |\n+----------+\n|        6 |\n+----------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select count(name) from test_insert;\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-------------+\n| count(name) |\n+-------------+\n|           5 |\n+-------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select count(distinct sex) from test_insert;\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+---------------------+\n| count(DISTINCT sex) |\n+---------------------+\n|                   1 |\n+---------------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select count(distinct id,sex) from test_insert;\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-------------------------+\n| count(DISTINCT id, sex) |\n+-------------------------+\n|                       5 |\n+-------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return r}});var s=t(667294);let l={},c=s.createContext(l);function r(n){let e=s.useContext(c);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);