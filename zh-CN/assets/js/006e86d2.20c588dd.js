"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["414012"],{765110:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>a,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/str-to-date","title":"STR_TO_DATE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/date-time-functions/str-to-date.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/str-to-date","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/str-to-date","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"STR_TO_DATE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MAKEDATE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/makedate"},"next":{"title":"TIME_ROUND","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/time-round"}}'),d=t("785893"),l=t("250065");let i={title:"STR_TO_DATE",language:"zh-CN"},r=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,d.jsxs)(n.p,{children:["\u51FD\u6570\u5C06\u8F93\u5165\u7684\u65E5\u671F\u65F6\u95F4\u5B57\u7B26\u4E32\u6839\u636E\u6307\u5B9A\u7684\u683C\u5F0F\u8F6C\u6362\u4E3A ",(0,d.jsx)(n.code,{children:"DATETIME"})," \u7C7B\u578B\u7684\u503C\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"STR_TO_DATE(<datetime_str>, <format>)\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u53C2\u6570"}),(0,d.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"<datetime_str>"})}),(0,d.jsx)(n.td,{children:"\u5FC5\u586B\uFF0C\u8F93\u5165\u7684\u65E5\u671F\u65F6\u95F4\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u8981\u8F6C\u6362\u7684\u65E5\u671F\u6216\u65F6\u95F4\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"<format>"})}),(0,d.jsxs)(n.td,{children:["\u5FC5\u586B\uFF0C\u6307\u5B9A\u7684\u65E5\u671F\u65F6\u95F4\u683C\u5F0F\u5B57\u7B26\u4E32\uFF0C\u5982 ",(0,d.jsx)(n.code,{children:"%Y-%m-%d %H:%i:%s"})," \u6216 ",(0,d.jsx)(n.code,{children:"yyy-MM-dd HH:mm:ss"})]})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u8FD4\u56DE\u4E00\u4E2A DATETIME \u7C7B\u578B\u503C\uFF0C\u8868\u793A\u8F6C\u6362\u540E\u7684\u65E5\u671F\u65F6\u95F4\u3002"}),"\n",(0,d.jsxs)(n.li,{children:["\u5982\u679C\u8F93\u5165\u7684 ",(0,d.jsx)(n.code,{children:"<datetime_str>"})," \u6216 ",(0,d.jsx)(n.code,{children:"<format>"})," \u65E0\u6548\uFF0C\u51FD\u6570\u8FD4\u56DE NULL\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,d.jsx)(n.p,{children:"\u5C06\u5E38\u89C1\u7684\u65E5\u671F\u65F6\u95F4\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A DATETIME \u7C7B\u578B"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"SELECT STR_TO_DATE('2025-01-23 12:34:56', '%Y-%m-%d %H:%i:%s'),STR_TO_DATE('2025-01-23 12:34:56', 'yyyy-MM-dd HH:mm:ss');\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-text",children:"+---------------------------------------------------------+-----------------------------------------------------------+\n| str_to_date('2025-01-23 12:34:56', '%Y-%m-%d %H:%i:%s') | str_to_date('2025-01-23 12:34:56', 'yyyy-MM-dd HH:mm:ss') |\n+---------------------------------------------------------+-----------------------------------------------------------+\n| 2025-01-23 12:34:56.000000                              | 2025-01-23 12:34:56.000000                                |\n+---------------------------------------------------------+-----------------------------------------------------------+\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5176\u4ED6"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"select STR_TO_DATE('200442 Monday', '%X%V %W'),STR_TO_DATE('2023','%Y');\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-text",children:"+-----------------------------------------+---------------------------+\n| str_to_date('200442 Monday', '%X%V %W') | str_to_date('2023', '%Y') |\n+-----------------------------------------+---------------------------+\n| 2004-10-18                              | 2023-01-01                |\n+-----------------------------------------+---------------------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let d={},l=s.createContext(d);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);