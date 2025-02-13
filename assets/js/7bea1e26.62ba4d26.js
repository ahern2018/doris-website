"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["849178"],{131402:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-max","title":"ARRAY_MAX","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/array-functions/array-max.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-max","permalink":"/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-max","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ARRAY_MAX","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY","permalink":"/docs/sql-manual/sql-functions/scalar-functions/array-functions/array"},"next":{"title":"ARRAY_MIN","permalink":"/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-min"}}'),t=r("785893"),s=r("250065");let l={title:"ARRAY_MAX",language:"en"},i=void 0,c={},o=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,t.jsxs)(n.p,{children:["Get the maximum element in an array (",(0,t.jsx)(n.code,{children:"NULL"})," values are skipped).\nWhen the array is empty or all elements in the array are ",(0,t.jsx)(n.code,{children:"NULL"})," values, the function returns ",(0,t.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ARRAY_MAX(<arr>)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<arr>"})}),(0,t.jsx)(n.td,{children:"ARRAY array"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsx)(n.p,{children:"Returns the largest element in the array. Special cases:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"NULL"})," values in the array are skipped."]}),"\n",(0,t.jsxs)(n.li,{children:["For an empty array or an array where all elements are ",(0,t.jsx)(n.code,{children:"NULL"}),", the result is ",(0,t.jsx)(n.code,{children:"NULL"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"create table array_type_table(\n    k1 INT, \n    k2 Array<int>\n        ) \nduplicate key (k1)\ndistributed by hash(k1) buckets 1 \nproperties(\n    'replication_num' = '1'\n    );\ninsert into array_type_table values (0, []), (1, [NULL]), (2, [1, 2, 3]), (3, [1, NULL, 3]);\nselect k2, array_max(k2) from array_type_table;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+--------------+-----------------+\n| k2           | array_max(`k2`) |\n+--------------+-----------------+\n| []           |            NULL |\n| [NULL]       |            NULL |\n| [1, 2, 3]    |               3 |\n| [1, NULL, 3] |               3 |\n+--------------+-----------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var a=r(667294);let t={},s=a.createContext(t);function l(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);