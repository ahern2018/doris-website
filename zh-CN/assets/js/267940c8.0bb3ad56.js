"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["29694"],{670752:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>c,default:()=>u,assets:()=>r,toc:()=>a,frontMatter:()=>d});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/str-to-date","title":"STR_TO_DATE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/scalar-functions/date-time-functions/str-to-date.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/str-to-date","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/str-to-date","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"STR_TO_DATE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MAKEDATE","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/makedate"},"next":{"title":"TIMEDIFF","permalink":"/zh-CN/docs/sql-manual/sql-functions/scalar-functions/date-time-functions/timediff"}}'),l=t("785893"),i=t("250065");let d={title:"STR_TO_DATE",language:"zh-CN"},c=void 0,r={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsxs)(e.p,{children:["\u51FD\u6570\u5C06\u8F93\u5165\u7684\u65E5\u671F\u65F6\u95F4\u5B57\u7B26\u4E32\u6839\u636E\u6307\u5B9A\u7684\u683C\u5F0F\u8F6C\u6362\u4E3A ",(0,l.jsx)(e.code,{children:"DATETIME"})," \u7C7B\u578B\u7684\u503C\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"STR_TO_DATE(<datetime_str>, <format>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<datetime_str>"})}),(0,l.jsx)(e.td,{children:"\u5FC5\u586B\uFF0C\u8F93\u5165\u7684\u65E5\u671F\u65F6\u95F4\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u8981\u8F6C\u6362\u7684\u65E5\u671F\u6216\u65F6\u95F4\u3002"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<format>"})}),(0,l.jsxs)(e.td,{children:["\u5FC5\u586B\uFF0C\u6307\u5B9A\u7684\u65E5\u671F\u65F6\u95F4\u683C\u5F0F\u5B57\u7B26\u4E32\uFF0C\u5982 ",(0,l.jsx)(e.code,{children:"%Y-%m-%d %H:%i:%s"})," \u6216 ",(0,l.jsx)(e.code,{children:"yyy-MM-dd HH:mm:ss"})]})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u8FD4\u56DE\u4E00\u4E2A DATETIME \u7C7B\u578B\u503C\uFF0C\u8868\u793A\u8F6C\u6362\u540E\u7684\u65E5\u671F\u65F6\u95F4\u3002"}),"\n",(0,l.jsxs)(e.li,{children:["\u5982\u679C\u8F93\u5165\u7684 ",(0,l.jsx)(e.code,{children:"<datetime_str>"})," \u6216 ",(0,l.jsx)(e.code,{children:"<format>"})," \u65E0\u6548\uFF0C\u51FD\u6570\u8FD4\u56DE NULL\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.p,{children:"\u5C06\u5E38\u89C1\u7684\u65E5\u671F\u65F6\u95F4\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A DATETIME \u7C7B\u578B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT STR_TO_DATE('2025-01-23 12:34:56', '%Y-%m-%d %H:%i:%s'),STR_TO_DATE('2025-01-23 12:34:56', 'yyyy-MM-dd HH:mm:ss');\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+---------------------------------------------------------+-----------------------------------------------------------+\n| str_to_date('2025-01-23 12:34:56', '%Y-%m-%d %H:%i:%s') | str_to_date('2025-01-23 12:34:56', 'yyyy-MM-dd HH:mm:ss') |\n+---------------------------------------------------------+-----------------------------------------------------------+\n| 2025-01-23 12:34:56.000000                              | 2025-01-23 12:34:56.000000                                |\n+---------------------------------------------------------+-----------------------------------------------------------+\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5176\u4ED6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select STR_TO_DATE('200442 Monday', '%X%V %W'),STR_TO_DATE('2023','%Y');\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-----------------------------------------+---------------------------+\n| str_to_date('200442 Monday', '%X%V %W') | str_to_date('2023', '%Y') |\n+-----------------------------------------+---------------------------+\n| 2004-10-18                              | 2023-01-01                |\n+-----------------------------------------+---------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return d}});var s=t(667294);let l={},i=s.createContext(l);function d(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);