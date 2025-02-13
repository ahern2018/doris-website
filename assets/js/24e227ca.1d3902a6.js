"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["125436"],{496404:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>o,assets:()=>d,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/quarters-add","title":"QUARTERS_ADD","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/quarters-add.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/quarters-add","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/quarters-add","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"QUARTERS_ADD","language":"en"},"sidebar":"docs","previous":{"title":"QUARTERS_SUB","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/quarters-sub"},"next":{"title":"YEARS_ADD","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/years-add"}}'),a=t("785893"),r=t("250065");let i={title:"QUARTERS_ADD",language:"en"},l=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"The function adds or subtracts a specified number of quarters to/from a given date or datetime value and returns the resulting date."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"QUARTERS_ADD(<date/datetime>, <quarters>)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<date/datetime>"})}),(0,a.jsx)(n.td,{children:"The input date or datetime value, supports DATE or DATETIME types."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<quarters>"})}),(0,a.jsx)(n.td,{children:"The number of quarters to add or subtract. Positive integers add quarters, while negative integers subtract quarters."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Returns a date value consistent with the input date type."}),"\n",(0,a.jsxs)(n.li,{children:["If ",(0,a.jsx)(n.code,{children:"<date/datetime>"})," is NULL, the function returns NULL."]}),"\n",(0,a.jsxs)(n.li,{children:["If ",(0,a.jsx)(n.code,{children:"<date/datetime>"})," is an invalid date (e.g., 0000-00-00), the function returns NULL."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:' select quarters_add("2020-01-31 02:02:02", 1);\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+---------------------------------------------------------------+\n| quarters_add(cast('2020-01-31 02:02:02' as DATETIMEV2(0)), 1) |\n+---------------------------------------------------------------+\n| 2020-04-30 02:02:02                                           |\n+---------------------------------------------------------------+\n"})})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let a={},r=s.createContext(a);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);