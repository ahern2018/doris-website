"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["125922"],{427897:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-functions/table-functions/explode-numbers","title":"EXPLODE_NUMBERS","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/table-functions/explode-numbers.md","sourceDirName":"sql-manual/sql-functions/table-functions","slug":"/sql-manual/sql-functions/table-functions/explode-numbers","permalink":"/docs/3.0/sql-manual/sql-functions/table-functions/explode-numbers","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"EXPLODE_NUMBERS","language":"en"},"sidebar":"docs","previous":{"title":"EXPLODE_SPLIT","permalink":"/docs/3.0/sql-manual/sql-functions/table-functions/explode-split"},"next":{"title":"S3","permalink":"/docs/3.0/sql-manual/sql-functions/table-valued-functions/s3"}}'),l=s("785893"),r=s("250065");let a={title:"EXPLODE_NUMBERS",language:"en"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"explode_numbers"})," table function takes an integer n and expands all numbers within the range into multiple rows, each containing a single number. It is commonly used to generate a sequence of consecutive numbers and is often paired with LATERAL VIEW."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"explode_numbers_outer"}),", unlike ",(0,l.jsx)(n.code,{children:"explode_numbers"}),", adds a NULL row when the table function generates zero rows."]}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"EXPLODE_NUMBERS(<n>)\nEXPLODE_NUMBERS_OUTER(<n>)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"<n>"})}),(0,l.jsx)(n.td,{children:"Integer type input"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,l.jsx)(n.p,{children:"Returns a sequence of [0, n)."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Does not return any rows when n is 0 or NULL."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select e1 from (select 1 k1) as t lateral view explode_numbers(5) tmp1 as e1;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+------+\n| e1   |\n+------+\n|    0 |\n|    1 |\n|    2 |\n|    3 |\n|    4 |\n+------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select e1 from (select 1 k1) as t lateral view explode_numbers(0) tmp1 as e1;\nEmpty set\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select e1 from (select 1 k1) as t lateral view explode_numbers_outer(0) tmp1 as e1;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+------+\n| e1   |\n+------+\n| NULL |\n+------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return a}});var t=s(667294);let l={},r=t.createContext(l);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);