"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["21151"],{910162:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>u,assets:()=>r,toc:()=>o,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/time-to-sec","title":"TIME_TO_SEC","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/time-to-sec.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/time-to-sec","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/time-to-sec","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"TIME_TO_SEC","language":"en"},"sidebar":"docs","previous":{"title":"TO_ISO8601","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/to-iso8601"},"next":{"title":"SEC_TO_TIME","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/sec-to-time"}}'),i=t("785893"),l=t("250065");let a={title:"TIME_TO_SEC",language:"en"},c=void 0,r={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The function converts an input ",(0,i.jsx)(n.code,{children:"TIME"})," or ",(0,i.jsx)(n.code,{children:"DATETIME"})," value into the total time in seconds. If the input is of ",(0,i.jsx)(n.code,{children:"DATETIME"})," type, the function automatically extracts the time part (",(0,i.jsx)(n.code,{children:"HH:MM:SS"}),")."]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"TIME_TO_SEC(<time>)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<time>"})}),(0,i.jsx)(n.td,{children:"Required. Supports TIME or DATETIME values. If the input is DATETIME, the function extracts the time part for calculation."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Returns an integer representing the total seconds of the input time value."}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"<time>"}),"  is NULL, the function returns NULL."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT TIME_TO_SEC('16:32:18'),TIME_TO_SEC('2025-01-01 16:32:18');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+---------------------------------------+--------------------------------------------------+\n| time_to_sec(cast('16:32:18' as TIME)) | time_to_sec(cast('2025-01-01 16:32:18' as TIME)) |\n+---------------------------------------+--------------------------------------------------+\n|                                 59538 |                                            59538 |\n+---------------------------------------+--------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return a}});var s=t(667294);let i={},l=s.createContext(i);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);