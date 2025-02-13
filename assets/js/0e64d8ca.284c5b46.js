"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["668457"],{447704:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>o,assets:()=>i,toc:()=>d,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/date-trunc","title":"DATE_TRUNC","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/date-trunc.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/date-trunc","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/date-trunc","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"DATE_TRUNC","language":"en"},"sidebar":"docs","previous":{"title":"DAYS_SUB","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/date-sub"},"next":{"title":"DATE_FORMAT","permalink":"/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/date-format"}}'),a=t("785893"),c=t("250065");let r={title:"DATE_TRUNC",language:"en"},l=void 0,i={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Truncates the datetime according to the specified time unit."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"DATE_TRUNC(<datetime>, <time_unit>)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<datetime>"})}),(0,a.jsx)(n.td,{children:"A valid date expression"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"<time_unit>"})}),(0,a.jsx)(n.td,{children:"The time interval to truncate to. The optional values are: [second, minute, hour, day, week, month, quarter, year]"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsx)(n.p,{children:"The time truncated according to the specified time unit."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select date_trunc('2010-12-02 19:28:30', 'second');\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'second')     |\n+-------------------------------------------------+\n| 2010-12-02 19:28:30                             |\n+-------------------------------------------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select date_trunc('2010-12-02 19:28:30', 'minute');\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'minute')     |\n+-------------------------------------------------+\n| 2010-12-02 19:28:00                             |\n+-------------------------------------------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select date_trunc('2010-12-02 19:28:30', 'hour');\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'hour')       |\n+-------------------------------------------------+\n| 2010-12-02 19:00:00                             |\n+-------------------------------------------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select date_trunc('2010-12-02 19:28:30', 'day');\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'day')        |\n+-------------------------------------------------+\n| 2010-12-02 00:00:00                             |\n+-------------------------------------------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select date_trunc('2023-4-05 19:28:30', 'week');\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------+\n| date_trunc('2023-04-05 19:28:30', 'week') |\n+-------------------------------------------+\n| 2023-04-03 00:00:00                       |\n+-------------------------------------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select date_trunc('2010-12-02 19:28:30', 'month');\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'month')      |\n+-------------------------------------------------+\n| 2010-12-01 00:00:00                             |\n+-------------------------------------------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select date_trunc('2010-12-02 19:28:30', 'quarter');\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'quarter')    |\n+-------------------------------------------------+\n| 2010-10-01 00:00:00                             |\n+-------------------------------------------------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select date_trunc('2010-12-02 19:28:30', 'year');\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'year')       |\n+-------------------------------------------------+\n| 2010-01-01 00:00:00                             |\n+-------------------------------------------------+\n"})})]})}function o(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let a={},c=s.createContext(a);function r(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);