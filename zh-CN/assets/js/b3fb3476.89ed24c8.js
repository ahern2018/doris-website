"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["156395"],{689402:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>d,assets:()=>i,toc:()=>o,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-product","title":"ARRAY_PRODUCT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/array-functions/array-product.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-product","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-product","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ARRAY_PRODUCT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_EXCEPT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-except"},"next":{"title":"ARRAY_INTERSECT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-intersect"}}'),a=r("785893"),s=r("250065");let l={title:"ARRAY_PRODUCT",language:"zh-CN"},c=void 0,i={},o=[{value:"array_product",id:"array_product",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"array_product",children:"array_product"}),"\n",(0,a.jsx)(n.p,{children:"array_product"}),"\n",(0,a.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"T array_product(ARRAY<T> arr)"})}),"\n",(0,a.jsxs)(n.p,{children:["\u8FD4\u56DE\u6570\u7EC4\u4E2D\u6240\u6709\u5143\u7D20\u7684\u4E58\u79EF\uFF0C\u6570\u7EC4\u4E2D\u7684",(0,a.jsx)(n.code,{children:"NULL"}),"\u503C\u4F1A\u88AB\u8DF3\u8FC7\u3002\u7A7A\u6570\u7EC4\u4EE5\u53CA\u5143\u7D20\u5168\u4E3A",(0,a.jsx)(n.code,{children:"NULL"}),"\u503C\u7684\u6570\u7EC4\uFF0C\u7ED3\u679C\u8FD4\u56DE",(0,a.jsx)(n.code,{children:"NULL"}),"\u503C\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"mysql> create table array_type_table(k1 INT, k2 Array<int>) duplicate key (k1)\n    -> distributed by hash(k1) buckets 1 properties('replication_num' = '1');\nmysql> insert into array_type_table values (0, []), (1, [NULL]), (2, [1, 2, 3]), (3, [1, NULL, 3]);\nmysql> select k2, array_product(k2) from array_type_table;\n+--------------+---------------------+\n| k2           | array_product(`k2`) |\n+--------------+---------------------+\n| []           |                NULL |\n| [NULL]       |                NULL |\n| [1, 2, 3]    |                   6 |\n| [1, NULL, 3] |                   3 |\n+--------------+---------------------+\n4 rows in set (0.01 sec)\n\n"})}),"\n",(0,a.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(n.p,{children:"ARRAY,PRODUCT,ARRAY_PRODUCT"})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return l}});var t=r(667294);let a={},s=t.createContext(a);function l(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);