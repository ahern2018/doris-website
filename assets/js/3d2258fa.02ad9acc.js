"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["939399"],{196530:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>d});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/timestampadd","title":"TIMESTAMPADD","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/timestampadd.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/timestampadd","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/timestampadd","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"TIMESTAMPADD","language":"en"},"sidebar":"docs","previous":{"title":"TIMEDIFF","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/timediff"},"next":{"title":"TIMESTAMPDIFF","permalink":"/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/timestampdiff"}}'),i=t("785893"),a=t("250065");let d={title:"TIMESTAMPADD",language:"en"},r=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"timestampadd"})," function is used to add a specified time unit (such as year, month, day, hour, minute, second, etc.) to a timestamp or date. This function is commonly used for date and time calculations."]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"TIMESTAMPADD(<unit>, <interval>, <datetime_expr>)"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"unit"})}),(0,i.jsx)(n.td,{children:"Time unit, specifies the time unit to add, common values include SECOND, MINUTE, HOUR, DAY, WEEK, MONTH, YEAR"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"interval"})}),(0,i.jsx)(n.td,{children:"The time interval to add, typically an integer, which can be positive or negative to add or subtract the time length"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"datetime_expr"})}),(0,i.jsx)(n.td,{children:"A valid target timestamp or date"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsx)(n.p,{children:"The return value is the new date and time, representing the result of adding or subtracting the specified time interval to the given timestamp."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT TIMESTAMPADD(MINUTE,1,'2019-01-02');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+------------------------------------------------+\n| timestampadd(MINUTE, 1, '2019-01-02 00:00:00') |\n+------------------------------------------------+\n| 2019-01-02 00:01:00                            |\n+------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT TIMESTAMPADD(WEEK,1,'2019-01-02');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+----------------------------------------------+\n| timestampadd(WEEK, 1, '2019-01-02 00:00:00') |\n+----------------------------------------------+\n| 2019-01-09 00:00:00                          |\n+----------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return d}});var s=t(667294);let i={},a=s.createContext(i);function d(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);