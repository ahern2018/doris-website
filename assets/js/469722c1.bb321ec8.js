"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["627746"],{451995:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/now","title":"NOW","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/now.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/now","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/now","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"NOW","language":"en"},"sidebar":"docs","previous":{"title":"CURTIME,CURRENT_TIME","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/curtime"},"next":{"title":"YEAR","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/year"}}'),s=t("785893"),r=t("250065");let a={title:"NOW",language:"en"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The function retrieves the current system time and returns it as a datetime value (",(0,s.jsx)(n.code,{children:"DATETIME"}),"). An optional precision\ncan be specified to adjust the number of digits in the fractional seconds part of the return value."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"NOW([<precision>])\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<precision>"})}),(0,s.jsxs)(n.td,{children:["Optional parameter specifying the precision of the fractional seconds part in the return value. The range is 0 to 6, and the default is 0 (no fractional seconds). ",(0,s.jsx)(n.br,{}),"Limited by the JDK implementation: if FE is built with JDK8, the precision supports up to milliseconds (3 fractional digits), and higher precision digits will be filled with 0. If higher precision is required, please use JDK11."]})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Returns the current system time as a DATETIME type."}),"\n",(0,s.jsxs)(n.li,{children:["If the specified ",(0,s.jsx)(n.code,{children:"<precision>"})," is out of range (e.g., negative or greater than 6), the function will return an error."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select NOW(), NOW(3), NOW(6);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+---------------------+-------------------------+----------------------------+\n| now()               | now(3)                  | now(6)                     |\n+---------------------+-------------------------+----------------------------+\n| 2025-01-23 11:08:35 | 2025-01-23 11:08:35.561 | 2025-01-23 11:08:35.562000 |\n+---------------------+-------------------------+----------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var i=t(667294);let s={},r=i.createContext(s);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);