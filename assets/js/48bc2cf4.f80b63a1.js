"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["325373"],{410250:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/millisecond-timestamp","title":"MILLISECOND_TIMESTAMP","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/millisecond-timestamp.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/millisecond-timestamp","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/millisecond-timestamp","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"MILLISECOND_TIMESTAMP","language":"en"},"sidebar":"docs","previous":{"title":"FROM_SECOND","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/from-second"},"next":{"title":"MICROSECOND_TIMESTAMP","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/microsecond-timestamp"}}'),s=t("785893"),l=t("250065");let a={title:"MILLISECOND_TIMESTAMP",language:"en"},r=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"MILLISECOND_TIMESTAMP"})," function converts a ",(0,s.jsx)(n.code,{children:"DATETIME"})," value into a Unix timestamp (in milliseconds) starting from ",(0,s.jsx)(n.code,{children:"1970-01-01 00:00:00 UTC"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"MILLISECOND_TIMESTAMP(<datetime>)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<datetime>"})}),(0,s.jsx)(n.td,{children:"Required. The DATETIME value to be converted into a Unix timestamp (in milliseconds)."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Returns an integer representing the Unix timestamp (in milliseconds) corresponding to the input datetime value."}),"\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.code,{children:"<datetime>"})," is NULL, the function returns NULL."]}),"\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.code,{children:"<datetime>"})," is out of valid range, the function may return an error or unexpected value."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT MILLISECOND_TIMESTAMP('2025-01-23 12:34:56');\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+---------------------------------------------------------------------+\n| millisecond_timestamp(cast('2025-01-23 12:34:56' as DATETIMEV2(0))) |\n+---------------------------------------------------------------------+\n|                                                       1737606896000 |\n+---------------------------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var i=t(667294);let s={},l=i.createContext(s);function a(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);