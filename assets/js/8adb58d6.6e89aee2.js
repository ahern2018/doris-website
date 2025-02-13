"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["54166"],{788200:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/minute-ceil","title":"MINUTE_CEIL","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/minute-ceil.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/minute-ceil","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/minute-ceil","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"MINUTE_CEIL","language":"en"},"sidebar":"docs","previous":{"title":"SECOND_CEIL","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/second-ceil"},"next":{"title":"HOUR_CEIL","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/hour-ceil"}}'),s=t("785893"),r=t("250065");let a={title:"MINUTE_CEIL",language:"en"},l=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2},{value:"Best Practices",id:"best-practices",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Rounds up a datetime value to the nearest specified minute interval. If a starting time (origin) is provided, it uses that time as the reference for calculating the interval."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"MINUTE_CEIL(<datetime>)\nMINUTE_CEIL(<datetime>, <origin>)\nMINUTE_CEIL(<datetime>, <period>)\nMINUTE_CEIL(<datetime>, <period>, <origin>)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<datetime>"})}),(0,s.jsx)(n.td,{children:"The datetime value to round up, of type DATETIME or DATETIMEV2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<period>"})}),(0,s.jsx)(n.td,{children:"The minute interval value, of type INT, representing the number of minutes in each interval"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<origin>"})}),(0,s.jsx)(n.td,{children:"The starting point for the interval, of type DATETIME or DATETIMEV2; defaults to 0001-01-01 00:00:00"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a value of type DATETIMEV2, representing the rounded-up datetime value based on the specified minute interval. The precision of the return value is the same as that of the input parameter datetime."}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'SELECT MINUTE_CEIL("2023-07-13 22:28:18", 5);\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+--------------------------------------------------------------+\n| minute_ceil(cast('2023-07-13 22:28:18' as DATETIMEV2(0)), 5) |\n+--------------------------------------------------------------+\n| 2023-07-13 22:30:00                                          |\n+--------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If no period is specified, it defaults to a 1-minute interval."}),"\n",(0,s.jsx)(n.li,{children:"The period must be a positive integer."}),"\n",(0,s.jsx)(n.li,{children:"The result is always rounded up to a future time."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsxs)(n.p,{children:["See also ",(0,s.jsx)(n.a,{href:"./date-ceil",children:"date_ceil"})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var i=t(667294);let s={},r=i.createContext(s);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);