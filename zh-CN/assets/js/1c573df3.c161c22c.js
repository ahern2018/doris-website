"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["98000"],{625500:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>u,assets:()=>r,toc:()=>o,frontMatter:()=>d});var t=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/seconds-sub","title":"SECONDS_SUB","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/date-time-functions/seconds-sub.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/seconds-sub","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/seconds-sub","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SECONDS_SUB","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SECONDS_DIFF","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/seconds-diff"},"next":{"title":"HOURS_ADD","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/hours-add"}}'),i=s("785893"),l=s("250065");let d={title:"SECONDS_SUB",language:"zh-CN"},c=void 0,r={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function a(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(n.p,{children:"\u51FD\u6570\u7528\u4E8E\u5728\u6307\u5B9A\u7684\u65E5\u671F\u65F6\u95F4\u503C\u4E0A\u51CF\u5C11\u6216\u589E\u52A0\u6307\u5B9A\u7684\u79D2\u6570\uFF0C\u5E76\u8FD4\u56DE\u8BA1\u7B97\u540E\u7684\u65E5\u671F\u65F6\u95F4\u503C"}),"\n",(0,i.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SECONDS_SUB(<datetime>, <seconds>)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u53C2\u6570"}),(0,i.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<datetime>"})}),(0,i.jsx)(n.td,{children:"\u5FC5\u586B\uFF0C\u8F93\u5165\u7684\u65E5\u671F\u65F6\u95F4\u503C\uFF0C\u652F\u6301 DATETIME \u6216 DATE \u7C7B\u578B"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<seconds>"})}),(0,i.jsx)(n.td,{children:"\u5FC5\u586B\uFF0C\u8981\u51CF\u5C11\u6216\u589E\u52A0\u7684\u79D2\u6570\uFF0C\u652F\u6301\u6574\u6570\u7C7B\u578B\uFF08INT\uFF09\u3002\u6B63\u6570\u8868\u793A\u589E\u52A0\u79D2\u6570\uFF0C\u8D1F\u6570\u8868\u793A\u51CF\u5C11\u79D2\u6570\u3002"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u8FD4\u56DE\u4E00\u4E2A\u65E5\u671F\u65F6\u95F4\u503C\uFF0C\u7C7B\u578B\u4E0E\u8F93\u5165\u7684 ",(0,i.jsx)(n.code,{children:"<datetime>"})," \u7C7B\u578B\u4E00\u81F4\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5982\u679C ",(0,i.jsx)(n.code,{children:"<datetime>"})," \u4E3A NULL\uFF0C\u51FD\u6570\u8FD4\u56DE NULL\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5982\u679C ",(0,i.jsx)(n.code,{children:"<datetime>"})," \u4E3A\u975E\u6CD5\u65E5\u671F\uFF08\u5982 0000-00-00T00:00:00\uFF09\uFF0C\u51FD\u6570\u8FD4\u56DE NULL\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"SELECT SECONDS_SUB('2025-01-23 12:34:56', 30),SECONDS_SUB('2025-01-23 12:34:56', -30);\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+---------------------------------------------------------------+----------------------------------------------------------------+\n| seconds_sub(cast('2025-01-23 12:34:56' as DATETIMEV2(0)), 30) | seconds_sub(cast('2025-01-23 12:34:56' as DATETIMEV2(0)), -30) |\n+---------------------------------------------------------------+----------------------------------------------------------------+\n| 2025-01-23 12:34:26                                           | 2025-01-23 12:35:26                                            |\n+---------------------------------------------------------------+----------------------------------------------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var t=s(667294);let i={},l=t.createContext(i);function d(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);