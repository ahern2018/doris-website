"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["338693"],{833697:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>r,frontMatter:()=>d});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/months-sub","title":"MONTHS_SUB","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/date-time-functions/months-sub.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/months-sub","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/months-sub","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"MONTHS_SUB","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MONTHS_DIFF","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/months-diff"},"next":{"title":"YEARS_ADD","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/years-add"}}'),l=t("785893"),i=t("250065");let d={title:"MONTHS_SUB",language:"zh-CN"},a=void 0,c={},r=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"MONTHS_SUB \u51FD\u6570\u7528\u4E8E\u5BF9\u6307\u5B9A\u65E5\u671F\u6DFB\u52A0\u6216\u51CF\u53BB\u6307\u5B9A\u7684\u6708\u4EFD\u6570\uFF0C\u5E76\u8FD4\u56DE\u8BA1\u7B97\u540E\u7684\u65B0\u65E5\u671F"}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"MONTHS_SUB(<datetime/date>,  <nums>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<datetime/date>"})}),(0,l.jsx)(e.td,{children:"\u9700\u8981\u88AB\u8BA1\u7B97\u52A0\u51CF\u6708\u4EFD\u7684\u65E5\u671F\u503C"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<nums>"})}),(0,l.jsx)(e.td,{children:"\u9700\u8981\u52A0\u51CF\u7684\u6708\u4EFD\u6570"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DE\u503C\u4E0E\u8F93\u5165\u7684 <datetime/date> \u7C7B\u578B\u4E00\u81F4\n\u7279\u6B8A\u60C5\u51B5\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"<datetime/date> \u8F93\u5165\u4E3A 0000-00-00 \u6216 0000-00-00 00:00:00 \u65F6\uFF0C\u8FD4\u56DE NULL"}),"\n",(0,l.jsx)(e.li,{children:"<datetime/date> \u8F93\u5165\u4E3A NULL \u65F6\uFF0C\u8FD4\u56DE NULL"}),"\n",(0,l.jsx)(e.li,{children:'\u5982\u679C\u8F93\u5165\u4E3A months_sub("9999-12-31",-1)\uFF0C\u5C06\u8FD4\u56DE NULL'}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:'select months_sub("2020-01-31 02:02:02", 1),months_sub("2020-01-31", 1),months_sub("2020-01-31", -1);\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-------------------------------------------------------------+---------------------------------------------+----------------------------------------------+\n| months_sub(cast('2020-01-31 02:02:02' as DATETIMEV2(0)), 1) | months_sub(cast('2020-01-31' as DATEV2), 1) | months_sub(cast('2020-01-31' as DATEV2), -1) |\n+-------------------------------------------------------------+---------------------------------------------+----------------------------------------------+\n| 2019-12-31 02:02:02                                         | 2019-12-31                                  | 2020-02-29                                   |\n+-------------------------------------------------------------+---------------------------------------------+----------------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return d}});var s=t(667294);let l={},i=s.createContext(l);function d(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);