"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["613413"],{758047:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>u,assets:()=>d,toc:()=>o,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/weekday","title":"WEEKDAY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/weekday.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/weekday","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/weekday","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"WEEKDAY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"WEEK","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/week"},"next":{"title":"WEEKOFYEAR","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/weekofyear"}}'),a=t("785893"),i=t("250065");let l={title:"WEEKDAY",language:"zh-CN"},c=void 0,d={},o=[{value:"weekday",id:"weekday",level:2},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"keywords",id:"keywords",level:3}];function r(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"weekday",children:"weekday"}),"\n",(0,a.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"INT WEEKDAY (DATETIME date)"})}),"\n",(0,a.jsx)(n.p,{children:"WEEKDAY\u51FD\u6570\u8FD4\u56DE\u65E5\u671F\u7684\u5DE5\u4F5C\u65E5\u7D22\u5F15\u503C\uFF0C\u5373\u661F\u671F\u4E00\u4E3A0\uFF0C\u661F\u671F\u4E8C\u4E3A1\uFF0C\u661F\u671F\u65E5\u4E3A6"}),"\n",(0,a.jsx)(n.p,{children:"\u53C2\u6570\u4E3ADate\u6216\u8005Datetime\u7C7B\u578B\u6216\u8005\u53EF\u4EE5cast\u4E3ADate\u6216\u8005Datetime\u7C7B\u578B\u7684\u6570\u5B57"}),"\n",(0,a.jsx)(n.p,{children:"\u6CE8\u610FWEEKDAY\u548CDAYOFWEEK\u7684\u533A\u522B\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"          +-----+-----+-----+-----+-----+-----+-----+\n          | Sun | Mon | Tues| Wed | Thur| Fri | Sat |\n          +-----+-----+-----+-----+-----+-----+-----+\n  weekday |  6  |  0  |  1  |  2  |  3  |  4  |  5  |\n          +-----+-----+-----+-----+-----+-----+-----+\ndayofweek |  1  |  2  |  3  |  4  |  5  |  6  |  7  |\n          +-----+-----+-----+-----+-----+-----+-----+\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"mysql> select weekday('2019-06-25');\n+--------------------------------+\n| weekday('2019-06-25 00:00:00') |\n+--------------------------------+\n|                              1 |\n+--------------------------------+\n\nmysql> select weekday(cast(20190625 as date)); \n+---------------------------------+\n| weekday(CAST(20190625 AS DATE)) |\n+---------------------------------+\n|                               1 |\n+---------------------------------+\n"})}),"\n",(0,a.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"WEEKDAY\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var s=t(667294);let a={},i=s.createContext(a);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);