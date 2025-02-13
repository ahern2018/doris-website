"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["301564"],{554339:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>o,assets:()=>r,toc:()=>i,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/date-trunc","title":"DATE_TRUNC","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/date-time-functions/date-trunc.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/date-trunc","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/date-trunc","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"DATE_TRUNC","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DATE_SUB","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/date-sub"},"next":{"title":"DATE_FORMAT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/date-format"}}'),c=t("785893"),l=t("250065");let a={title:"DATE_TRUNC",language:"zh-CN"},d=void 0,r={},i=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,c.jsx)(n.p,{children:"\u5C06 datetime \u6309\u7167\u6307\u5B9A\u7684\u65F6\u95F4\u5355\u4F4D\u622A\u65AD\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"DATE_TRUNC(<datetime>, <time_unit>)\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u53C2\u6570"}),(0,c.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"<datetime>"})}),(0,c.jsx)(n.td,{children:"\u5408\u6CD5\u7684\u65E5\u671F\u8868\u8FBE\u5F0F"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"<time_unit>"})}),(0,c.jsxs)(n.td,{children:["\u5E0C\u671B\u622A\u65AD\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u53EF\u9009\u7684\u503C\u5982\u4E0B\uFF1A[",(0,c.jsx)(n.code,{children:"second"}),",",(0,c.jsx)(n.code,{children:"minute"}),",",(0,c.jsx)(n.code,{children:"hour"}),",",(0,c.jsx)(n.code,{children:"day"}),",",(0,c.jsx)(n.code,{children:"week"}),",",(0,c.jsx)(n.code,{children:"month"}),",",(0,c.jsx)(n.code,{children:"quarter"}),",",(0,c.jsx)(n.code,{children:"year"}),"]"]})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,c.jsx)(n.p,{children:"\u6309\u7167\u6307\u5B9A\u7684\u65F6\u95F4\u5355\u4F4D\u622A\u65AD\u7684\u65F6\u95F4"}),"\n",(0,c.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"select date_trunc('2010-12-02 19:28:30', 'second');\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'second')     |\n+-------------------------------------------------+\n| 2010-12-02 19:28:30                             |\n+-------------------------------------------------+\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"select date_trunc('2010-12-02 19:28:30', 'minute');\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'minute')     |\n+-------------------------------------------------+\n| 2010-12-02 19:28:00                             |\n+-------------------------------------------------+\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"select date_trunc('2010-12-02 19:28:30', 'hour');\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'hour')       |\n+-------------------------------------------------+\n| 2010-12-02 19:00:00                             |\n+-------------------------------------------------+\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"select date_trunc('2010-12-02 19:28:30', 'day');\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'day')        |\n+-------------------------------------------------+\n| 2010-12-02 00:00:00                             |\n+-------------------------------------------------+\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"select date_trunc('2023-4-05 19:28:30', 'week');\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------+\n| date_trunc('2023-04-05 19:28:30', 'week') |\n+-------------------------------------------+\n| 2023-04-03 00:00:00                       |\n+-------------------------------------------+\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"select date_trunc('2010-12-02 19:28:30', 'month');\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'month')      |\n+-------------------------------------------------+\n| 2010-12-01 00:00:00                             |\n+-------------------------------------------------+\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"select date_trunc('2010-12-02 19:28:30', 'quarter');\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'quarter')    |\n+-------------------------------------------------+\n| 2010-10-01 00:00:00                             |\n+-------------------------------------------------+\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"select date_trunc('2010-12-02 19:28:30', 'year');\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'year')       |\n+-------------------------------------------------+\n| 2010-01-01 00:00:00                             |\n+-------------------------------------------------+\n"})})]})}function o(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return a}});var s=t(667294);let c={},l=s.createContext(c);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);