"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["287068"],{329375:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>c,default:()=>u,assets:()=>a,toc:()=>d,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/min-by","title":"MIN_BY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/aggregate-functions/min-by.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/min-by","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/min-by","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"MIN_BY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MIN","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/min"},"next":{"title":"MAX","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/max"}}'),l=t("785893"),r=t("250065");let i={title:"MIN_BY",language:"zh-CN"},c=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570\u8BF4\u660E",id:"\u53C2\u6570\u8BF4\u660E",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",expr1:"expr1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"MIN_BY \u51FD\u6570\u7528\u4E8E\u6839\u636E\u6307\u5B9A\u5217\u7684\u6700\u5C0F\u503C\uFF0C\u8FD4\u56DE\u5BF9\u5E94\u7684\u7684\u5173\u8054\u503C\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"MIN_BY(<expr1>, <expr2>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570\u8BF4\u660E",children:"\u53C2\u6570\u8BF4\u660E"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<expr1>"})}),(0,l.jsx)(e.td,{children:"\u7528\u4E8E\u6307\u5B9A\u5BF9\u5E94\u5173\u8054\u7684\u8868\u8FBE\u5F0F\u3002"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<expr2>"})}),(0,l.jsx)(e.td,{children:"\u7528\u4E8E\u6307\u5B9A\u6700\u5C0F\u503C\u7EDF\u8BA1\u7684\u8868\u8FBE\u5F0F\u3002"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsxs)(e.p,{children:["\u8FD4\u56DE\u4E0E\u8F93\u5165\u8868\u8FBE\u5F0F ",(0,l.jsx)(e.expr1,{children:" \u76F8\u540C\u7684\u6570\u636E\u7C7B\u578B\u3002"})]}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select * from tbl;\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+------+------+------+------+\n| k1   | k2   | k3   | k4   |\n+------+------+------+------+\n|    0 | 3    | 2    |  100 |\n|    1 | 2    | 3    |    4 |\n|    4 | 3    | 2    |    1 |\n|    3 | 4    | 2    |    1 |\n+------+------+------+------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select min_by(k1, k4) from tbl;\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+--------------------+\n| min_by(`k1`, `k4`) |\n+--------------------+\n|                  4 |\n+--------------------+ \n"})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return i}});var s=t(667294);let l={},r=s.createContext(l);function i(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);