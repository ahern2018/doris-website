"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["910505"],{632039:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/minutes-diff","title":"MINUTES_DIFF","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/scalar-functions/date-time-functions/minutes-diff.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/minutes-diff","permalink":"/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/minutes-diff","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"MINUTES_DIFF","language":"en"},"sidebar":"docs","previous":{"title":"MINUTES_ADD","permalink":"/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/minutes-add"},"next":{"title":"MINUTES_SUB","permalink":"/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/minutes-sub"}}'),i=t("785893"),r=t("250065");let a={title:"MINUTES_DIFF",language:"en"},l=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["Calculates the minute difference between two datetime values. The result is the number of minutes from ",(0,i.jsx)(n.code,{children:"<start_date>"})," subtracted from ",(0,i.jsx)(n.code,{children:"<end_date>"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"MINUTES_DIFF(<enddate>, <startdate>)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<end_date>"})}),(0,i.jsx)(n.td,{children:"The end time, which can be of type DATE, DATETIME, or DATETIMEV2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<start_date>"})}),(0,i.jsx)(n.td,{children:"The start time, which can be of type DATE, DATETIME, or DATETIMEV2"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsx)(n.p,{children:"Returns an INT type representing the minute difference between the two times."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Returns a positive number if ",(0,i.jsx)(n.code,{children:"<end_date>"})," is greater than ",(0,i.jsx)(n.code,{children:"<start_date>"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Returns a negative number if ",(0,i.jsx)(n.code,{children:"<end_date>"})," is less than ",(0,i.jsx)(n.code,{children:"<start_date>"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT MINUTES_DIFF('2020-12-25 22:00:00', '2020-12-25 21:00:00');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+----------------------------------------------------------------------------------------------------------+\n| minutes_diff(cast('2020-12-25 22:00:00' as DATETIMEV2(0)), cast('2020-12-25 21:00:00' as DATETIMEV2(0))) |\n+----------------------------------------------------------------------------------------------------------+\n|                                                                                                       60 |\n+----------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Note:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The calculation only considers complete minutes; seconds and milliseconds are ignored."}),"\n",(0,i.jsx)(n.li,{children:"If either input parameter is NULL, the function returns NULL."}),"\n",(0,i.jsx)(n.li,{children:"It can handle time differences that span days, months, or years."}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var s=t(667294);let i={},r=s.createContext(i);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);