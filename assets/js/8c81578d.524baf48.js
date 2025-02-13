"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["675837"],{163784:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>i,default:()=>d,assets:()=>c,toc:()=>u,frontMatter:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/array-functions/array-enumerate","title":"ARRAY_ENUMERATE","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/array-functions/array-enumerate.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/array-functions","slug":"/sql-manual/sql-functions/scalar-functions/array-functions/array-enumerate","permalink":"/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-enumerate","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ARRAY_ENUMERATE","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_WITH_CONSTANT","permalink":"/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-with-constant"},"next":{"title":"ARRAY_ENUMERATE_UNIQ","permalink":"/docs/sql-manual/sql-functions/scalar-functions/array-functions/array-enumerate-uniq"}}'),t=r("785893"),s=r("250065");let l={title:"ARRAY_ENUMERATE",language:"en"},i=void 0,c={},u=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Returns array sub item indexes e.g. [1, 2, 3, \u2026, length (arr) ]"}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ARRAY_ENUMERATE(<arr>)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<arr>"})}),(0,t.jsx)(n.td,{children:"The array that returns array sub item indexes"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsx)(n.p,{children:"Returns an array containing the index of the array."}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'create table array_type_table(\n    k1 INT, \n    k2 Array<STRING>\n) \nduplicate key (k1)\ndistributed by hash(k1) buckets 1 \nproperties(\n    \'replication_num\' = \'1\'\n);\ninsert into array_type_table values (0, []), \n("1", [NULL]), \n("2", ["1", "2", "3"]), \n("3", ["1", NULL, "3"]), \n("4", NULL);\nselect k2, array_enumerate(k2) from array_type_table;\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+------------------+-----------------------+\n| k2               | array_enumerate(`k2`) |\n+------------------+-----------------------+\n| []               | []                    |\n| [NULL]           | [1]                   |\n| ['1', '2', '3']  | [1, 2, 3]             |\n| ['1', NULL, '3'] | [1, 2, 3]             |\n| NULL             | NULL                  |\n+------------------+-----------------------+\n"})})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var a=r(667294);let t={},s=a.createContext(t);function l(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);