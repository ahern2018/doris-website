"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["328940"],{447843:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/timediff","title":"TIMEDIFF","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/date-time-functions/timediff.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/timediff","permalink":"/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/timediff","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"TIMEDIFF","language":"en"},"sidebar":"docs","previous":{"title":"STR_TO_DATE","permalink":"/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/str-to-date"},"next":{"title":"TIMESTAMPADD","permalink":"/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/timestampadd"}}'),s=t("785893"),r=t("250065");let a={title:"TIMEDIFF",language:"en"},d=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"TIMEDIFF"})," function calculates the difference between two datetime values. This function accepts two arguments and returns the difference as a ",(0,s.jsx)(n.code,{children:"TIME"})," type."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"TIMEDIFF(<end_datetime>, <start_datetime>)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<end_datetime>"})}),(0,s.jsx)(n.td,{children:"The ending datetime value."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<start_datetime>"})}),(0,s.jsx)(n.td,{children:"The starting datetime value."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsxs)(n.p,{children:["Returns a ",(0,s.jsx)(n.code,{children:"TIME"})," type value representing the difference between the two inputs:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.code,{children:"<end_datetime>"})," is later than ",(0,s.jsx)(n.code,{children:"<start_datetime>"}),", it returns a positive time difference."]}),"\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.code,{children:"<end_datetime>"})," is earlier than ",(0,s.jsx)(n.code,{children:"<start_datetime>"}),", it returns a negative time difference."]}),"\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.code,{children:"<end_datetime>"})," and ",(0,s.jsx)(n.code,{children:"<start_datetime>"})," are equal, it returns ",(0,s.jsx)(n.code,{children:"00:00:00"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.code,{children:"<end_datetime>"})," or ",(0,s.jsx)(n.code,{children:"<start_datetime>"})," is ",(0,s.jsx)(n.code,{children:"NULL"}),", the function returns ",(0,s.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.code,{children:"<end_datetime>"})," or ",(0,s.jsx)(n.code,{children:"<start_datetime>"})," is an invalid datetime value (e.g., ",(0,s.jsx)(n.code,{children:"0000-00-00 00:00:00"}),"), the function returns ",(0,s.jsx)(n.code,{children:"NULL"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT TIMEDIFF('2024-07-20 16:59:30','2024-07-11 16:35:21');\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+------------------------------------------------------------------------------------------------------+\n| timediff(cast('2024-07-20 16:59:30' as DATETIMEV2(0)), cast('2024-07-11 16:35:21' as DATETIMEV2(0))) |\n+------------------------------------------------------------------------------------------------------+\n| 216:24:09                                                                                            |\n+------------------------------------------------------------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return a}});var i=t(667294);let s={},r=i.createContext(s);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);