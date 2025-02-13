"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["482434"],{710948:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/day-ceil","title":"day_ceil","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/day-ceil.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/day-ceil","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/day-ceil","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"day_ceil","language":"en"},"sidebar":"docs","previous":{"title":"HOUR_CEIL","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/hour-ceil"},"next":{"title":"MONTH_CEIL","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/month-ceil"}}'),s=t("785893"),a=t("250065");let l={title:"day_ceil",language:"en"},r=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Rounds the date up to the nearest specified time interval period."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DAY_CEIL(<datetime>)\nDAY_CEIL(<datetime>, <origin>)\nDAY_CEIL(<datetime>, <period>)\nDAY_CEIL(<datetime>, <period>, <origin>)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<datetime>"})}),(0,s.jsx)(n.td,{children:"A valid date expression"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<period>"})}),(0,s.jsx)(n.td,{children:"Specifies how many days make up each period"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<origin>"})}),(0,s.jsx)(n.td,{children:"The starting point of time. If not provided, the default is 0001-01-01T00:00:00"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(n.p,{children:"Returns the date of the nearest rounded-up timestamp."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'select day_ceil("2023-07-13 22:28:18", 5);\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+-----------------------------------------------------------+\n| day_ceil(cast('2023-07-13 22:28:18' as DATETIMEV2(0)), 5) |\n+-----------------------------------------------------------+\n| 2023-07-17 00:00:00                                       |\n+-----------------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var i=t(667294);let s={},a=i.createContext(s);function l(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);