"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["273787"],{838909:function(n,e,a){a.r(e),a.d(e,{metadata:()=>r,contentTitle:()=>l,default:()=>u,assets:()=>i,toc:()=>o,frontMatter:()=>t});var r=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-concat","title":"ARRAY_CONCAT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/array-functions/array-concat.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-concat","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-concat","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ARRAY_CONCAT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_COMPACY","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-compact"},"next":{"title":"ARRAY_ZIP","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-zip"}}'),c=a("785893"),s=a("250065");let t={title:"ARRAY_CONCAT",language:"zh-CN"},l=void 0,i={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,c.jsx)(e.p,{children:"\u5C06\u8F93\u5165\u7684\u6240\u6709\u6570\u7EC4\u62FC\u63A5\u4E3A\u4E00\u4E2A\u6570\u7EC4"}),"\n",(0,c.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"ARRAY_CONCAT(<arr1> [,<arr2> , ...])\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\u53C2\u6570"}),(0,c.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<arr1>"})}),(0,c.jsx)(e.td,{children:"\u6E90\u6570\u7EC4"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"<arr2>"})}),(0,c.jsx)(e.td,{children:"\u8981\u6DFB\u52A0\u5230arr1\u7684\u6570\u7EC4"})]})]})]}),"\n",(0,c.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,c.jsx)(e.p,{children:"\u62FC\u63A5\u597D\u7684\u6570\u7EC4\uFF0C\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u5982\u679C\u6570\u7EC4\u662FNULL\uFF08\u975E[NULL]\uFF09\uFF0C\u5219\u8FD4\u56DENULL"}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"select array_concat([1, 2], [7, 8], [5, 6]);\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+-----------------------------------------------------+\n| array_concat(ARRAY(1, 2), ARRAY(7, 8), ARRAY(5, 6)) |\n+-----------------------------------------------------+\n| [1, 2, 7, 8, 5, 6]                                  |\n+-----------------------------------------------------+\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"select array_concat([1, 2], [7, 8], [5, 6], NULL);\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+--------------------------------------------+\n| array_concat([1, 2], [7, 8], [5, 6], NULL) |\n+--------------------------------------------+\n| NULL                                       |\n+--------------------------------------------+\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE array_test (\n    id int,\n    col2 ARRAY<INT>,\n    col3 ARRAY<INT>\n)\nduplicate key (id)\ndistributed by hash(id) buckets 1\nproperties(\n  'replication_num' = '1'\n);\nINSERT INTO array_test (id, col2, col3) VALUES\n(1,[1, 2, 3], [3, 4, 5]),\n(2,[1, NULL, 2], [NULL]),\n(3,[1, 2, 3], NULL),\n(4,[], []);\n\nselect col2, col3, array_concat(col2, col3) from array_test;\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-text",children:"+--------------+-----------+------------------------------+\n| col2         | col3      | array_concat(`col2`, `col3`) |\n+--------------+-----------+------------------------------+\n| [1, 2, 3]    | [3, 4, 5] | [1, 2, 3, 3, 4, 5]           |\n| [1, NULL, 2] | [NULL]    | [1, NULL, 2, NULL]           |\n| [1, 2, 3]    | NULL      | NULL                         |\n| []           | []        | []                           |\n+--------------+-----------+------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(d,{...n})}):d(n)}},250065:function(n,e,a){a.d(e,{Z:function(){return l},a:function(){return t}});var r=a(667294);let c={},s=r.createContext(c);function t(n){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:t(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);