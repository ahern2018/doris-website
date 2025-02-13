"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["610548"],{353478:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>d,default:()=>u,assets:()=>r,toc:()=>a,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/seconds-sub","title":"SECONDS_SUB","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/date-time-functions/seconds-sub.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/seconds-sub","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/seconds-sub","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SECONDS_SUB","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SECONDS_DIFF","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/seconds-diff"},"next":{"title":"HOURS_ADD","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/hours-add"}}'),i=s("785893"),c=s("250065");let l={title:"SECONDS_SUB",language:"zh-CN"},d=void 0,r={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.p,{children:"\u51FD\u6570\u7528\u4E8E\u5728\u6307\u5B9A\u7684\u65E5\u671F\u65F6\u95F4\u503C\u4E0A\u51CF\u5C11\u6216\u589E\u52A0\u6307\u5B9A\u7684\u79D2\u6570\uFF0C\u5E76\u8FD4\u56DE\u8BA1\u7B97\u540E\u7684\u65E5\u671F\u65F6\u95F4\u503C"}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SECONDS_SUB(<datetime>, <seconds>)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u53C2\u6570"}),(0,i.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<datetime>"})}),(0,i.jsx)(e.td,{children:"\u5FC5\u586B\uFF0C\u8F93\u5165\u7684\u65E5\u671F\u65F6\u95F4\u503C\uFF0C\u652F\u6301 DATETIME \u6216 DATE \u7C7B\u578B"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"<seconds>"})}),(0,i.jsx)(e.td,{children:"\u5FC5\u586B\uFF0C\u8981\u51CF\u5C11\u6216\u589E\u52A0\u7684\u79D2\u6570\uFF0C\u652F\u6301\u6574\u6570\u7C7B\u578B\uFF08INT\uFF09\u3002\u6B63\u6570\u8868\u793A\u589E\u52A0\u79D2\u6570\uFF0C\u8D1F\u6570\u8868\u793A\u51CF\u5C11\u79D2\u6570\u3002"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u8FD4\u56DE\u4E00\u4E2A\u65E5\u671F\u65F6\u95F4\u503C\uFF0C\u7C7B\u578B\u4E0E\u8F93\u5165\u7684 ",(0,i.jsx)(e.code,{children:"<datetime>"})," \u7C7B\u578B\u4E00\u81F4\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u5982\u679C ",(0,i.jsx)(e.code,{children:"<datetime>"})," \u4E3A NULL\uFF0C\u51FD\u6570\u8FD4\u56DE NULL\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u5982\u679C ",(0,i.jsx)(e.code,{children:"<datetime>"})," \u4E3A\u975E\u6CD5\u65E5\u671F\uFF08\u5982 0000-00-00T00:00:00\uFF09\uFF0C\u51FD\u6570\u8FD4\u56DE NULL\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"SELECT SECONDS_SUB('2025-01-23 12:34:56', 30),SECONDS_SUB('2025-01-23 12:34:56', -30);\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+---------------------------------------------------------------+----------------------------------------------------------------+\n| seconds_sub(cast('2025-01-23 12:34:56' as DATETIMEV2(0)), 30) | seconds_sub(cast('2025-01-23 12:34:56' as DATETIMEV2(0)), -30) |\n+---------------------------------------------------------------+----------------------------------------------------------------+\n| 2025-01-23 12:34:26                                           | 2025-01-23 12:35:26                                            |\n+---------------------------------------------------------------+----------------------------------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return d},a:function(){return l}});var t=s(667294);let i={},c=t.createContext(i);function l(n){let e=t.useContext(c);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);