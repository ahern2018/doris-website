"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["202999"],{895002:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/hours-add","title":"HOURS_ADD","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/hours-add.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/hours-add","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/hours-add","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"HOURS_ADD","language":"en"},"sidebar":"docs","previous":{"title":"SECONDS_SUB","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/seconds-sub"},"next":{"title":"HOURS_DIFF","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/hours-diff"}}'),a=t("785893"),r=t("250065");let i={title:"HOURS_ADD",language:"en"},l=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Returns a new datetime value that is the result of adding a specified number of hours to the input datetime."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"HOURS_ADD(<date>, <hours>)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<date>"})}),(0,a.jsx)(n.td,{children:"The input datetime value, which can be of type DATETIME or DATE"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<hours>"})}),(0,a.jsx)(n.td,{children:"The number of hours to add, of type INT"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsx)(n.p,{children:"Returns a value of type DATETIME, representing the time value after adding the specified number of hours to the input datetime."}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT HOURS_ADD('2020-02-02 02:02:02', 1);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+------------------------------------------------------------+\n| hours_add(cast('2020-02-02 02:02:02' as DATETIMEV2(0)), 1) |\n+------------------------------------------------------------+\n| 2020-02-02 03:02:02                                        |\n+------------------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let a={},r=s.createContext(a);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);