"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["762325"],{727766:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>c,default:()=>u,assets:()=>d,toc:()=>r,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/last-day","title":"LAST_DAY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/scalar-functions/date-time-functions/last-day.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/last-day","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/last-day","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"LAST_DAY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"FROM_DAYS","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/from-days"},"next":{"title":"TO_MONDAY","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/scalar-functions/date-time-functions/to-monday"}}'),l=t("785893"),i=t("250065");let a={title:"LAST_DAY",language:"zh-CN"},c=void 0,d={},r=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DE\u8F93\u5165\u65E5\u671F\u6240\u5728\u6708\u4EFD\u7684\u6700\u540E\u4E00\u5929\u7684\u65E5\u671F\u3002\u6839\u636E\u4E0D\u540C\u6708\u4EFD\uFF0C\u8FD4\u56DE\u65E5\u671F\u7684\u5177\u4F53\u65E5\u671F\u503C\u4E3A\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"28 \u65E5\uFF1A\u975E\u95F0\u5E74\u7684\u4E8C\u6708"}),"\n",(0,l.jsx)(e.li,{children:"29 \u65E5\uFF1A\u95F0\u5E74\u7684\u4E8C\u6708"}),"\n",(0,l.jsx)(e.li,{children:"30 \u65E5\uFF1A\u56DB\u6708\u3001\u516D\u6708\u3001\u4E5D\u6708\u3001\u5341\u4E00\u6708"}),"\n",(0,l.jsx)(e.li,{children:"31 \u65E5\uFF1A\u4E00\u6708\u3001\u4E09\u6708\u3001\u4E94\u6708\u3001\u4E03\u6708\u3001\u516B\u6708\u3001\u5341\u6708\u3001\u5341\u4E8C\u6708"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"LAST_DAY(<date>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<date>"})}),(0,l.jsx)(e.td,{children:"\u8F93\u5165\u7684\u65E5\u671F\u65F6\u95F4\u503C\uFF0C\u7C7B\u578B\u4E3A DATETIME \u6216 DATE"})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DE\u7C7B\u578B\u4E3A DATE\uFF0C\u8FD4\u56DE\u8F93\u5165\u65E5\u671F\u6240\u5728\u6708\u4EFD\u7684\u6700\u540E\u4E00\u5929\u7684\u65E5\u671F\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT LAST_DAY('2000-02-03');\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-----------------------------------------------+\n| last_day(cast('2000-02-03' as DATETIMEV2(0))) |\n+-----------------------------------------------+\n| 2000-02-29                                    |\n+-----------------------------------------------+\n"})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return a}});var s=t(667294);let l={},i=s.createContext(l);function a(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:a(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);