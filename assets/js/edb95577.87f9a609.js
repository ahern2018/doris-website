"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["927445"],{386190:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>d});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/months-diff","title":"MONTHS_DIFF","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/months-diff.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/months-diff","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/months-diff","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"MONTHS_DIFF","language":"en"},"sidebar":"docs","previous":{"title":"MONTHS_ADD","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/months-add"},"next":{"title":"MONTHS_SUB","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/months-sub"}}'),i=t("785893"),r=t("250065");let d={title:"MONTHS_DIFF",language:"en"},l=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"MONTHS_DIFF"})," function calculates the number of complete months between two dates. It accepts two date arguments and returns the difference in months as an integer."]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"MONTHS_DIFF(<enddate>, <startdate>)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u53C2\u6570"}),(0,i.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<enddate>"})}),(0,i.jsxs)(n.td,{children:["The ending date, representing the later date in the difference calculation. Supports ",(0,i.jsx)(n.code,{children:"DATE"})," (e.g., ",(0,i.jsx)(n.code,{children:"YYYY-MM-DD"}),") or ",(0,i.jsx)(n.code,{children:"DATETIME"})," (e.g., ",(0,i.jsx)(n.code,{children:"YYYY-MM-DD HH:MM:SS"}),") types."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<startdate>"})}),(0,i.jsxs)(n.td,{children:["The starting date, representing the earlier date in the difference calculation. Supports ",(0,i.jsx)(n.code,{children:"DATE"})," (e.g., ",(0,i.jsx)(n.code,{children:"YYYY-MM-DD"}),") or ",(0,i.jsx)(n.code,{children:"DATETIME"})," (e.g., ",(0,i.jsx)(n.code,{children:"YYYY-MM-DD HH:MM:SS"}),") types."]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsxs)(n.p,{children:["returns the number of months resulting from ",(0,i.jsx)(n.code,{children:"<enddate>"})," minus ",(0,i.jsx)(n.code,{children:"<startdate>"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["When either ",(0,i.jsx)(n.code,{children:"<enddate>"})," or ",(0,i.jsx)(n.code,{children:"<startdate>"})," is NULL, or both are NULL, it returns NULL"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select months_diff('2020-12-25','2020-10-25'),months_diff('2020-10-25 10:00:00','2020-12-25 11:00:00');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+---------------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------+\n| months_diff(cast('2020-12-25' as DATETIMEV2(0)), cast('2020-10-25' as DATETIMEV2(0))) | months_diff(cast('2020-10-25 10:00:00' as DATETIMEV2(0)), cast('2020-12-25 11:00:00' as DATETIMEV2(0))) |\n+---------------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------+\n|                                                                                     2 |                                                                                                      -2 |\n+---------------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------+\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var s=t(667294);let i={},r=s.createContext(i);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);