"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["90200"],{310103:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>u,assets:()=>r,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/months-add","title":"MONTHS_ADD","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/months-add.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/months-add","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/months-add","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"MONTHS_ADD","language":"en"},"sidebar":"docs","previous":{"title":"WEEK_FLOOR","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/week-floor"},"next":{"title":"MONTHS_DIFF","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/months-diff"}}'),a=t("785893"),i=t("250065");let l={title:"MONTHS_ADD",language:"en"},d=void 0,r={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"The MONTHS_ADD function is used to add or subtract a specified number of months to a given date and returns the resulting date."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"MONTHS_ADD(<datetime/date>, <nums>)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<datetime/date>"})}),(0,a.jsx)(n.td,{children:"The date value to which months will be added or subtracted"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<nums>"})}),(0,a.jsx)(n.td,{children:"The number of months to add or subtract"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsx)(n.p,{children:"The return value is of the same type as the input <datetime/date>.\nSpecial cases:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If the <datetime/date> input is 0000-00-00 or 0000-00-00 00:00:00, the function returns NULL."}),"\n",(0,a.jsx)(n.li,{children:"If the <datetime/date> input is NULL, the function returns NULL."}),"\n",(0,a.jsx)(n.li,{children:'If the input is MONTHS_ADD("9999-12-31", 1), the function will return NULL.'}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'select months_add("2020-01-31 02:02:02", 1),months_add("2020-01-31", 1),months_add("2020-01-31", -1);\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------------------+---------------------------------------------+----------------------------------------------+\n| months_add(cast('2020-01-31 02:02:02' as DATETIMEV2(0)), 1) | months_add(cast('2020-01-31' as DATEV2), 1) | months_add(cast('2020-01-31' as DATEV2), -1) |\n+-------------------------------------------------------------+---------------------------------------------+----------------------------------------------+\n| 2020-02-29 02:02:02                                         | 2020-02-29                                  | 2019-12-31                                   |\n+-------------------------------------------------------------+---------------------------------------------+----------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var s=t(667294);let a={},i=s.createContext(a);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);