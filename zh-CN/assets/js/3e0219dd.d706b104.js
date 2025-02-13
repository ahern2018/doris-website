"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["394496"],{917783:function(n,e,a){a.r(e),a.d(e,{metadata:()=>l,contentTitle:()=>c,default:()=>o,assets:()=>i,toc:()=>u,frontMatter:()=>s});var l=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-intersect","title":"ARRAY_INTERSECT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-intersect.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-intersect","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-intersect","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ARRAY_INTERSECT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_PRODUCT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-product"},"next":{"title":"ARRAY_RANGE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-range"}}'),r=a("785893"),t=a("250065");let s={title:"ARRAY_INTERSECT",language:"zh-CN"},c=void 0,i={},u=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5305\u542Barray1\u548Carray2\u7684\u4EA4\u96C6\u4E2D\u7684\u6240\u6709\u5143\u7D20\uFF0C\u4E0D\u5305\u542B\u91CD\u590D\u9879\uFF0C\u5982\u679C\u8F93\u5165\u53C2\u6570\u4E3ANULL\uFF0C\u5219\u8FD4\u56DENULL"}),"\n",(0,r.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"ARRAY_INTERSECT(<arr1> , <arr2> )\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Parameter"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<arr1>"})}),(0,r.jsx)(e.td,{children:"\u6E90\u6570\u7EC4"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<arr2>"})}),(0,r.jsx)(e.td,{children:"\u4E0Earr1\u6C42\u4EA4\u96C6\u7684\u6570\u7EC4"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(e.p,{children:"\u8FD4\u56DE\u5305\u542Barray1\u548Carray2\u7684\u4EA4\u96C6\u4E2D\u7684\u6240\u6709\u5143\u7D20\u7684\u6570\u7EC4\uFF0C\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5982\u679C\u8F93\u5165\u53C2\u6570\u4E3ANULL\uFF0C\u5219\u8FD4\u56DENULL"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"\u4EC5\u652F\u6301\u5411\u91CF\u5316\u5F15\u64CE\u4E2D\u4F7F\u7528"})}),"\n",(0,r.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE array_type_table (\n    k1 INT,\n    k2 ARRAY<INT>,\n    k3 ARRAY<INT>\n)\nduplicate key (k1)\ndistributed by hash(k1) buckets 1\nproperties(\n  'replication_num' = '1'\n);\nINSERT INTO array_type_table VALUES \n(1, [1, 2, 3], [2, 4, 5]),\n(2, [2, 3], [1, 5]),\n(3, [1, 1, 1], [2, 2, 2]);\nselect k1,k2,k3,array_intersect(k2,k3) from array_type_table;\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+------+-----------------+--------------+-----------------------------+\n| k1   | k2              | k3           | array_intersect(`k2`, `k3`) |\n+------+-----------------+--------------+-----------------------------+\n|    1 | [1, 2, 3]       | [2, 4, 5]    | [2]                         |\n|    2 | [2, 3]          | [1, 5]       | []                          |\n|    3 | [1, 1, 1]       | [2, 2, 2]    | []                          |\n+------+-----------------+--------------+-----------------------------+\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE array_type_table_nullable (\n    k1 INT,\n    k2 ARRAY<INT>,\n    k3 ARRAY<INT>\n)\nduplicate key (k1)\ndistributed by hash(k1) buckets 1\nproperties(\n  'replication_num' = '1'\n);\nINSERT INTO array_type_table_nullable VALUES\n(1, [1, NULL, 3], [1, 3, 5]),\n(2, [NULL, NULL, 2], [2, NULL, 4]),\n(3, NULL, [1, 2, 3]);\nselect k1,k2,k3,array_intersect(k2,k3) from array_type_table_nullable;\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+------+-----------------+--------------+-----------------------------+\n| k1   | k2              | k3           | array_intersect(`k2`, `k3`) |\n+------+-----------------+--------------+-----------------------------+\n|    1 | [1, NULL, 3]    | [1, 3, 5]    | [1, 3]                      |\n|    2 | [NULL, NULL, 2] | [2, NULL, 4] | [NULL, 2]                   |\n|    3 | NULL            | [1, 2, 3]    | NULL                        |\n+------+-----------------+--------------+-----------------------------+\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE array_type_table_varchar (\n    k1 INT,\n    k2 ARRAY<VARCHAR>,\n    k3 ARRAY<VARCHAR>\n)\n    duplicate key (k1)\ndistributed by hash(k1) buckets 1\nproperties(\n  'replication_num' = '1'\n);\nINSERT INTO array_type_table_varchar VALUES\n(1, ['hello', 'world', 'c++'], ['I', 'am', 'c++']),\n(2, ['a1', 'equals', 'b1'], ['a2', 'equals', 'b2']),\n(3, ['hasnull', NULL, 'value'], ['nohasnull', 'nonull', 'value']),\n(3, ['hasnull', NULL, 'value'], ['hasnull', NULL, 'value']);\nselect k1,k2,k3,array_intersect(k2,k3) from array_type_table_varchar;\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:'+------+----------------------------+----------------------------------+----------------------------+\n| k1   | k2                         | k3                               | array_intersect(k2, k3)    |\n+------+----------------------------+----------------------------------+----------------------------+\n|    1 | ["hello", "world", "c++"]  | ["I", "am", "c++"]               | ["c++"]                    |\n|    2 | ["a1", "equals", "b1"]     | ["a2", "equals", "b2"]           | ["equals"]                 |\n|    3 | ["hasnull", null, "value"] | ["hasnull", null, "value"]       | [null, "value", "hasnull"] |\n|    3 | ["hasnull", null, "value"] | ["nohasnull", "nonull", "value"] | ["value"]                  |\n+------+----------------------------+----------------------------------+----------------------------+```\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE array_type_table_decimal (\n    k1 INT,\n    k2 ARRAY<DECIMAL(10, 2)>,\n    k3 ARRAY<DECIMAL(10, 2)>\n)\n    duplicate key (k1)\ndistributed by hash(k1) buckets 1\nproperties(\n  'replication_num' = '1'\n);\nINSERT INTO array_type_table_decimal VALUES\n(1, [1.1, 2.1, 3.44], [2.1, 3.4, 5.4]),\n(2, [NULL, 2, 5], [NULL, NULL, 5.4]),\n(3, [1, NULL, 2, 5], [1, 3.1, 5.4]);\nselect k1,k2,k3,array_intersect(k2,k3) from array_type_table_decimal;\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"+------+--------------------------+--------------------+-------------------------+\n| k1   | k2                       | k3                 | array_intersect(k2, k3) |\n+------+--------------------------+--------------------+-------------------------+\n|    1 | [1.10, 2.10, 3.44]       | [2.10, 3.40, 5.40] | [2.10]                  |\n|    2 | [null, 2.00, 5.00]       | [null, null, 5.40] | [null]                  |\n|    3 | [1.00, null, 2.00, 5.00] | [1.00, 3.10, 5.40] | [1.00]                  |\n+------+--------------------------+--------------------+-------------------------+\n"})})]})}function o(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},250065:function(n,e,a){a.d(e,{Z:function(){return c},a:function(){return s}});var l=a(667294);let r={},t=l.createContext(r);function s(n){let e=l.useContext(t);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);