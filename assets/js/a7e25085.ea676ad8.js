"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["444204"],{298932:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/weekday","title":"WEEKDAY","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/weekday.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/weekday","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/weekday","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"WEEKDAY","language":"en"},"sidebar":"docs","previous":{"title":"WEEK","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/week"},"next":{"title":"WEEKOFYEAR","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/weekofyear"}}'),a=t("785893"),i=t("250065");let l={title:"WEEKDAY",language:"en"},d=void 0,c={},o=[{value:"weekday",id:"weekday",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function r(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"weekday",children:"weekday"}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"INT WEEKDAY (DATETIME date)"})}),"\n",(0,a.jsx)(n.p,{children:"The WEEKDAY function returns the index value of the working day of the date, that is, 0 on Monday, 1 on Tuesday, and 6 on Sunday."}),"\n",(0,a.jsx)(n.p,{children:"The parameter is Date or Datetime type"}),"\n",(0,a.jsx)(n.p,{children:"Notice the difference between WEEKDAY and DAYOFWEEK:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"          +-----+-----+-----+-----+-----+-----+-----+\n          | Sun | Mon | Tues| Wed | Thur| Fri | Sat |\n          +-----+-----+-----+-----+-----+-----+-----+\n  weekday |  6  |  0  |  1  |  2  |  3  |  4  |  5  |\n          +-----+-----+-----+-----+-----+-----+-----+\ndayofweek |  1  |  2  |  3  |  4  |  5  |  6  |  7  |\n          +-----+-----+-----+-----+-----+-----+-----+\n"})}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"mysql> select weekday('2019-06-25');\n+--------------------------------+\n| weekday('2019-06-25 00:00:00') |\n+--------------------------------+\n|                              1 |\n+--------------------------------+\n\nmysql> select weekday(cast(20190625 as date)); \n+---------------------------------+\n| weekday(CAST(20190625 AS DATE)) |\n+---------------------------------+\n|                               1 |\n+---------------------------------+\n"})}),"\n",(0,a.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"WEEKDAY\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var s=t(667294);let a={},i=s.createContext(a);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);