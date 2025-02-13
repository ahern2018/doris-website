"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["118816"],{406360:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>c,default:()=>o,assets:()=>a,toc:()=>r,frontMatter:()=>d});var s=JSON.parse('{"id":"sql-manual/sql-functions/scalar-functions/date-time-functions/date-sub","title":"DATE_SUB","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/date-sub.md","sourceDirName":"sql-manual/sql-functions/scalar-functions/date-time-functions","slug":"/sql-manual/sql-functions/scalar-functions/date-time-functions/date-sub","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/date-sub","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"DATE_SUB","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DATE_ADD","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/date-add"},"next":{"title":"DATE_TRUNC","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/scalar-functions/date-time-functions/date-trunc"}}'),l=t("785893"),i=t("250065");let d={title:"DATE_SUB",language:"zh-CN"},c=void 0,a={},r=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u522B\u540D",id:"\u522B\u540D",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2}];function u(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u4ECE\u65E5\u671F\u51CF\u53BB\u6307\u5B9A\u7684\u65F6\u95F4\u95F4\u9694\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u522B\u540D",children:"\u522B\u540D"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"days_sub"}),"\n",(0,l.jsx)(e.li,{children:"date_sub"}),"\n",(0,l.jsx)(e.li,{children:"subdate"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"DATE_ADD(<date>, <expr> <time_unit>)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<date>"})}),(0,l.jsx)(e.td,{children:"\u5408\u6CD5\u7684\u65E5\u671F\u503C"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<expr>"})}),(0,l.jsx)(e.td,{children:"\u5E0C\u671B\u51CF\u53BB\u7684\u65F6\u95F4\u95F4\u9694"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<time_unit>"})}),(0,l.jsx)(e.td,{children:"\u679A\u4E3E\u503C\uFF1AYEAR, QUARTER, MONTH, DAY, HOUR, MINUTE, SECOND"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DE\u8BA1\u7B97\u540E\u7684\u65E5\u671F\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"select date_sub('2010-11-30 23:59:59', INTERVAL 2 DAY);\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"+-------------------------------------------------+\n| date_sub('2010-11-30 23:59:59', INTERVAL 2 DAY) |\n+-------------------------------------------------+\n| 2010-11-28 23:59:59                             |\n+-------------------------------------------------+\n"})})]})}function o(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return d}});var s=t(667294);let l={},i=s.createContext(l);function d(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);