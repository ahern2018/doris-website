"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["48024"],{801606:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>a,default:()=>o,assets:()=>c,toc:()=>d,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/quarter","title":"QUARTER","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/quarter.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/quarter","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/quarter","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"QUARTER","language":"zh-CN"},"sidebar":"docs","previous":{"title":"YEAR","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/year"},"next":{"title":"MONTH","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/month"}}'),l=t("785893"),i=t("250065");let r={title:"QUARTER",language:"zh-CN"},a=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u51FD\u6570\u7528\u4E8E\u8FD4\u56DE\u6307\u5B9A \u65E5\u671F\u6240\u5C5E\u7684\u5B63\u5EA6\uFF081 \u5230 4\uFF09\u3002\u6BCF\u4E2A\u5B63\u5EA6\u5305\u542B\u4E09\u4E2A\u6708\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7B2C 1 \u5B63\u5EA6\uFF1A1 \u6708\u81F3 3 \u6708"}),"\n",(0,l.jsx)(e.li,{children:"\u7B2C 2 \u5B63\u5EA6\uFF1A4 \u6708\u81F3 6 \u6708"}),"\n",(0,l.jsx)(e.li,{children:"\u7B2C 3 \u5B63\u5EA6\uFF1A7 \u6708\u81F3 9 \u6708"}),"\n",(0,l.jsx)(e.li,{children:"\u7B2C 4 \u5B63\u5EA6\uFF1A10 \u6708\u81F3 12 \u6708"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"QUARTER(<datetime>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<datetime>"})}),(0,l.jsx)(e.td,{children:"\u8F93\u5165\u7684\u65E5\u671F\u6216\u65E5\u671F\u65F6\u95F4\u503C\uFF0C\u5FC5\u987B\u662F\u6709\u6548\u7684 DATE \u6216 DATETIME \u7C7B\u578B\u3002"})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u8FD4\u56DE\u4E00\u4E2A\u6574\u6570\uFF0C\u8868\u793A\u8F93\u5165\u65E5\u671F\u6240\u5C5E\u7684\u5B63\u5EA6\uFF0C\u8303\u56F4\u4E3A 1 \u5230 4\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5982\u679C\u8F93\u5165\u503C\u4E3A NULL\uFF0C\u51FD\u6570\u8FD4\u56DE NULL\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5982\u679C\u8F93\u5165\u503C\u4E3A\u975E\u6CD5\u65E5\u671F\uFF08\u5982 0000-00-00\uFF09\uFF0C\u51FD\u6570\u8FD4\u56DE NULL\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT QUARTER('2025-01-16'),QUARTER('2025-01-16 01:11:10');\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-----------------------------------------+--------------------------------------------------+\n| quarter(cast('2025-01-16' as DATETIME)) | quarter(cast('2025-01-16 01:11:10' as DATETIME)) |\n+-----------------------------------------+--------------------------------------------------+\n|                                       1 |                                                1 |\n+-----------------------------------------+--------------------------------------------------+\n"})})]})}function o(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return r}});var s=t(667294);let l={},i=s.createContext(l);function r(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);