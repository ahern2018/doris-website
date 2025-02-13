"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["178222"],{391354:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>u,assets:()=>a,toc:()=>o,frontMatter:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/minute-ceil","title":"minute_ceil","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/minute-ceil.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/minute-ceil","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/minute-ceil","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"minute_ceil","language":"en"},"sidebar":"docs","previous":{"title":"SECOND_CEIL","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/second-ceil"},"next":{"title":"hour_ceil","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/hour-ceil"}}'),s=i("785893"),l=i("250065");let c={title:"minute_ceil",language:"en"},r=void 0,a={},o=[{value:"minute_ceil",id:"minute_ceil",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"minute_ceil",children:"minute_ceil"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DATETIME MINUTE_CEIL(DATETIME datetime)\nDATETIME MINUTE_CEIL(DATETIME datetime, DATETIME origin)\nDATETIME MINUTE_CEIL(DATETIME datetime, INT period)\nDATETIME MINUTE_CEIL(DATETIME datetime, INT period, DATETIME origin)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Convert the date to the nearest rounding up time of the specified time interval period."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"datetime: a valid date expression."}),"\n",(0,s.jsx)(n.li,{children:"period: specifies how many minutes each cycle consists of."}),"\n",(0,s.jsx)(n.li,{children:"origin: starting from 0001-01-01T00:00:00."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> select minute_ceil(\"2023-07-13 22:28:18\", 5);\n+--------------------------------------------------------------+\n| minute_ceil(cast('2023-07-13 22:28:18' as DATETIMEV2(0)), 5) |\n+--------------------------------------------------------------+\n| 2023-07-13 22:30:00                                          |\n+--------------------------------------------------------------+\n1 row in set (0.21 sec)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"MINUTE_CEIL, MINUTE, CEIL\n"})}),"\n",(0,s.jsx)(n.h3,{id:"best-practice",children:"Best Practice"}),"\n",(0,s.jsxs)(n.p,{children:["See also ",(0,s.jsx)(n.a,{href:"./date_ceil",children:"date_ceil"})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return c}});var t=i(667294);let s={},l=t.createContext(s);function c(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);