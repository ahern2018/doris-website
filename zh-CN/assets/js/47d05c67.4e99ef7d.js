"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["998589"],{669088:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>c,default:()=>d,assets:()=>i,toc:()=>u,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-sum","title":"ARRAY_SUM","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/array-functions/array-sum.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-sum","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/array-functions/array-sum","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ARRAY_SUM","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_AVG","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/array-functions/array-avg"},"next":{"title":"ARRAY_SIZE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/array-functions/array-size"}}'),r=s("785893"),a=s("250065");let l={title:"ARRAY_SUM",language:"zh-CN"},c=void 0,i={},u=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(e.p,{children:"\u8BA1\u7B97\u6570\u7EC4\u4E2D\u6240\u6709\u5143\u7D20\u4E4B\u548C"}),"\n",(0,r.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"ARRAY_SUM(<src>)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u53C2\u6570"}),(0,r.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<src>"})}),(0,r.jsx)(e.td,{children:"\u5BF9\u5E94\u6570\u7EC4"})]})})]}),"\n",(0,r.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(e.p,{children:"\u8FD4\u56DE\u6570\u7EC4\u4E2D\u6240\u6709\u5143\u7D20\u4E4B\u548C\uFF0C\u6570\u7EC4\u4E2D\u7684NULL\u503C\u4F1A\u88AB\u8DF3\u8FC7\u3002\u7A7A\u6570\u7EC4\u4EE5\u53CA\u5143\u7D20\u5168\u4E3ANULL\u503C\u7684\u6570\u7EC4\uFF0C\u7ED3\u679C\u8FD4\u56DENULL\u503C\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT ARRAY_SUM([1, 2, 3, 6]),ARRAY_SUM([1, 4, 3, 5, NULL]),ARRAY_SUM([NULL]);\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+-------------------------+-------------------------------+-------------------------------------------+\n| array_sum([1, 2, 3, 6]) | array_sum([1, 4, 3, 5, NULL]) | array_sum(cast([NULL] as ARRAY<BOOLEAN>)) |\n+-------------------------+-------------------------------+-------------------------------------------+\n|                      12 |                            13 |                                      NULL |\n+-------------------------+-------------------------------+-------------------------------------------+\n"})})]})}function d(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return l}});var t=s(667294);let r={},a=t.createContext(r);function l(n){let e=t.useContext(a);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);