"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["400461"],{270247:function(n,e,a){a.r(e),a.d(e,{metadata:()=>r,contentTitle:()=>c,default:()=>o,assets:()=>i,toc:()=>u,frontMatter:()=>s});var r=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-except","title":"ARRAY_EXCEPT","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-except.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-except","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-except","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ARRAY_EXCEPT","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_CONTAINS","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-contains"},"next":{"title":"ARRAY_PRODUCT","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/array-functions/array-product"}}'),l=a("785893"),t=a("250065");let s={title:"ARRAY_EXCEPT",language:"en"},c=void 0,i={},u=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(e.p,{children:"Returns an array of the elements in array1 but not in array2, without duplicates. If the input parameter is null, null is returned."}),"\n",(0,l.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"ARRAY_EXCEPT(<arr1> , <arr2> )\n"})}),"\n",(0,l.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Parameter"}),(0,l.jsx)(e.th,{children:"Description"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<arr1>"})}),(0,l.jsx)(e.td,{children:"The source array arr1"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<arr2>"})}),(0,l.jsx)(e.td,{children:"An array of elements to compare with arr1"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,l.jsx)(e.p,{children:"Returns an array, Special cases\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"If the input parameter is null, null is returned."}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE array_type_table (\n    k1 INT,\n    k2 ARRAY<INT>,\n    k3 ARRAY<INT>\n)\nduplicate key (k1)\ndistributed by hash(k1) buckets 1\nproperties(\n  'replication_num' = '1'\n);\nINSERT INTO array_type_table VALUES\n(1, [1, 2, 3], [2, 4, 5]),\n(2, [2, 3], [1, 5]),\n(3, [1, 1, 1], [2, 2, 2]);\nselect k1,k2,k3,array_except(k2,k3) from array_type_table;\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+------+-----------------+--------------+--------------------------+\n| k1   | k2              | k3           | array_except(`k2`, `k3`) |\n+------+-----------------+--------------+--------------------------+\n|    1 | [1, 2, 3]       | [2, 4, 5]    | [1, 3]                   |\n|    2 | [2, 3]          | [1, 5]       | [2, 3]                   |\n|    3 | [1, 1, 1]       | [2, 2, 2]    | [1]                      |\n+------+-----------------+--------------+--------------------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE array_type_table_nullable (\n    k1 INT,\n    k2 ARRAY<INT>,\n    k3 ARRAY<INT>\n)\nduplicate key (k1)\ndistributed by hash(k1) buckets 1\nproperties(\n  'replication_num' = '1'\n);\nINSERT INTO array_type_table_nullable VALUES\n(1, [1, NULL, 3], [1, 3, 5]),\n(2, [NULL, NULL, 2], [2, NULL, 4]),\n(3, NULL, [1, 2, 3]);\nselect k1,k2,k3,array_except(k2,k3) from array_type_table_nullable;\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+------+-----------------+--------------+--------------------------+\n| k1   | k2              | k3           | array_except(`k2`, `k3`) |\n+------+-----------------+--------------+--------------------------+\n|    1 | [1, NULL, 3]    | [1, 3, 5]    | [NULL]                   |\n|    2 | [NULL, NULL, 2] | [2, NULL, 4] | []                       |\n|    3 | NULL            | [1, 2, 3]    | NULL                     |\n+------+-----------------+--------------+--------------------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE array_type_table_varchar (\n    k1 INT,\n    k2 ARRAY<VARCHAR>,\n    k3 ARRAY<VARCHAR>\n)\n    duplicate key (k1)\ndistributed by hash(k1) buckets 1\nproperties(\n  'replication_num' = '1'\n);\nINSERT INTO array_type_table_varchar VALUES\n(1, ['hello', 'world', 'c++'], ['I', 'am', 'c++']),\n(2, ['a1', 'equals', 'b1'], ['a2', 'equals', 'b2']),\n(3, ['hasnull', NULL, 'value'], ['nohasnull', 'nonull', 'value']),\n(3, ['hasnull', NULL, 'value'], ['hasnull', NULL, 'value']);\nselect k1,k2,k3,array_except(k2,k3) from array_type_table_varchar;\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:'+------+----------------------------+----------------------------------+----------------------+\n| k1   | k2                         | k3                               | array_except(k2, k3) |\n+------+----------------------------+----------------------------------+----------------------+\n|    1 | ["hello", "world", "c++"]  | ["I", "am", "c++"]               | ["hello", "world"]   |\n|    2 | ["a1", "equals", "b1"]     | ["a2", "equals", "b2"]           | ["a1", "b1"]         |\n|    3 | ["hasnull", null, "value"] | ["hasnull", null, "value"]       | []                   |\n|    3 | ["hasnull", null, "value"] | ["nohasnull", "nonull", "value"] | ["hasnull", null]    |\n+------+----------------------------+----------------------------------+----------------------+\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE array_type_table_decimal (\n    k1 INT,\n    k2 ARRAY<DECIMAL(10, 2)>,\n    k3 ARRAY<DECIMAL(10, 2)>\n)\nduplicate key (k1)\ndistributed by hash(k1) buckets 1\nproperties(\n  'replication_num' = '1'\n);\nINSERT INTO array_type_table_decimal VALUES\n(1, [1.1, 2.1, 3.44], [2.1, 3.4, 5.4]),\n(2, [NULL, 2, 5], [NULL, NULL, 5.4]),\n(1, [1, NULL, 2, 5], [1, 3.1, 5.4]);\nselect k1,k2,k3,array_except(k2,k3) from array_type_table_decimal;\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+------+--------------------------+--------------------+----------------------+\n| k1   | k2                       | k3                 | array_except(k2, k3) |\n+------+--------------------------+--------------------+----------------------+\n|    1 | [1.00, null, 2.00, 5.00] | [1.00, 3.10, 5.40] | [null, 2.00, 5.00]   |\n|    1 | [1.10, 2.10, 3.44]       | [2.10, 3.40, 5.40] | [1.10, 3.44]         |\n|    2 | [null, 2.00, 5.00]       | [null, null, 5.40] | [2.00, 5.00]         |\n+------+--------------------------+--------------------+----------------------+\n"})})]})}function o(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},250065:function(n,e,a){a.d(e,{Z:function(){return c},a:function(){return s}});var r=a(667294);let l={},t=r.createContext(l);function s(n){let e=r.useContext(t);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:s(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);