"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["55277"],{887890:function(n,e,a){a.r(e),a.d(e,{metadata:()=>r,contentTitle:()=>c,default:()=>u,assets:()=>i,toc:()=>d,frontMatter:()=>l});var r=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-avg","title":"ARRAY_AVG","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-avg.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-avg","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-avg","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ARRAY_AVG","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_FILTER","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-filter"},"next":{"title":"ARRAY_SUM","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-sum"}}'),s=a("785893"),t=a("250065");let l={title:"ARRAY_AVG",language:"zh-CN"},c=void 0,i={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsxs)(e.p,{children:["\u8FD4\u56DE\u6570\u7EC4\u4E2D\u6240\u6709\u5143\u7D20\u7684\u5E73\u5747\u503C\uFF0C\u6570\u7EC4\u4E2D\u7684",(0,s.jsx)(e.code,{children:"NULL"}),"\u503C\u4F1A\u88AB\u8DF3\u8FC7\u3002\u7A7A\u6570\u7EC4\u4EE5\u53CA\u5143\u7D20\u5168\u4E3A",(0,s.jsx)(e.code,{children:"NULL"}),"\u503C\u7684\u6570\u7EC4\uFF0C\u7ED3\u679C\u8FD4\u56DE",(0,s.jsx)(e.code,{children:"NULL"}),"\u503C\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"ARRAY_AVG(<arr>)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u53C2\u6570"}),(0,s.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"<arr>"})}),(0,s.jsx)(e.td,{children:"\u7528\u4E8E\u8BA1\u7B97\u5E73\u5747\u503C\u7684\u6570\u7EC4"})]})})]}),"\n",(0,s.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A\u5E38\u91CF\uFF0C\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u6570\u7EC4\u4E2D\u7684",(0,s.jsx)(e.code,{children:"NULL"}),"\u503C\u4F1A\u88AB\u8DF3\u8FC7\u3002"]}),"\n",(0,s.jsx)(e.li,{children:"\u6570\u7EC4\u7684\u5B57\u7B26\u4E32\u4F1A\u88AB\u8DF3\u8FC7"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"create table array_type_table(\n    k1 INT, \n    k2 Array<int>\n) \nduplicate key (k1)\ndistributed by hash(k1) buckets 1 \nproperties(\n    'replication_num' = '1'\n);\ninsert into array_type_table values (0, []), (1, [NULL]), (2, [1, 2, 3]), (3, [1, NULL, 3]);\nselect k2, array_avg(k2) from array_type_table;\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+--------------+-----------------+\n| k2           | array_avg(`k2`) |\n+--------------+-----------------+\n| []           |            NULL |\n| [NULL]       |            NULL |\n| [1, 2, 3]    |               2 |\n| [1, NULL, 3] |               2 |\n+--------------+-----------------+\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select array_avg(['test',2,1,null]);\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"+------------------------------------------------------------+\n| array_avg(cast(['test', '2', '1', NULL] as ARRAY<DOUBLE>)) |\n+------------------------------------------------------------+\n|                                                        1.5 |\n+------------------------------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},250065:function(n,e,a){a.d(e,{Z:function(){return c},a:function(){return l}});var r=a(667294);let s={},t=r.createContext(s);function l(n){let e=r.useContext(t);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);