"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["317598"],{189879:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>o,assets:()=>c,toc:()=>d,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/months-sub","title":"MONTHS_SUB","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/months-sub.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/months-sub","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/months-sub","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"MONTHS_SUB","language":"en"},"sidebar":"docs","previous":{"title":"MONTHS_DIFF","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/months-diff"},"next":{"title":"QUARTERS_SUB","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/quarters-sub"}}'),i=t("785893"),a=t("250065");let l={title:"MONTHS_SUB",language:"en"},r=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function u(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"The MONTHS_SUB function is used to add or subtract a specified number of months to a given date and returns the resulting date."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"MONTHS_SUB(<datetime/date>, <nums>)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<datetime/date>"})}),(0,i.jsx)(n.td,{children:"The date value to which months will be added or subtracted"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<nums>"})}),(0,i.jsx)(n.td,{children:"The number of months to add or subtract"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsx)(n.p,{children:"The return value is of the same type as the input <datetime/date>.\nSpecial cases:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If the <datetime/date> input is 0000-00-00 or 0000-00-00 00:00:00, the function returns NULL."}),"\n",(0,i.jsx)(n.li,{children:"If the <datetime/date> input is NULL, the function returns NULL."}),"\n",(0,i.jsx)(n.li,{children:'If the input is MONTHS_SUB("9999-12-31", -1), the function will return NULL.'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'select months_sub("2020-01-31 02:02:02", 1),months_sub("2020-01-31", 1),months_sub("2020-01-31", -1);\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------------------+---------------------------------------------+----------------------------------------------+\n| months_sub(cast('2020-01-31 02:02:02' as DATETIMEV2(0)), 1) | months_sub(cast('2020-01-31' as DATEV2), 1) | months_sub(cast('2020-01-31' as DATEV2), -1) |\n+-------------------------------------------------------------+---------------------------------------------+----------------------------------------------+\n| 2019-12-31 02:02:02                                         | 2019-12-31                                  | 2020-02-29                                   |\n+-------------------------------------------------------------+---------------------------------------------+----------------------------------------------+\n"})})]})}function o(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var s=t(667294);let i={},a=s.createContext(i);function l(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);