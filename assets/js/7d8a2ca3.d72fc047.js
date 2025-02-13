"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["63732"],{17290:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/second-timestamp","title":"SECOND_TIMESTAMP","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/second-timestamp.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/second-timestamp","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/second-timestamp","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SECOND_TIMESTAMP","language":"en"}}'),i=t("785893"),a=t("250065");let r={title:"SECOND_TIMESTAMP",language:"en"},l=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The function converts a ",(0,i.jsx)(n.code,{children:"DATETIME"})," value into a Unix timestamp (in seconds) starting from ",(0,i.jsx)(n.code,{children:"1970-01-01 00:00:00 UTC"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SECOND_TIMESTAMP(<datetime>)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<datetime>"})}),(0,i.jsx)(n.td,{children:"Required. The DATETIME value to be converted into a Unix timestamp."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Returns an integer representing the Unix timestamp (in seconds) corresponding to the input datetime value."}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"<datetime>"})," is NULL, the function returns NULL."]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"<datetime>"})," is out of valid range, the function may return an error or unexpected value."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT SECOND_TIMESTAMP('2025-01-23 12:34:56');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+----------------------------------------------------------------+\n| second_timestamp(cast('2025-01-23 12:34:56' as DATETIMEV2(0))) |\n+----------------------------------------------------------------+\n|                                                     1737606896 |\n+----------------------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let i={},a=s.createContext(i);function r(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);